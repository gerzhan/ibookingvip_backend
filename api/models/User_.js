/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        // The user's name
        name: {
            type: 'string',
            required: true
        },

        email: {
            type: 'String',
            unique: true,
            lowercase: true
        },

        password: {
            type: 'String'
        },

        encryptedPassword: {
            type: 'String'
        }
    }
};
