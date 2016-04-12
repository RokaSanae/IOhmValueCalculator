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
			expect(CalcService).to.exist;
			expect(CalcService.calcValue).be.a('function');
		}));
	});
	describe('calcValue', function(){
		it('CalcService should handle wrong value', inject(function(CalcService){
			expect(CalcService).to.exist;
			expect(CalcService.calcValue).be.a('function');
		}));
		it('CalcService should handle correct value', inject(function(CalcService){
			expect(CalcService).to.exist;
			expect(CalcService.calcValue('Black','Black','Black','Gold')).to.eql('0 ~ 0');
		}));
	});
});