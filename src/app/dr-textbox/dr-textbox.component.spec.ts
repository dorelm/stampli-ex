import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrTextboxComponent } from './dr-textbox.component';

describe('DrTextboxComponent', () => {
  let component: DrTextboxComponent;
  let fixture: ComponentFixture<DrTextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrTextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
