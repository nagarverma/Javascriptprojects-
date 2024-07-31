 var user=document.getElementById("user");
 var user_m=document.getElementById("user_m");
 var pass=document.getElementById("pass");
 var pass_m=document.getElementById("pass_m");
  var form_page=document.getElementById("form_page");

  form_page.onsubmit=function(){




    if(user.value=="" && pass.value==""){
        user_m.innerHTML="Empty user found";
        pass_m.innerHTML="Empty user password";
        return false;


    }


    if(user.value==""){
        user_m.innerHTML="Empty user found";
        return false;
    }
    if(pass.value==""){
        pass_m.innerHTML="Empty user password";
        return false;
    }
    if(user.value=="jitu" && pass.value=="12345"){
        window.location="https://en.wikipedia.org/wiki/Google_Family_Link";
        return false;


    }
  }



