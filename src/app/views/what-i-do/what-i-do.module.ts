import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhatIDoPageRoutingModule } from './what-i-do-routing.module';

import { WhatIDoPage } from './what-i-do.page';
import { UiModule } from 'src/app/ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhatIDoPageRoutingModule,
    UiModule
  ],
  declarations: [WhatIDoPage]
})
export class WhatIDoPageModule {}
