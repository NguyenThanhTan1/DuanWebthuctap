const middlewareController = require('../controllers/middlewareController');
const userController = require('../controllers/userController');

const router = require('express').Router();


//GET ALL USERS
router.get('/',middlewareController.verifyToken ,userController.getAllUsers);

// DELETE USERS
//vi/user
router.delete("/:id", middlewareController.verifyTokenandAmindToken ,userController.deleteUser);
module.exports = router;
