import { Component } from '@angular/core';

/**
 * @title Basic table
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample {
  displayedColumns = ['checked', 'position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  highlight(element: Element) {
    element.highlighted = !element.highlighted;
  }
}

export interface Element {
  checked: boolean;
  name: string;
  position: number;
  weight: number;
  symbol: string;
  highlighted?: boolean;
  hovered?: boolean;
}

const ELEMENT_DATA: Element[] = [
  { checked: false, position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { checked: false, position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { checked: false, position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { checked: false, position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { checked: false, position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { checked: false, position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { checked: false, position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { checked: false, position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { checked: false, position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { checked: false, position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { checked: false, position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { checked: false, position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { checked: false, position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { checked: false, position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { checked: false, position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { checked: false, position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { checked: false, position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { checked: false, position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { checked: false, position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { checked: false, position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */