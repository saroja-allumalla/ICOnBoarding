import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitorComponent } from './recruitor.component';

describe('RecruitorComponent', () => {
  let component: RecruitorComponent;
  let fixture: ComponentFixture<RecruitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
