
export type ServiceCategory = 'fotografia' | 'streaming-podcast' | 'aftermovie-festival' | 'bodas' | 'brand-identity';

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: ServiceCategory | string;
  image: string;
  year: string;
}

export interface Service {
  id: number;
  name: string;
  slug: ServiceCategory;
  description: string;
  image: string;
}
