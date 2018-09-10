'use strict';

const request = require('request-promise');
const _ = require('lodash');

class OMDbApiClient {
    constructor(apiKey, client = request) {
        this._apiKey = apiKey;
        this._client = request;
    }

    fetchById(id) {
        return this._request({
            qs: {
                i: id
            }
        })
            .then(convertInvalidSearchesToErrors);
    }

    fetchByTitle(title) {
        return this._request({
            qs: {
                i: title
            }
        })
            .then(convertInvalidSearchesToErrors);
    }

    _request(options) {
        return this._client(_.merge({
            method: 'GET',
            url: 'http://www.omdbapi.com/',
            simple: true,
            qs: {
                apikey: this._apiKey
            }
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