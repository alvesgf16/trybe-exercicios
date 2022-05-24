import { Schema } from 'mongoose';
import IMovie from '../../interfaces/IMovie';

export const MovieSchema = new Schema<IMovie>({
  title: { type: String, required: true },
  releaseYear: { type: Number, required: true },
}, {
    versionKey: false,
});