import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { YourLibraryComponent } from './your-library/your-library.component';

const routes: Routes = [
  {path:'', redirectTo:"/home", pathMatch: "full"},
  {path : 'home', component: HomeComponent},
  {path: 'your-library', component:YourLibraryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
