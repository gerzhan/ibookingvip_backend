# Установка [sails-hook-autoreload](https://github.com/sgress454/sails-hook-autoreload#sails-hook-autoreload)

Предназначен для автоперезагрузки при изменении controllers, models, services

## [Установка](https://github.com/sgress454/sails-hook-autoreload#installation)  

## [Использование](https://github.com/sgress454/sails-hook-autoreload#usage)

## [Настройка](https://github.com/sgress454/sails-hook-autoreload#configuration)

    // [your-sails-app]/config/autoreload.js
    module.exports.autoreload = {
      active: true,
      usePolling: false,
      dirs: [
        "api/models",
        "api/controllers",
        "api/services"
      ]
    };
