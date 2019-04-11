import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrComboboxComponent } from './dr-combobox.component';

describe('DrComboboxComponent', () => {
  let component: DrComboboxComponent;
  let fixture: ComponentFixture<DrComboboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrComboboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrComboboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
