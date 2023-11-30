const server = require("./src/server");

const port = 3333;

server.listen(port, () => {
  console.log(`%s listening at ${port}`);
});
