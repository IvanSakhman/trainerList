var angular = require('angular');

module.exports = angular
    .module('app.rightSideDropdown.module', [])
    .component('rightSideDropdown', {
        templateUrl: 'app/js/trainerList/components/rightSideDropdown.template.html',
        controller: RightSideDropdownController,
        bindings: {
            trainerList: '<'
        }
    });