import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-form-pipes',
  templateUrl: './date-form-pipes.component.html',
  styleUrls: ['./date-form-pipes.component.css']
})
export class DateFormPipesComponent implements OnInit {

  name!:String;
  userName!:String;
  dob!: Date;
  rememberMe!:boolean;

  submit(f:any){
    this.name=f.value.name;
    this.userName=f.value.userName;
    this.dob=f.value.dob;
    this.rememberMe=f.value.rememberMe;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
