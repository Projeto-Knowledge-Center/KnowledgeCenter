const connection = require('./../inc/db');

// Test environment only

const getUsers = callback => {
    connection.query('SELECT * FROM user u INNER JOIN profile p ON u.id = p.id', (error, results) => {
        if (error) {
            callback(error);
        } else {
            callback(results);
        }
    });
}

const getUser = (username, callback) => {
    connection.query('SELECT * FROM user u INNER JOIN profile p ON u.id = p.id WHERE p.username = ?', username, (error, result) => {
        if (error) {
            callback(error);
        } else {
            callback(result);
        }
    });
}

const insertUser = (email, password, callback) => {
    connection.query('INSERT INTO user (email, password, administrator) VALUES (?, ?, 0)', [email, password], (error, response) => {
        if (error) {
            callback(error);
        } else {
            callback(response);
        }
    });
}

const login = (email, password, callback) => {
    connection.query('SELECT * FROM user WHERE email = ? AND password = ?', [email, password], (error, response) => {
        if (error) {
            callback(error);
        } else {
            response.length > 0 ? callback(response) : callback();
        }
    });
}

const getTags = callback => {
    connection.query('SELECT * FROM tag', (error, results) => {
        if (error) {
            callback(error);
        } else {
            callback(results);
        }
    });
}

const getQuestions = callback => {
    connection.query('SELECT * FROM question', (error, results) => {
        if (error) {
            callback(error);
        } else {
            callback(results);
        }
    });
}

const getQuestion = (idQuestion, callback) => {
    connection.query('SELECT * FROM question q WHERE q.id = ?', idQuestion, (error, result) => {
        if (error) {
            callback(error);
        } else {
            callback(result);
        }
    });
}

const getQuestionsByTag = (tag, callback) => {
    connection.query('SELECT * FROM question q WHERE q.id = ANY (SELECT question_id FROM question_tag qt WHERE qt.tag_id = ' + 
                        '(SELECT t.id FROM tag t WHERE t.name = ?))', tag, (error, results) => {
        if (error) {
            callback(error);
        } else {
            callback(results);
        }
    });
}

const getArticles = callback => {
    connection.query('SELECT * FROM article', (error, results) => {
        if (error) {
            callback(error);
        } else {
            callback(results);
        }
    });
}

const getArticle = (idArticle, callback) => {
    connection.query('SELECT * FROM article a WHERE a.id = ?', idArticle, (error, result) => {
        if (error) {
            callback(error);
        } else {
            callback(result);
        }
    });
}

const getArticlesByTag = (tag, callback) => {
    connection.query('SELECT * FROM article a WHERE a.id = ANY (SELECT article_id FROM article_tag at WHERE at.tag_id = ' + 
                        '(SELECT t.id FROM tag t WHERE t.name = ?))', tag, (error, results) => {
        if (error) {
            callback(error);
        } else {
            callback(results);
        }
    });
}

module.exports = {
    getUsers,
    getUser,
    insertUser,
    login,
    getTags,
    getQuestions,
    getQuestion,
    getQuestionsByTag,
    getArticles,
    getArticle,
    getArticlesByTag
}