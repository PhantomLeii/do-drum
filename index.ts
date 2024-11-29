import api from "./server";

export const server = Bun.serve({
  fetch: api.fetch
})

console.log(`Server listening on ${server.url.href}`)