import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpalshesComponent } from './spalshes.component';

describe('SpalshesComponent', () => {
  let component: SpalshesComponent;
  let fixture: ComponentFixture<SpalshesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpalshesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpalshesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
