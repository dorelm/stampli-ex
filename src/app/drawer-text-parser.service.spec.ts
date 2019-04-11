import { TestBed } from '@angular/core/testing';
import { DrawerTextParserService } from './drawer-text-parser.service';
import exampleTxt from './example';

describe('DrawerTextParserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrawerTextParserService = TestBed.get(DrawerTextParserService);
    expect(service).toBeTruthy();
  });

  describe('parse', () => {
    it('should parse', () => {
      const service: DrawerTextParserService = TestBed.get(DrawerTextParserService);
      console.log(exampleTxt);
      service.parse(exampleTxt);
    });
  });
});
