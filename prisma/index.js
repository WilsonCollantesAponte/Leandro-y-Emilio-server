const { PrismaClient } = require("@prisma/client");

const databaseInteraction = new PrismaClient();

module.exports = databaseInteraction;
