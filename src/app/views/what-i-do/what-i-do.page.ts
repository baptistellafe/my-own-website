import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-i-do',
  templateUrl: './what-i-do.page.html',
  styleUrls: ['./what-i-do.page.scss', './what-i-do-responsive.page.scss'],
})
export class WhatIDoPage implements OnInit {

  selectColor: any;

  constructor(private titleService: Title) { 
    this.titleService.setTitle('Felipe Baptistella Vieira')
  }

  ngOnInit() {
    this.selectColor = true;
  }

}
