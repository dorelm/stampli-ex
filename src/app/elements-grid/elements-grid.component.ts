import { Component, OnInit } from '@angular/core';
import {ParsedElementsGridService} from '../parsed-elements-grid.service';
import {Element} from '../models/Element';

@Component({
  selector: 'app-elements-grid',
  templateUrl: './elements-grid.component.html',
  styleUrls: ['./elements-grid.component.less']
})
export class ElementsGridComponent implements OnInit {

  constructor(public parsedElementsGridService: ParsedElementsGridService) { }

  ngOnInit() {
  }

  getNumberOfColumns() {
    if (this.parsedElementsGridService.grid) {
      // get the length of the first row
      return this.parsedElementsGridService.grid[0].length;
    } else {
      return 0;
    }
  }
}
