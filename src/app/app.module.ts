import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RahulComponent } from './components/rahul/rahul.component';
import { LoginComponent } from './components/login/login.component';
import { RegitrationComponent } from './components/regitration/regitration.component';
import { ExpenseComponent } from './components/expense/expense.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Test1Component } from './components/test1/test1.component';

@NgModule({
  declarations: [
    AppComponent,
    RahulComponent,
    LoginComponent,
    RegitrationComponent,
    ExpenseComponent,
    Test1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
