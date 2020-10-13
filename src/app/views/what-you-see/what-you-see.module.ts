import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhatYouSeePageRoutingModule } from './what-you-see-routing.module';

import { WhatYouSeePage } from './what-you-see.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhatYouSeePageRoutingModule
  ],
  declarations: [WhatYouSeePage]
})
export class WhatYouSeePageModule {}
