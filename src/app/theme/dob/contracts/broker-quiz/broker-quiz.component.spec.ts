import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerQuizComponent } from './broker-quiz.component';

describe('BrokerQuizComponent', () => {
  let component: BrokerQuizComponent;
  let fixture: ComponentFixture<BrokerQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrokerQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
