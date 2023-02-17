import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookFormComponent } from './book-form/book-form.component';
import { FinalMessageComponent } from './final-message/final-message.component';
import { BookingCardComponent } from './booking-card/booking-card.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'bookForm', component: BookFormComponent },
  { path: 'finalMessage', component: FinalMessageComponent },
  { path: 'bookingCard', component: BookingCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
