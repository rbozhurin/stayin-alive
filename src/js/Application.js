import EventEmitter from "eventemitter3";
import Beat from "./Beat.js";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this._beat = new Beat();
    this._create();
    this.emit(Application.events.READY);
    const lyrics = ["Ah", "ha", "ha", "ha", "stain' alive", "stain' alive"];
    let count = 0;

    this._beat.addListener(Beat.events.BIT, () =>
      this._create(lyrics[count > lyrics.length - 1 ? (count = 0) : count++])
    );
  }

  _create(msg) {
    const message = document.createElement("div");
    message.classList.add("message");
    message.innerText = msg;

    document.querySelector(".main").appendChild(message);
  }
}
