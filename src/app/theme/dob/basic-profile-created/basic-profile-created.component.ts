import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'basic-profile-created',
  templateUrl: './basic-profile-created.component.html',
  styleUrls: ['./basic-profile-created.component.css']
})
export class BasicProfileCreatedComponent implements OnInit {

  constructor(private router: Router) {     
    this.onOk = this.onOk.bind(this);
  }


  onOk(event){
    this.router.navigateByUrl("/index");
  }

  ngOnInit() {
  }

}
