import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhatYouSeePage } from './what-you-see.page';

const routes: Routes = [
  {
    path: '',
    component: WhatYouSeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhatYouSeePageRoutingModule {}
