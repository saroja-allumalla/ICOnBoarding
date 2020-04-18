import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/app.state';
import * as CapActions from '../../../../store/actions/cap.actions';
import * as CapTypes from '../../../../store/types/types';
import { Router } from '@angular/router';

@Component({
    selector: 'app-aoda-test',
    templateUrl: './aoda-test.component.html',
    styleUrls: ['./aoda-test.component.scss']
})
export class AodaTestComponent implements OnInit {
    selectAllModeVlaue: string = "page";
    selectionModeValue: string = "single";
    questions: any;
    answers: any;

    constructor(private store: Store<AppState>, private router: Router) {
        this.answers = [3, 0, 1, 0, 1, 0, 2, 0, 1, 1, 0, 4, 3];
        this.questions = [
            {
                question: 1,
                questionText: 'What is the purpose of the AODA?',
                Options: ['To achieve accessibility for Ontarians with disabilities by 2025',
                    'To ensure the development of standards(ways) for accessibility',
                    'To oversee the enforcement of accessibility standards',
                    'All of the above']
            },
            {
                question: 2,
                questionText: 'Are both private sector and public sector organizations required to comply with accessibility laws under the AODA?',
                Options: ['Yes', 'No']
            },
            {
                question: 3,
                questionText: 'You can always tell when someone has a disability.',
                Options: ['True', 'False']
            },
            {
                question: 4,
                questionText: 'A positive attitude is important when meeting or helping a person with a disability.',
                Options: ['True', 'False']
            },
            {
                question: 5,
                questionText: 'Generally, people see the disability first and the person second.',
                Options: ['True', 'False']
            },
            {
                question: 6,
                questionText: 'A person can have a disability and not be handicapped.',
                Options: ['True', 'False']
            },
            {
                question: 7,
                questionText: 'What is one of the first things you should do when deciding how to provide services to persons with a disability?',
                Options: [
                    'Tell them to see another staff person for assistance',
                    'Tell them that persons with disabilities are provided service in another area of the office or clinic',
                    'Ask, \“How may I help you?\”'
                ]
            },
            {
                question: 8,
                questionText: 'Ask, “How may I help you?”',
                Options: ['Yes', 'No']
            },
            {
                question: 9,
                questionText: 'If a person with a walker is sitting in a chair, is it acceptable to move the walker without first discussing this with the person if you are concerned that it is obstructing a passageway?',
                Options: ['Yes', 'No']
            },
            {
                question: 10,
                questionText: 'If you want to welcome a customer and a service animal onto premises you may offer the service animal a treat or pet the animal.',
                Options: ['True ', 'False']
            },
            {
                question: 11,
                questionText: 'Under the Accessibility Standards for Customer Service a support person may be a friend, family member or trained professional.',
                Options: ['True', 'False']
            },
            {
                question: 12,
                questionText: 'Under the Accessibility Standards for Customer Service a person with a disability must be given the opportunity to provide feedback or complain about their ability to access services in which of the following ways?',
                Options: [
                    'In person',
                    'By telephone',
                    'Electronically',
                    'By other reasonable methods',
                    'All of the above'
                ]
            },
            {
                question: 13,
                questionText: 'If you need to communicate by telephone with a customer who is Deaf, orally deaf, deafened or hard of hearing, you can use the Relay Service. The number for the Relay Service is:',
                Options: [
                    '911',
                    '411',
                    'A number with 416 area code',
                    '1-800-855-0511'
                ]
            }
        ];

    }

    ngOnInit() {

    }

   
    submitAnswers() {
        alert("Your onboarding process is completed");
        this.store.dispatch(new CapActions.UpdateCap(CapTypes.CAP_AODATEST));
        this.router.navigateByUrl('/driver/aoda-test');
    }
    

}
