require('dotenv').config();
const env = process.env;


module.exports = {
    port: env.PORT,
    oimDbToken: env.OIMDB_TOKEN,
};
