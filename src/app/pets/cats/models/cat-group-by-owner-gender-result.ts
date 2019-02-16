import { CatGroup } from './cat-group';

export interface CatGroupByOwnerGenderResult {
    groups: Array<CatGroup>;
    succeeded: boolean;
}
