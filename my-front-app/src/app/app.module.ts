import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '@components/home/home.component';
import { LoginComponent } from '@components/login/login.component';
import { ChartModule } from './components/home/chart-tile/chart-tile.module';
import { MethodsTileModule } from '@components/home/methods-tile/methods-tile.module';

import {MaterialExampleModule} from '../app/material.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartModule,
    MethodsTileModule,
    MaterialExampleModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
