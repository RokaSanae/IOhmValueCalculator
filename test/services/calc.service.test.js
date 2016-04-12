describe("A test suite", function() {
   beforeEach(function() { });
   afterEach(function() { });
   it('should fail', function() { expect(true).to.be.false; });
});
describe('Calc Service Test', function(){
	beforeEach(module('app.services'));
	describe('CalcService', function(){
		it('CalcService should exist', inject(function(CalcService){
			expect(CalcService).to.exist;
		}));
		it('CalcService should have a calcValue method', inject(function(CalcService){
			expect(CalcService.calcValue).be.a('function');
		}));
		it('CalcService should have two variables', inject(function(CalcService){
			expect(CalcService.lower).to.eql(null);
			expect(CalcService.upper).to.eql(null);
		}));
	});
	describe('calcValue', function(){
		it('CalcService should handle wrong value', inject(function(CalcService){
			CalcService.calcValue(null,"ANY","TEST",null);
			expect(CalcService.lower).to.eql(null);
			expect(CalcService.upper).to.eql(null);
		}));
		it('CalcService should handle correct value', inject(function(CalcService){
			CalcService.calcValue("Orange","Red","Brown",null);
			expect(CalcService.lower).to.eql(320);
			expect(CalcService.upper).to.eql(320);

			CalcService.calcValue("Orange","Red","Brown","Yellow");
			expect(CalcService.lower).to.eql(304);
			expect(CalcService.upper).to.eql(336);
		}));
	});
});