var form=document.getElementById("frm");
form.onsubmit=function(){

    var user={first:document.getElementById("user").value,last:document.getElementById("last").value,result:document.getElementById("result")}
    user.result.innerHTML=user.first+""+user.last+"";
    return false;
}