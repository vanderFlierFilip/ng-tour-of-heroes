import { SearchModule } from './search/search.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CoreModule } from './core/core.module';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

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
    DashboardModule,
    SearchModule,

    CoreModule,

    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
