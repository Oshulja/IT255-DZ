import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Room } from '../room/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {

  private dataSource = new BehaviorSubject([new Room("Ramonda", 330, "https://casaenterijeri.rs/wp-content/uploads/2021/05/HOtel_Ramonda_02.jpg", 9.5, "Exclusive hotel right under the Rtanj mountain with beautiful view")])
  currentData = this.dataSource.asObservable();


  constructor() { }

  getPrice(numberOfNights: number, room: Room) {
    if (numberOfNights > 0) {
      return room.price * numberOfNights;
    } else {
      return 0;
    }

  }

  randomize() {
    let arr = this.dataSource.getValue();

    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  deleteRoom(room: Room): void {
    let arr = this.dataSource.getValue();
    const index = arr.indexOf(room);
    if (index > -1) {
      arr.splice(index, 1);
    }
    this.dataSource.next(arr);
  }

  addRoom(room: Room) {
    let arr = this.dataSource.getValue();
    arr.push(room);
    this.dataSource.next(arr);
  }
}
