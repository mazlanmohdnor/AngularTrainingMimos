import { GetDataService } from './services/get-data.service';
import { TextstateService } from './services/textstate.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { ContentComponent } from './components/content/content.component';
import { TruncateTextPipe } from './pipes/truncate-text.pipe';
import { FormUserComponent } from './components/form-user/form-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddUserFormComponent } from './components/user/add-user-form/add-user-form.component';
import { ListUserComponent } from './components/user/list-user/list-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidemenuComponent,
    ContentComponent,
    TruncateTextPipe,
    FormUserComponent,
    AddUserFormComponent,
    ListUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [TextstateService, GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
