import { z } from "zod";
export const proofSignalSchema = z.object({ id: z.string(), title: z.string(), description: z.string() });
export type ProofSignal = z.infer<typeof proofSignalSchema>;
