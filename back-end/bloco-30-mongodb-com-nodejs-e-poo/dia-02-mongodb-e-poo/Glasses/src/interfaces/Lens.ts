import { z } from 'zod';

const LensSchema = z.object({
  degree: z.number(),
  antiGlare: z.boolean(),
  blueLightFilter: z.boolean(),
});

type Lens = z.infer<typeof LensSchema>;

interface LensDocument extends Lens, Document {}

export default Lens;
export { LensSchema, LensDocument };