const OimDbApi = require('@moovies/oimdb');
const Cache = require('@moovies/film-cache');

const searchFilms = title => geFilmsFromCache(title) || geFilmsFromOinDb(title);

const getFilmFullInfo = id => geFilmInfoFromCache(id) || geFilmInfoFromOinDb(id);

const geFilmsFromOinDb = async title => {
    const response = await OimDbApi.get('/', { params: { s: title }});
    const films = response?.data;
    Cache.searches.set(title.toLowerCase(), films);

    return films;
};

const geFilmInfoFromOinDb = async id => {
    const response = await OimDbApi.get('/', { params: { i: id }});
    const film = response?.data;
    Cache.fullInfo.set(id.toLowerCase(), film);

    return film;
};

const geFilmsFromCache = title => Cache.searches.get(title.toLowerCase());

const geFilmInfoFromCache = id =>  Cache.fullInfo.get(id);


module.exports = {
    searchFilms,
    getFilmFullInfo,
};
