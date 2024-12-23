var x = 0;         
var array = document.getElementsByClassName('def');         
 
const form_test = document.forms.test;       
 
const correctAnswers = [         
    { question: "q1", answer: "mizantrop" },     
    { question: "q2", answer: "ptica" },    
    { question: "q3", answer: "2" },     
    { question: "q4", answer: "povoroshkin" },      
    { question: "q5", answer: "pavel" },   
    { question: "q6", answer: "peremen" },    
    { question: "q7", answer: "Души меня, Олег Волков" },  
    { question: "q8", answer: "Боттичелли" },  
];         

form_test.addEventListener('submit', (event) => {         
    event.preventDefault();         
   
    let results = [];         
    let score = 0;     

    // Проверка радио-вопросов         
    for (let i = 1; i <= 6; i++) {         
        const selected = document.querySelector(`input[name="q${i}"]:checked`);         
        const errorDiv = document.getElementById(`oshibka${i}`);       
              
        if (selected && selected.value === correctAnswers[i - 1].answer) {         
            results.push(`${i}. Правильный ответ: ${correctAnswers[i - 1].answer}`);         
            score++;         
            errorDiv.innerHTML = "Ответ правильный!"; // Сообщение для правильного ответа       
        } else {         
            results.push(`${i}. Ответ неправильный. Правильный ответ: ${correctAnswers[i - 1].answer}`);         
            errorDiv.innerHTML = "Ответ неправильный."; // Сообщение для неправильного ответа       
        }         
    }  
  
    const answer1 = document.getElementById("q7").value;    

    // Проверка текстового вопроса q7   
    const errorDivQ7 = document.getElementById(`oshibka7`); // Создаем div для ошибок текстового вопроса 
    if (answer1.trim() === correctAnswers[6].answer) { // Индекс 6 для q7 
        results.push("7. Правильный ответ: Души меня, Олег Волков.");    
        score++;    
        errorDivQ7.innerHTML = "Ответ правильный!"; // Сообщение для правильного ответа     
    } else {    
        results.push("7. Ответ неправильный. Правильный ответ: Души меня, Олег Волков.");    
        errorDivQ7.innerHTML = "Ответ неправильный."; // Сообщение для неправильного ответа     
    }    
 
    const answer2 = document.getElementById("q8").value;    

    // Проверка текстового вопроса q8  
    const errorDivQ8 = document.getElementById(`oshibka8`); // Создаем div для ошибок текстового вопроса 
    if (answer2.trim() === correctAnswers[7].answer) { // Индекс 7 для q8 
        results.push("8. Правильный ответ: Боттичелли.");    
        score++;    
        errorDivQ8.innerHTML = "Ответ правильный!"; // Сообщение для правильного ответа     
    } else {    
        results.push("8. Ответ неправильный. Правильный ответ: Боттичелли.");    
        errorDivQ8.innerHTML = "Ответ неправильный."; // Сообщение для неправильного ответа     
    }    
    
    document.getElementById("ocenka").innerHTML = `Баллы: ${score} из ${correctAnswers.length}`;         
    document.getElementById("ocenka1").innerHTML = `<ul>${results.map(r => `<li>${r}</li>`).join('')}</ul>`;        
});
