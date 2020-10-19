import { TestePageModule } from './teste/teste.module';
import { WhatIDoPageModule } from './what-i-do/what-i-do.module';

import { GamingPageModule } from './gaming/gaming.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GamingPageModule,
    WhatIDoPageModule,
    TestePageModule
  ]
})
export class ViewsModule { }
