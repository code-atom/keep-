import { SystemId, ServerId, NoteItemStatus, NoteStatus } from "../../typings";


export interface Note {
  _id : SystemId;
  refId?: ServerId;
  title: string;
  items: NoteItem[];
  completed: NoteStatus
}


export interface NoteItem {
  _id : SystemId,
  refId?: ServerId;
  text: string;
  completed: NoteItemStatus
}
