import { PrismaClient } from '@prisma/client'
import { env } from '@/env.mjs'

declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClient | undefined
}

let prisma: PrismaClient | undefined

// Only initialize Prisma if DATABASE_URL is available
if (env.DATABASE_URL) {
  if (env.NODE_ENV === 'production') {
    prisma = new PrismaClient()
  } else {
    if (!global.cachedPrisma) {
      global.cachedPrisma = new PrismaClient()
    }
    prisma = global.cachedPrisma
  }
}

export const db = prisma as PrismaClient
