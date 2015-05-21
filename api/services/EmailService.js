/*
 * @see example https://github.com/wi2/machinepack-email/blob/master/tests/test.js
 * @see http://node-machine.org/machinepack-email/send
 */
var Email = require('machinepack-email');
var path = require('path');


exports.sendEmail = function(options) {
    // Simply send an email with nodemailer and email-template (SMTP)
    var _config = {
        service: 'Gmail',
        auth: {
            user: 'nikolay.gerzhan@gmail.com',
            pass: 'Ine2p0i1amer@GG'
        },
        mail: {
            from: 'nikolay.gerzhan@gmail.com',
            to: 'nikolay.gerzhan@gmail.com',
            templatesDir: path.resolve(__dirname, '..', '..', 'views', 'emailtemplates'),
            folder: 'inquery',
            subject: 'pfff..Hello the world!',
            text: "Eh what's happen...No, It's not working.",
            params: {
                firstname: 'Mike'
            }
        }
    };

    console.log(_config.templatesDir);
    options.mail.templatesDir = path.resolve(__dirname, '..', '..', 'views', 'emailtemplates');
    return Email.send({
        service: 'Gmail',
        auth: _config.auth,
        mail: options.mail
    })
    // .exec({
 //     // An unexpected error occurred.
 //     error: function(err) {
 //         console.log(err);
 //     },
 //     // OK.
 //     success: function() {

 //     },
 // });

}
