function GetValue() {
    const savedData = sessionStorage.getItem("sharedData"); //localStorage || sessionStorage

    if (savedData) {
        document.getElementById("output").innerText = savedData; 
    } else {
        document.getElementById("output").innerText = "no value"; 
    }
}

function Clear(){
    sessionStorage.clear();
}
document.getElementById("btn_get").addEventListener("click", GetValue);
document.getElementById("btn_clear").addEventListener("click", Clear);