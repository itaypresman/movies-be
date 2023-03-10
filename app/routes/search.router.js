const Router = require('express').Router;
const router = new Router();
const SearchController = require('../controllers/search.comtroller.js');


router.get('/', SearchController.search);


module.exports = router;
