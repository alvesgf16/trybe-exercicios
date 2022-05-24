import IMovie from '../../interfaces/IMovie';
import { MovieSchema } from '../schemas/MovieSchema';
import Model from './Model';

export default class MovieModel extends Model<IMovie> {
  constructor() {
    super('movies', MovieSchema);
  }
}