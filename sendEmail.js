const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'ancizj393@gmail.com',
		pass: 'Noviembre07$'
	}
 });

 let dataEmail = {
	 address:'',
	 template:''
 }

 const sendEmail = (address,template) => {
	console.log(address, template)
	dataEmail.address = address;
	dataEmail.template = template;
 }
 console.log(dataEmail,'datyaEmail')
 const mailOptions = {
  from: 'ancizj393@gmail.com', // sender address
  to: `${dataEmail.address}`, // list of receivers
  subject: 'prueba', // Subject line
  html:  `${dataEmail.template}`// plain text body
};

transporter.sendMail(mailOptions, function (err, info) {
	if(err)
		console.log(err, 'error')
	else
		console.log(info, 'información');
});

module.exports = sendEmail;