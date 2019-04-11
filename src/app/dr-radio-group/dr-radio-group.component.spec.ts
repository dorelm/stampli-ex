import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrRadioGroupComponent } from './dr-radio-group.component';

describe('DrRadioGroupComponent', () => {
  let component: DrRadioGroupComponent;
  let fixture: ComponentFixture<DrRadioGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrRadioGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrRadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
