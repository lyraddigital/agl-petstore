import { Cat } from './cat';

export interface CatGroup {
    title: string;
    headerClass: string;
    cats: Array<Cat>;
}
