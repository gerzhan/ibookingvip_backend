/**
 * SubscribeController
 *
 * @description :: Server-side logic for managing subscribes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    me: function(req, res) {
        var _subscriber = req.param('subscriber');
        console.log(_subscriber);
        Subscribe.findOrCreate(_subscriber).exec(function(err, subscriber) {
            if (err)
            //TODO: add validation type error
                return res.view('subscribe/suscribe_error') //res.status(500).send(err)
            return res.view('subscribe/suscribe_success')
        })
    }
};
