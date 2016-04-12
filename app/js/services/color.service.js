(function () {
    'use strict';

    angular.module('app.services').factory('ColorService', ColorService);

    /* @ngInject */
    function ColorService() {
        var colorMap = {
            "Black" : "Black",
            "Brown" : "Brown",
            "Red"   : "Red",
            "Orange" : "Orange",
            "Yellow" : "Yellow",
            "Green" : "Green",
            "Blue"  : "Blue",
            "Violet" : "Violet",
            "Gray"  : "Gray",
            "White" : "White",
            "Gold" : "Gold",
            "Silver" : "Silver"
        }

        return colorMap;
    }
})();