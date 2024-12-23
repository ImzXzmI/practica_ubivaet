var x = 1;
var array = document.getElementsByClassName('def'); 
const reg = /^[0-9]+$/; // Регулярное выражение для проверки, состоит ли строка только из цифр

function forward() { // Функция для перехода к следующему слайду
    if (x < array.length) {  // Если текущий слайд меньше количества доступных слайдов, увеличиваем номер
        x++;
    } else {
        // Если текущий слайд последний, переходим к первому
        x = 1;
    }
    // Обновляем позицию слайда в соответствии с новым номером
    updateSlidePosition();
}

function backward() { // Функция для перехода к предыдущему слайду
    if (x != 1) {
        x--;
    } else {
        x = array.length;
    }
    updateSlidePosition(); // Обновляем позицию слайда
}

function goToSlide() { // Функция для перехода к указанному слайду на основе ввода пользователя
    var inputNumber = document.getElementById("slide_number").value; // Получаем введенное пользователем значение из поля ввода
    var slideNumber = parseInt(inputNumber);
    showSlide(slideNumber);
}



function updateSlidePosition() { // Функция для обновления позиции слайда в зависимости от текущего номера
    document.documentElement.style.setProperty("--el", (x - 1) * (-500) + "px");
}

function displayMessage(msg) { // Функция для вывода сообщений пользователю
    document.getElementById("message").innerText = msg; // Устанавливаем текст сообщения
}

document.getElementById("btn_forward").addEventListener("click", forward); // Добавляем обработчик события на кнопку "дальше"
document.getElementById("btn_backward").addEventListener("click", backward); // Добавляем обработчик события на кнопку "назад"