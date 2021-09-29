require('dotenv').config();

const config = {
    dev: process.env.NODE_ENV !== 'production',
    start: process.env.NODE_ENV,
    port: process.env.PORT || 3001,
}

module.exports = { config };