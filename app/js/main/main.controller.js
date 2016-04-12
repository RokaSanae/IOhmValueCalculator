/* 	This controller binds value to view.
	It sets the options for each band.
	It has two methods:
		1.call service function to calculate resistance
		2.reset all value
*/
(function(){
	'use strict';
	angular.module('app.main').controller('MainController',MainController);

	/* @ngInject */
	function MainController($http,CalcService){
		var vm = this;
		vm.bandA = null;
		vm.bandB = null;
		vm.bandC = null;
		vm.bandD = null;

		vm.calcService = CalcService;

		vm.a = [
			"Black",
			"Brown",
			"Red",
			"Orange",
			"Yellow",
			"Green",
			"Blue",
			"Violet",
			"Gray",
			"White"
		];
		vm.b = [
			"Black",
			"Brown",
			"Red",
			"Orange",
			"Yellow",
			"Green",
			"Blue",
			"Violet",
			"Gray",
			"White"
		];
		vm.c = [
			"Black",
			"Brown",
			"Red",
			"Orange",
			"Yellow",
			"Green",
			"Blue",
			"Violet",
			"Gray",
			"White",
			"Gold",
			"Silver"
		];
		vm.d = [
            "Brown",
            "Red",
            "Yellow",
            "Green",
            "Blue",
            "Violet",
            "Gray",
            "Gold",
            "Silver",
            "None"
        ];

		vm.getResult = function(){
			vm.calcService.calcValue(vm.bandA, vm.bandB, vm.bandC, vm.bandD);		
		}
		vm.reset = function(){
			vm.bandA = null;
			vm.bandB = null;
			vm.bandC = null;
			vm.bandD = null;
			vm.getResult();	
		}
	}
})();