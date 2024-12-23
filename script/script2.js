let name1 = sessionStorage.getItem("name");
let birthdate = sessionStorage.getItem("birthdate");
let fe_male = sessionStorage.getItem("fe_male");

if(!name1 || !birthdate || !fe_male){
    window.location.href = "reg.html"
}else{
    document.getElementById("name").innerText = name1;
    document.getElementById("birthdate").innerText = birthdate;
    document.getElementById("fe_male").innerText = fe_male;
}


function clearDate(){
    sessionStorage.removeItem("name"); //localStorage || sessionStorage
    sessionStorage.removeItem("birthdate"); //localStorage || sessionStorage
    sessionStorage.removeItem("fe_male"); //localStorage || sessionStorage

    window.location.href = "reg.html"
}

document.getElementById("logout").addEventListener('click', clearDate);

