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
