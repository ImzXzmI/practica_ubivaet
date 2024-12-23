function SetValue() {
    sessionStorage.removeItem("sharedData"); //localStorage || sessionStorage
    sessionStorage.setItem("sharedData", document.getElementById("input").value); //localStorage || sessionStorage
    document.getElementById("").value = "";
}

document.getElementById("btn_set").addEventListener("click", SetValue);