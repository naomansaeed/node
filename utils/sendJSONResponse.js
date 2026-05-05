export const sendJSONResponse = (res, statusCode, data) => {
    res.statusCode = statusCode;
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify(data));
}