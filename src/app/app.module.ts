import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteComponent } from './note/note.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { DataNotesService } from './data-notes.service';
import { NotFoundLinkComponent } from './not-found-link/not-found-link.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NoteComponent,
    EditNoteComponent,
    NotFoundLinkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [DataNotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
