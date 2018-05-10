const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;

var lastId = 1;
var todoList = {
            data:[
                {
                    "id":0,
                    "message":"Ricordati di dormire"
                },
                {
                    "id":1,
                    "message":"Ricordati di mangiare"
                },
            ]};

// url: http://localhost:3000/
app.get('/', (request, response) => {
    var output = JSON.stringify(todoList);
    response.send(`Data dump ${output}`)
});

// test
app.get('/increase/', (request, response) => {
    lastId++;
    var item = {
        "id":lastId,
        "message":'last message'
    }
    todoList['data'].push(item);
    response.send(`added`)
});

// all routes prefixed with /api
app.use('/api', router);

// using router.get() to prefix our path
// url: http://localhost:3000/api/
router.post('/', (request, response) => {
    console.log(request)
    var output = "";
    response.json({message: `Data saved ${output}`});
});

// set the server to listen on port 3000
app.listen(port, () => console.log(`Listening on port ${port}`));