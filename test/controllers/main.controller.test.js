describe('MainController Test', function(){
	beforeEach(module('app'));
	describe('MainController', function(){
		it('MainController should exist', inject(function($controller){
			var mainController = $controller('MainController');
			expect(mainController).to.exist;
		}));
		it('MainController should have access to CalcService', inject(function($controller){
			var mainController = $controller('MainController');
			expect(mainController.calcService).be.a('object');
		}));
		it('MainController should have a getResult method and reset method', inject(function($controller){
			var mainController = $controller('MainController');
			expect(mainController.getResult).be.a('function');
			expect(mainController.reset).be.a('function');
		}));
	});
	describe('getResult', function(){
		it('getResult should handle wrong value', inject(function($controller){
			var mainController = $controller('MainController');
			mainController.a = null;
			mainController.b = "eshs";
			mainController.c = "Red";
			mainController.d = "asasda";
			mainController.getResult();
			expect(mainController.calcService.lower).to.eql(null);
			expect(mainController.calcService.upper).to.eql(null);

		}));
		it('getResult should handle correct value', inject(function($controller){
			var mainController = $controller('MainController');
			mainController.bandA = "Orange";
			mainController.bandB = "Red";
			mainController.bandC = "Brown";
			mainController.getResult();
			expect(mainController.calcService.lower).to.eql(320);
			expect(mainController.calcService.upper).to.eql(320);

			mainController.bandA = "Orange";
			mainController.bandB = "Red";
			mainController.bandC = "Brown";
			mainController.bandD = "Yellow";
			mainController.getResult();
			expect(mainController.calcService.lower).to.eql(304);
			expect(mainController.calcService.upper).to.eql(336);
		}));
	});
	describe('reset', function(){
		it('reset should correctly reset', inject(function($controller){
			var mainController = $controller('MainController');
			mainController.bandA = "Orange";
			mainController.bandB = "Red";
			mainController.bandC = "Brown";
			mainController.bandD = "Yellow";
			mainController.getResult();
			expect(mainController.calcService.lower).to.eql(304);
			expect(mainController.calcService.upper).to.eql(336);

			mainController.reset();
			expect(mainController.bandA).to.eql(null);
			expect(mainController.bandB).to.eql(null);
			expect(mainController.bandC).to.eql(null);
			expect(mainController.bandD).to.eql(null);
			expect(mainController.calcService.lower).to.eql(null);
			expect(mainController.calcService.upper).to.eql(null);
		}));
	});
});