(function () {
    'use strict';

    angular.module('app.services').factory('CalcService', CalcService);

    /* @ngInject */
    function CalcService() {
        var bandA = {
            "Black" : 0,
            "Brown" : 1,
            "Red"   : 2,
            "Orange" : 3,
            "Yellow" : 4,
            "Green" : 5,
            "Blue"  : 6,
            "Violet" : 7,
            "Gray"  : 8,
            "White" : 9
        }
        var bandB = {
            "Black" : 0,
            "Brown" : 1,
            "Red"   : 2,
            "Orange" : 3,
            "Yellow" : 4,
            "Green" : 5,
            "Blue"  : 6,
            "Violet" : 7,
            "Gray"  : 8,
            "White" : 9
        }
        var bandC = {
            "Black" : 0,
            "Brown" : 1,
            "Red"   : 2,
            "Orange" : 3,
            "Yellow" : 4,
            "Green" : 5,
            "Blue"  : 6,
            "Violet" : 7,
            "Gray"  : 8,
            "White" : 9,
            "Gold" : -1,
            "Silver" : -2
        }
        var bandD = {
            "Brown" : 0.01,
            "Red"   : 0.02,
            "Yellow" : 0.05,
            "Green" : 0.005,
            "Blue"  : 0.0025,
            "Violet" : 0.001,
            "Gray"  : 0.0005,
            "Gold" : 0.05,
            "Silver" : 0.1,
            "None" : 0.2
        }

        var service = {
            lower : null,
            upper : null,
            calcValue : function(Acolor,Bcolor,Ccolor,Dcolor){

                if(bandA[Acolor] === undefined || bandB[Bcolor] === undefined || bandC[Ccolor] === undefined ){
                    service.lower = null;
                    service.upper = null;
                    return;
                }
                if(bandD[Dcolor]){
                    service.lower = (bandA[Acolor]*10 + bandB[Bcolor])*Math.pow(10 , bandC[Ccolor])*(1-bandD[Dcolor]);
                    service.upper = (bandA[Acolor]*10 + bandB[Bcolor])*Math.pow(10 , bandC[Ccolor])*(1+bandD[Dcolor]);
                }
                else{
                     service.lower = (bandA[Acolor]*10 + bandB[Bcolor])*Math.pow(10 , bandC[Ccolor]);
                     service.upper = (bandA[Acolor]*10 + bandB[Bcolor])*Math.pow(10 , bandC[Ccolor]);
                }
            }

        };
        return service;
    }
})();