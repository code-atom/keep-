import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { NoteItemComponent } from './note-item/note-item.component';
import { NoteService } from './note.service';
import { AddNoteComponent } from './add-note/add-note.component';
import { NoteListComponent } from './note-list/note-list.component';

const routes: Routes = [
  {
    path: '',
    component: NoteListComponent
  },
  {
    path: 'add',
    component: AddNoteComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NoteItemComponent,
    AddNoteComponent,
    NoteListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
