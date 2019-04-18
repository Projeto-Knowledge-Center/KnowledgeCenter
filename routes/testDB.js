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
    connection.query('SELECT * FROM user u INNER JOIN profile p ON u.id = p.id WHERE p.username = ?', username, (error, results) => {
        if (error) {
            callback(error);
        } else {
            callback(results);
        }
    });
}

const getTags = (callback => {
    connection.query('SELECT * FROM tag', (error, results) => {
        if (error) {
            callback(error);
        } else {
            callback(results);
        }
    });
});

const getQuestions = (callback => {
    connection.query('SELECT * FROM question', (error, results) => {
        if (error) {
            callback(error);
        } else {
            callback(results);
        }
    });
});

module.exports = {
    getUsers: getUsers,
    getUser: getUser,
    getTags: getTags,
    getQuestions: getQuestions
};