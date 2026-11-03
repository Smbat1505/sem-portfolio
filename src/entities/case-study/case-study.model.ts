import { z } from "zod";

export const caseStudySectionSchema = z.object({
  title: z.string(),
  body: z.string(),
});

export const caseStudyPreviewSchema = z.object({ src: z.string(), alt: z.string() });

export const caseStudyDemoSchema = z.object({ src: z.string(), caption: z.string() });

export const caseStudyDecisionSchema = z.object({
  title: z.string(),
  description: z.string(),
});

export const caseStudySchema = z.object({
  slug: z.string(),
  title: z.string(),
  eyebrow: z.string(),
  summary: z.string(),
  role: z.string(),
  stack: z.array(z.string()),
  impact: z.string(),
  timeline: z.string(),
  capabilities: z.array(z.string()),
  sections: z.object({
    problem: caseStudySectionSchema,
    constraints: caseStudySectionSchema,
    solution: caseStudySectionSchema,
    outcome: caseStudySectionSchema,
  }),
  decisions: z.array(caseStudyDecisionSchema),
  proof: z.array(z.string()),
  repositoryUrl: z.url().optional(),
  preview: caseStudyPreviewSchema.optional(),
  demo: caseStudyDemoSchema.optional(),
});

export type CaseStudy = z.infer<typeof caseStudySchema>;
export type CaseStudySection = z.infer<typeof caseStudySectionSchema>;
export type CaseStudyDecision = z.infer<typeof caseStudyDecisionSchema>;
