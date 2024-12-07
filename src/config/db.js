const sql = require('mssql');

const config = {
    user: 'property',
    password: 'Property@123',
    server: 'DESKTOP-SQ4M5C3', // You can use 'localhost\\instance' to connect to named instance
    database: 'PropertyManagementDB',
    options: {
        encrypt: false, // Use this if you're on Windows Azure
        trustServerCertificate: true // Change to true for local dev / self-signed certs
    }
};

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Connected to the database');
        return pool;
    })
    .catch(err => {
        console.error('Database connection failed:', err);
        throw err;
    });

module.exports = {
    sql, poolPromise
};