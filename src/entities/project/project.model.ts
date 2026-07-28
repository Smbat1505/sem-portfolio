import { z } from "zod";

export const projectCategorySchema = z.enum(["product-ui", "architecture", "testing-ci", "automation", "performance"]);
export type ProjectCategory = z.infer<typeof projectCategorySchema>;

export const projectSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  summary: z.string(),
  role: z.string(),
  stack: z.array(z.string()),
  impact: z.string(),
  category: projectCategorySchema,
  capabilities: z.array(z.string()),
});
export type Project = z.infer<typeof projectSchema>;
