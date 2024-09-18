//Importa o módulo Router do express
//Router será utilizada para definir rotas específicas
const router = require('express').Router();

const controllersNumbers = require("../controllers/controller.Numbers");

router.post("/par/", controllersNumbers.checkPar);
router.post("/primo/", controllersNumbers.checkPrimo);


module.exports = router
