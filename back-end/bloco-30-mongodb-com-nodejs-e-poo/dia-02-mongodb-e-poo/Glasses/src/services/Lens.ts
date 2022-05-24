import Service, { ServiceError } from '.';
import LensModel from '../database/models/Lens';
import Lens, { LensSchema } from '../interfaces/Lens';

class LensService extends Service<Lens> {
  constructor(model = new LensModel()) {
    super(model);
  }

  create = async (obj: Lens): Promise<Lens | null | ServiceError> => {
    const parsed = LensSchema.safeParse(obj);

    if (!parsed.success) {
      return { error: parsed.error };
    }

    return this.model.create(obj);
  };
}

export default LensService;