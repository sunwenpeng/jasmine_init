describe('comparetest',function(){
    it('result should be 0,0',function(){
        var result;
        result=  compare(1234,5678)[0]==0&&compare(1234,5678)[1]==0   ;
        expect(result).toBeTruthy()
    });
    it('result should be 1,0',function(){
        var result;
        result=   compare(1234,5638)[0]==1&&compare(1234,5638)[1]==0;
        expect(result).toBeTruthy()
    });
    it('result should be 4,0',function(){
        var result;
        result=   compare(1234,1234)[0]==4&&compare(1234,1234)[1]==0 ;
        expect(result).toBeTruthy()
    });
    it('result should be 0,4',function(){
        var result;
        result= compare(1234,4321)[0]==0&&compare(1234,4321)[1]==4;
        expect(result).toBeTruthy()
    });
})


















/**/

















/**/