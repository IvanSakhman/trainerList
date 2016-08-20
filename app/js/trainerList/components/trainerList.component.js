var angular = require('angular');

module.exports = angular
    .module('app.trainerList.module', [])
    .component('trainerist', {
        templateUrl: 'app/js/trainerList/components/trainerList.template.html',
        controller: TrainerListController

    })