module.exports = (theFuunc) => (req, res, next) => {
    Promise.resolve(theFuunc(req, res, next)).catch(next);
};