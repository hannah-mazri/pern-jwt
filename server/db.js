const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'pg1983',
  host: 'localhost',
  port: 5432,
  database: 'pern_jwt',
});

module.exports = pool;
