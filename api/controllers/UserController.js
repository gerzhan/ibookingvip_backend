/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    send: function(req, res) {
        EmailService.sendEmail({
            email: 'test@test.com',
            name: 'test'
        }).exec(function(err, msg) {
            res.send("email send")
        });
    }
};
