function display()
{    
    let pass1,cpass1,txt;
    pass1=document.getElementById("password").value;
    cpass1=document.getElementById("confirm-password").value;

    if (pass1 == "")
    {
        txt="Please enter the password";
        document.getElementById("dis").disabled= true;
        document.getElementById("dis").style.background="none";
    }
    else if (cpass1 == "")
    {
        txt="Please enter confirm-password";
        document.getElementById("dis").disabled= true;
        document.getElementById("dis").style.background="none";
    }
    else if (pass1!=cpass1)
    {
        txt="Password is not matched";
        document.getElementById("dis").disabled= true;
        document.getElementById("dis").style.background="none";
        
    }
    else
    {
        txt="Password is same"; 
        document.getElementById("dis").disabled= false;  
        document.getElementById("dis").style.background="MediumTurquoise";
    }
    document.getElementById("print").innerHTML=txt;

}
function num()
{
    var tel = document.getElementById("phone").value;
    if(isNaN(tel))
    {
        document.getElementById("tels").innerHTML = "Please enter numbers only";
        document.getElementById("dis").disabled= true;
        document.getElementById("dis").style.background="none";
    }
    else
    {
        document.getElementById("tels").innerHTML = "";
        document.getElementById("dis").disabled= false;
        document.getElementById("dis").style.background="MediumTurquoise";
    }
}

function datechecker()
{
    var date=new Date();
    var birthday= document.getElementById("date").value;
    var difference=date.getDate() - birthday.getDate();
    console(difference);

    
}

function submit()
{
    alert("Your from has been submited successfully,Thank you for visit");
}
