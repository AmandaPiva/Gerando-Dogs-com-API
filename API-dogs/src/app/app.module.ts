import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogsComponent } from './dogs/dogs.component';
import { HttpClientModule } from '@angular/common/http'; //para obtermos acesso ao servidor HTTPS

@NgModule({
  declarations: [
    AppComponent,
    DogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule //servidor HTTPS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
