class Index extends Error {
    status;
    errors;

    constructor(message, status = 500, errors = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static notFound(message = 'Not Found', errors = []) {
        return new Index(message, 404, errors);
    }
}


module.exports = Index;
