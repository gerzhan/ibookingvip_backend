/*
 *
 * [your-sails-app]/config/autoreload.js
 */
// @link https://github.com/sgress454/sails-hook-autoreload#example
module.exports.autoreload = {
  active: true,
  usePolling: false,
  dirs: [
    "api/models",
    "api/controllers",
    "api/services"
  ]
};

