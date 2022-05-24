import { Schema } from 'mongoose';
import { LensDocument } from '../interfaces/Lens';

const lensSchema = new Schema<LensDocument>({
  degree: Number,
  antiGlare: Boolean,
  blueLightFilter: Boolean,
});

export default lensSchema;