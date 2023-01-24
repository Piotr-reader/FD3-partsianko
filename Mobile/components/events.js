import { EventEmitter } from "events";

let deleteUserCodeEvents = new EventEmitter();
let formatUserCodeEvents = new EventEmitter();
let saveFormatClientEvents = new EventEmitter();

export { deleteUserCodeEvents, formatUserCodeEvents, saveFormatClientEvents };
