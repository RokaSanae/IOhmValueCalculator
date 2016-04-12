(function(){
	'use strict';
	angular.module('app.main').controller('MainController',MainController);

	/* @ngInject */
	function MainController($http,CalcService){
		var calcService = CalcService;
		var vm = this;
		vm.bandA = null;
		vm.bandB = null;
		vm.bandC = null;
		vm.bandD = null;
		vm.result = null;

		vm.getResult = function(){
			vm.result = calcService.calcValue(vm.bandA, vm.bandB, vm.bandC, vm.bandD)		
		}
	}
})();