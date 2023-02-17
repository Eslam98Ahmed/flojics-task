import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HomeComponent } from './home/home.component';
import { BookFormComponent } from './book-form/book-form.component';
import { FinalMessageComponent } from './final-message/final-message.component';
import { BookingCardComponent } from './booking-card/booking-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    HotelsComponent,
    HomeComponent,
    BookFormComponent,
    FinalMessageComponent,
    BookingCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
