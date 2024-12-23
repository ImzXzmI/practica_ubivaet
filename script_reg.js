const form_fff = document.forms.fff;   

form_fff.addEventListener('submit', (event) => {   
    event.preventDefault();   
    let proverka = true;   

    if (!form_fff.elements.name.validity.valid) { // Проверка имени   
        document.getElementById("oshibka1").innerText = "Укажите имя (только русские символы, с заглавной буквы)";   
        proverka = false;   
    } else {   
        document.getElementById("oshibka1").innerText = "";   
    }   

    if (!form_fff.elements.birthdate.validity.valid) { // Проверка даты рождения   
        document.getElementById("oshibka2").innerText = "Укажите дату рождения";   
        proverka = false;   
    } else {   
        document.getElementById("oshibka2").innerText = "";   
    }   

    const gender = form_fff.elements.gender.value; // Проверка пола    
    if (!gender) {   
        document.getElementById("genderoshibka").innerText = "Пожалуйста, укажите пол.";   
        proverka = false;   
    } else {   
        document.getElementById("genderoshibka").innerText = "";   
    }   

    if (proverka) {    
        // Закрыть модальное окно   
        document.getElementById('cb').checked = false;   
      
        // Отобразить данные на странице   
        const nameValue = form_fff.elements.name.value;   
        const birthdateValue = form_fff.elements.birthdate.value;   
        const genderText = (gender === "М" ? "Мужской" : "Женский");   
          
        document.getElementById("result").innerHTML =   
            `<h2>Регистрация успешна!</h2>  
            <p>Ваше имя: ${nameValue}</p>  
            <p>Дата рождения: ${birthdateValue}</p>  
            <p>Пол: ${genderText}</p>`;  
    } 
}); 