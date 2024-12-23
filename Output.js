function GetValue() { 
    const savedData = sessionStorage.getItem("sharedData"); //localStorage || sessionStorage 
 
    if (savedData) { 
        document.getElementById("output").innerText = savedData;  
    } else { 
        
        document.getElementById("output").innerText = "Вы сбросили результат или еще не прошли тест";  
    } 
} 

function Clear() { 
    sessionStorage.clear(); 
} 

document.getElementById("btn_get").addEventListener("click", GetValue); 
document.getElementById("btn_clear").addEventListener("click", Clear);