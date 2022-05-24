import { RequestHandler } from 'express';
import CupService from '../services/CupService';

export default class CupController {
  constructor(private service = new CupService()) {}

  notFound = 'Not a World Cup year';

  internalError = 'Internal server error';

  public getAll: RequestHandler = async (_req, res) => {
    try {
      const data = await this.service.getAll();

      return res.status(200).send(data);
    } catch (err) {
      return res.status(500).send({ message: this.internalError });
    }
  };

  public getByYear: RequestHandler = async (req, res) => {
    try {
      const { year } = req.params;
      const data = await this.service.getByYear(parseInt(year, 10));

      if (!data) {
        return res.status(404).send({ message: this.notFound });
      }

      return res.status(200).send(data);
    } catch (err) {
      return res.status(500).send({ message: this.internalError });
    }
  };
}