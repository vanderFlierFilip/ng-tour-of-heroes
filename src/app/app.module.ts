import { heroesReducer } from './state/heroes.reducer';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { MessagesComponent } from './messages/messages.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesMenuComponent } from './heroes-menu/heroes-menu.component';
import { CreateHeroDialogComponent } from './create-hero-dialog/create-hero-dialog.component';
import { SearchHeroComponent } from './search-hero/search-hero.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { StoreModule } from '@ngrx/store';
import { SearchHeroMobileComponent } from './search-hero-mobile/search-hero-mobile.component';
import { SearchComponent } from './search/search.component';
import { MsgModalDirective } from './msg-modal.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent,
    MessagesComponent,
    NavbarComponent,
    DashboardComponent,
    HeroesMenuComponent,
    CreateHeroDialogComponent,
    SearchHeroComponent,
    SideNavComponent,
    SpinnerComponent,
    MainNavigationComponent,
    SearchHeroMobileComponent,
    SearchComponent,
    MsgModalDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CdkAccordionModule,
    MaterialModule,
    HttpClientModule,

    StoreModule.forRoot({ heroes: heroesReducer }, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
