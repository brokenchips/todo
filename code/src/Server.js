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

App.use(cors());
App.use(Parser.urlencoded({ extended: true }));

App.get('/data', (req, res) => {
    console.log(`data requested ${port}`)
    res.set('Content-Type', 'application/json');
    var response = {
        status : "OK",
        todo: todoList 
    };
    res.send(response)
});

App.get('/increase/', (req, res) => {
    var message = 'last message';
    pushTodo(message);
    res.send(`added message: ` + message)
});

App.post('/save', (req, res) => {

    if (req.body && req.body.message && req.body.message!='') {
        var message = unescape(req.body.message);
        pushTodo(message);
        console.log("Recieved a new message: " + message);
        res.json({status : 'OK' , message: `Data saved ${message}`});
    } else {
        res.json({status : 'Fail' , message: `ERROR! Data not saved - Try again later`});
    }

});

App.listen(port, () => console.log(`Listening on port ${port}`));