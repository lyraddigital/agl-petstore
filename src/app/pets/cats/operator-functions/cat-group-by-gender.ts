import { PetOwner } from '../../../core/api/models/PetOwner';
import { combineLatest, OperatorFunction, Observable, ConnectableObservable } from 'rxjs';
import { map, mergeMap, filter, toArray, publish } from 'rxjs/operators';

import { Pet } from 'src/app/core/api/models/Pet';
import { CatGroup } from '../models/cat-group';
import { Cat } from '../models/cat';
import { CatGroupByOwnerGenderResult } from '../models/cat-group-by-owner-gender-result';

export const groupCatsByOwnerGender = (): OperatorFunction<Array<PetOwner>, CatGroupByOwnerGenderResult> => {
  return (source: Observable<Array<PetOwner>>) => {
    const owners$ = source.pipe(publish()) as ConnectableObservable<Array<PetOwner>>;
    const maleGroupCats$ = createCatGroupByGender(owners$, 'Male', 'Cats for Male Owners', 'blue-heading');
    const femaleGroupCats$ = createCatGroupByGender(owners$, 'Female', 'Cats for Female Owners', 'pink-heading');

    owners$.connect();

    return combineLatest([maleGroupCats$, femaleGroupCats$]).pipe(
      map<Array<CatGroup>, CatGroupByOwnerGenderResult>(([maleGroup, femaleGroup]) => {
        return {
          groups: [maleGroup, femaleGroup],
          succeeded: true
        };
      })
    );
  };
};

const createCatGroupByGender = (
  source: Observable<Array<PetOwner>>,
  genderType: string,
  groupName: string,
  headerClass: string
): Observable<CatGroup> => {
  return source.pipe(
    mergeMap(owners => owners),
    filter(o => o && o.gender === genderType),
    getCats(),
    map<Array<Cat>, CatGroup>(cats => ({
      title: groupName,
      headerClass,
      cats
    }))
  );
};

export const getCats = (): OperatorFunction<PetOwner, Array<Cat>> => {
  return (source: Observable<PetOwner>) => {
    return source.pipe(
      mergeMap((owner) => owner.pets ? owner.pets : []),
      filter(pet => pet && pet.type === 'Cat'),
      map<Pet, Cat>(pet => ({ name: pet.name })),
      toArray(),
      map(unsortedCats => unsortedCats.sort(byNameComparer))
    );
  };
};

export const byNameComparer = (firstCat: Cat, secondCat: Cat) => {
  const firstCatName = firstCat.name.toLowerCase();
  const secondCatName = secondCat.name.toLowerCase();

  if (firstCatName === secondCatName) {
    return 0;
  } else {
    return firstCatName > secondCatName ? 1 : -1;
  }
};
