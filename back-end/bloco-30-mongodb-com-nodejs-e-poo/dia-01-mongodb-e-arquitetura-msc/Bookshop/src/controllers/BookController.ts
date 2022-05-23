import IBook from '../interfaces/IBook';
import BookService from '../services/BookService';
import Controller from './Controller';

export default class BookController extends Controller<IBook> {
  constructor() {
    super(new BookService());
  }

  notFound = 'Book not found';
}