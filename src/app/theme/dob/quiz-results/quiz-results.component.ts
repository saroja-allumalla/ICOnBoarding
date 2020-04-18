import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as NavigationActions from '../../../store/actions/navigation.actions';
import * as CapActions from '../../../store/actions/cap.actions';
import * as CapTypes from '../../../store/types/types';
import { AppState } from '../../../store/app.state';
import { DxListComponent } from 'devextreme-angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Driver } from '../../../store/models/driver.model';
import DataSource from "devextreme/data/data_source";
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.css']
})
export class QuizResultsComponent implements OnInit {
  public quizFormGroup: FormGroup;
  @ViewChild("list") public list: DxListComponent;
  data: any;
  selectedItems: any;
  ans: any;
  selectAllModeVlaue: string = "page";
  selectionModeValue: string = "single";
  employee = {
      firstName: "John",
      lastName: "Heart"
  }
  actualAnswers: any[] = [ 
      0, 
      0, 
      2, 
      ["1074 Bay St", "2300 Yonge St", "39 Wynford Dr.", "1450 Don Mills Rd.", "2225 Sheppard Ave E", "Channel Nine Ct."], 
      [ "40 University Ave",   "720 King St W.",  "365 Evans Ave","600 The East Mall", "6299 Airport Road","Brampton",], 
      ["Front St.", "Adelaide St", "Richmond St.", "Dundas St.", "Wellesley St.", "Charles St.", "Bloor St.", "Davenport Rd.", "St. Clair Ave", "Highway 401",  "Sheppard Ave",  "Finch Ave", "Steeles Ave" ], 
      ["College/University", "King/Bay", "Dundas/Yonge", "Front/Peter"], 
      ["Church St.", "Danforth Ave", "Avenue Rd.", "Carlton St.", "York Mills Rd."], 
      ["404", "401", "427", "DVP", "400"], 
      ["North", "North & South", "East", "West"]
    ];
  public givenAnswers: any[] = [];
  stylesList: any[] = ['white', 'white', 'white', 'green', 'white', 'white', 'yellow', 'white', 'white', 'white'];
  stylesDisplay: any[] = ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'];
  cap: Observable<any>;
  errors: boolean = false;
  hasPassed: boolean = false;
  driverTempId: any;
  questions: any;
  quizMarks: number;
  viewAnswers: boolean = false;

  constructor(
    private quizService: QuizService, 
    private store: Store<AppState>,
    private router: Router, 
    private _formBuilder: FormBuilder,
    private http: HttpClient
    ) {
        this.http.get(`${environment.apiUrl}getquizquestions`).subscribe((comp) => {
            this.questions = comp;
            for(var i=0; i<this.questions.length; i++) {
                if(this.questions[i]['SubQuestions']) {
                    this.givenAnswers[i] = [];
                    var source = [];
                    for(var j=0; j<this.questions[i]['SubQuestions'].length; j++) {
                        source[j] = j+1;
                    }
                    this.questions[i].dropDownSource = new DataSource({
                        store: source
                    });    
                }
            }
        }); 


        this.http.get(`${environment.apiUrl}getquizquestions`).subscribe((comp) => {
            this.questions = comp;
        }); 

        this.store.select('driver').subscribe(comp => {
            this.driverTempId = comp['TempID'];
        })

        this.http.post(`${environment.apiUrl}api/quiz/quizAnswers`, {driverTempId: this.driverTempId}).subscribe(comp => {
            this.givenAnswers[0] = comp['Answer1'];
            this.givenAnswers[1] = comp['Answer2'];
            this.givenAnswers[2] = comp['Answer3'];
            this.givenAnswers[3] = comp['Answer4'].split(",");
            this.givenAnswers[4] = comp['Answer5'].split(",");
            this.givenAnswers[5] = comp['Answer6'].split(",");
            this.givenAnswers[6] = comp['Answer7'].split(",");
            this.givenAnswers[7] = comp['Answer8'].split(",");
            this.givenAnswers[8] = comp['Answer9'].split(",");
            this.givenAnswers[9] = comp['Answer10'].split(",");
            this.evaluateAnswers();
        })
    }
      

    ngOnInit() {
        this.quizFormGroup = this._formBuilder.group({
        answerBox: ['']
        });
        this.cap = this.store.select(state => state.cap.Quiz);
    }

    continue = () => {
        this.router.navigateByUrl("/driver/personal-interview");
    }

    ngAfterViewInit(): void {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        //console.log(this.list);
    }

    evaluateAnswers = () => {
        var marks = 0;
        for(var i=0; i<10; i++) {
            if(this.questions[i].Type === 'MCQ') {
                if(this.givenAnswers[i] == this.actualAnswers[i]) marks++;
            }
            if(this.questions[i].Type === 'SORT') {
                var count = 0;
                for(var j=0; j<this.givenAnswers[i].length; j++) {
                    console.log(this.questions[i]['SubQuestions'][this.givenAnswers[i][j]-1]);
                    console.log(this.actualAnswers[i][j]);
                    console.log(this.questions[i]['SubQuestions'][this.givenAnswers[i][j]-1] === this.actualAnswers[i][j])
                    if(this.questions[i]['SubQuestions'][this.givenAnswers[i][j]-1] === this.actualAnswers[i][j]) {
                       count++;
                    }    
                }   
                if(count === this.givenAnswers[i].length) marks++;
                else if(count >= this.givenAnswers[i].length/2) marks += 0.5;
            }
            if(this.questions[i].Type === 'FB' || this.questions[i].Type === 'MATCH' || this.questions[i].Type === 'MMCQ') {
                var count = 0;
                for(var j=0; j<this.givenAnswers[i].length; j++) {
                    if(this.givenAnswers[i][j] === this.actualAnswers[i][j]) {
                       count++; 
                    }    

                    /////CUSTOM FOR MULTIPLE ANSWERS
                    if(j === 0) {
                        if(this.givenAnswers[i][j] === 'DVP') { count++; }
                    }

                }   
                if(count === this.givenAnswers[i].length) marks++;
                else if(count >= this.givenAnswers[i].length/2) marks += 0.5;
            }
        }
        this.quizMarks = marks;
    } 

    onItemClick(e, i) {
        this.givenAnswers[i] = e.itemIndex;
    }

    onProceed() {
        this.router.navigateByUrl("/driver/interview");
    }

}
