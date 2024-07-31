var form= document.getElementById("form");
var box=document.getElementById("box")
form.onsubmit=function(){

    var output=[];
    output[0]=document.getElementById("user1").value;
    output[1]=document.getElementById("user2").value;
    output[2]=document.getElementById("user3").value;
    output[3]=document.getElementById("user4").value;

    


    box.innerHTML=output;
    return false;
    
    

    
}