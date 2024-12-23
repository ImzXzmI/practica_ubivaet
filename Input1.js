const ocenka1Element1 = document.getElementById("ocenka1");

function SetValue1() {
    console.log(ocenka1Element1.innerHTML); // Получим содержимое элемента
    sessionStorage.removeItem("sharedDat"); //localStorage || sessionStorage
    sessionStorage.setItem("sharedDat", ocenka1Element1.innerHTML); //localStorage || sessionStorage

}

document.getElementById("btn1").addEventListener("click", SetValue1)