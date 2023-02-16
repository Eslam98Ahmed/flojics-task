import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
 public hotelsList:any[] =[
    {id:1 , img:"assets/1.jpg" ,adress:"Poland, Kiszkowo" , name:'Ranczo w Dolinie'  , rate:7.2 },
    {id:2 , img:"assets/2.jpg" ,adress:"Germany, Trier" , name:"Tiny House Hotel"  , rate:8.0 },
    {id:3 , img:"assets/3.jpg" ,adress:"Italy, Santorso" , name:"Agriturismo Cabrele"  , rate:8.5 },
    {id:4 , img:"assets/4.jpg" ,adress:"Australia, Gembrook" , name:"Carinya Park"  , rate:8.7 },
    {id:5 , img:"assets/5.jpg" ,adress:"France, Gérardmer" , name:"Au oeur des Lacs - Chambres"  , rate:7.2 },
    {id:6 , img:"assets/6.jpg" ,adress:"Canada, Val-David" , name:"La Sapinette"  , rate:9.8 },
   ]
  constructor() { }
}
