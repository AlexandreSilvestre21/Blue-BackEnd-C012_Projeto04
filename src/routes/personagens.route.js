const router = require('express').Router();
const controllerPersonagens = require('../controllers/personagens.controller');
const { validId, validObjectBody } = require('../middlewares/personagem.middleware');
const authValida = require('../middlewares/auth.middleware');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.get('/personagens/all-personagens', authValida, controllerPersonagens.findAllPersonagensController);
router.get('/personagens/one-personagem/:id', authValida, validId, controllerPersonagens.findByIdPersonagemController);
router.post('/personagens/create-personagem', authValida, validObjectBody, controllerPersonagens.createPersonagemController);
router.put('/personagens/update-personagem/:id', authValida, validId, validObjectBody, controllerPersonagens.updatePersonagemController);
router.delete('/personagens/delete-personagem/:id', authValida, validId, controllerPersonagens.deletePersonagemController);
router.get('/personagens/search', authValida, controllerPersonagens.searchPersonagemController);

module.exports = router;
