import http from 'node:http';

const PORT = 8000;

const server = http.createServer((req, res) => {
    res.end('Server is now up!');
})

server.listen(PORT, () => console.log(`server is running on ${PORT}`));