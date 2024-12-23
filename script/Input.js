const ocenkaElement = document.getElementById("ocenka");



function SetValue() {
    console.log(ocenkaElement.innerHTML); // Получим содержимое элемента
    sessionStorage.removeItem("sharedData"); //localStorage || sessionStorage
    sessionStorage.setItem("sharedData", ocenkaElement.innerHTML); //localStorage || sessionStorage

}

document.getElementById("btn_set").addEventListener("click", SetValue)