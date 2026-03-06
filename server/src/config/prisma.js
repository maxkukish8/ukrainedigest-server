const { PrismaClient } = require("@prisma/client");

// Allow serverless runtimes to work when only DIRECT_URL is configured.
if (!process.env.DATABASE_URL && process.env.DIRECT_URL) {
  process.env.DATABASE_URL = process.env.DIRECT_URL;
}

const prisma = new PrismaClient();

module.exports = { prisma };
