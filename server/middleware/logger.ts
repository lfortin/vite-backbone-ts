import { defineHandler } from "nitro";

export default defineHandler(async (event) => {
  let log = `${event.req.method} ${event.req.url}`;
  console.log(log);
});
