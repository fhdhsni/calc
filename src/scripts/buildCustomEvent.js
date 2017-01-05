import { setStorage } from "./storage";

const evt = document.createEvent("Event");

evt.initEvent("callStorageFunction", true, true);
document.addEventListener("callStorageFunction", () => setStorage());

export default evt;             // exporting an Event
