import mRedisSearch from '../model/search.js';

class sService {

    async generic(req, res) {
        const term = req.params.term;

        const results = await mRedisSearch.generic(term);
        res.json({result: results});
    }
}

export default new sService();