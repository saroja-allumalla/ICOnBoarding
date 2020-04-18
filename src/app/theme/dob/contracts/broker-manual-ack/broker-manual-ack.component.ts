import { Component, OnInit } from '@angular/core';
import { PDFDocumentProxy } from 'ng2-pdf-viewer';
import { PDFAnnotationData } from 'pdfjs-dist';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/app.state';
import * as CapActions from '../../../../store/actions/cap.actions';
import * as CapTypes from '../../../../store/types/types';
import { Router } from '@angular/router';
 
@Component({
    selector: 'app-broker-manual-ack',
    templateUrl: './broker-manual-ack.component.html',
    styleUrls: ['./broker-manual-ack.component.scss']
})
export class BrokerManualAckComponent implements OnInit {

    // screen DPI / PDF DPI
    readonly dpiRatio = 96 / 72;

    pdfSrc = '../assets/app/media/img/files/BROKER_MANUAL_ACKNOWLEDGEMENT_FORM.pdf';

    public myForm: FormGroup;

    public inputList: Input[] = [];

    public zoom = 1;

    constructor(private _fb: FormBuilder, private store: Store<AppState>, private router: Router) {
        this.myForm = this._fb.group({});
    }



    private createInput(annotation: PDFAnnotationData, rect: number[] = null) {
        let formControl = new FormControl(annotation['buttonValue'] || '');

        const input = new Input();
        input.name = annotation['fieldName'];

        if (annotation['fieldType'] === 'Tx') {
            input.type = 'text';
            input.value = annotation['buttonValue'] || '';
        }

        if (annotation['fieldType'] === 'Btn' && !annotation['checkBox']) {
            input.type = 'radio';
            input.value = annotation['buttonValue'];
        }

        if (annotation['checkBox']) {
            input.type = 'checkbox';
            input.value = true;
            formControl = new FormControl(annotation['buttonValue'] || false);
        }

        // Calculate all the positions and sizes
        if (rect) {
            input.top = rect[1] - (rect[1] - rect[3]);
            input.left = rect[0];
            input.height = (rect[1] - rect[3]) * .9;
            input.width = (rect[2] - rect[0]);
        }

        this.inputList.push(input);
        return formControl;
    }

    private addInput(annotation: PDFAnnotationData, rect: number[] = null): void {
        // add input to page
        console.log(annotation);
        if(annotation['fieldName'] === "untitled1") annotation['buttonValue'] = "Shivam Patel";

        this.myForm.addControl(annotation['fieldName'], this.createInput(annotation, rect));
    }

    public getInputPosition(input: Input): any {
        return {
            top: `${input.top}px`,
            left: `${input.left}px`,
            height: `${input.height}px`,
            width: `${input.width}px`,
        };
    }

    public zoomIn(): void {
        this.inputList = this.inputList.map(i => {
            i.left *= (.25 / this.zoom) + 1;
            i.top *= (.25 / this.zoom) + 1;
            i.width *= (.25 / this.zoom) + 1;
            i.height *= (.25 / this.zoom) + 1;
            return i;
        });
        this.zoom += .25;
    }

    public zoomOut(): void {
        this.inputList = this.inputList.map(i => {
            i.left *= 1 - (.25 / this.zoom);
            i.top *= 1 - (.25 / this.zoom);
            i.width *= 1 - (.25 / this.zoom);
            i.height *= 1 - (.25 / this.zoom);
            return i;
        });
        this.zoom -= .25;
    }

    public loadComplete(pdf: PDFDocumentProxy): void {
        for (let i = 1; i <= pdf.numPages; i++) {

            // track the current page
            let currentPage = null;
            pdf.getPage(i).then(p => {
                currentPage = p;

                // get the annotations of the current page
                return p.getAnnotations();
            }).then(ann => {

                // ugly cast due to missing typescript definitions
                // please contribute to complete @types/pdfjs-dist
                const annotations = (<any>ann) as PDFAnnotationData[];
                console.log(annotations);
                annotations
                    .filter(a => a.subtype === 'Widget') // get the form field annotation only
                    .forEach(a => {

                        // get the rectangle that represent the single field
                        // and resize it according to the current DPI
                        const fieldRect = currentPage.getViewport(this.dpiRatio)
                            .convertToViewportRectangle(a.rect);

                        // add the corresponding input
                        this.addInput(a, fieldRect);
                    });
                    console.log(this.myForm.controls["untitled1"].value);
            });
        }
    }

    onSubmit() {
        this.store.dispatch(new CapActions.UpdateCap(CapTypes.CAP_BROKERMANUALACK));
        this.router.navigateByUrl("/driver/direct-deposit");
    }

    ngOnInit() {
    }

}


export class Input {
    name: string;
    type: string;
    top: number;
    left: number;
    width: number;
    height: number;
    value; any;
}