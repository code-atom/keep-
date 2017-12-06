import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NoteItem } from '../models/note';

@Component({
  selector: 'app-note-item',
  inputs: ['item'],
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {
  item: NoteItem;
  @Output("status-update")
  status = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  toggleStatus() {
    this.item.completed = !this.item.completed;
    this.status.emit(this.item);
  }
}
