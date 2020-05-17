const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./db');
const router = express.Router();
const nodemailer = require('nodemailer');
// const cors = require('cors');
const creds = require('./contact-config');
const PORT = process.env.PORT || 5000;
const users = require('./routes/users');

mongoose
	.connect(config.DB, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(
		() => {
			console.log('Database is connected');
		},
		(err) => {
			console.log('Cannot connect to the database' + err);
		}
	);

const app = express();
app.use(passport.initialize());
require('./passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', users);

app.get('/', (req, res) => {
	res.send('Hello, I am the backend.');
});

// app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(PORT, () => {
	console.log(`Server is running on PORT ${PORT}`);
});

var transport = {
	host: 'smtp.gmail.com', // Don’t forget to replace with the SMTP host of your provider
	port: 587,
	auth: {
		user: creds.USER,
		pass: creds.PASS,
	},
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
	if (error) {
		console.log(error);
	} else {
		console.log('Server is ready to take messages');
	}
});

router.post('/send', (req, res, next) => {
	var namemail = req.body.name;
	var emailmail = req.body.email;
	var message = req.body.message;
	var content = `name: ${namemail} \nemail: ${emailmail} \nmessage: ${message} `;

	var mail = {
		from: namemail,
		to: 'mealplanapptest@gmail.com', // Change to email address that you want to receive messages on
		subject: 'New Message from Contact Form',
		text: content,
	};

	transporter.sendMail(mail, (err, data) => {
		if (err) {
			res.json({
				status: 'fail',
			});
		} else {
			res.json({
				status: 'success',
			});
		}
	});
	transporter.sendMail(
		{
			from: 'mealplanapptest@gmail.com',
			to: emailmail,
			subject: 'Submission was successful',
			text: `Thank you for contacting us!\n\nForm details\nName: ${namemail}\nEmail: ${emailmail}\nMessage: ${message}`,
		},
		function (error, info) {
			if (error) {
				console.log(error);
			} else {
				console.log('Message sent: ' + info.response);
			}
		}
	);
});