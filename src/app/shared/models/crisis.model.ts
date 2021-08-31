import { Hero } from './hero';
export interface Crisis {
  id: string;
  emergency: string;
  description: string;
  location: string;
  dangerLevel: number;
  hero: Hero;
}
