import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProdutoListComponent } from './views/produto-list/produto-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent // this is the component with the <router-outlet> in the template
    // children: [
    //   {
    //     path: 'list', // child route path
    //     component: LiveListComponent // child route component that the router renders
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
