import { Component, HostBinding, OnInit } from '@angular/core';
import { Room } from '../room/room.model';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';

  rooms: Room[];
  searchText: string = '';

  constructor() {
    this.rooms = [new Room('Ambasador', 200, 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/209688774.jpg?k=f4aad98fb56d921e67e93a17a62abc8c3870f3112c41c62fe69bcc7affe5a5f5&o=&hp=1', 4.7, 'Beautiful rooms in Nish'),
    new Room('Grand', 300, 'https://kopaonik.net/wp-content/gallery/grand/wellnessspars-Grand-foto04.jpg', 4.9, 'Exclusive rooms on Kopaonik mountain'),
    new Room('Viceroy', 400, 'https://www.skifun.eu/slir/q60-w960-h570-p1-c16840.10000/uploads/galleries/6064/Viceroy-Kopaonik-Mountain-Resort-127031.jpg', 5.0, 'Best rooms on Kopaonik mountain')];
  }

  ngOnInit(): void {
  }
}
