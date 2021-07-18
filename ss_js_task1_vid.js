function addition()
{
        num1 = document.getElementById("1stNumber").value;
        num2 = document.getElementById("2ndNumber").value;
        var result=document.getElementById("result")
        num1=parseFloat(num1);
        num2=parseFloat(num2);
        result.value = num1 + num2;
}

function subtraction() 
{ 
    num1 = document.getElementById("1stNumber").value;
    num2 = document.getElementById("2ndNumber").value;
    var result=document.getElementById("result")
    num1=parseFloat(num1);
    num2=parseFloat(num2);
    result.value = num1 - num2;
}

function squarenum1() 
{ 
    num1 = document.getElementById("1stNumber").value;
    var result=document.getElementById("result")
    num1=parseFloat(num1);
    result.value = num1*num1;
}
function squarenum2() 
{ 
    num2 = document.getElementById("2ndNumber").value;
    var result=document.getElementById("result")
    num2=parseFloat(num2);
    result.value = num2*num2;
}

function minimum()
{
        num1 = document.getElementById("1stNumber").value;
        num2 = document.getElementById("2ndNumber").value;
        var result=document.getElementById("result")
        num1=parseFloat(num1);
        num2=parseFloat(num2);
        result.value = Math.min(num1,num2);
}

function maximum()
{
        num1 = document.getElementById("1stNumber").value;
        num2 = document.getElementById("2ndNumber").value;
        var result=document.getElementById("result")
        num1=parseFloat(num1);
        num2=parseFloat(num2);
        result.value = Math.max(num1,num2);
}

function quotient()
{
        num1 = document.getElementById("1stNumber").value;
        num2 = document.getElementById("2ndNumber").value;
        var result=document.getElementById("result")
        num1=parseInt(num1);
        num2=parseInt(num2);
        result.value =Math.floor(num1/num2);
}

function remainder()
{
        num1 = document.getElementById("1stNumber").value;
        num2 = document.getElementById("2ndNumber").value;
        var result=document.getElementById("result")
        num1=parseFloat(num1);
        num2=parseFloat(num2);
        result.value = num1%num2;
}