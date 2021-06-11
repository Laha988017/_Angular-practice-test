import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  title = "Property binding"
  textForBinding = "Text for property binding"
  isActive = true
  inputText: any;

  btnClicked(){
    this.isActive=!this.isActive;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
