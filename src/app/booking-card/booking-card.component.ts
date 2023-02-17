import { Component } from '@angular/core';
import { HotelsService } from './../services/hotels.service';

@Component({
  selector: 'app-booking-card',
  templateUrl: './booking-card.component.html',
  styleUrls: ['./booking-card.component.css']
})
export class BookingCardComponent {
  bookedHotel:any[] = []
  constructor(private HotelsService:HotelsService){}

  ngOnInit(): void {
 this.bookedHotel = this.HotelsService.bookedHotel
  }
  cancelBooking(hotel:any ,index:number){
    this.bookedHotel.splice(index,1)
    this.HotelsService.bookedHotel.splice(index,1)
    this.HotelsService.hotelsList.forEach(element => {
      if(element.id == hotel.id){
        element.isBook = false
      }
    });
    
  }

}
