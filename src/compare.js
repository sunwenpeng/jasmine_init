    function compare(random_num, input_num) {
    var num_A = 0, num_B = 0;
    var aa = new Array(4), bb = new Array(4);
    for (var i = 1; i <= 4; i++) {
        aa[i] = random_num % 10;
        bb[i] = input_num % 10;
        random_num = Math.floor(random_num / 10);
        input_num = Math.floor(input_num / 10);
    }
    return compare_AB(aa, bb);
    }

    function compare_AB(array1, array2) {
        var num_a = 0, num_b = 0;
        for (var i = 1; i <= 4; i++) {
            for (var j = 1; j <= 4; j++) {
                if (array1[i] == array2[j] && i == j) {
                    num_a++;
                }
                if (array1[i] == array2[j] && i != j) {
                    num_b++;
                }
            }
        }
        var number_A_number_B = [num_a, num_b];
        return number_A_number_B;
    }







