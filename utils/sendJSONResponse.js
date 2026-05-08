export const sendJSONResponse = (res, statusCode, data) => {
    res.statusCode = statusCode;
    res.setHeader('Content-Type','application/json');
    // allow access for any domain url & any port
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Allow access for GET method only
    res.setHeader('Access-Control-Allow-Method', 'GET');
    res.end(JSON.stringify(data));
}