import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerInputComponent } from './drawer-input.component';

describe('DrawerInputComponent', () => {
  let component: DrawerInputComponent;
  let fixture: ComponentFixture<DrawerInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawerInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
