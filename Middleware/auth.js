const jwt = require("jsonwebtoken");

const SECRET_KEY = "mysecretkey";

const auth = (req, res, next) => {

    const token = req.cookies.token;

    if (!token) {
        return res.redirect("/login");
    }

    try {

        const decoded = jwt.verify(
            token,
            SECRET_KEY
        );

        req.user = decoded;

        next();

    } catch (error) {

         return res.redirect("/login");

    }

};

module.exports = auth;