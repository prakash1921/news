import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExploreComponent } from '../explore/explore.component';
import { FollowComponent } from '../follow/follow.component';
import { HeadlinesComponent } from '../headlines/headlines.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { HomeComponent } from './home.component';


const routes: Routes = [

  {
    path:'',
    component:HomeComponent,
    data:{
      title:'Home'
    }
  },
  {
    path:'headline',
    component:HeadlinesComponent
    //  loadChildren:'./headlines/headlines.module#HeadlinesModule'
    //  loadChildren: () => import('src/app/headlines/headlines.module').then(m => m.HeadlinesModule) 

  },
  {
    path:'explore',
    component:ExploreComponent
    // loadChildren:'./explore/explore.module#ExploreModule'
    // loadChildren: () => import('src/app/explore/explore.module').then(m => m.ExploreModule) 

  },
  {
    path:'follow',
    component:FollowComponent
  },
  {
    path:'**',
    component:PagenotfoundComponent,
    data:{
      title:'Page not found '
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
