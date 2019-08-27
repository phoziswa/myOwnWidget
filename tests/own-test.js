describe('counter function' , function(){
    it('should increase the toatal' , function(){

         var phoneBills = calculateBill();
         phoneBills.billsTotal("call");

        assert.equal(phoneBills.bills(), 2.75);
    });
      });