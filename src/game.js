/**
 * Created with JetBrains RubyMine.
 * User: fortunezhang
 * Date: 13-7-5
 * Time: 下午1:09
 * To change this template use File | Settings | File Templates.
 */

var Game = {};

Game._get_count_of_A_when_compare_to_number = function (number1, number2) {

    var count_a = 0;
    for (var i = 0; i < 4; i++) {
        if (number1.charAt(i) == number2.charAt(i)) {
            count_a++;
        }
    }
    return count_a + "A";
};

Game._get_count_of_B_when_compare_to_number = function (number1, number2) {
    var count_b = 0 ;
    for (var i = 0; i < 4; i++) {
        var char_in_number1 = number1.charAt(i);
        var char_index_in_number2 = number2.indexOf(char_in_number1);
        if (char_index_in_number2 != -1 && char_index_in_number2 != i) {
            count_b++;
        }
    }
    return count_b + "B";
};

Game.compare_to_number = function (number1, number2) {

    var count_a = this._get_count_of_A_when_compare_to_number(number1, number2);
    var count_b = this._get_count_of_B_when_compare_to_number(number1, number2);

    return count_a + count_b;
};


Game.generate_4_bit_number = function () {

    var random_numbers = "";
    for(var i = 0; i < 4 ; ) {
        var number = parseInt(Math.random()*10);
        if(random_numbers.indexOf(number) == -1)
        {
            random_numbers +=  number;
            i += 1;
        }
    }
    return random_numbers;
};


