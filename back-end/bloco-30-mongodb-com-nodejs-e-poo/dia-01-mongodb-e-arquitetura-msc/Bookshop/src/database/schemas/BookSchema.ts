import { Schema } from 'mongoose';
import IBook from '../../interfaces/IBook';

export const BookSchema = new Schema<IBook>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedYear: { type: Number, required: false },
  weight: { type: String, required: false }
}, {
  versionKey: false
});