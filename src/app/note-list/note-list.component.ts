import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { NoteService } from '../note.service';

@Component({
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  notes: Note[] = [];
  constructor(private noteService: NoteService) {
  }

  ngOnInit() {
    this.noteService.notes.subscribe(notes => {
      this.notes = notes;
    })
    this.noteService.get();
  }
}
