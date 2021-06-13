import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { NotFoundLinkComponent } from './not-found-link/not-found-link.component';
import { NoteListComponent } from './note-list/note-list.component';

const routes: Routes = [
  { path: '', component: NoteListComponent },
  {path: 'edit-note/:id', component: EditNoteComponent},
  {path: '**', component: NotFoundLinkComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
