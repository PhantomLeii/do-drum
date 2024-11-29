import { expect, test, describe, beforeAll, afterAll } from 'bun:test'
import { PrismaClient } from '@prisma/client'
import { execSync } from 'child_process'

import { createTodo, getTodos, getTodoById, deleteTodo  } from '@/db'

const prisma = new PrismaClient({ datasources: { db: { url: 'postgresql://root:1234@localhost:5432/postgres_test' } } })
let testUserId: number

describe('Database Queries', () => {
  beforeAll(async () => {
    execSync('bunx prisma migrate reset --force --skip-seed', {
      stdio: 'inherit',
    })

    await prisma.$connect()
    
    // Reset database and run migrations
    await prisma.toDo.deleteMany({})
    await prisma.user.deleteMany({})
    
    
    const testUser = await prisma.user.create({
      data: {
        userId: 'testuser',
      }
    })

    testUserId = testUser.id
  })

  afterAll(async () => {
    await prisma.toDo.deleteMany({})
    await prisma.user.deleteMany({})
    await prisma.$disconnect()
  })

  test('createTodo', async () => {
    const todo = await createTodo({
      title: 'Test Todo',
      description: 'This is a test todo',
      authorId: testUserId
    })

    expect(todo.title).toBe('Test Todo')
    expect(todo.description).toBe('This is a test todo')
    expect(todo.authorId).toBe(testUserId)
  })

  test('getTodos', async () => {
    const todos = await getTodos()
    expect(todos.length).toBe(1)
  })

  test('getTodoById', async () => {
    const todo = await getTodoById(1)

    expect(todo?.title).toBe('Test Todo')
  })

  test('deleteTodo', async () => {
    await deleteTodo(1)

    expect(await getTodos()).toEqual([])
  })
})
