import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicProfileCreatedComponent } from './basic-profile-created.component';

describe('BasicProfileCreatedComponent', () => {
  let component: BasicProfileCreatedComponent;
  let fixture: ComponentFixture<BasicProfileCreatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicProfileCreatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicProfileCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
