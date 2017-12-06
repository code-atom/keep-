import { Component, OnInit } from '@angular/core';
import { Note } from './models/note';
import { NoteService } from './note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
