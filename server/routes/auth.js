const express = require('express');
const router = express.Router();

const token = require('../auth/token');
const hash = require('../auth/hash');

const {
	userExists,
	createUser,
	getUserByName
} = require('../db/exampleDbFunctions');

router.post('/register', register, token.issue);
router.post('/login', login, token.issue);

router.get('/username', token.decode, (req, res) => {
	res.json({
		username: req.user.username
	});
});

router.get('/login', token.decode, (req, res) => {
	res.json({
		username: req.user.username
	});
});

function register(req, res, next) {
	if (req.body.invitecode !== process.env.INVITE_CODE)
		return res.status(400).send({ message: 'Invalid invite code' });

	userExists(req.body.username)
		.then(exists => {
			if (exists) {
				return res
					.status(400)
					.send({ message: 'Username taken, please try another' });
			}
			createUser(req.body).then(() => next());
		})
		.catch(err => {
			res.status(500).send({ message: err.message });
		});
}

function login(req, res, next) {
	getUserByName(req.body.username)
		.then(user => {
			return user;
		})
		.then(user => {
			return user && hash.verifyUser(user.hash, req.body.password);
		})
		.then(isValid => {
			return isValid ? next() : invalidCredentials(res);
		})
		.catch(err => {
			res.status(500).send({ message: err.message });
		});
}

function invalidCredentials(res) {
	res.status(400).send({ message: 'Invalid Credentials' });
}

module.exports = router;
