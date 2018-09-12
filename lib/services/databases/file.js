'use strict';

const Promise = require('bluebird');
const defaultFs = require('fs-extra');
const _ = require('lodash');
const tmpdir = require('os').tmpdir();
const j = require('path').join;
const packageName = require('../../../package.json').name;
const prefix = j(tmpdir, `${packageName}`);

const _fs = Symbol('FileDatabase#fs');
const _tmpDir = Symbol('FileDatabase#tmpDir');
const _subdirs = Symbol('FileDatabase#subdirsCache');
const _getDir = Symbol('FileDatabase#_getDir()');

/**
 * @class FileDatabase
 * @description This is simple file-based solution
 * It doesn't store data over application restarts
 */
class FileDatabase {
    constructor(fs = defaultFs) {
        this[_tmpDir] = null;
        this[_subdirs] = Object.create(null);
        this[_fs] = fs;
    }

    async [_getDir](subfolder) {
        const {ensureDir, mkdtemp} = this[_fs];
        if (!this[_tmpDir]) {
            this[_tmpDir] = await mkdtemp(prefix);
        }
        if (!(subfolder in this[_subdirs])) {
            const subfolderPath =j(this[_tmpDir], subfolder);
            await ensureDir(subfolderPath);
            this[_subdirs][subfolder] = subfolderPath;
        }
        return this[_subdirs][subfolder];
    }

    async listComments() {
        const {readdir, readJson} = this[_fs];
        const commentsStoragePath = await this[_getDir]('comments');
        const moviesCommentedFiles = (await readdir(commentsStoragePath));
        return Promise.resolve(moviesCommentedFiles)
            .map(async fileName => {
                console.log({fileName, commentsStoragePath});
                const filePath = j(commentsStoragePath, fileName);
                const movieId = fileName.slice(0, -'.json'.length);
                return [movieId, await readJson(filePath)]
            }, {concurrency: 10})
            .then(_.fromPairs);
    }

    async listMovies() {
        const {readdir, readJson} = this[_fs];
        const moviesStoragePath = await this[_getDir]('movies');
        const moviesFiles = (await readdir(moviesStoragePath));
        return Promise.resolve(moviesFiles)
            .map(async fileName => {
                const filePath = j(moviesStoragePath, fileName);
                const movieId = fileName.slice(0, -'.json'.length);
                return [movieId, await readJson(filePath)];
            }, {concurrency: 10})
            .then(_.fromPairs);
    }

    async addMovie(data) {
        const {writeJson} = this[_fs];
        const {imdbID} = data;
        if (!imdbID) {
            throw new Error('Invalid movie data');
        }
        const savedPath = j(await this[_getDir]('movies'), `${imdbID}.json`);
        await writeJson(savedPath, {
            ...data,
            lastUpdated: Date.now()
        });
    }

    async addComment(movieId, commentData) {
        const {readJson, writeJson} = this[_fs];
        const savedPath = j(await this[_getDir]('comments'), `${movieId}.json`);
        let existingComments = [];
        try {
            existingComments = await readJson(savedPath);
        } catch (err) {
            // Ignore
        }
        existingComments.push({
            ...commentData,
            date: Date.now()
        });
        await writeJson(savedPath, existingComments);
    }

}


module.exports = FileDatabase;