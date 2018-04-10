import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AddUserFormComponent } from './components/user/add-user-form/add-user-form.component';
import { ListUserComponent } from './components/user/list-user/list-user.component';
import { ContentComponent } from './components/content/content.component';
import { FormUserComponent } from './components/form-user/form-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ContentComponent },
  { path: 'form', component: FormUserComponent },
  { path: 'list', component: ListUserComponent },
  { path: 'userform', component: AddUserFormComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
