import { Component, OnInit } from '@angular/core';
import {ParsedElementsGridService} from '../parsed-elements-grid.service';

@Component({
  selector: 'app-elements-grid',
  templateUrl: './elements-grid.component.html',
  styleUrls: ['./elements-grid.component.less']
})
export class ElementsGridComponent implements OnInit {

  constructor(public parsedElementsGridService: ParsedElementsGridService) { }

  ngOnInit() {
  }

}
