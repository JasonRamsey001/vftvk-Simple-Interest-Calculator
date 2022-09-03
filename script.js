
    p = document.getElementById("principal").value;

    var principal = document.getElementById("principal").value;

    var rate = document.getElementById("rate").value;
    
    var years = document.getElementById("years").value;

    var interest = principal * years * rate /100;

    var year = new Date().getFullYear()+parseInt(years);

    function updateRate()  {
       var rateval = document.getElementById("rate").value;

       //GET THE VALUE OF THE ABOVE SELECTED RATE AND, DISPLAY THAT VALUE WITHIN THE HTML PAGE @ <span id="rate_val">
       document.getElementById("rate_val").innerText=rateval;
       }

       var result = document.getElementById("result").value;




    function compute(){

   
        var principal = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);


        if (principal < 1) {
            alert("Please enter a positive number");
          
 
           
             
            document.getElementById("principal").value = "";
             document.getElementById("principal").focus();
             
        } else{ // press the compute button if principle >0


     
        
  
      

   // Set your output to the variables
   var output = "\nIf you deposit $" +   principal  +  ",\n at an interest rate of " +rate+    "%,\n  you will receive interest in the amount of $"  +interest+ "\n in the year "+year;
   
        // Target the ID of the 'ComputeResult' span and update the HTML
    document.getElementById('ComputeResult').innerText = output;
        }
    
        //end of Else()
    }
