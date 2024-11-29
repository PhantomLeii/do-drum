import { Hono } from "hono"
import { logger } from "hono/logger"
import todo from "./routes/todo"

const api = new Hono().basePath('api')

api.use(logger())

api.get('/', (c) => c.json({ message: 'Hello from Hono!'}))

api.route('v1/todo', todo)

export default api