const OimDbApi = require('@moovies/oimdb');

const searchFilms = async title => {
    const response = await OimDbApi.get('/', { params: { s: title }});

    return response?.data;
};

const getFilmFullInfo = async id => {
    const response = await OimDbApi.get('/', { params: { i: id }});

    return response?.data;
};


module.exports = {
    searchFilms,
    getFilmFullInfo,
};
