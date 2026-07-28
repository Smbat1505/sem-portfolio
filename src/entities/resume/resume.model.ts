export type ResumeSkillGroup = {
  title: string;
  items: string[];
};

export type ResumeMetric = {
  label: string;
  value: string;
};

export type ResumeImpactItem = {
  value: string;
  label: string;
  description: string;
};

export type ResumeExperience = {
  period: string;
  role: string;
  company: string;
  summary: string;
  highlights: string[];
};

export type ResumeProjectEvidence = {
  project: string;
  focus: string;
  outcome: string;
  tags: string[];
};

export type ResumePrinciple = {
  title: string;
  description: string;
};

export type ResumeSectionItem = {
  title: string;
  description: string;
};
