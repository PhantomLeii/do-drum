import { PrismaClient } from "@prisma/client"
import type { z } from "zod"
import { createTodoSchema } from "../schemas"

const prisma = new PrismaClient()

type createTodoType = z.infer<typeof createTodoSchema>

export async function createTodo(data: createTodoType) {
  return await prisma.toDo.create({
    data: {...data}
  })
}

export async function getTodos() {
  return await prisma.toDo.findMany({})
}

export async function getTodoById(id: number) {
  return await prisma.toDo.findUnique({
    where: { id }
  })
}

export async function deleteTodo(id: number) {
  return await prisma.toDo.delete({
    where: { id }
  })
}