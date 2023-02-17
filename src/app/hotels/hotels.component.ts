import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HotelsService } from './../services/hotels.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent {
  public hotels: any[] = []

  constructor(
    private HotelsService: HotelsService , 
    public Router :Router
    ) { }

  ngOnInit(): void {
    this.hotels = this.HotelsService.hotelsList;
    console.log(this.hotels);
  }
 

  bookingHotel(hotel:any , index:number){
    if(this.HotelsService.bookedHotel.length!=0){
      this.HotelsService.bookedHotel.forEach(element => {
        if(element.id == hotel.id){
          window.alert("you already Make Reservation")
        }else{
        this.HotelsService.bookedHotel.push(hotel)
        this.HotelsService.hotelsList[index].isBook = true
        this.Router.navigate(['/bookForm'])
        console.log(this.HotelsService.bookedHotel);
        }
        });
    }else{
      this.HotelsService.bookedHotel.push(hotel)
        this.HotelsService.hotelsList[index].isBook = true
        this.Router.navigate(['/bookForm'])
        console.log(this.HotelsService.bookedHotel);
    }
  
  }
}
