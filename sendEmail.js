const mailgun = require("mailgun-js");
const dotenv = require('dotenv');
dotenv.config();
const DOMAIN = process.env.EMAIL_DOMAIN;
const api_key = process.env.API_KEY;
const mg = mailgun({apiKey: api_key, domain: DOMAIN});

const sendEmail = (address, template) => {
	const data = {
		from: 'BEDU <me@samples.mailgun.org>',
		to: `${address}`,
		subject: 'BEDU',
		html: `${template}`
	};
	mg.messages().send(data, function (error, body) {
		console.log(body);
	});
}

module.exports = sendEmail;