import { CodeComponent } from './../../ui/code/code.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-i-do',
  templateUrl: './what-i-do.page.html',
  styleUrls: ['./what-i-do.page.scss', './what-i-do-responsive.page.scss'],
})
export class WhatIDoPage implements OnInit {

  selectColor: boolean;

  constructor() { 
    
  }

  ngOnInit() {
    this.selectColor = true;
  }

}
