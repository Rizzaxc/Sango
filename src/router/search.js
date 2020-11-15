import express from 'express';
import sSearch from '../service/search.js';
const rSearch = express.Router();

rSearch.get('/', (req, res) => {
    console.log('Endpoint working!');
    res.sendStatus(200);
});

rSearch.get('/:term', sSearch.generic);

export default rSearch;