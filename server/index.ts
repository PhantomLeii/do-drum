import { Hono } from "hono"
import { logger } from "hono/logger"
import todos from "./routes/todos"

const api = new Hono().basePath('api')

api.use(logger())

api.get('/', (c) => c.json({ message: 'Hello from Hono!'}))

api.route('v1/todo', todos)

export default api