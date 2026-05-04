import http from 'node:http';
import { getDataFromDB } from './db.js';
import { error } from 'node:console';
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
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify(destinations));
    }
    else if(req.url.startsWith('/api/continent') && req.method === 'GET') {
        const continent = req.url.split('/').pop();
        const filteredData = destinations.filter((destination) => {
            return destination.continent.toLowerCase() === continent.toLowerCase();
        });
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify(filteredData));
    }
    else{
        res.setHeader('Content-Type','application/json');
        res.statusCode = 404;
        res.end(JSON.stringify({error:"not found", message: "The requested route does not exist"}));
    }
    
})

server.listen(PORT, () => console.log(`server is running on ${PORT}`));