const Express = require('express');
const App = Express();
const Router = Express.Router();
const Path = require('path');
var Parser = require('body-parser');



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

var pushTodo = function(message){
    lastId++;
    var item = {
        "id":lastId,
        "message":message
    }
    todoList['data'].push(item);
    
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
    var message = 'last message';
    pushTodo(message);
    res.send(`added message: ` + message)
});

App.use(Parser.json()); // support json encoded bodies
App.use(Parser.urlencoded({ extended: true })); // support encoded bodies

App.post('/save', (req, res) => {
    
    var message = req.body.message;
    pushTodo(message);
    console.log(message);
    res.json({message: `Data saved ${message}`});
});

App.listen(port, () => console.log(`Listening on port ${port}`));