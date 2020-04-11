const nodemailer = require('nodemailer');

const sendEmail = (address,template) => {
	console.log(address, template)
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PASSWORD
		}
	});

	const mailOptions = {
		from: 'ancizj393@gmail.com', // sender address
		to: `${address}`, // list of receivers
		subject: 'prueba', // Subject line
		html:  `${template}`// plain text body
	};

	transporter.sendMail(mailOptions, function (err, info) {
		if(err)
			console.log(err, 'error')
		else
			console.log(info, 'información');
	});
 }


module.exports = sendEmail;