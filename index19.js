var upload =document.getElementById("upload");
upload.onchange=function()
{
    var reader=new FileReader();
    reader.readAsDataURL(upload.files[0]);

    reader.onload=function()
    {
        var file_name=reader.result;
        var video=document.getElementById("box");
        video.src=file_name;
    }
} 