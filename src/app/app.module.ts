import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CounterService } from './counter.service';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { RigthwindowComponent } from './rigthwindow/rigthwindow.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, LeftmenuComponent, RigthwindowComponent],
  imports: [BrowserModule],
  providers: [CounterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
