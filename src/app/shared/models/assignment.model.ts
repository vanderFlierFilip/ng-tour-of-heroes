import { Hero } from './hero';
export interface Assignment {
  id: string;
  emergency: string;
  location: string;
  date: Date;
  dangerLevel: number;
  assignedHero: Hero;
}
