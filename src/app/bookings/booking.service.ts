import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take, tap, delay } from 'rxjs/operators';

import { Booking } from './booking.model';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class BookingService {
  
  // private
  private _bookings = new BehaviorSubject<Booking[]>([]);

  // getter - consumers can subscribe to this
  get bookings$() {
    return this._bookings.asObservable();
  }

  constructor(private authService: AuthService) {}

  //
  addBooking(placeId: string,placeTitle: string,placeImage: string,firstName: string,lastName: string, guestNumber: number, dateFrom: Date,dateTo: Date){
    const newBooking = new Booking( Math.random().toString(),placeId,this.authService.userId,placeTitle,placeImage,firstName,lastName,guestNumber,dateFrom,dateTo);
    
    return this.bookings$.pipe(
      take(1),
      delay(1000),
      tap(bookings => {
        this._bookings.next(bookings.concat(newBooking));   
        console.log("booked", placeId);
      })
    );
  }

  cancelBooking(bookingId: string) {
    return this.bookings$.pipe(
      take(1),
      delay(1000),
      tap(bkngs => {
        bkngs.forEach((v,i,a)=>{ console.log(v.id, v.placeTitle)});

        console.log("Bookings Before Cancellation:", bkngs);
        console.log("Bookings id to cancel:", bookingId);

        bkngs.splice(bkngs.findIndex((v,i,a) => { return v.id === bookingId }), 1 );
        this._bookings.next([...bkngs]);
        
        console.log("Bookings Left:", [...bkngs]);
      })
    );
  }
}
