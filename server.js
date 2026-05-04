import http from 'node:http';
import { getDataFromDB } from './db.js';
//import { data } from './data/data';

const PORT = 8000;

/*
const animal = {
    type: "mammel",
    species: "elephant"
} */



const server = http.createServer(async (req, res) => {
    const destinations = await getDataFromDB();
    if (req.url === '/api' && req.method === 'GET') {
        //console.log(JSON.stringify(animal));
        //res.end(JSON.stringify(animal));
        //res.write();
        //res.end('This is from server.');
        res.end(JSON.stringify(destinations));
    }
    
})

server.listen(PORT, () => console.log(`server is running on ${PORT}`));