import { RequestHandler } from 'express';
import CupService from '../services/CupService';

export default class CupController {
  constructor(private service = new CupService()) {}

  internalError = 'Internal server error';

  public getAll: RequestHandler = async (_req, res) => {
    try {
      const data = await this.service.getAll();

      return res.status(200).send(data);
    } catch (err) {
      return res.status(500).send({ message: this.internalError });
    }
  };
}