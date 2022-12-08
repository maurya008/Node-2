const jwt = require('jsonwebtoken')

const { SECRET_KEY } = process.env

const auth = (req, res, next) => {
    console.log(req.cookies);
    const { token } = req.cookies    //bject destructuring

    // Authorization: "Bearer longtokenvalue"
    // const token = req.header("Authorization").replace("Bearer ", "")

    //if no token
    if(!token) {
        return res.status(401).send('token is missing')
    }

    //verify token
    try {
        const decode = jwt.verify(token, SECRET_KEY)
        console.log(decode);
        req.user = decode

        //extract id from token and query the DB
        
    } catch (error) {
        res.status(401).send('token is invalid')
    }

    return next()
}

module.exports = auth 