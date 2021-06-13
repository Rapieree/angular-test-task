import { Injectable } from "@angular/core";

// Интерфейс для взаимодействия внутри приложения
export interface NoteItem {
  id: number,
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root',
})

export class DataNotesService {
  private _notesItems: NoteItem[] = [
    {
      id: 1,
      title: 'One',
      content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo',
    },
    {
      id: 2,
      title: 'Two',
      content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
    },
    {
      id: 3,
      title: 'Three',
      content: 'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.',
    },
    {
      id: 4,
      title: 'Four',
      content: 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
    },
    {
      id: 5,
      title: 'Five',
      content: 'Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    },
    {
      id: 6,
      title: 'Six',
      content: 'Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.',
    },
  ];

  // Получить максимальный ид + 1
  private getUniqueId() {
    let uniqueId: number = 1;

    if (this._notesItems.length !== 0) {
      uniqueId = this._notesItems.reduce((max, current) => {
        if(max.id > current.id) {
          return max;
        }
        return current;
      }).id + 1;
    }

    return uniqueId;
  }

  public get notesItems() {
    return this._notesItems;
  }

  getNoteById(id: number) {
    const note = this._notesItems.find((note: NoteItem) => {
      return note.id === id;
    });

    if(note !== undefined) {
      return Object.assign({}, note);
    } else {
      throw new Error('Error getting note. Note not found');
    }
  };

  addNote(noteItem: NoteItem) {
    const note : NoteItem = {
      id: this.getUniqueId(),
      title: noteItem.title,
      content: noteItem.content,
    }

    this._notesItems.push(note);
  }

  removeNote(id: number) {
    const noteIndex = this._notesItems.findIndex((note: NoteItem) => {
      return note.id === id;
    });

    if (noteIndex === -1) {
      throw Error('Error remove. Note not found.');
    } else {
      this._notesItems.splice(noteIndex, 1);
    }
  }

  editNote(id: number, noteItem: NoteItem) {
    let note = this.getNoteById(id);

    if (note === undefined) {
      throw Error('Error edit. Note not found.')
    } else {
      note.title = noteItem.title;
      note.content = noteItem.content;
    }
  }
}
