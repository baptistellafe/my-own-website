import { BrowserModule, Title } from '@angular/platform-browser';
import { IonicRouteStrategy } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-what-you-see',
  templateUrl: './what-you-see.page.html',
  styleUrls: ['./what-you-see.page.scss', './what-you-see-responsive.page.scss'],
})
export class WhatYouSeePage implements OnInit {

  @ViewChild('slider') slider: IonSlides;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Felipe Baptistella Vieira');
  }

  ngOnInit() {
  }

  slidePhelps = {
    initialSlide: 0,
    speed: 400
  };

  nextSlide(){
    this.slider.slideNext();
  }

}
