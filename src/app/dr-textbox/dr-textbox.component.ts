import {Component, Input, OnInit} from '@angular/core';
import {Element} from '../models/Element';

@Component({
  selector: 'app-dr-textbox',
  templateUrl: './dr-textbox.component.html',
  styleUrls: []
})
export class DrTextboxComponent implements OnInit {
  @Input()
  element: Element;

  constructor() { }

  ngOnInit() {
  }

}
