import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RahulComponent } from './components/rahul/rahul.component';
import { ExpenseComponent } from './components/expense/expense.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule }from '@angular/common/http';
import { FinelComponent } from './components/finel/finel.component';
import { Expense2Component } from './components/expense2/expense2.component';
import { LastComponent } from './components/last/last.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    RahulComponent,
    ExpenseComponent,
    FinelComponent,
    Expense2Component,
    LastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
