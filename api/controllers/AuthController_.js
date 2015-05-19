/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    /*
   |--------------------------------------------------------------------------
   | Log in with Email
   | @link https://github.com/sahat/satellizer/blob/master/examples/server/node/server.js#L147
   |--------------------------------------------------------------------------
   */
    login: function(req, res) {
        var _email = req.param('email'); //req.query["email"] || null;
        var _password = req.param('password');
        if (!_email)
            return res.send("No valid email");
        if (_email == "demo" && _password == "demo"){
            
        }
        User.findOne({
                email: _email
            })
            .then(function(user) {
                if (!user) { // https://github.com/irlnathan/activityoverlord20/blob/master/api/controllers/UserController.js#L20
                    return res.status(401).send('Wrong email and/or password');
                    //return res.notFound(); // @link https://github.com/irlnathan/activityoverlord20/blob/master/api/controllers/UserController.js#L21
                }
                // TODO: encrypted
                if (user.password == req.param('password')) {
                    req.session.me = user.id;
                    return res.send("OK");
                } else {
                    return res.notFound();
                }
                // TODO :apply https://github.com/irlnathan/activityoverlord20/blob/master/api/controllers/UserController.js#L23
                // Compare password attempt from the form params to the encrypted password
                // from the database (`user.password`)
                /*require('machinepack-passwords').checkPassword({
                    passwordAttempt: req.param('password'),
                    encryptedPassword: user.encryptedPassword
                }).exec({

                    error: function(err) {
                        return res.negotiate(err);
                    },

                    // If the password from the form params doesn't checkout w/ the encrypted
                    // password from the database...
                    incorrect: function() {
                        return res.notFound();
                    },

                    success: function() {

                        // Store user id in the user session
                        req.session.me = user.id;

                        // All done- let the client know that everything worked.
                        return res.ok();
                    }
                });*/
            })
            .fail(function(err) {
                res.negotiate(err);
            });

    },
    /**
     * Log out of Activity Overlord.
     * (wipes `me` from the sesion)
     */
    logout: function(req, res) {
        User.findOne(req.session.me).exec(function(err,user){
          if (err)
              return res.negotiate(err)
        req.session.me = null;
        return res.backToHomePage();
      });
    }
    /**
    *
    *
    */
};
