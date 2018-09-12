'use strict';

const {FileDatabase} = require('../../lib/services');
const fileSystemPath = '/tmp/mocked-movies';
const _ = require('lodash');
const {comment, omdb: {shortResponse}} = require('../fixtures');

test('FileDatabase can be spawned', async () => {
    // eslint-disable-next-line
    new FileDatabase();
});

test('FileDatabase can be spawned with mocked fs', async () => {
    // eslint-disable-next-line
    new FileDatabase({});
});

test('FileDatabase#listComments', async () => {
    const fileSystemMock = {
        mkdtemp: jest.fn().mockReturnValue(Promise.resolve(fileSystemPath)),
        ensureDir: jest.fn().mockReturnValue(Promise.resolve()),
        readdir: jest.fn().mockReturnValue(Promise.resolve(['foobar.json'])),
        readJson: jest.fn().mockReturnValue(Promise.resolve([comment]))
    };
    const instance = new FileDatabase(fileSystemMock);
    const results = await instance.listComments();
    const callDetails = _.mapValues(fileSystemMock, 'mock.calls.0.0');
    expect(callDetails).toEqual({
        mkdtemp: '/tmp/movies-db', // This is default prefix
        ensureDir: '/tmp/mocked-movies/comments', //
        readdir: '/tmp/mocked-movies/comments',
        readJson: '/tmp/mocked-movies/comments/foobar.json'
    });
    expect(results).toEqual({
        foobar: [comment]
    })
});

test('FileDatabase#listMovies', async () => {
    const {imdbID} = shortResponse;
    const fileSystemMock = {
        mkdtemp: jest.fn().mockReturnValue(Promise.resolve(fileSystemPath)),
        ensureDir: jest.fn().mockReturnValue(Promise.resolve()),
        readdir: jest.fn().mockReturnValue(Promise.resolve([`${imdbID}.json`])),
        readJson: jest.fn().mockReturnValue(Promise.resolve(shortResponse))
    };
    const instance = new FileDatabase(fileSystemMock);
    const results = await instance.listMovies();
    const callDetails = _.mapValues(fileSystemMock, 'mock.calls.0.0');
    expect(callDetails).toEqual({
        mkdtemp: '/tmp/movies-db',
        ensureDir: '/tmp/mocked-movies/movies',
        readdir: '/tmp/mocked-movies/movies',
        readJson: `/tmp/mocked-movies/movies/${imdbID}.json`
    });
    expect(results).toEqual({
        [imdbID]: shortResponse
    });
});

