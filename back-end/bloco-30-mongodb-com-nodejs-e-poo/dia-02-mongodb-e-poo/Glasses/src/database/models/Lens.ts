import { model as createModel } from 'mongoose';
import Lens from '../../interfaces/Lens';
import lensSchema from '../schemas/Lens';
import MongoModel from './MongoModel';

class LensModel extends MongoModel<Lens> {
  constructor(model = createModel('Lenses', lensSchema)) {
    super(model);
  }
}

export default LensModel;