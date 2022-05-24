import { Model as M } from 'mongoose';
import Model from '.';

abstract class MongoModel<T> implements Model<T> {
  constructor(protected model: M<T & Document>) {}

  create = async (obj: T): Promise<T> => this.model.create({ ...obj });

  read = async (): Promise<T[]> => this.model.find();

  readOne = async (_id: string): Promise<T | null> =>
    this.model.findOne({ _id });
}

export default MongoModel;