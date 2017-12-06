import { Injectable } from "@angular/core";
import { Note } from "./models/note";
import { Subject } from "rxjs/Subject";
declare var IndexedDB: any;


@Injectable()
export class NoteService {
  repository: any;
  notes: Subject<Note[]> = new Subject<Note[]>();
  constructor() {
    var DbContextBuilder = new IndexedDB.DbContextBuilder(window.indexedDB);
    var repository = DbContextBuilder
      .CreateDB('Keep')
      .ConfigureModel({
        name: "Sample",
        keyPath: "_id",
        autoIncrement: true,
        seed: <Note[]>[
          {
            title: 'Dummy Text',
            items: [
              {
                _id: 1,
                text: 'text',
                completed: false
              }
            ]
          }
        ]
      }).Build();
    this.repository = repository.Sample;
  }

  add(note: Note) {
    this.repository.Add(note)
      .then(() => {
        return this.repository.GetAll()
      }).then((notes) => {
        this.notes.next(notes);
      })
  }

  get() {
    this.repository.GetAll()
      .then((notes) => {
        this.notes.next(notes);
      })
  }

}
