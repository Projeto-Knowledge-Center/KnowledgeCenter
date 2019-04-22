var express = require('express');
var router = express.Router();
const testDB = require('./testDB');

// Home

/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('index', { title: 'Express' });
});


// Users

// GET Users
// Return a JSON array object with all Users
router.get('/users', (req, res) => {
	testDB.getUsers((error, users) => {
		if (error) {
			return res.send(error);
		}
		res.send(users);
	});
});

// GET User
// Return a JSON User object for a given username
router.get('/users/:username', (req, res) => {
	testDB.getUser(req.params.username, (error, user) => {
		if (error) {
			return res.send(error);
		}
		res.send(user);
	});
});

// POST User
router.post('/users', (req, res) => {

});

// PUT User
router.put('/users/:username', (req, res) => {

});

// POST Sign Up
// Require a JSON User object, insert it into the DB and return a JSON response object from the DB
router.post('/users/signup', (req, res) => {
	const b = req.body;
	testDB.insertUser(b.email, b.password, (error, response) => {
		if (error) {
			return res.send(error);
		}
		res.status(200);
		res.send(response);
	});
});

// POST Login
// Require a JSON User object, return HTTP status 200 and JSON User object if authorized or status 401 for unauthorized
router.post('/users/login', (req, res) => {
	const b = req.body;
	testDB.login(b.email, b.password, (error, user) => {
		if (error) {
			return res.send(error);
		}
		user ? res.status(200) : res.status(401);
		res.send(user);
	});
});


// Tags

// GET Tags
// Return a JSON array object with all Tags
router.get('/tags', (req, res) => {
	testDB.getTags((error, tags) => {
		if (error) {
			return res.send(error);
		}
		res.send(tags);
	});
});


// Questions

// GET Questions
// Return a JSON array object with all Questions
router.get('/questions', (req, res) => {
	testDB.getQuestions((error, questions) => {
		if (error) {
			return res.send(error);
		}
		res.send(questions);
	});
});

// GET Question
// Return a JSON Question object for a given question id
router.get('/questions/:idQuestion', (req, res) => {
	testDB.getQuestion(req.params.idQuestion, (error, question) => {
		if (error) {
			return res.send(error);
		}
		res.send(question);
	});
});

// POST Question
router.post('/questions', (req, res) => {
	
});

// PUT Question
router.put('/questions/:idQuestion', (req, res) => {

});

// DELETE Question
router.delete('/questions/:idQuestion', (req, res) => {

});

// GET tagged Questions
// Return a JSON array of Question objects for a given Tag
router.get('/questions/tagged/:tag', (req, res) => {
	testDB.getQuestionsByTag(req.params.tag, (error, questions) => {
		if (error) {
			return res.send(error);
		}
		res.send(questions);
	});
});


// Articles

// GET Articles
// Return a JSON array of Article objects
router.get('/articles', (req, res) => {
	testDB.getArticles((error, articles) => {
		if (error) {
			return res.send(error);
		}
		res.send(articles);
	});
});

// GET Article
// Return a JSON Article object for a given id
router.get('/articles/:idArticle', (req, res) => {
	testDB.getArticle(req.params.idArticle, (error, article) => {
		if (error) {
			return res.send(error);
		}
		res.send(article);
	});
});

// POST Article
router.post('/articles', (req, res) => {

});

// PUT Article
router.put('/articles/:idArticle', (req, res) => {

});

// DELETE Article
router.delete('/articles/:idArticle', (req, res) => {

});

// GET tagged Articles
// Return a JSON array of Article objects for a given Tag
router.get('/articles/tagged/:tag', (req, res) => {
	testDB.getArticlesByTag(req.params.tag, (error, articles) => {
		if (error) {
			return res.send(error);
		}
		res.send(articles);
	});
});

module.exports = router;