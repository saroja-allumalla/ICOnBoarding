import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main-component',
    template: `
    <p>
      main-component works!
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      This also works
    </p>
  `,
    styles: []
})
export class MainComponentComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
