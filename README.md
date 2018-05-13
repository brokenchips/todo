README




/***

FRONTEND

***/





Per avviare il server di sviluppo eseguire:

  > npm start






/***

BACKEND

***/





Per avviare il server di backend eseguire:

  > node Server.js

Si metterà inascolto sulla porta 3333


*******
* GET *
*******

non richiede parametri
restituisce uno status di esito ed un oggetto contenente i dati riguardanti il servizio

url:
http://localhost:3333/data/

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

********
* POST *
********

riceve un parametro "message" che contiene testo encodato
restituisce uno status di esito ed un messaggio di dettaglio riguardante l'operazione di salvataggio

url:
http://localhost:3333/save/

example request params:
message=test%20message

example response: 
{
  "status":"OK",
  "message":"Data saved test message"
}