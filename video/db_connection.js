const Pool = require("pg").Pool;

const pool = new Pool({
    user: "jeffrydelapena",
    password: "",
    database: "Youtube",
    host: "localhost",
    port: 5432
});

module.exports = pool;