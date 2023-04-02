const getJwtToken = require('../helpers/getJwtToken');

const cookieToken = (user, res) => {
    const token = getJwtToken(user.id);
    const options = {
        expires: new Date(
            Date.now() +
                (process.env.COOKIE_EXPIRES_TIME ?? 7) * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
        secure: true,
    };
    user.password = undefined;
    res.status(200).cookie('token', token, options).json({
        success: true,
        token: token,
        user,
    });
};

module.exports = cookieToken;
