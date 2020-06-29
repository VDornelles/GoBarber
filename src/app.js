import express from 'express';
import path from 'path';
import routes from './routes';
import database from './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    database.contructor();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(
      '/files',
      // Allow access to the uploads folder directly from the navigator
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
  }
}
export default new App().server;
