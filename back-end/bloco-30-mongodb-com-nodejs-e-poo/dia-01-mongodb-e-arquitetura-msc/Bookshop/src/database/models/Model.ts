import autoBind from 'auto-bind';
import { model as createModel, Schema } from 'mongoose';


export default abstract class Model<T> {
  private model;

  constructor(collectionName: string, schema: Schema) {
    this.model = createModel<T>(collectionName, schema);
    autoBind(this);
  }

  public async getAll(): Promise<T[]> {
    const data = await this.model.find();
    return data;
  }

  public async create(data: object): Promise<T> {
    const item = await this.model.create(data);
    return item;
  }

  public async getById(id: string): Promise<T | null> {
    const item = await this.model.findOne({ _id: id });
    return item;
  }

  public async edit(id: string, data: object): Promise<T | null> {
    const item = await this.model.findOneAndUpdate(
      { _id: id },
      { ...data },
      { new: true },
    );
    return item;
  }

  public async delete(id: string): Promise<T | null> {
    const item = await this.model.findOneAndDelete({ _id: id });
    return item;
  }
}