module.exports = (fun) => (req, res, next) => {
    return Promise
        .resolve(
            fun(req, res, next)
            // here catch(next) is errors middleware
        ).catch(next)
}
