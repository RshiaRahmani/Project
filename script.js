
var webuser;

function login(){


    
    let userpass = webuser = document.getElementById('LGinp2').value;
    webuser = document.getElementById('LGinp1').value;
    console.log(webuser);
    console.log(userpass.length);
    document.getElementById("welcome").innerHTML = "Welcome Back, " + webuser +  ' <img src="Content/main/hand.png" alt="wave hand" width="45px">';
    document.getElementById("userProName").innerHTML = webuser ;
    if(webuser = document.getElementById('LGinp1').value == ""){
        document.getElementById('LGinp1').style.border = "1px solid red";
    } else{
        if(webuser = document.getElementById('LGinp2').value == "" || (userpass.length <= 6 ) ){
            document.getElementById('LGinp2').style.border = "1px solid red";
        }else{
            if (document.getElementById('LGinp3').checked) {
                document.getElementById('login').style.display = "none";
                document.getElementById('nav').style.filter = "blur(0rem) saturate(1)";
                document.getElementById('main').style.filter = "blur(0rem) saturate(1)";  
                alert('You successfully loged in');   
            } else {

                document.getElementById('LGinp3').style.outline = "1px solid red";
                
            } 
        }     
    }
   
}

function UserBox(){
    if(document.getElementById('userbox').style.display == 'none'){
        document.getElementById('userbox').style.display = 'block';
    }else{
        document.getElementById('userbox').style.display = 'none';
    }
}