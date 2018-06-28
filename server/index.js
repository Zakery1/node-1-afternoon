const express = require('express');
const bodyParser = require('body-parser');
const mc = require('./controllers/messages_controller'); 

const app = express();

app.use( bodyParser.json() );
app.use( express.static( __dirname + '/../public/build' ) );

const messagesBaseUrl = "/api/messages";
app.post( messagesBaseUrl, mc.create );
app.get( messagesBaseUrl, mc.read );
app.put( `${messagesBaseUrl}/:id`, mc.update );
app.delete( `${messagesBaseUrl}/:id`, mc.delete );


const PORT = 3000;
app.listen( PORT, () => { console.log(`Server listening on PORT ${PORT}`); })

