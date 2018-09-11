'use strict';

const createGetComments = require('./endpoints/get-comments');
const createGetMovies = require('./endpoints/get-movies');
const createPostComments = require('./endpoints/post-comments');
const createPostMovies = require('./endpoints/post-movies');
const bodyParser = require('body-parser');
const parseJson = bodyParser.json();
const validation = require('./middlewares/schema-validation');
const commentsSchema = require('./schemas/comment');

module.exports = function(app, config) {
    app.get('/movies', createGetMovies(app, config));
    app.get('/comments', createGetComments(app, config));
    app.post('/movies', parseJson, createPostMovies(app, config));
    app.post('/comments', parseJson, validation('body', commentsSchema), createPostComments(app, config));
};