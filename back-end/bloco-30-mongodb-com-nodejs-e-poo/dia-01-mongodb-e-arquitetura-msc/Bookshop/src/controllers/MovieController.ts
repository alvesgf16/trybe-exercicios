import IMovie from '../interfaces/IMovie';
import MovieService from '../services/MovieService';
import Controller from './Controller';

export default class MovieController extends Controller<IMovie> {
  constructor() {
    super(new MovieService());
  }

  notFound = 'Movie not found';
}