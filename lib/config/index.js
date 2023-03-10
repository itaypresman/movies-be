require('dotenv').config();
const env = process.env;


module.exports = {
    port: env.PORT,
    oimDbUrl: env.OIMDB_URL,
    oimDbToken: env.OIMDB_TOKEN,
};
