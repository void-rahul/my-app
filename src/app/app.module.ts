import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RahulComponent } from './rahul/rahul.component';
import { LoginComponent } from './login/login.component';
import { RegitrationComponent } from './regitration/regitration.component';

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
