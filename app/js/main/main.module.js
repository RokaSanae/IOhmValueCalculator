(function() {
    'use strict';
	//reusable components across modules
	angular.module('app.main',[
	    'app.core'
		]);
	angular.module('app.main').run(appRun);

	/* @ngInject */
	function appRun(routerHelper) {
	    routerHelper.configureStates(getStates(),'/main');
	}

	function getStates() {
	    return [
	        {
	            state: 'main',
	            config: {
	                templateUrl: 'js/main/main.view.html',
	                url: '/main',
	                controller:'MainController',
	                controllerAs:'main'
	            }
	        }
	    ];
	}
})();