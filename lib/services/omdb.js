'use strict';

const request = require('request-promise');
const _ = require('lodash');

class OMDbApiClient {
    constructor(apiKey, client = request) {
        if (!apiKey) throw new Error('ApiKey is required by OMDbApiClient');
        this._apiKey = apiKey;
        this._client = client;
    }

    fetchById(id) {
        return this._request({qs: {i: id}})
            .then(convertInvalidSearchesToErrors);
    }

    fetchByTitle(title) {
        return this._request({qs: {t: title}})
            .then(convertInvalidSearchesToErrors);
    }

    async _request(options) {
        return this._client(_.merge({
            method: 'GET',
            url: 'http://www.omdbapi.com/',
            simple: true,
            qs: {apikey: this._apiKey}
        }, options));
    }
}

function convertInvalidSearchesToErrors(body) {
    if (body.Error) {
        throw new Error(body.Error);
    }
    return body;
}

module.exports = OMDbApiClient;