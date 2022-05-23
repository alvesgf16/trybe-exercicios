// models/BookModel.ts

import { model as createModel } from 'mongoose';
import IBook from '../../interfaces/IBook';
import { BookSchema } from '../schemas/BookSchema';

class BookModel {
  constructor(private bookModel = createModel<IBook>('books', BookSchema)) {}

  public async getBooks(): Promise<IBook[]> {
    const books = await this.bookModel.find();
    return books;
  }
}

export default BookModel;