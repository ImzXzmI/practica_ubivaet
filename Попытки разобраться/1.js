const form_avtorizazia = document.forms.fff; 

const btn = document.getElementById("btn"); 

form_avtorizazia.addEventListener('submit', (event)=>{
    event.preventDefault(); 
    let proverka = true;  

    const name = document.getElementById("name");
    const birthdate = document.getElementById("birthdate");
    const fe_male = document.getElementById("fe_male");

    if (!form_avtorizazia.elements.name.validity.valid) { // Проверка имени  
        document.getElementById("oshibka1").innerText = "Укажите имя (только русские символы, с заглавной буквы)";  
        proverka = false;  
    } else {  
        document.getElementById("oshibka1").innerText = "";  
        name.innerText = "Ваше имя: " + form_avtorizazia.elements.name.value;  
        sessionStorage.setItem("name", name);
        console.log(name)
    }  

    if (!form_avtorizazia.elements.birthdate.validity.valid) { // Проверка даты рождения  
        document.getElementById("oshibka2").innerText = "Укажите дату рождения";  
        proverka = false;  
    } else {  
        document.getElementById("oshibka2").innerText = "";  
        birthdate.innerText = "Дата рождения: " + form_avtorizazia.elements.birthdate.value; 
        sessionStorage.setItem("birthdate", birthdate); 
        console.log(birthdate)
    }      
    
    const gender = form_avtorizazia.elements.gender.value; // Проверка пола  
    if (!gender) { 
        document.getElementById("genderoshibka").innerText = "Пожалуйста, укажите пол."; 
        proverka = false; 
    } else { 
        document.getElementById("genderoshibka").innerText = ""; 
        fe_male.innerText = "Пол: " + (gender === "М" ? "Мужской" : "Женский"); 
        sessionStorage.setItem("fe_male", fe_male); 
        console.log(fe_male)
    } 

    if (proverka) {  
        location.href = "index.html";  
    }  
}); 



