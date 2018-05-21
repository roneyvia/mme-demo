import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// My Modules
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
// import { ListComponent } from './components/list/list.component';

import { HttpService } from './services/http/http.service';

@NgModule({
  declarations: [
    AppComponent,
    // BsNavbarComponent,
    // ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
