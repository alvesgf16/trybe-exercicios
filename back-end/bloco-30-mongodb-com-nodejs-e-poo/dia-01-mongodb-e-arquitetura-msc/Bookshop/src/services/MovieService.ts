import MovieModel from '../database/models/MovieModel';
import IMovie from '../interfaces/IMovie';
import Service from './Service';

export default class MovieService extends Service<IMovie> {
  constructor() {
    super(new MovieModel());
  }
}