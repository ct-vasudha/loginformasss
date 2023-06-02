
function  uname(){
    const n=document.getElementById("txtUserName");
    const l=n.value.length;
    if(l===0){
        document.getElementById("uerror").innerHTML="Username cannot be empty";
        n.style.backgroundColor="red";
    }
    else if(l<3){
        document.getElementById("uerror").innerHTML="User name must be between 3 and 25 characters";
        n.style.backgroundColor="red";
        
    }
    else{
        n.style.backgroundColor="green";
        document.getElementById("uerror").innerHTML="";


    }

}

function  mail(){
    const m=document.getElementById("txtemail");
    const s=m.value;
    var emailpattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const z= emailpattern.test(s);
    if(z){
        
        m.style.backgroundColor="green";
        document.getElementById("eerror").innerHTML="";
    }
    
    else{
        m.style.backgroundColor="red";
        document.getElementById("eerror").innerHTML="please enter a valid email address";


    }

}


function  pwdfun(){
    const a=document.getElementById("txtpswd");
    const b=a.value;
    function validatepassword(pwdfun){
        var passwordpattern= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[! @ # $ % ^ & * () _ - = + ]).+$/;
        return passwordpattern.test(pwdfun);
    }
    var isvalid = validatepassword(b);
    if(b.length!==0 && b.length<9){
        if(isvalid==true){
            a.style.backgroundColor="green";
            document.getElementById("perror").innerHTML="";
        }

        else{
        a.style.backgroundColor="red";
        document.getElementById("perror").innerHTML="password must has atleast  8 charactersthat include 1 lowercase character, 1 uppercase character, 1 numeric character and 1 special character";
        }
    }
    else{

        a.style.backgroundColor="red";
        document.getElementById("perror").innerHTML="password cannote be empty";
        
    }
    


}


function conpwdfun(){
    var f=document.getElementById("txtpswd").value;
    var g=document.getElementById("txtconpswd").value;
    //const h=g.value;
    if(f==g){
        document.getElementById("cperror").innerHTML="";
        document.getElementById("txtconpswd").style.backgroundColor="green";

    }
    else{
        document.getElementById("cperror").innerHTML="passwords does not matched re enter the password";
        document.getElementById("txtconpswd").style.backgroundColor="red";
       
    }
}

function show_pswd(){
    document.getElementById("txtpswd").setAttribute("type", "text");
    document.getElementById("togglePassword").setAttribute("class", "fa fa-eye-slash");
}

function hide_pswd(){
    document.getElementById("txtpswd").setAttribute("type", "password");
    document.getElementById("togglePassword").setAttribute("class", "fa fa-eye");
}

