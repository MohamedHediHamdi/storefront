import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import 'hammerjs';
import { HomeComponent } from './component/home/home.component';
import { routing } from './app.routing';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyAccountComponent } from './component/my-account/my-account.component';
import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';
import {MatTabsModule, MatTableModule, MatTab} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    MyAccountComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    MatTabsModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  providers: [
    LoginService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
