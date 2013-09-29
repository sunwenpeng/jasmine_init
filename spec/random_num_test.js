describe('random_num', function () {
    it('number has four numbers', function () {
        var result, random_number;

        random_number = random_num();
        result = 100 <= random_number && random_number <= 9999;

        expect(result).toBeTruthy();
    });
    it('number should be random', function () {
        var result;
        var j = 0;
        var a = random_num();
        for (var i = 1; i <= 1000; i++) {
            if (a == random_num()) {
                j++;
            }
        }


        result = j<=10;
        expect(result).toBeTruthy();
    });
    it('it should be different number', function () {
            var result;
            var randomnumber=random_num();
            var a = randomnumber % 10;
            var b = Math.floor(randomnumber/10) % 10;
            var c = Math.floor(randomnumber/100) % 10;
            var d = Math.floor(randomnumber/1000) %10;
            console.log(a);  console.log(b); console.log(c); console.log(d);
            if  (d!=0) {

                //  expect(a != b && b != c && c != d && a != c && a != d && b != d).toBeTruthy();

                result = a!=b&&a!=c&&a!=d&&b!=c&&b!=d&&c!=d}
            if(d==0)    {
                result= a!=b&&a!=c&&b!=c&&a!=0&&b!=0&&c!=0
            }
            expect(result).toBeTruthy(); }

    );
});