/**
 * Arquivo responsável por toda a configuração e execução do BACK-END.
 */
const app = require("./app");
const db = require("./src/models");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;

db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Aplicação sendo executada na porta: ${PORT}.`);
  });
});
