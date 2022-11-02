
function calculate(){
    
    var number1= document.getElementById("number1").value; 
    var number2 = document.getElementById("number2").value;
    var operator =document.getElementById("operator").value;
    var result = document.getElementById("result");
    var num1= parseFloat(number1);
    var num2=parseFloat(number2)
    if(number1==""){
        alert("please enter your number1");
        document.getElementById("result").value="0"
    }else if(isNaN(number1)){
        alert("Only Numbers are allowed please check number1")
        document.getElementById("result").value="0"
    }else if(number2==""){
        alert("please enter your number2");
        document.getElementById("result").value="0"
    }else if(isNaN(number2)){
        alert("Only Numbers are allowed please check number2")
        document.getElementById("result").value="0"
    }
    else if (operator === '+'){
        result.value = `${number1} ${operator} ${number2} = ${num1 + num2}`
       document.getElementById("number1").value=""; 
         document.getElementById("number2").value="";
    }
     else if(operator=== "-"){
        result.value = `${number1} ${operator} ${number2} = ${num1 - num2}`
        document.getElementById("number1").value=""; 
        document.getElementById("number2").value="";
    }
    else if(operator=== "*"){
        result.value = `${number1} ${operator} ${number2} = ${num1 * num2}`
         document.getElementById("number1").value=""; 
         document.getElementById("number2").value="";
    }
    else if(operator=== "/"){
        result.value = `${number1} ${operator} ${number2} = ${num1 / num2}`
       document.getElementById("number1").value=""; 
        document.getElementById("number2").value="";
    }
}

