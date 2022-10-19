import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { AppState } from '../redux/room.reducer';
import { Room } from '../room/room.model';
import * as RoomActions from '../redux/room.actions';


@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {

  constructor(private store: Store<{ rooms: AppState }>) { }

  getPrice(numberOfNights: number, room: Room) {
    if (numberOfNights > 0) {
      return room.price * numberOfNights;
    } else {
      return 0;
    }

  }

  randomize() {
    this.store.dispatch(RoomActions.randomize());
  }

  deleteRoom(room: Room): void {
    this.store.dispatch(RoomActions.deleteRoom({ room }));
  }

  addRoom(room: Room) {
    this.store.dispatch(RoomActions.addRoom({ room }));
  }

  editRoom(oldRoom: Room, newRoom: Room) {
    this.store.dispatch(RoomActions.editRoom({ oldRoom, newRoom }));
  }
}
