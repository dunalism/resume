export interface Project {
  title: string;
  description: string;
  duration: string;
  image: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'programming';
}