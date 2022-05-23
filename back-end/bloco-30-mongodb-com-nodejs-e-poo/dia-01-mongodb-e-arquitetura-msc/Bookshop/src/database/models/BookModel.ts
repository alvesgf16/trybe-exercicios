import IBook from '../../interfaces/IBook';
import { BookSchema } from '../schemas/BookSchema';
import Model from './Model';

export default class BookModel extends Model<IBook> {
  constructor() {
    super('books', BookSchema);
  }
}