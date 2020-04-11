const nodemailer = require('nodemailer');

const sendEmail = (address,template) => {
	return new Promise((resolve, reject) => {
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.EMAIL,
				pass: process.env.PASSWORD
			}
		});
	
		const mailOptions = {
			from: 'bedu@gmail.com',
			to: `${address}`,
			subject: 'prueba',
			html:  `${template}`
		};
	
		transporter.sendMail(mailOptions, function (err, info) {
			if(err){
				console.log(err, 'error')
				reject(); 
			}else{
				console.log(info, 'información');
				resolve()
			}
		});
	})
}


module.exports = sendEmail;