// Imports
var jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET = '<JWT_SIGN_TOKEN>';

module.exports = {

    generateTokenForUser: (userData) => {
        return jwt.sign({
            userId: userData.id,
            //isAdmin: userData.isAdmin 
        },
        JWT_SIGN_SECRET,
        {
        expiresIn: '1y'
        })
    },

    parseAuthorization: (authorization) => {
        return (authorization != null) ? authorization.replace('Bearer ', '') : null;
    },

    getUserId: (token) => {
    
        var userId = -1;
        //var token = module.exports.parseAuthorization(authorization);

        if(token != null) {
            try {
                let jwtToken = jwt.verify(token, JWT_SIGN_SECRET);

                if(jwtToken != null) {
                    userId = jwtToken.userId;
                }
            }
            catch(err) { }
        }   
        return userId;
    }
}