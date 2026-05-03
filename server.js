import http from 'node:http';
import { type } from 'node:os';

const PORT = 8000;

const animal = {
    type: "mammel",
    species: "elephant"
}

const server = http.createServer((req, res) => {
    if (req.url === '/api' && req.method === 'GET') {
        //console.log(JSON.stringify(animal));
        res.end(JSON.stringify(animal));
    }
    
})

server.listen(PORT, () => console.log(`server is running on ${PORT}`));