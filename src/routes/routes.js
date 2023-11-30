const express = require("express");
const databaseInteraction = require("../../prisma");
const router = express.Router();

router.get("/login", async (req, res) => {
  //   const { email, password } = req.body;
  try {
    const { email } = req.body;

    const response = await databaseInteraction.user.findUnique({
      where: {
        email,
      },
    });

    return res.status(200).json(response);
  } catch (error) {
    console.log("Error en consulta de Login", error);
    return res.status(500).json({ message: "Error en login", error });
  }
});

router.post("/register", async (req, res) => {
  try {
    const { email, password, cycle, carrer, headquarter } = req.body;

    const response1 = await databaseInteraction.user.findUnique({
      where: {
        email,
      },
    });

    //   Si ya existe el usuario se corta la ejecución aquí y retorna el usuario
    if (response1) return res.status(200).json({ existed: true });

    //De lo contrario, o sea de no existir, lo crea y retorna
    const response2 = await databaseInteraction.user.create({
      data: {
        email,
        password,
        cycle,
        carrer,
        headquarter,
      },
    });

    return res.status(200).json({ existed: false, ...response2 });
  } catch (error) {
    console.log("Error en consulta de registro", error);
    return res.status(500).json({ message: "Error en Register", error });
  }
});

module.exports = router;
