function GetValue1() { 
    const savedDat = sessionStorage.getItem("sharedDat"); //localStorage || sessionStorage 
 
    if (savedDat) { 
        document.getElementById("output1").innerHTML = savedDat;  
    } else { 
        
        document.getElementById("output1").innerText = "Вы сбросили результат или еще не прошли тест";  
    } 
} 

function Clear() { 
    sessionStorage.clear(); 
} 

document.getElementById("btn_get1").addEventListener("click", GetValue1); 
document.getElementById("btn_clear1").addEventListener("click", Clear);