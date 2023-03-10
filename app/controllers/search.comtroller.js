const search = async (req, res, next) => {
    try {
        res.json({  message: 'Hello World' });
    } catch (e) {
        next(e);
    }
};


module.exports = {
    search
};
