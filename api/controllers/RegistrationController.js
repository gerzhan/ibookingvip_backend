/**
 * RegistrationController
 *
 * @description :: Server-side logic for managing registrations
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    // Free registration - save date about user and send email with link activation
    free: function(req, res) {
        return res.view({
            errors: req.flash('error')
        })
    }
};
