import { Hono } from "hono"

const todos = new Hono()
  .get('/', (c) => c.json({ message: "Hello from Todos"}))

export default todos