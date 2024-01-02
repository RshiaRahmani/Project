
function UserBox(){
    if(document.getElementById('userbox').style.display == 'none'){
        document.getElementById('userbox').style.display = 'block';
    }else{
        document.getElementById('userbox').style.display = 'none';
    }
}
function calc(){

    let se1 = document.getElementById('session1');
    let se2 = document.getElementById('session2');
    let se3 = document.getElementById('session3');
    let se4 = document.getElementById('session4');
    let secount = 0;
    let totalPrice = 0;
    console.log(document.getElementById('dateFrom').value);
    
    if(document.getElementById('Presenter').checked){

        document.getElementById('Participant').style = ""; 

        if(se1.checked){
            totalPrice += 250;
            document.getElementById('cost1').innerHTML = "250";
            secount++;
        }else{
            document.getElementById('cost1').innerHTML = "";
        }
        if(se2.checked){
            totalPrice += 250;
            document.getElementById('cost2').innerHTML = "250";
            secount++;
        }else{
            document.getElementById('cost2').innerHTML = "";
        }
        if(se3.checked){
            totalPrice += 250;
            document.getElementById('cost3').innerHTML = "250";
            secount++;
        }else{
            document.getElementById('cost3').innerHTML = "";
        }
        if(se4.checked){
            totalPrice += 250;
            document.getElementById('cost4').innerHTML = "250";
            secount++;
        }else{
            document.getElementById('cost4').innerHTML = "";
        }

        if( (secount>=2) && (totalPrice>=1000) ){
            document.getElementById('result').innerHTML = (totalPrice*0.85)+" (Є) <br> <p style='color: red;''>(15% discount)</p> "
        }else{
            document.getElementById('result').innerHTML = totalPrice+" (Є)"
        }


    }else if(document.getElementById('Audiance').checked){
        
        document.getElementById('Participant').style = ""; 

    }else {
        console.log('mark bitch');
        document.getElementById('Participant').style = "border: 5px solid red;"; 
    }

    

    //     if(document.getElementById('session1').checked){
    //         a++
    //     }

    // console.log(a);

}