import { Component, OnInit } from '@angular/core';
import {DrawerTextParserService} from '../drawer-text-parser.service';
import {ParsedElementsGridService} from '../parsed-elements-grid.service';

@Component({
  selector: 'app-drawer-input',
  templateUrl: './drawer-input.component.html',
  styleUrls: ['./drawer-input.component.less']
})
export class DrawerInputComponent implements OnInit {
  txtInput: string;

  constructor(private drawerTextParserService: DrawerTextParserService,
              private parsedElementsGridService: ParsedElementsGridService) { }

  ngOnInit() {
  }

  draw() {
    this.parsedElementsGridService.grid = this.drawerTextParserService.parse(this.txtInput);
  }
}
