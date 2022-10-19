import { Component } from '@angular/core';
import { Room } from './room/room.model';
import { MatDialog } from '@angular/material/dialog';
import { EditRoomDialogComponent } from './edit-room-dialog/edit-room-dialog.component';
import { FormReservationComponent } from './form-reservation/form-reservation.component';
import { RoomServiceService } from './services/room-service.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rooms: Observable<any>;
  searchText: string;

  constructor(public dialog: MatDialog, public roomService: RoomServiceService) {
    this.rooms = this.roomService.currentData;
    this.searchText = "";
  }

  ngOnInit(): void {
    let rooms2 = [new Room('Ambasador', 200, 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/209688774.jpg?k=f4aad98fb56d921e67e93a17a62abc8c3870f3112c41c62fe69bcc7affe5a5f5&o=&hp=1', 8.9, 'Beautiful rooms in Nish'),
    new Room('Grand', 300, 'https://kopaonik.net/wp-content/gallery/grand/wellnessspars-Grand-foto04.jpg', 9.5, 'Exclusive rooms on Kopaonik mountain'),
    new Room('Viceroy', 400, 'https://www.skifun.eu/slir/q60-w960-h570-p1-c16840.10000/uploads/galleries/6064/Viceroy-Kopaonik-Mountain-Resort-127031.jpg', 9.8, 'Best rooms on Kopaonik mountain')
    ];
    for (let room of rooms2) {
      this.roomService.addRoom(room);
    }
  }

  randomize() {
    if (this.searchText !== "") {
      alert("Can't use randomize while searching!");
      return;
    } else{
      this.roomService.randomize();
    }

  }

  onDelete(room: Room): void {
    this.roomService.deleteRoom(room);
  }

  addRoom(room: Room) {
    this.roomService.addRoom(room)
  }

  onEdit(room: Room): void {
    const dialog = this.dialog.open(EditRoomDialogComponent, {
      data:
        room

    });

    dialog.afterClosed().subscribe(room => {
      console.log(room);
    })
  }

  onReserve(room: Room): void {
    const dialog = this.dialog.open(FormReservationComponent, {
      data:
        room
    });
    dialog.afterClosed().subscribe((data) => {
      alert(`You reserved room "${data.room.name}" for ${data.nights} nights for the price of ${data.price} $`);
    })
  }
}


