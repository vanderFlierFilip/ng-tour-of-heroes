import { SearchModule } from './../search/search.module';
import { HeroesModule } from './../heroes/heroes.module';
import { MsgModalDirective } from './directives/msg-modal.directive';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../material/material.module';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MsgNumHelperPipe } from './msg-num-helper.pipe';

@NgModule({
  declarations: [
    MainNavigationComponent,
    NavbarComponent,
    SideNavComponent,
    MsgModalDirective,
    MsgNumHelperPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule,
    HeroesModule,
    SearchModule,
  ],
  exports: [MainNavigationComponent],
})
export class CoreModule {}
