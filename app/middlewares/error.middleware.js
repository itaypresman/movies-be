module.exports = (err, req, res, next) => {
    console.error(err.message);
    return res.status(500).json({ error: true, msg: 'Internal server error' })
};
