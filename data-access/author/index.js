const db = require('../../models/index');
const Author  = db.authors;

const makeAuthorsDb = require('./author');
const authorsDb = makeAuthorsDb(Author, db.Op);

module.exports = authorsDb;
