// err handeling
function errorHandeling( err, req, res, next) {
    if (err) {
        let status = err.status || 500
        res.json({
            status,
            msg: "An error occurred, try again later 😥"
        })
        next()
    }
}

module.exports = errorHandeling;