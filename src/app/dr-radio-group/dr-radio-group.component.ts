import {Component, Input, OnInit} from '@angular/core';
import { Element} from '../models/Element';

@Component({
  selector: 'app-dr-radio-group',
  templateUrl: './dr-radio-group.component.html',
  styleUrls: ['./dr-radio-group.component.less']
})
export class DrRadioGroupComponent implements OnInit {
  @Input()
  element: Element;

  constructor() { }

  ngOnInit() {
  }

}
