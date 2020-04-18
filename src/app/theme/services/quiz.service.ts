import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class QuizService {
    readonly rootUrl = `${environment.apiUrl}`;
    qns: any[];
    qnProgress: number;
    correctAnswerCount: number = 0;

    constructor(private http: HttpClient) {

    }

   
    getQuestions() {
        return this.http.get(this.rootUrl + 'getquestions');
    }

    getAnswer() {
        var body = this.qns.map(x => x.QnId);
        const data = this.http.post(this.rootUrl + 'getAnswer', body);
        console.log(data);
        return data;
    }

}
