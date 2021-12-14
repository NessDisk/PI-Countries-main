const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const ActivityRouter = require('./activity.js');
const CountryRouter = require('./country.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/activity', ActivityRouter);
router.use('/country', CountryRouter);



module.exports = router;
