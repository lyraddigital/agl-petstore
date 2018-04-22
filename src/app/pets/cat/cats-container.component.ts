import { Component, OnInit } from '@angular/core';

import { PetsService } from '../pets.service';
import { Cat } from '../cat/cat';
import { transitionAnimation } from './cat-container.animations';

@Component({
  selector: 'app-cats-container',
  templateUrl: './cats-container.component.html',
  styleUrls: ['./cats-container.component.css'],
  animations: [transitionAnimation()]
})
export class CatsContainerComponent implements OnInit {
    maleTransitionStatus = 'off-screen';
    femaleTransitionStatus = 'off-screen';
    errorMessage = '';
    maleCats: Array<Cat>;
    femaleCats: Array<Cat>;

    constructor(private _petsService: PetsService) { }

    ngOnInit() {
        this._petsService.getCatsGroupedByGender()
            .subscribe(
                petDict => {
                    if (petDict) {
                        this.maleCats = petDict['Male'] || new Array<Cat>();
                        this.femaleCats = petDict['Female'] || new Array<Cat>();
                    } else {
                        this.maleCats = new Array<Cat>();
                        this.femaleCats = new Array<Cat>();
                    }

                    this.animateMaleGroup();

                    if (this.maleTransitionStatus !== 'on-screen') {
                        this.animateFemaleGroup();
                    }
                },
                error => {
                    this.errorMessage = error;
                }
            );
    }

    private animateMaleGroup() {
        if (this.maleCats && this.maleCats.length > 0) {
            this.maleTransitionStatus = 'on-screen';
        }
    }

    private animateFemaleGroup() {
        if (this.femaleCats && this.femaleCats.length > 0) {
            this.femaleTransitionStatus = 'on-screen';
        }
    }
}
