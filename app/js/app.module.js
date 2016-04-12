(function() {
    'use strict';
	//root module for app
	angular
	    .module('app', [
	        'app.core',
	        'app.main',
	        'app.services'
	    ]);
	angular.module('app').run(ApplicationRun);

	/* @ngInject */
	function ApplicationRun($rootScope,$state){
		$rootScope.$on('$stateChangeStart',stateChange);

		function stateChange(event,toState,toParams, fromState,fromParams){

		}
	}
})();