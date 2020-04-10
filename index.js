const sendEmail = require('./sendEmail');
const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

let email = {
  address:'',
  template: ''
};

let respuesta = {
  error: false,
  codigo: 200,
  mensaje: ''
};

app.post('/send', function (req, res) {
  if(!req.body.address || !req.body.template) {
   respuesta = {
    error: true,
    codigo: 502,
    mensaje: 'El email y el template son requeridos'
   };
  }else {
    email = {
     address: req.body.address,
     template: req.body.template
    };
    respuesta = {
     error: false,
     codigo: 200,
     mensaje: 'El correo se envio exitosamente.',
     respuesta: email
    };
    sendEmail(email.address, email.template);
  }
  
  res.send(respuesta);
 });

app.listen(process.env.PORT, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});