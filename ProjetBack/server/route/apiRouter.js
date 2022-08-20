const express = require('express');
const userCtrl = require('../controleurs/userCtrl');
const postCtrl = require('../controleurs/postCtrl');
const likesCtrl = require('../controleurs/likesCtrl');
const logCtrl = require('../controleurs/logCtrl');


// Router
exports.router = (function() {
    var apiRouter = express.Router();
    
//Routes
apiRouter.route('/register').post(userCtrl.addUser);
apiRouter.route('/me').get(userCtrl.getUserMe);
apiRouter.route('/login').post(userCtrl.login);
apiRouter.route('/put').put(userCtrl.PutUser);
apiRouter.route('/delete').delete(userCtrl.deleteUser);
apiRouter.route('/getUser/:id').get(userCtrl.getUser)
apiRouter.route('/getAll').get(userCtrl.getAllUsers)


//PROFIL
//apiRouter.route('/profil').get(userCtrl.myProfil);

//Commentaire Routes
apiRouter.route('/new').post(postCtrl.CreatePublication);
apiRouter.route('/del').delete(postCtrl.deletePublication);
apiRouter.route('/update').put(postCtrl.PutPublication);
apiRouter.route('/getPublication/:id').get(postCtrl.getPost)
apiRouter.route('/getAllPosts').get(postCtrl.getAllPosts)

apiRouter.route('/loggedIn').get(logCtrl.loggedIn);


//Likes Routes
//apiRouter.route('/Likes/new/').post(likesCtrl.likePost);
//apiRouter.route('/Likes/').get(likesCtrl.dislikePost);
return apiRouter;

})();


