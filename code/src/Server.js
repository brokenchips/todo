const Express = require('express');
const App = Express();
const Router = Express.Router();
const Path = require('path');
var cors = require('cors');

const port = 3333;

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
          }
          ]
 };
App.get('/app', (req, res) => {
                res.sendFile(Path.join(__dirname + '/index.html'));
});
App.use(cors());
App.get('/data', (req, res) => {
    console.log(`data requested ${port}`)
    var output = JSON.stringify(todoList);
    res.set('Content-Type', 'application/json');
    res.send(todoList)
});

App.get('/increase/', (req, res) => {
    lastId++;
    var item = {
        "id":lastId,
        "message":'last message'
    }
    todoList['data'].push(item);
    res.send(`added`)
});

App.use('/api', Router);

Router.post('/', (req, res) => {
    console.log(request)
    var output = "";
    res.json({message: `Data saved ${output}`});
});

App.listen(port, () => console.log(`Listening on port ${port}`));