describe('guessNumber_test',function(){
    it('guess right in the first time ',function(){
        var result=  compare(1234,1234)[0]==4&&compare(1234,1234)[1]==0;
        expect(result).toBeTruthy();
    });
    it('guess right in the sixth time ',function(){
        var result_1= compare(1234,5321)[0]==0&&compare(1234,5321)[1]==3;
        var result_2= compare(1234,5341)[0]==0&&compare(1234,5341)[1]==3;
        var result_3= compare(1234,5326)[0]==0&&compare(1234,5326)[1]==2;
        var result_4= compare(1234,4321)[0]==0&&compare(1234,4321)[1]==4;
        var result_5= compare(1234,5324)[0]==1&&compare(1234,5324)[1]==2;
        var result_6= compare(1234,1234)[0]==4&&compare(1234,1234)[1]==0;
        var result= result_1&&result_2&&result_3&&result_4&&result_5&&result_6;
        expect(result).toBeTruthy();
    });
    it('guess right in the second time ',function(){
        var result_1= compare(1234,5321)[0]==0&&compare(1234,5321)[1]==3;
        var result_2= compare(1234,1234)[0]==4&&compare(1234,1234)[1]==0;
        var result= result_1&&result_2;
        expect(result).toBeTruthy();
    });
    it('guess wrong in the front six time',function(){
        var result_1= compare(1234,5321)[0]==0&&compare(1234,5321)[1]==3;
        var result_2= compare(1234,5341)[0]==0&&compare(1234,5341)[1]==3;
        var result_3= compare(1234,5326)[0]==0&&compare(1234,5326)[1]==2;
        var result_4= compare(1234,4321)[0]==0&&compare(1234,4321)[1]==4;
        var result_5= compare(1234,5324)[0]==1&&compare(1234,5324)[1]==2;
        var result_6= compare(1234,1254)[0]==3&&compare(1234,1254)[1]==0;
        var result= result_1&&result_2&&result_3&&result_4&&result_5&&result_6;
        expect(result).toBeTruthy();
    });
})

