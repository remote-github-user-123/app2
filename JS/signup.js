document.getElementById("email").addEventListener("blur",function(){
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (! document.getElementById("email").value.match(validRegex))
        document.getElementById('2').innerHTML="Invalid email";
    else
        document.getElementById('2').innerHTML="";

});

