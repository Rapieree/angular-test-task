import { Component, Input, OnInit } from '@angular/core';
import { NoteItem } from '../data-notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent {
  @Input() noteItem: NoteItem = {
    id: 0,
    title: '',
    content: '',
  };

  ngOnInit(): void {
  }
}
