/**
 * ContactController
 *
 * @description :: Server-side logic for managing contacts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var // Success Message
    _success = "<div class = \"form-group\"> < input name = \"contact-name\" id=\"contact-name\" type=\"text\" class=\"form-control\" placeholder=\"Name\"> < /div> < div class = \"form-group\"> < input name = \"contact-email\" id=\"contact-email\" type=\"text\" class=\"form-control\" placeholder=\"Your e-mail\"> < /div> < div class = \"form-group\"> < input name = \"contact-phone\" id=\"contact-phone\" type=\"text\" class=\"form-control\" placeholder=\"Phone\"> < /div> < div class = \"form-group\"> < textarea name = \"contact-message\" id=\"contact-message\" class=\"form-control\" placeholder=\"Message\"></textarea> < /div> < div class = \"form-group\"> < button type = \"submit\" class=\"btn btn-default btn-submit\">Submit</button> < /div> < div class = \"row\"> < div class = \"col-md-12\"> < div class = \"form-process-contact\"></div> < /div> < /div> < div class = \"alert alert-success\"> < a href = \"#\" class=\"close\" data-dismiss=\"alert\">&times;</a> < strong > Thank You! < /strong> Your message has been successfully sent! < /div>";

module.exports = {
    send: function(req, res) {
        setTimeout(function() {
            // return res.send(_success);
            return res.view('contact/success_get_messsage');
        }, 600)
    }
};
