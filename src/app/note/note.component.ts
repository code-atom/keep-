import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note';

const noteStyles = ['card-outline-primary', 'card-outline-secondary', 'card-outline-success', 'card-outline-info', ' card-outline-warning', ' card-outline-danger'];

@Component({
  selector: 'app-note',
  inputs: ['note'],
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  note: Note
  style: string;
  completionRate: number;
  constructor() { }

  ngOnInit() {
    this.style = 'card mb-4  rounded-0 ' + noteStyles[(Math.floor((Math.random() * 6) + 1))];
  }

  toggleStatus() {
    this.note.completed = this.note.items.every(x => x.completed);
    this.calculatedStaus();
  }

  calculatedStaus() {
    var completedCount = this.note.items.filter(x => x.completed).length;
    this.completionRate = (completedCount / this.note.items.length) * 100 ;
  }
}
