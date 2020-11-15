import express from 'express';
import rSearch from './router/search.js';
const port = process.env.PORT || 4040;

import cors from 'cors';


const app = express();
// const corsOptions = {
//     origin: ['http://localhost:8080', 'http://localhost:4040'],
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
// app.use(cors(corsOptions));

app.use(express.static('dist'));


app.use('/api/v1/search', rSearch);
app.listen(port, () => console.log(`App running on port ${port}!`))