var user=document.getElementById("user");
var form=document.getElementById("formm")

form.onsubmit=function()
{
//
//if(user.value=="a"){
  //  window.alert("Vowels")
//}
//else if(user.value=="e"){
  //  window.alert("Vowels")
//}
//else if(user.value=="i"){
  //  window.alert("Vowels")
//}
//else if(user.value=="o"){
  //  window.alert("Vowels")
//}
//else if(user.value=="u"){
  //  window.alert("Vowels")
//}
//else
//{
//window.alert("constent")
//}

switch(user.value){
    case 'a':{window.alert("vowels")}
    break;
    case 'i':{window.alert("vowels")}
    break;
    case 'e':{window.alert("vowels")}
    break;
    case 'o':{window.alert("vowels")}
    break;
    case 'u':{window.alert("vowels")}
    break;
    default:{window.alert("Consentet")};
    
}

}