  function random_num(){
   // console.log('invoke')
    while(1)
    {
        var a=Math.floor(Math.random()*10);
        var b=Math.floor(Math.random()*10);
        var c=Math.floor(Math.random()*10);
        var d=Math.floor(Math.random()*10);
        if(a!=10&&b!=10&&c!=10&&d!=10&&a!=b&&a!=c&&a!=d&&b!=c&&b!=d&&c!=d){
           var randomnum=a*1000+b*100+c*10+d;
            console.log(randomnum+"asf");
            return randomnum;
         }
    }
};