import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/gaming/gaming.module').then(m => m.GamingPageModule),
    pathMatch: 'full'
  }
  // {
  //   path: 'coding',
  //   loadChildren: () => import('./views/what-i-do/what-i-do.module').then( m => m.WhatIDoPageModule)
  // },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./views/home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: '',
  //   loadChildren: () => import('./views/what-i-do/what-i-do.module').then( m => m.WhatIDoPageModule)
  // },
  // {
  //   path: 'what-you-see',
  //   loadChildren: () => import('./views/what-you-see/what-you-see.module').then( m => m.WhatYouSeePageModule)
  // },
  // {
  //   path: 'gaming',
  //   loadChildren: () => import('./views/gaming/gaming.module').then( m => m.GamingPageModule)
  // },
  // {
  //   path: 'teste',
  //   loadChildren: () => import('./views/teste/teste.module').then( m => m.TestePageModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
