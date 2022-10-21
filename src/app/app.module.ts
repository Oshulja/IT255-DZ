import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';
import { FilterPipePipe } from './helpers/filter-pipe.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormAddComponent } from './form-add/form-add.component';
import { EditRoomDialogComponent } from './edit-room-dialog/edit-room-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    FilterPipePipe,
    FormAddComponent,
    EditRoomDialogComponent,
  ],
  entryComponents:[
    EditRoomDialogComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
