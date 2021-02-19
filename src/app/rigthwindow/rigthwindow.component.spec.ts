import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RigthwindowComponent } from './rigthwindow.component';

describe('RigthwindowComponent', () => {
  let component: RigthwindowComponent;
  let fixture: ComponentFixture<RigthwindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RigthwindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RigthwindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
