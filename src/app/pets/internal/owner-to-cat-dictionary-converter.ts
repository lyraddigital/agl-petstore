import { Injectable } from '@angular/core';

import { Cat } from '../cat/cat';
import { PetOwner } from './pet-owner';

@Injectable()
export class OwnerToCatDictionaryConverter {
    convert(owners: Array<PetOwner>): {[gender: string]: Array<Cat> } {
        const maleOwners = owners.filter(o => o !== null && o.gender === 'Male');
        const femaleOwners = owners.filter(o => o !== null && o.gender === 'Female');
        const catDictionary = {};

        catDictionary['Male'] = this.getCatsFromAllOwners(maleOwners);
        catDictionary['Female'] = this.getCatsFromAllOwners(femaleOwners);

        return catDictionary;
    }

    private getCatsFromAllOwners(owners: Array<PetOwner>): Array<Cat> {
        const convertedCats = new Array<Cat>();

        owners.forEach(o => {
            if (o.pets) {
                const cats = o.pets
                    .filter(p => p.type === 'Cat')
                    .map(p => {
                        const cat = new Cat();
                        cat.Name = p.name;

                        return cat;
                    });

                convertedCats.push(...cats);
            }
        });

        return convertedCats;
    }
}
