import { Pet } from './Pet';

export interface PetOwner {
    age: number;
    gender: string;
    name: string;
    pets: Array<Pet>;
}
