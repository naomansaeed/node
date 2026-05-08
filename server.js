import http from 'node:http';
import { getDataFromDB } from './database/db.js';
import { error } from 'node:console';
import { sendJSONResponse } from './utils/sendJSONResponse.js';
import { getDataByPathParams } from './utils/getDataByPathParams.js';
import {getDataByQueryParams} from './utils/getDataByQueryParams.js';
//import { data } from './data/data';

const PORT = 8000;

/*
const animal = {
    type: "mammel",
    species: "elephant"
} */
 

const server = http.createServer(async (req, res) => {
    const destinations = await getDataFromDB();

    const urlObj = new URL(req.url, `http://${req.headers.host}`);
    const queryObj = Object.fromEntries(urlObj.searchParams);  

    //if (req.url === '/api' && req.method === 'GET') {
    if (urlObj.pathname ==='/api' && req.method === 'GET') {
        
        //console.log(JSON.stringify(animal));
        //res.end(JSON.stringify(animal));
        //res.write();
        //res.end('This is from server.');
        //res.statusCode = 200;
        //res.setHeader('Content-Type','application/json');
        //res.end(JSON.stringify(destinations));

        //---Challenge---
        /* 
        - Update filteredData so it only hold the objects the client wants
        based on query parameters. If client doesn't use any query parameters,
        serve all of the data
        - The query params to be accepted curretly are:
          'country', 'continent', & 'is_open_to_public'.
        - Keep the code tidy by doing the filtering in a util function
        */

        //let filteredDestinations = destinations;

        const filteredData = getDataByQueryParams(destinations, queryObj);

        //console.log(queryObj);

        sendJSONResponse(res, 200, filteredData);
    }
    else if(req.url.startsWith('/api/continent') && req.method === 'GET') {
        const continent = req.url.split('/').pop();

        const filteredData = getDataByPathParams(destinations, 'continent', continent);
       
        /* destinations.filter((destination) => {
            return destination.continent.toLowerCase() === continent.toLowerCase();
        }); */
        
        //res.statusCode = 200;
        //res.setHeader('Content-Type','application/json');
        //res.end(JSON.stringify(filteredData));

        sendJSONResponse(res, 200, filteredData);
    }

    else if (req.url.startsWith('/api/country') && req.method === 'GET') {
        const country = req.url.split('/').pop();
        const filteredData = getDataByPathParams(destinations, 'country', country);
        
       /* destinations.filter((destination) => {
            return destination.country.toLowerCase() === country.toLowerCase();
        }); */

        sendJSONResponse(res, 200, filteredData);
    }

    else{
        
        //res.setHeader('Content-Type','application/json');
        //res.statusCode = 404;
        //res.end(JSON.stringify({error:"not found", message: "The requested route does not exist"}));

        sendJSONResponse(res, 404, ({
            error:"not found", 
            message: "The requested route does not exist"
        }) 
        );
    }
    
})

server.listen(PORT, () => console.log(`server is running on ${PORT}`));