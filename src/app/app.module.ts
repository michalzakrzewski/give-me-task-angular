import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './components/user-list/user-list.component';
import {UserService} from './services/user.service';
import {AppRoutingModule} from './app-routing.module';
import { TaskListComponent } from './components/task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    TaskListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
