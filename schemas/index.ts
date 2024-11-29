import { z } from "zod";

export const User = z.object({
  id: z.number().positive().int(),
  userId: z.string(),
})

export const ToDo = z.object({
  id: z.optional(z.number().int().min(1)),
  title: z.string().max(255),
  createAt: z.string().datetime(),
  description: z.optional(z.string()),
  authorId: z.number().int().min(1),
})

export const createTodoSchema = ToDo.omit({ id: true, createAt: true })