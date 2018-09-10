const createGetComments = require('./endpoints/get-comments');
const createGetMovies = require('./endpoints/get-movies');
const createPostComments = require('./endpoints/post-comments');
const createPostMovies = require('./endpoints/post-movies');

module.exports = function(app, config) {
    app.get('/movies', createGetMovies(app, config));
    app.get('/comments', createGetComments(app, config));
    app.post('/movies', createPostMovies(app, config));
    app.post('/comments', createPostComments(app, config));
};