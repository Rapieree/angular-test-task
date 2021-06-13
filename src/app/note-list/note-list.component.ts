import { Component, OnInit, Output } from '@angular/core';
import { NoteItem, DataNotesService } from '../data-notes.service';

@Component({
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
})
export class NoteListComponent implements OnInit {
  noteDataItems: NoteItem[] = [];

  constructor(private dataNotesService: DataNotesService) { }


  ngOnInit() {
     this.noteDataItems = this.dataNotesService.notesItems;
  }
}
