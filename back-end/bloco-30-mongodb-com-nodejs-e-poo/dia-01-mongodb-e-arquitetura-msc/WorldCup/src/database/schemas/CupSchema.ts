import { Schema } from 'mongoose';
import ICup from '../../interfaces/ICup';

export const CupSchema = new Schema<ICup>({
  year: { type: Number, required: true },
  hostCountry: { type: String, required: true },
  champions: { type: String, required: true },
  runnerUp: { type: String, required: true },
  editionGoals: { type: Number, required: true },
  editionStrikers: { type: Array(String), required: true },
  bestPlayer: { type: String, required: true },
  bestGoalkeeper: { type: String, required: false },
  bestYoungPlayer: { type: String, required: true },
}, {
  versionKey: false
});