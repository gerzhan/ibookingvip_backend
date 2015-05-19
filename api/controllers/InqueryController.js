/**
 * InqueryController
 *
 * @description :: Server-side logic for managing Inqueries
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  send: function (req, res) {
    var _id = req.query.id
    User.find({id:_id}).then(function (result) {
      res.send(result);
    });
  }
};

