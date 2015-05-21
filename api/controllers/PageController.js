/**
 * PageController
 *
 * @description :: Server-side logic for managing Pages
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    showHomePage: function(req, res) {

        // If not logged in, show the public view.
        if (!req.user) {
            // return res.view('page/homepage');
            return res.view('page/landingpage');
        }

        // Otherwise, look up the logged-in user and show the logged-in view,
        // bootstrapping basic user data in the HTML sent from the server
        User.findOne(req.user.id, function(err, user) {
            if (err) {
                return res.negotiate(err);
            }

            if (!user) {
                sails.log.verbose('Session refers to a user who no longer exists- did you delete a user, then try to refresh the page with an open tab logged-in as that user?');
                return res.view('homepage');
            }

            return res.view('page/dashboard', {
                me: {
                    id: user.id,
                    name: user.name,
                    email: user.email
                }
            });

        });
    },
    showLandingPage: function(req, res) {
        var data = null;
        // If not logged in, show the public view.
        if (!!req.user) {
            data = {
                user: req.user
            };
        }
        console.log(data);
        return res.view('page/landingpage', data);
        // // Otherwise, look up the logged-in user and show the logged-in view,
        // // bootstrapping basic user data in the HTML sent from the server
        // User.findOne(req.user.id, function(err, user) {
        //     if (err) {
        //         return res.negotiate(err);
        //     }

        //     if (!user) {
        //         sails.log.verbose('Session refers to a user who no longer exists- did you delete a user, then try to refresh the page with an open tab logged-in as that user?');
        //         return res.view('homepage');
        //     }

        //     return res.view('page/dashboard', {
        //         me: {
        //             id: user.id,
        //             name: user.name,
        //             email: user.email
        //         }
        //     });

        // });
    },

};
