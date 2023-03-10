const Router = require('express').Router;
const router = new Router();
const SearchController = require('../controllers/search.controller.js');
const { query } = require('express-validator');
const validator = require('../middlewares/validator.middleware.js');


router.get('/search',
    query(['title']).isString().withMessage('title can not be empty').isLength({ min: 3 }).withMessage('Min lengtyh is 3'),
    validator,
    SearchController.search
);

router.get('/filmInfo',
    query(['id']).isString().withMessage('id can not be empty'),
    validator,
    SearchController.getFilm
);


module.exports = router;
