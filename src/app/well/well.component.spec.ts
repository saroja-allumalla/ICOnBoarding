import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellComponent } from './well.component';
import { Store, StoreModule } from '@ngrx/store';

describe('WellComponent', () => {
  let component: WellComponent;
  let fixture: ComponentFixture<WellComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ WellComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WellComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
