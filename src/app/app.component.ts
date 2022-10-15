import { Component } from '@angular/core';
import { Room } from './room/room.model';
import { MatDialog } from '@angular/material/dialog';
import { EditRoomDialogComponent } from './edit-room-dialog/edit-room-dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rooms: Room[];
  searchText: string;

  constructor(public dialog: MatDialog) {
    this.rooms = [new Room('Ambasador', 200, 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/209688774.jpg?k=f4aad98fb56d921e67e93a17a62abc8c3870f3112c41c62fe69bcc7affe5a5f5&o=&hp=1', 8.9, 'Beautiful rooms in Nish'),
    new Room('Grand', 300, 'https://kopaonik.net/wp-content/gallery/grand/wellnessspars-Grand-foto04.jpg', 9.5, 'Exclusive rooms on Kopaonik mountain'),
    new Room('Viceroy', 400, 'https://www.skifun.eu/slir/q60-w960-h570-p1-c16840.10000/uploads/galleries/6064/Viceroy-Kopaonik-Mountain-Resort-127031.jpg', 9.8, 'Best rooms on Kopaonik mountain')];
    this.searchText = "";
  }

  ngOnInit(): void {

  }

  randomize() {
    if (this.searchText !== "") {
      alert("Can't use randomize while searching!");
      return;
    }
    for (let i = this.rooms.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.rooms[i], this.rooms[j]] = [this.rooms[j], this.rooms[i]];
    }
  }

  onDelete(room: Room): void {
    const index = this.rooms.indexOf(room);
    if (index > -1) {
      this.rooms.splice(index, 1);
    }
  }

  onEdit(room: Room): void {
    const dialogRef = this.dialog.open(EditRoomDialogComponent, {
      data:
        room
      
    });

    dialogRef.afterClosed().subscribe(room => {
      console.log(room);
    })
  }


  addRoom(room: Room) {
    this.rooms.push(room);
  }
}


