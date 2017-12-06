/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare type SystemId = number;
declare type ServerId = string;
declare type NoteItemStatus = boolean;
declare type NoteStatus = boolean;


export { SystemId, ServerId, NoteStatus, NoteItemStatus }
