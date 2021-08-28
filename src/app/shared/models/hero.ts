import { Assignment } from './assignment.model';
export interface Hero {
  id: number;
  name: string;
  rating: number;
  assignments: Assignment[];
}
