const userCtrl = require('./userCtrl');

module.exports = {
    loggedIn: (req, res, next) => {
        if(req.headers['authorization']) {
            userCtrl.getUserMe(req, res, next)
            
        } else {
            next();
        }
    }
}

