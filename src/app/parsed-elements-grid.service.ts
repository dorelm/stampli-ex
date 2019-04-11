import { Injectable } from '@angular/core';
import { Element} from './models/Element';

@Injectable({
  providedIn: 'root'
})
export class ParsedElementsGridService {
  grid: Element[][];

  constructor() {
  }
}
