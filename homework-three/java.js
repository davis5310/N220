//total=Principle(1+rate*time) - Intrest Formula
var num1 = parseFloat(document.getElementById('prin',"rate","time").value);



function calcIntrest(){
    let prin = parseFloat(document.getElementById('prin').value);
    let rate = parseFloat(document.getElementById('rate').value).toFixed(2);
    let time = parseFloat(document.getElementById('time').value);
    let Total = prin*(1+(rate/100)*time).toFixed(2);
    

    let all = Total - prin;

    document.getElementById("hidden").innerHTML = "With a begininning principle of $" + prin + " and with a growth rate of " + rate + " % for " + time + " years, your total intrest will be $" + all + " with a grand total of $" + Total;
}
