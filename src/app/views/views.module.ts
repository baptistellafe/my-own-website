
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// VIEWS
import { HomePageModule } from './home/home.module';
import { WhatIDoPageModule } from './what-i-do/what-i-do.module';
import { WhatYouSeePageModule } from './what-you-see/what-you-see.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomePageModule,
    WhatIDoPageModule,
    WhatYouSeePageModule
  ]
})
export class ViewsModule { }
