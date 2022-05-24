import autoBind from 'auto-bind';
import { Request, Response } from 'express';
import Service from '../services/Service';

export default abstract class Controller<T> {
  private service;

  constructor(service: Service<T>) {
    this.service = service;
    autoBind(this);
  }

  abstract notFound: string;

  internalError = 'Internal server error';

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    try {
      const data = await this.service.getAll();

      return res.status(200).send(data);
    } catch (err: unknown) {
      return res.status(500).send({ message: this.internalError });
    }
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const item = await this.service.create(req.body);
      return res.status(201).send(item);
    } catch (err: unknown) {
      return res.status(500).send({ message: this.notFound });
    }
  };

  public getById = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const item = await this.service.getById(id);
      if (item) {
        return res.status(200).send(item);
      }
      return res.status(404).send({ message: this.notFound });
    } catch (err: unknown) {
      return res.status(500).send({ message: this.internalError });
    }
  };

  public update = async (req: Request, res: Response):
  Promise<Response> => {
    try {
      const { id } = req.params;
      const item = await this.service.update(id, req.body);
      if (item) {
        return res.status(200).send(item);
      }
      return res.status(404).send({ message: this.notFound });
    } catch (err: unknown) {
      return res.status(500).send({ message: this.internalError });
    }
  };

  public delete = async (req: Request, res: Response):
  Promise<Response> => {
    try {
      const { id } = req.params;
      const item = await this.service.delete(id);
      if (item) {
        return res.status(200).send(item);
      }
      return res.status(404).send({ message: this.notFound });
    } catch (err: unknown) {
      return res.status(500).send({ message: this.internalError });
    }
  };
}