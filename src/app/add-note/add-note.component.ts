import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Note } from '../models/note';
import { FormArray } from '@angular/forms/src/model';
import { NoteService } from '../note.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  form: FormGroup
  itemCounter: number = 0;
  constructor(private fb: FormBuilder, private noteService: NoteService, private router: Router) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: [''],
      items: this.fb.array([])
    })
  }
  get items(): FormArray {
    return this.form.controls['items'] as FormArray;
  };

  addItems() {
    this.items.push(this.fb.group({
      id: ++this.itemCounter,
      text: '',
      completed: false
    }));
  }

  removeItem(index: number) {
    this.items.removeAt(index);
  }

  addNote(note: Note) {
    this.noteService.add(note);
    this.router.navigateByUrl('');
  }

}
