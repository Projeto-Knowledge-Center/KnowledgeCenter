const conn = require('./../inc/db');

const connect = () => {
    conn.connect(err => {
        console.log(err || 'DB connected');
    });
}

const getUsers = () => {
    //connect();
    conn.query('SELECT * FROM user', (err, results) => {
        return err || results;
    });
}

module.exports = {
    getUsers: getUsers
};