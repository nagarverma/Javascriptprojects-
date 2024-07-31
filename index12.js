var  user=document.getElementById("Firstname");
user.onblur= function stp(){
    var user_input=document.getElementById("Firstname").value;
    var wrning_image= document.getElementById("Firstname");
    var wrn_img=document.getElementById("wrning");



    if(user_input=="")
        {
            wrning_image.style.border="1px solid red";
            wrn_img.style.display="block";
            var pnnn=document.getElementById("pnnnmm");
            wrning_image.onclick=function stp(){


                if(user_input==""){
                    pnnn.style.display="block";
                    wrning_image.style=border="1 px solid black";
                    wrn_img.style.display="none"

                    
                }
                wrning_image.onblur=function stp(){
                    pnnn.style.display="none";
                    wrning_image.style.border="1px solid red";
                    wrn_img.style.display="block";
                    firstname();



                }

            
            }
            
        }
        else
        {

        }
    }
    // satrt passsword Validation //
    var pass=document.getElementById("pass_input");
    pass.onclick=function stp()
    {
        var pass_text=document.getElementById("pass");
        var Password_hint_box =document.getElementById("Password_hint");
        Password_hint_box.style.display="block";
        pass.onclick=function()
        {
            var new_pass=pass_text.innerHTML;
            pass.value="pass_text";
            if(pass=="pass_tetxt");
            {
                Password_hint_box.style.display="none"; 
            }


        }

    }