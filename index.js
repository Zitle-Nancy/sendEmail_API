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
   res.status(502).send(respuesta);
  }else {
    email = {
     address: req.body.address,
     template: req.body.template
    };
    sendEmail(email.address, email.template).then(function () { 
      respuesta = {
        error: false,
        codigo: 200,
        mensaje: 'El correo se envio exitosamente.',
        respuesta: email
      };
      res.status(200).send(respuesta);
    }). 
    catch(function () { 
      respuesta = {
        error: true,
        codigo: 500,
        mensaje: 'El correo no se pudo enviar.',
      };
      res.status(500).send(respuesta);
    }); 
  }
 });

app.listen(process.env.PORT, () => {
 console.log("El servidor está inicializado en el puerto 8080");
});