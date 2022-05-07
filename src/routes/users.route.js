const router = require("express").Router();
const usersController = require("../controllers/users.controller");

router.post("/create", usersController.createUserController);
router.get("/login", usersController.findAllUserController);

module.exports = router;

