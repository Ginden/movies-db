'use strict';

const {omdb: {shortResponse, movieNotFound}} = require('../fixtures');
const {OMDbApiClient} = require('../../lib/services');

test('OMDbApiClient can be spawned', async () => {
    // eslint-disable-next-line
    new OMDbApiClient('Foobar');
});


test('OMDbApiClient throws without ApiKey', async () => {
    try {
        // eslint-disable-next-line
        new OMDbApiClient();
        return Promise.reject(Error('OMDbApiClient didn\'t throw'));
    } catch (err) {
        return null;
    }
});

test('OMDbApiClient#fetchById calls request function with proper arguments', async () => {
    const mockedRequest = jest.fn();
    mockedRequest.mockReturnValue(Promise.resolve(shortResponse));
    const instance = new OMDbApiClient('foobar', mockedRequest);
    await instance.fetchById(42);
    const calls = mockedRequest.mock.calls;
    expect(calls).toHaveLength(1);
    const [args] = calls;
    expect(args).toEqual([
        {
            method: 'GET',
            url: 'http://www.omdbapi.com/',
            simple: true,
            'qs': {
                'apikey': 'foobar',
                'i': 42
            }
        }
    ]);
});

test('OMDbApiClient#fetchByTitle calls request function with proper arguments', async () => {
    const mockedRequest = jest.fn();
    mockedRequest.mockReturnValue(Promise.resolve(shortResponse));
    const instance = new OMDbApiClient('foobar', mockedRequest);
    await instance.fetchByTitle('back');
    const calls = mockedRequest.mock.calls;
    expect(calls).toHaveLength(1);
    const [args] = calls;
    expect(args).toEqual([
        {
            method: 'GET',
            url: 'http://www.omdbapi.com/',
            simple: true,
            'qs': {
                'apikey': 'foobar',
                't': 'back'
            }
        }
    ]);
});

test('OMDbApiClient#fetchById throws when movie is not found', async () => {
    const mockedRequest = jest.fn();
    mockedRequest.mockReturnValue(Promise.resolve(movieNotFound));
    const instance = new OMDbApiClient('foobar', mockedRequest);
    try {
        await instance.fetchById(42);
        return Promise.reject(Error('OMDbApiClient#fetchById didn\'t throw'))
    } catch(err) {
        expect(err).toBeInstanceOf(Error);
        expect(err.message).toEqual(movieNotFound.Error);
        return null;
    }


});