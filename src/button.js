function btn_click() {
    document.getElementById('txt1').style.display = 'inline';
    var random_number = random_num();
    console.log(random_number);
    localStorage.setItem("random_number", random_number);

}
var times=0;
function btn_click_1() {
    times++;
    var random_number = JSON.parse(localStorage.getItem("random_number"));
    var array_random_num = compare(random_number, document.getElementById('guess').value);
    var result;
    if(array_random_num[0]!=4&&times!=6){
        result = array_random_num[0] + "A" + array_random_num[1] + "B";
    }
    if(array_random_num[0]!=4&&times==6){
        result ="您已猜了6次！";
    }
    if(array_random_num[0]==4&&array_random_num[1]==0){
        result ="猜对了！";
    }
    document.getElementById("txt2").innerText = result;
    document.getElementById('txt3').style.display = 'inline';
}
