import {Injectable} from '@angular/core';
import {Element} from './models/Element';
import ElementType from './models/ElementType';
import KeyValueParser from './parsers/KeyValueParser';
import keyValueParser from './parsers/KeyValueParser';
import listParser from './parsers/ListParser';
import IdentityParser from './parsers/IdentityParser';

@Injectable({
  providedIn: 'root'
})
export class DrawerTextParserService {
  typeToParser = {};
  constructor() {
    this.typeToParser[ElementType.COMBOBOX] = KeyValueParser;
    this.typeToParser[ElementType.LIST] = listParser;
    this.typeToParser[ElementType.RADIO_BUTTON] = keyValueParser;
    this.typeToParser[ElementType.TEXT_BOX] = IdentityParser;
  }
  parse(txt: string): Element[][] {
    const parsedElements: Element[][] = [];
    if (!this.validate(txt)) {
      throw new Error('InvalidArgument');
    }
    const lines = txt.split('\n');
    const elements = lines.map(line => this.parseRow(line));
    elements.forEach(e => {
      parsedElements[e.row - 1] = parsedElements[e.row - 1] || [];
      parsedElements[e.row - 1][e.column - 1] = e;
    });
    console.log(parsedElements);
    return parsedElements;
  }

  private parseRow(elementTxt): Element {
    const [type, name, txtValue, column, row] = elementTxt.split(';');
    const valueParser = this.typeToParser[type] || IdentityParser;
    const value = valueParser(txtValue);
    return {
      type, name, value, row, column
    };
  }
  validate(txt: string): boolean {
    return true;
  }
}
