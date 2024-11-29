import { Hono } from "hono"
import { logger } from "hono/logger"

const api = new Hono().basePath('api')

api.use(logger())

api.get('/', (c) => c.json({ message: 'Hello from Hono!'}))

export default api