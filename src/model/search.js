import Redis from 'ioredis';
import fs from 'fs/promises';
import wanakana from 'wanakana';

class mRedisSearch {

    constructor() {
        this.redis = new Redis();
        this.initializeDatabase();
    }

    async initializeDatabase() {
        const isDbSetUp = await this.redis.get('i-am-set-up');
        if (isDbSetUp !== 'true') {
            // Reset the db first
            this.redis.flushdb();

            console.log('Setting up the database...');

            // Read from file, then each entry is a redis hash
            const data = JSON.parse(await fs.readFile('full-data.json', 'utf-8'));
            const dataPromises = [];
            data.forEach(entry => {
                const addEntryToDb = async () => {
                    await this.redis.hset(
                        entry.Writing,
                        ['Writing', entry.Writing,
                        'AmHanViet', entry.AmHanViet,
                        'Kunyomi', entry.Kunyomi,
                        'Onyomi', entry.Onyomi,
                        'Meaning', entry.Meaning,]
                    );
                    try {
                        const kunNoDelimiter = entry.Kunyomi.map(kun => {
                            return kun.replace('.','');
                        });
                        const toBeIndexed = entry.AmHanViet.concat(kunNoDelimiter).concat(entry.Onyomi).concat(entry.Meaning);
                        toBeIndexed.forEach(async element => {
                            await this.redis.rpush(element, entry.Writing);
                        });
                    } catch (error) {
                        console.log(`FAULTY: ${entry.Writing}`);
                    }
                    return 1;
                };

                dataPromises.push(addEntryToDb());
            });

            try {
                await Promise.all(dataPromises);
                await this.redis.set('i-am-set-up', 'true');
                console.log('Success!');
            } catch (error) {
                console.log('Failure!');
                await this.redis.set('i-am-set-up', 'false');
                throw error;
            }
        }
        else {
            console.log('Database ready!');
        }
    }

    async generic(term) {
        if (wanakana.isKanji(term)) {
            return await this.kanji(term);
        }

        const katakana = wanakana.toKatakana(term);
        const hiragana = wanakana.toHiragana(term);

        const rawMatch = await this.redis.lrange(term, 0, -1);
        const kataMatch = await this.redis.lrange(katakana, 0, -1);
        const hiraMatch = await this.redis.lrange(hiragana, 0, -1);
        const results = [];
        const promises = [];
        (new Set(rawMatch.concat(kataMatch).concat(hiraMatch))).forEach(async kanji => {
            const op = async () => {
                const result = await this.kanji(kanji);
                results.push(result);
            }
            promises.push(op());
        });

        await Promise.all(promises);

        return results;
    }

    async kanji(kanji) {
        return await this.redis.hgetall(kanji);
    }
}

// Should model be a singleton?
export default new mRedisSearch();