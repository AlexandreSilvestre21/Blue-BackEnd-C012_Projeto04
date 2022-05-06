const router = require('express').Router();
const controllerPersonagens = require('../controllers/personagens.controller');
const { validId, validObjectBody } = require('../middlewares/personagem.middleware');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');


router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.get('/all-personagens', controllerPersonagens.findAllPersonagensController);
router.get('/one-personagem/:id', validId, controllerPersonagens.findByIdPersonagemController);
router.post('/create-personagem', validObjectBody, controllerPersonagens.createPersonagemController);
router.put('/update-personagem/:id',validId, validObjectBody, controllerPersonagens.updatePersonagemController);
router.delete('/delete-personagem/:id', validId, controllerPersonagens.deletePersonagemController);
router.get('/search/:nome', personagensController.searchPersonagemController);

module.exports = router;
