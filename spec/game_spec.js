/**
 * Created with JetBrains RubyMine.
 * User: fortunezhang
 * Date: 13-7-5
 * Time: 下午1:14
 * To change this template use File | Settings | File Templates.
 */

describe("Guess Number - compare two number ", function () {

    it("give two number string  '1234' '2345' ,when compare two number ,then get '0A', ", function () {
        var number1 = '1234';
        var number2 = '2345';

        var result = Game._get_count_of_A_when_compare_to_number(number1, number2);

        expect(result).toEqual("0A")
    });


    it("give two number string  '1234' '1234' ,when compare two number ,then get '4A', ", function () {
        var number1 = '1234';
        var number2 = '1234';

        var result = Game._get_count_of_A_when_compare_to_number(number1, number2);

        expect(result).toEqual("4A");
    });


    it("give two number string  '1234' '5294' ,when compare two number ,then get '2A', ", function () {
        var number1 = '1234';
        var number2 = '5294';


        var result = Game._get_count_of_A_when_compare_to_number(number1, number2);

        expect(result).toEqual("2A");
    });


    it("give two number string  '1234' '5294' ,when compare two number ,then get '0B', ", function () {
        var number1 = '1234';
        var number2 = '5294';

        var result = Game._get_count_of_B_when_compare_to_number(number1, number2);

        expect(result).toEqual("0B");
    });


    it("give two number string  '1234' '4321' ,when compare two number ,then get '4B', ", function () {
        var number1 = '1234';
        var number2 = '4321';


        var result = Game._get_count_of_B_when_compare_to_number(number1, number2);

        expect(result).toEqual("4B");
    });


    it("give two number string  '1784' '4321' ,when compare two number ,then get '2B', ", function () {
        var number1 = '1784';
        var number2 = '4321';

        var result = Game._get_count_of_B_when_compare_to_number(number1, number2);

        expect(result).toEqual("2B");
    });


    it("give two number string  '1234' '5678' ,when compare two number, then get '0A0B', ", function () {
        var number1 = '1234';
        var number2 = '5678';

        var result = Game.compare_to_number(number1, number2);

        expect(result).toEqual("0A0B");
    });

    it("give two number string  '1234' '1234' ,when compare two number, then get '4A0B', ", function () {
        var number1 = '1234';
        var number2 = '1234';

        var result = Game.compare_to_number(number1, number2);

        expect(result).toEqual("4A0B");
    });


    it("give two number string  '1234' '4321' ,when compare two number ,then get '0A4B', ", function () {
        var number1 = '1234';
        var number2 = '4321';

        var result = Game.compare_to_number(number1, number2);

        expect(result).toEqual("0A4B");
    });


    it("give two number string  '1234' '1432' ,when compare two number ,then get '2A2B', ", function () {
        var number1 = '1234';
        var number2 = '1432';

        var result = Game.compare_to_number(number1, number2);

        expect(result).toEqual("2A2B");
    });

});


describe("generate 4 bit random number", function () {

    it("when generate a 4 bit number ,it should be 4 bit", function () {
        var random_numbers = "", random_numbers_length = -1 ;

        random_numbers = Game.generate_4_bit_number();
        random_numbers_length = random_numbers.length;

        expect(random_numbers_length).toEqual(4);
    })

    it("when generate a 4 bit numbers, it does not has same number", function () {

        var random_numbers = "", is_same= false ;

        random_numbers= Game.generate_4_bit_number();
        for(var i = 0; i < 4; i+=1) {
            if(i != random_numbers.lastIndexOf(random_numbers[i]))
                is_same = true;
        }

        expect(is_same).toEqual(false);
    });

    it("when generate a 4 bit numbers, it should be number",function() {
        var is_not_number = true , random_numbers = "";
        random_numbers = Game.generate_4_bit_number();

        is_not_number = isNaN(random_numbers) ;

        expect(is_not_number).toEqual(false) ;
    }) ;

    it(" when generate a 4 bit number, it maybe not equal before it ",function() {

        var before_random_numbers = '', random_numbers = "", is_random = true ;

        before_random_numbers = Game.generate_4_bit_number();
        for(var i = 0 ; i< 100 ; i+=1) {
            random_numbers = Game.generate_4_bit_number();
            if(random_numbers == before_random_numbers) {
                is_random = false ;
            }
            before_random_numbers = random_numbers ;
        }
        expect(is_random).toEqual(true);


    });

});


