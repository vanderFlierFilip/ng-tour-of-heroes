import { Crisis } from './crisis.model';
export interface Hero {
  id: number;
  name: string;
  rating: number;
  assignments: Crisis[];
}
