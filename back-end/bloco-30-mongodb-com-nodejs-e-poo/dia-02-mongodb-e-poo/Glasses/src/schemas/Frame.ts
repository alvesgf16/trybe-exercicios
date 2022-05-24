import { Schema } from 'mongoose';
import { FrameDocument } from '../interfaces/Frame';

const frameSchema = new Schema<FrameDocument>({
  material: String,
  color: String,
});

export default frameSchema;