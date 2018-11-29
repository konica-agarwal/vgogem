import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'
import * as $ from 'jquery';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  animations: [
      trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('500ms ease-in', style({transform: 'translateX(0%)'}))
      ])
    ])
    ]
})
export class FormComponent implements OnInit {
model : any ={};


  onSubmit(form:NgForm) { 
   alert('SUCCESS !! ' );
   form.reset();
  }

 showFirst : boolean = true;
 btnName:any = 'Register';

 toggle(){
 this.showFirst =!this.showFirst;
 }

  constructor() { }

  ngOnInit() {
  }

}

