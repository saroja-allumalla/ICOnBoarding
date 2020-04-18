import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../store/app.state';
import { Tutorial } from '../store/models/tutorial.model';
import * as TutorialActions from '../store/actions/tutorial.actions';
import { Navigation } from '../store/models/navigation.model';

@Component({
  selector: 'well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.css']
})
export class WellComponent implements OnInit {
  tutorials: Observable<Tutorial[]>;
  navigations: Observable<Navigation[]>;
  basicNavigations: Observable<Navigation[]>;
  contractsNavigations: Observable<Navigation[]>;

  constructor(private store: Store<AppState>) { 
    this.tutorials = this.store.select('tutorial');
    this.store.select('navigation').subscribe((objects) => {
      console.log(objects);
    });
  }

  ngOnInit() {}

  addTutorial(name, url) {
    alert(name+ " " + url);
    this.store.dispatch(new TutorialActions.AddTutorial({name: name, url: url}) )
  }

  delTutorial(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index) )
  }

}
