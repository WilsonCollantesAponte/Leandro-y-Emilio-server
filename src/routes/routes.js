const express = require("express");
const databaseInteraction = require("../../prisma");
const router = express.Router();

//Consultas en la base de datos 1

router.post("/login", async (req, res) => {
  //   const { email, password } = req.body;
  const { email } = req.body;

  const response = await databaseInteraction.user.findUnique({
    where: {
      email,
    },
  });
});

//Cosultas en la base de datos 1 y 4
router.post("/register", async (req, res) => {});

module.exports = router;
