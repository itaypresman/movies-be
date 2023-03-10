const OimDbManager = require('../ managers/oimdb.manager.js');


const search = async (req, res, next) => {
    try {
        const { title } = req.query;
        const films = await OimDbManager.searchFilms(title);
        res.json(films);
    } catch (e) {
        next(e);
    }
};

const getFilm = async (req, res, next) => {
    try {
        const { id } = req.query;
        const films = await OimDbManager.getFilmFullInfo(id);
        res.json(films);
    } catch (e) {
        next(e);
    }
};


module.exports = {
    search,
    getFilm
};
