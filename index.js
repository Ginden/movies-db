'use strict';


const port = process.env.PORT || 8432;
const app = require('./lib')(port);