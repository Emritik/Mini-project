function show() 
{
    let data=document.getElementById("phone").value;
    alert("OTP is sent on " +  data + " Number");
    document.getElementById("para").innerHTML=""    
}

var pass,cpass;
pass=document.getElementById("password").value;
cpass=document.getElementById("confirm-password").value;
function check()
{
if(pass!=cpass)
{
    document.getElementById("print").innerHTML="Password not matched"
    console.log("print");
}
}
