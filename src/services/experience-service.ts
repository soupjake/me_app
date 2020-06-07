import Event from "../models/event";

export async function getEvents(): Promise<Event[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const events: Event[] = require("../store/data/events.json");
        resolve(events);
      } catch (e) {
        reject({ message: e });
      }
    }, 1000);
  });
}
