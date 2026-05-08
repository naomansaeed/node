import http from 'node:http';

const _port = 3750;

const server = http.createServer((req, res) => {
    /*create a new url onject to store the entered url. 
    second part dynamically obtains host value from request headers [localhost:7000]. 
    req.url is about what the user asked. */
    const urlObj = new URL(req.url, `http://${req.headers.host}`);

    // specifically obtain search parameters value and convert it into JS object
    const queryObj = Object.fromEntries(urlObj.searchParams);
    console.log(queryObj);
});

server.listen(_port, () => console.log(`Server is listening at ${_port}`));