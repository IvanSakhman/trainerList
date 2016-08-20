var angular = require('angular');

module.exports = angular
    .module('app.navbarLeftSide.module', [])
    .component('navbarLeftSide', {
        templateUrl: 'app/js/trainerList/components/navbarLeftSide.template.html',
        controller: NavbarController,
        bindings: {
            trainerList: '<'
        }
    });