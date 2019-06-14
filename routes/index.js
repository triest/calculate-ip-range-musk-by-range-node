var express = require('express');
var router = express.Router();
var myParser = require("body-parser");
var app = express();


const indexController = require('../controllers/indexController.js');



// определяем маршруты и их обработчики внутри роутера userRouter
//router.use("/create", userController.addUser);
router.get("/",indexController.index);

router.get("/read",indexController.read);

//add page
module.exports = router;
