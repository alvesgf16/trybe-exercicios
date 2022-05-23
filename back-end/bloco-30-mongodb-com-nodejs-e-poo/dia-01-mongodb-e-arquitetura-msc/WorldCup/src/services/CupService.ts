import CupModel from '../database/models/CupModel';

export default class CupService {
  constructor(private model = new CupModel()) {}

  public async getAll() {
    const data = await this.model.getAll();

    return data;
  }
}