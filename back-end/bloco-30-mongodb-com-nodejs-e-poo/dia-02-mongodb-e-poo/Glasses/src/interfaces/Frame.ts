import { z } from 'zod';

const FrameSchema = z.object({
  material: z.string(),
  color: z.string({
    required_error: 'Color is required',
    invalid_type_error: 'Color must be a string',
  }).min(3, { message: 'Color must be 3 or more characters long' }),
});

type Frame = z.infer<typeof FrameSchema>;

interface FrameDocument extends Frame, Document {}

export default Frame;
export { FrameSchema, FrameDocument };