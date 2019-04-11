import {Component, Input, OnInit} from '@angular/core';
import {Element} from '../models/Element';

@Component({
  selector: 'app-dr-list',
  templateUrl: './dr-list.component.html',
  styleUrls: ['./dr-list.component.less']
})
export class DrListComponent implements OnInit {
  @Input()
  element: Element;

  constructor() { }

  ngOnInit() {
  }

}
