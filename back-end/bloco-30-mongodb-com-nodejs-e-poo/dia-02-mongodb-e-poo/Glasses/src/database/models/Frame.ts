import { model as createModel } from 'mongoose';
import Frame from '../../interfaces/Frame';
import frameSchema from '../schemas/Frame';
import MongoModel from './MongoModel';

class FrameModel extends MongoModel<Frame> {
  constructor(model = createModel('Armacoes', frameSchema)) {
    super(model);
  }
}

export default FrameModel;