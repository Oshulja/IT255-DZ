import { state } from '@angular/animations';
import { createReducer, on, Action } from '@ngrx/store';
import { Room } from '../room/room.model';
import { RoomServiceService } from '../services/room-service.service';
import * as RoomActions from './room.actions';

const initialState: AppState = {
    rooms: [new Room("Ramonda", 330, "https://casaenterijeri.rs/wp-content/uploads/2021/05/HOtel_Ramonda_02.jpg",
        9.5, "Exclusive hotel right under the Rtanj mountain with beautiful view")]
}

export interface AppState {
    readonly rooms: Room[];
}

const roomReducer = createReducer(
    initialState,
    on(RoomActions.addRoom, (state, { room }) => ({
        ...state,
        rooms: state.rooms.concat(room)
    })),
    on(RoomActions.deleteRoom, (state, { room }) => ({
        ...state,
        rooms: state.rooms.filter(item => item !== room)
    })),
    on(RoomActions.editRoom, (state, { oldRoom, newRoom }) => ({
        ...state,
        rooms: state.rooms.map(item => item !== oldRoom ? item : newRoom)
    })),
    on(RoomActions.randomize, (state) => ({
        ...state,
        rooms: shuffle(state.rooms)
    }))

)

function shuffle(input: Array<any>): Array<any> {
    let arr = [...input];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

export function reducer(state: AppState | undefined, action: Action) {
    return roomReducer(state, action)
} 