import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { database } from '@pulse/database'
import { toNextJsHandler } from 'better-auth/next-js'
import {keys} from "@/keys";

const auth = betterAuth({
  database: prismaAdapter(database, {
    provider: 'postgresql',
  }),
  socialProviders: {
    google: {
      clientId: keys().GOOGLE_CLIENT_ID,
      clientSecret: keys().GOOGLE_CLIENT_SECRET,
    },
  },
})

export { toNextJsHandler, auth }
