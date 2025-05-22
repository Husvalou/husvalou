export interface Project {
  title: string;
  description: string;
  image: string;
  category: 'web' | 'mobile' | 'design';
  technologies: string[];
  demoUrl: string | null;
  githubUrl: string | null;
}