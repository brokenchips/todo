const Express = require('express');
const App = Express();
const Router = Express.Router();
const Path = require('path');
const Parser = require('body-parser');
const cors = require('cors');
const port = 3333;

// APP DATA
var todoList = {
     data:[
          {
            "id":0,
            "message":"Thing to do #1"
          },
          {
            "id":1,
            "message":"Thing to do #2"
          }
          ]
 };
 var lastId = todoList.data.length-1;

/**
* @desc Push to do: increments todo index and todo content is added to list with correct id.
*/
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

// GET 
App.get('/data', (req, res) => {
    console.log(`GET requested on port ${port}`)
    res.set('Content-Type', 'application/json');
    var response = {
        status : "OK",
        todo: todoList 
    };
    res.send(response)
});

// POST 
App.post('/save', (req, res) => {
    console.log(`POST requested on port ${port}`)
    if (req.body && req.body.message && req.body.message!='') {
        var message = unescape(req.body.message);
        pushTodo(message);
        // console.log("Recieved a new message: " + message);
        res.json({status : 'OK' , message: `Data saved ${message}`});
    } else {
        res.json({status : 'Fail' , message: `ERROR! Data not saved - Try again later`});
    }
});

App.listen(port, () => console.log(`Server started - Listening on port ${port}`));