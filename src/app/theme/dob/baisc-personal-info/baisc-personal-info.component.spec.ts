import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiscPersonalInfoComponent } from './baisc-personal-info.component';

describe('BaiscPersonalInfoComponent', () => {
  let component: BaiscPersonalInfoComponent;
  let fixture: ComponentFixture<BaiscPersonalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiscPersonalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiscPersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
