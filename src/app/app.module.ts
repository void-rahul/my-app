import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RahulComponent } from './components/rahul/rahul.component';
import { LoginComponent } from './components/login/login.component';
import { RegitrationComponent } from './components/regitration/regitration.component';

@NgModule({
  declarations: [
    AppComponent,
    RahulComponent,
    LoginComponent,
    RegitrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
