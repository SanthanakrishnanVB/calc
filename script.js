

document.querySelector("#c").addEventListener('click',cR ); 
document.querySelector("#k7").addEventListener("click", () => aTR("7"));   
document.querySelector("#k8").addEventListener('click', () => aTR("8"));  
document.querySelector("#k9").addEventListener('click', () => aTR("9"));  
document.querySelector("#k99").addEventListener('click', () => aTR("/"));  
document.querySelector("#k4").addEventListener('click', () => aTR("4"));  
document.querySelector("#k5").addEventListener('click', () => aTR("5"));  
document.querySelector("#k6").addEventListener('click', () => aTR("6"));  
document.querySelector("#k66").addEventListener('click', () => aTR("*"));  
document.querySelector("#k1").addEventListener('click', () => aTR("1"));  
document.querySelector("#k2").addEventListener('click', () => aTR("2"));  
document.querySelector("#k3").addEventListener('click', () => aTR("3"));  
document.querySelector("#k-").addEventListener('click', () => aTR("-"));  
document.querySelector("#k0").addEventListener('click', () => aTR("0"));  
document.querySelector("#k11").addEventListener('click', caR); 
document.querySelector("#k22").addEventListener('click', () => aTR("+"));  

function aTR(value) {  
   
    const res = document.getElementById('result');  
    res.value += value;  
}  

function cR() {  
    const res = document.getElementById('result');  
    res.value = '';  
}  

function caR() {  
    const res = document.getElementById('result');  
    try {  
        res.value = eval(res.value) || '';  
    } catch (error) {  
        res.value = 'Error';  
    }  
}