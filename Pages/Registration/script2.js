//User box opens

function UserBox(){
    if(document.getElementById('userbox').style.display == 'none'){
        document.getElementById('userbox').style.display = 'block';
    }else{
        document.getElementById('userbox').style.display = 'none';
    }
}

//User box closes

//Registration page Calculation opens 

function calc(){

    // initial declrations

    //sessions
    let se1 = document.getElementById('session1');
    let se2 = document.getElementById('session2');
    let se3 = document.getElementById('session3');
    let se4 = document.getElementById('session4');
    let secount = 0;
    // Get the date inputs
    let date1 = new Date(document.getElementById('dateFrom').value);
    let date2 = new Date(document.getElementById('dateTo').value);
    // Calculate the difference in milliseconds
    let diff = Math.abs(date2 - date1);
    // Convert to days
    let diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));   
    //total price 
    let totalPrice = 0;
    
    if(document.getElementById('Presenter').checked){ // if Presenter is selected

        document.getElementById('Participant').style = ""; 
                
        if(date1 != "Invalid Date"){
            
            document.getElementById('BoxDateFrom').style = "";

            if(date2 != "Invalid Date"){

                document.getElementById('BoxDateTo').style = "";

                if(se1.checked){
                    totalPrice += 2*50*diffDays;
                    document.getElementById('cost1').innerHTML = 2*50*diffDays;
                    secount++;
                }else{
                    document.getElementById('cost1').innerHTML = "";
                }
                if(se2.checked){
                    totalPrice += 2*100*diffDays;
                    document.getElementById('cost2').innerHTML = 2*100*diffDays;
                    secount++;
                }else{
                    document.getElementById('cost2').innerHTML = "";
                }
                if(se3.checked){
                    totalPrice += 2*150*diffDays;
                    document.getElementById('cost3').innerHTML = 2*150*diffDays;
                    secount++;
                }else{
                    document.getElementById('cost3').innerHTML = "";
                }
                if(se4.checked){
                    totalPrice += 2*200*diffDays;
                    document.getElementById('cost4').innerHTML = 2*200*diffDays;
                    secount++;
                }else{
                    document.getElementById('cost4').innerHTML = "";
                }
        
                if( (secount>=2) && (totalPrice>=1000) ){
                    document.getElementById('result').innerHTML = "<p style='text-decoration: line-through;''>"+(totalPrice)+"</p>"+(totalPrice*0.85)+" (Є) <br> <p style='color: red;''>(15% discount)</p> ";
                }else{
                    document.getElementById('result').innerHTML = totalPrice+" (Є)"
                }

                setTimeout(function() {
                    if(confirm('Do u confirm this purchase?')){
                        alert('Thank you for choosing us!');
                    }else{
                        alert('application withdrawn')
                    }
                  }, 0);
            
    
            }else{
                document.getElementById('BoxDateTo').style = "border: 5px solid red;";
            }

        }else{
            document.getElementById('BoxDateFrom').style = "border: 5px solid red;";
        }


    }else if(document.getElementById('Audiance').checked){ // if Audiance is selected
        
        document.getElementById('Participant').style = ""; 

                        
        if(date1 != "Invalid Date"){
            
            document.getElementById('BoxDateFrom').style = "";

            if(date2 != "Invalid Date"){

                document.getElementById('BoxDateTo').style = "";

                if(se1.checked){
                    totalPrice += 1*50*diffDays;
                    document.getElementById('cost1').innerHTML = 1*50*diffDays;
                    secount++;
                }else{
                  document.getElementById("cost1").innerHTML = "";
                }
                if(se2.checked){
                    totalPrice += 1*100*diffDays;
                    document.getElementById('cost2').innerHTML = 1*100*diffDays;
                    secount++;
                }else{
                    document.getElementById('cost2').innerHTML = "";
                }
                if(se3.checked){
                    totalPrice += 1*150*diffDays;
                    document.getElementById('cost3').innerHTML = 1*150*diffDays;
                    secount++;
                }else{
                    document.getElementById('cost3').innerHTML = "";
                }
                if(se4.checked){
                    totalPrice += 1*200*diffDays;
                    document.getElementById('cost4').innerHTML = 1*200*diffDays;
                    secount++;
                }else{
                    document.getElementById('cost4').innerHTML = "";
                }
        
                if( (secount>=2) && (totalPrice>=1000) ){
                    document.getElementById('result').innerHTML = "<p style='text-decoration: line-through;''>"+(totalPrice)+"</p>"+(totalPrice*0.85)+" (Є) <br> <p style='color: red;''>(15% discount)</p> ";
                    
                }else{
                    document.getElementById('result').innerHTML = totalPrice+" (Є)"
                }

                setTimeout(function() {
                    if(confirm('Do u confirm this purchase?')){
                        alert('Thank you for choosing us!');
                    }else{
                        alert('application withdrawn')
                    }
                  }, 0);
    
            }else{
                document.getElementById('BoxDateTo').style = "border: 5px solid red;";
            }

        }else{
            document.getElementById('BoxDateFrom').style = "border: 5px solid red;";
        }


    }else {
        console.log('mark bitch');
        document.getElementById('Participant').style = "border: 5px solid red;"; 
    }

}

//Registration page Calculation closes