const express = require("express");
const databaseInteraction = require("../../prisma");
const router = express.Router();

//Consultas en la base de datos 1

router.get("/login", async (req, res) => {
  //   const { email, password } = req.body;
  const { email } = req.body;

  const response = await databaseInteraction.user.findUnique({
    where: {
      email,
    },
  });
});

//Cosultas en la base de datos 1 y 4
router.post("/register", async (req, res) => {
  const { email, password, cycle, carrer, headquarter } = req.body;

  const response = await databaseInteraction.user.create({
    data: {
      email,
      password,
      cycle,
      carrer,
      headquarter,
    },
  });

  res.status(200).json(response);
});

module.exports = router;
