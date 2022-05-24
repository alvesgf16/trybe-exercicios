import express from 'express';
import routes from './routes';
import connection from './database/models/connection';

export default class App {
  public express: express.Application;

  public connection: Promise<typeof import('mongoose')>;

  constructor() {
    this.express = express();
    this.middlewares();
    this.connection = connection();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.json());
  }

  private routes() {
    this.express.use(routes);
  }
}