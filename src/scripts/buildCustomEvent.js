import { setStorage } from "./storage";

const evt = document.createEvent("Event");

evt.initEvent("callStorageFunciton", true, true);
document.addEventListener("callStorageFunciton", () => setStorage());

export default evt;
