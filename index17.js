var form=document.getElementById("frm");
form.onsubmit=function(){

    var user=document.getElementById("input").value;
    var result=document.getElementById("result")
    var i;
    for(i=1;i<=10;i++)
        {
            result.innerHTML+=user*i+"<br>";
        }
        return false;
        
}