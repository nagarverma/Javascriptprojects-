//document.write(new Date());

//var button=document.getElementById("run");
//button.addEventListener("click",demo);
//function demo(){
  //  window.alert("welcome")
//}

//function stp(){
  //  button.removeEventListener("click",demo);
//}



///start new coding/////
//function stp (){
  //  var date = new Date();
    //var time=date.toLocaleTimeString();
    //document.write(time);
//}
//stp();
//var stp;
//function test(){
  //  var result=document.getElementById("result");
    //var x=1;
    //function demo(){
      //  result.innerHTML=x++;
    //}
   //stp = setInterval(demo,10);
//}
//function stop(){
  //  clearInterval(stp)
//}

var stp;
function test(){
    var result=document.getElementById("result");
    var x=11;
    function demo(){
        result.innerHTML=x--;
        if(x==1)

            result.innerHTML="happy birthday yash!!!";
            clearInterval(stp);
        

        
            
        
    }
    
    stp=setInterval(demo,1000)


}




