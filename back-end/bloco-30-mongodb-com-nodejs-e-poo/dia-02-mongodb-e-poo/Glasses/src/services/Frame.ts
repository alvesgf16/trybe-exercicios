import Service, { ServiceError } from '.';
import FrameModel from '../database/models/Frame';
import Frame, { FrameSchema } from '../interfaces/Frame';

class FrameService extends Service<Frame> {
  constructor(model = new FrameModel()) {
    super(model);
  }

  create = async (obj: Frame): Promise<Frame | null | ServiceError> => {
    const parsed = FrameSchema.safeParse(obj);

    if (!parsed.success) {
      return { error: parsed.error };
    }

    return this.model.create(obj);
  };
}

export default FrameService;