import { DashboardModule } from './dashboard/dashboard.module';
import { CoreModule } from './core/core.module';
import { heroesReducer } from './state/heroes.reducer';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, MessagesComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    CoreModule,
    DashboardModule,

    StoreModule.forRoot({ heroes: heroesReducer }, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
