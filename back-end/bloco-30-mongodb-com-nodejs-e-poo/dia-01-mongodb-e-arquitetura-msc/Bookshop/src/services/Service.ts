import autoBind from 'auto-bind';
import { Schema } from 'mongoose';
import Model from '../database/models/Model';

export default abstract class Service<T> {
  private model;

  constructor(model: Model<T>) {
    this.model = model;
    autoBind(this);
  }

  public async getAll(): Promise<T[]> {
    const data = await this.model.getAll();
    return data;
  }

  public async create(data: object): Promise<T> {
    const item = await this.model.create(data);
    return item;
  }

  public async getById(id: string): Promise<T | null> {
    const item = await this.model.getById(id);
    return item;
  }

  public async update(id: string, data: object): Promise<T | null> {
    const item = await this.model.edit(id, data);
    return item;
  }

  public async delete(id: string): Promise<T | null> {
    const item = await this.model.delete(id);
    return item;
  }
}