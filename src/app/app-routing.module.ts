import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'gaming',
    pathMatch: 'full'

  },
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'what-i-do',
    loadChildren: () => import('./views/what-i-do/what-i-do.module').then( m => m.WhatIDoPageModule)
  },
  {
    path: 'what-you-see',
    loadChildren: () => import('./views/what-you-see/what-you-see.module').then( m => m.WhatYouSeePageModule)
  },
  {
    path: 'gaming',
    loadChildren: () => import('./views/gaming/gaming.module').then( m => m.GamingPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
