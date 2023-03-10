const OimDbError = require('@moovies/oimdb/errors');


module.exports = (err, req, res, next) => {
    console.error(err.message);
    if (err instanceof OimDbError) {
        return res.status(err.status).json({ error: true, msg: err.message});
    }

    return res.status(500).json({ error: true, msg: 'Internal server error' })
};
