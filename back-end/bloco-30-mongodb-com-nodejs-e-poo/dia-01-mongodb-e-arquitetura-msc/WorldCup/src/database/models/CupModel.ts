import { model as createModel } from 'mongoose';
import { CupSchema } from '../schemas/CupSchema';

export default class CupModel {
  constructor(private model = createModel('tournaments', CupSchema)) {}

  public async getAll() {
    const data = await this.model.find();

    return data;
  }

  public async getByYear(year: number) {
    const item = await this.model.find({ year });

    return item;
  }
}