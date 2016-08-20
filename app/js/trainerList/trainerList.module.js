var angular = require('angular'),
    navbarLeftSideComponent = require('./components/navbarLeftSide.component'),
    rightSideDropdownListComponent = require('./components/rightSideDropdownList.component'),
    trainerListComponent = require('./components/trainerList.coponent');

module.exports = angular
    .module('app.trainerList.mainModule', [
        navbarLeftSide.name,
        rightSideDropdownList.name,
        trainerListComponent.name
    ]);