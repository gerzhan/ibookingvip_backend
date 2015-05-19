# Расширение функционала

## Реализация авторизации и аутоидентификации пользователей ([по аналогии](https://github.com/ProLoser/angular-sails-seed/blob/master/backend/))

> установка Passport и стратегий

    $npm i passport -S
    $npm i passport-facebook -S
    $npm i passport-github -S
    $npm i passport-google -S
    $npm i passport-local -S
    $npm i passport-twitter -S

> установка стандартного [sails-generate-auth](https://github.com/kasperisager/sails-generate-auth)

    $npm i sails-generate-auth -D

> установка дополнительных пакетов для [sails-generate-auth](https://github.com/kasperisager/sails-generate-auth)

    $npm i bcryptjs -S
    $npm i validator -S

> генерация кода для авторизации и авторизации пользователей (согласно [sails-generate-auth](https://github.com/kasperisager/sails-generate-auth))

    $sails generate auth

> внесение исправление в `config/bootstrap.js` согласно [инструкции sails-generate-auth](https://github.com/kasperisager/sails-generate-auth#requirements)

    sails.services.passport.loadStrategies();

> внесение исправление в `config/policies.js` согласно [инструкции sails-generate-auth](https://github.com/kasperisager/sails-generate-auth#requirements)

    '*': [ 'passport']

> внесение исправление в `config/routes.js` согласно [инструкции sails-generate-auth](https://github.com/kasperisager/sails-generate-auth#requirements)

    'get /login': 'AuthController.login',
    'get /logout': 'AuthController.logout',
    'get /register': 'AuthController.register',

    'post /auth/local': 'AuthController.callback',
    'post /auth/local/:action': 'AuthController.callback',

    'get /auth/:provider': 'AuthController.provider',
    'get /auth/:provider/callback': 'AuthController.callback',
    'get /auth/:provider/:action': 'AuthController.callback',

> создание и сохранение настроект в `config/passport.js` для локальной стратегии

    local: {
        strategy: require('passport-local').Strategy
    },

> добавление сообщений в локали согласно [инструкции sails-generate-auth](https://github.com/kasperisager/sails-generate-auth#requirements)

    "Error.Passport.Password.Invalid": "The provided password is invalid!",
    "Error.Passport.Password.Wrong": "Whoa, that password wasn't quite right!",
    "Error.Passport.Password.NotSet": "Oh no, you haven't set a password yet!",
    "Error.Passport.Username.NotFound": "Uhm, what's your name again?",
    "Error.Passport.User.Exists": "This username is already taken.",
    "Error.Passport.Email.NotFound": "That email doesn't seem right",
    "Error.Passport.Email.Missing": "You need to supply an email-address for verification",
    "Error.Passport.Email.Exists": "This email already exists. So try logging in.",
    "Error.Passport.Username.Missing": "You need to supply a username",
    "Error.Passport.Password.Missing": "Oh no, you haven't set a password yet!",
    "Error.Passport.Generic": "Snap. Something went wrong with authorization."

