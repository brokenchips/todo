README

Istruzioni
per testare il progetto è necessario avere installato nodejs


- scaricare il progetto

  > git clone https://github.com/brokenchips/todo.git

- installare le dipendenze e creare la build

  > npm install<br />
  > npm run build

- avviare il backend

  > node src/Server.js

- da un secondo terminale installare e/o avviare il server web del frontend (esempio con http-server) con / sulla cartella build

  > npm install http-server -g<br />
  > http-server ./build

- navigare a http://127.0.0.1:8080/ (o al vostro solito indirizzo:porta se avete usato un server diverso)


/***
FRONTEND
***/

il progetto è bootstrappato con create-react-app

> npm install -g create-react-app

/***
BACKEND
***/

il server è in code/Server.js
Una volta lanciato con:

  > node Server.js

resterà in ascolto sulla porta 3333


* GET *

non richiede parametri
restituisce uno status di esito ed un oggetto contenente i dati riguardanti il servizio

url: http://localhost:3333/data/

example response: 
<pre>
{
  "status": "OK",
  "todo": {
    "data":[
      {
        "id": 0,
        "message": "Todo #1 text"
      },
      {
        "id": 1,
        "message": "Todo #2 text"
      }
    ]
  }
}
</pre>


* POST *

riceve un parametro "message" che contiene testo encodato
restituisce uno status di esito ed un messaggio di dettaglio riguardante l'operazione di salvataggio

url: http://localhost:3333/save/

example request params: "message=test%20message"

example response: 
<pre>
{
  "status":"OK",
  "message":"Data saved test message"
}
</pre>