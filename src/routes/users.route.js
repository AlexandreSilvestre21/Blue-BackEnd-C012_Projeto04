const router = require("express").Router();
const usersController = require("../controllers/users.controller");

router.post("/create", usersController.createUserController);
router.get("/", usersController.findAllUserController);

module.exports = router;

