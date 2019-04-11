import {Component, Input, OnInit} from '@angular/core';
import { Element} from '../models/Element';

@Component({
  selector: 'app-dr-combobox',
  templateUrl: './dr-combobox.component.html',
  styleUrls: []
})
export class DrComboboxComponent implements OnInit {
  @Input()
  element: Element;

  constructor() { }

  ngOnInit() {
  }

}
