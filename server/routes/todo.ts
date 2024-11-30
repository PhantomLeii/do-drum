import { Hono } from "hono"

const todo = new Hono()
  .get('/', (c) => c.json({ data: []}))
  .get('/:id{[0-9]+}', (c) => c.json({ data: [c.req.param('id')] }))
  .post('/', (c) => c.json({ data: c.req }))
  .delete('/:id{[0-9]+}', (c) => c.json({ data: [c.req.param('id')] }))

export default todo