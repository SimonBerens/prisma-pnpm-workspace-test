// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {PrismaClient} from '@x/prisma/client';

const prisma = new PrismaClient({ log: ['query', 'info', 'warn'] });

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
