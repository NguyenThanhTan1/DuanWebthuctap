const jwt = require("jsonwebtoken");

const middlewareController = {

    // verify token
    verifyToken: (req, res, next) => {
        const token = req.headers.token; // lay token tu nguoi dung
        if (token) {
            //Bearer token
            const accessToken = token.split(" ")[1];
            jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
                if(err) {
                    return res.status(403).json("Token is not valid");
                }
                req.user = user;
                next();
        });
    }
         else {
            return  res.status(401).json("You're not authenticated");
        }
    },

    verifyTokenandAmindToken: (req, res,next) => {
        middlewareController.verifyToken(req, res,() =>{
            if(req.user._id == req.params._id || req.user.admin ){
                next();
            }
            else{
                return res.status(403).json("You're not allowed to delete other");
            }
        });
    }

}
module.exports = middlewareController