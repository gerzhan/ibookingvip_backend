/**
 * RegistrationController
 *
 * @description :: Server-side logic for managing registrations
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    // Free registration - save date about user and send email with link activation
    free: function(req, res) {
        var registration = req.param("registration");

        var _mail = {
            from: 'nikolay.gerzhan@gmail.com',
            to: registration.email,
            //templatesDir: path.resolve(__dirname, '..', '..', 'views', 'emailtemplates'),
            folder: 'registration/free',
            subject: 'Free Registration iBookingVIP!',
            text: "Free Registration iBookingVIP!!!!",
            params: {
                user: {
                    username: registration.username
                }
            }
        }
        console.log(registration, _mail)
        EmailService.sendEmail({
            mail: _mail
        }).exec(function(err, msg) {
            //res.send("email send")
            console.log(err, msg);
            if (!err) {
                return res.view({
                    errors: req.flash('error')
                })
            } else {
                return res.status(500).view({
                    errors: req.flash('error')
                })
            }
        });
        console.log(req.params.all());

    }
};
