const express = require('express');
const next = require('next');

const dev = 'development';

const e_app = express();
const n_app = next({ dev });
const n_handler = n_app.getRequestHandler();

const { database } = require('./database/database');

const port = 3000;

e_app.get('*', n_handler);

database.sync().then(() => {
  n_app.prepare().then(() => {
    e_app.listen(port, () => {

      console.log('listening...');
    });
  });
});
