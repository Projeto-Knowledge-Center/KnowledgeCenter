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
router.get('/users', (req, res) => {
	console.log(testDB.getUsers());
	res.render('index', {title: 'Users'});
});

// GET User
router.get('/users/:username', (req, res) => {

});

// POST User
router.post('/users', (req, res) => {

});

// PUT User
router.put('/users/:username', (req, res) => {

});

// POST Sign Up
router.post('/users/signup', (req, res) => {

});

// POST Login
router.post('/users/login', (req, res) => {

});


// Tags

// GET Tags
router.get('/tags', (req, res) => {

});


// Questions

// GET Questions
router.get('/questions', (req, res) => {

});

// GET Question
router.get('/questions/:idQuestion', (req, res) => {

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
router.get('/questions/tagged/:tag', (req, res) => {

});


// Articles

// GET Articles
router.get('/articles', (req, res) => {

});

// GET Article
router.get('/articles/:idArticle', (req, res) => {

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

// GET tagged Article
router.get('/articles/tagged/:tag', (req, res) => {

});

module.exports = router;