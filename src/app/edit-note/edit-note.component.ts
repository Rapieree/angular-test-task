import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteItem, DataNotesService } from '../data-notes.service';

@Component({
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css'],
})

export class EditNoteComponent {
  noteId: number = 0;

  editNoteItem: NoteItem = {
    id: 0,
    title: '',
    content: '',
  };

  constructor(
    private dataNotesService: DataNotesService,
    private activateRoute: ActivatedRoute,
    private router: Router,
  ) {
    activateRoute.params.subscribe((params) => {
      if (dataNotesService.getNoteById(Number(params['id'])) !== undefined) {
        this.noteId = Number(params['id']);
      }
    });
  };

  ngOnInit() {
    if (this.noteId !== 0) {
      this.editNoteItem = this.dataNotesService.getNoteById(this.noteId);
    }
  };

  saveNote() {
    if (this.noteId !== 0) {
      this.dataNotesService.editNote(this.noteId, this.editNoteItem);
      alert('Запись сохранена!');
      this.router.navigate(['']);
    } else {
      this.dataNotesService.addNote(this.editNoteItem);
      alert('Запись успешно создана!');
      this.router.navigate(['']);
    }
  };

  deleteNote() {
    if (this.noteId !== 0) {
      let isDelete = confirm('Вы уверены что хотите удалить запись?');
      if (isDelete) {
        this.dataNotesService.removeNote(this.noteId);
        this.router.navigate(['']);
      }
    }
  };
}
