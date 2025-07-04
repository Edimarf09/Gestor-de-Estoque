import express from 'express'
import app from './app.js'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const PORT = process.env.PORT || 1999

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});

