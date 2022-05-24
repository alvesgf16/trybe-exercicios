import BookModel from '../database/models/BookModel';
import IBook from '../interfaces/IBook';
import Service from './Service';

export default class BookService extends Service<IBook> {
  constructor() {
    super(new BookModel());
  }
}