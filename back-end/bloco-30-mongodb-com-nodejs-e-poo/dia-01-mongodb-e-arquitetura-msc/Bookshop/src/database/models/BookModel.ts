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

  public async createBook(bookData: object): Promise<IBook> {
    const book = await this.bookModel.create(bookData);
    return book;
  }
}

export default BookModel;