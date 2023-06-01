import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AllUserComponent } from './all-user/all-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { CardComponent } from './card/card.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ErrorComponent } from './error/error.component';
import { routerConfig } from './app.routes';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AllUserComponent,
    AddUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    CardComponent,
    NavigationComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    routerConfig,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
