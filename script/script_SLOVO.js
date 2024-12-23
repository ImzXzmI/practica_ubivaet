const items = [ 
    { title: "Пять пуль", explanation: "Я думал мы в ролевые понарошку", extraText: "Это дополнительный текст о Пяти пулях...", image: "./img/five.jpg", link: "./dop/link_to_five_bullets.html" },   
    { title: "Сергей Разумовский", explanation: "Единственная моя мотивация учиться", extraText: "Так о нем можно говорить бесконечно...", image: "./img/ISKUSSTVO.jpg", link: "./dop/link_to_sergey_razumovsky.html" },   
    { title: "Чумной доктор", explanation: "Самая адекватная тут", extraText: "А вот и настоящая история...", image: "./img/adekvatish.png", link: "./dop/link_to_plague_doctor.html" },   
    { title: "Волчья преданность", explanation: "Между ними пять пуль и много недопониманий...", extraText: "Мои отцы", image: "./img/cerovolki.png", link: "./dop/link_to_wolf_loyalty.html" },   
    { title: "Главный любитель Леди Гаги", explanation: "Одной рукой писать не удобно", extraText: "Произведения Леди Гаги вдохновляют...", image: "./img/HEARMYOUT.PNG", link: "./dop/link_to_lady_gaga_lover.html" },   
    { title: "Души Меня Олег Волков", explanation: "Поросятки, волк сдует этот домик", extraText: "Как же радостно быть с волком...", image: "./img/Dushi_menia_Oleg.png", link: "./dop/link_to_oleg_volkov.html" },   
    { title: "Боттичелли", explanation: "Главный гиперфикс Сергея Разумовского", extraText: "Боттичелли — это искусство...", image: "./img/bottichelli.jpg", link: "./dop/link_to_botticelli.html" },   
    { title: "Алтан", explanation: "Души меня рисовка Завидовой...", extraText: "Поклоняюсь", image: "./img/altan2.png", link: "./dop/link_to_altan.html" },   
    { title: "Шаурма", explanation: "Я уже не знаю, что писать", extraText: "Но шаурма - это святое...", image: "./img/shaurma.jpg", link: "./dop/link_to_shawarma.html" },   
    { title: "Шаверма", explanation: "Я уже не знаю, что писать", extraText: "Но шаверма это вкусно!", image: "./img/shaverma.jpg", link: "./dop/link_to_shaverma.html" },   
]; 

const vvod = document.getElementById('vvod');    
const vyvod = document.getElementById('vyvod');    

const displayItems = (filteredItems) => {    
    vyvod.innerHTML = ""; // Очистить перед добавлением новых элементов    

    filteredItems.forEach(item => {    
        const div = document.createElement('div');    
        div.classList.add('square'); // Добавляем класс для стилей    

        // Создаем заголовок   
        const title = document.createElement('h4');   
        title.innerText = item.title;   
        title.style.cursor = 'pointer'; // Добавим указатель курсора для интерактивности  

        title.addEventListener('click', () => { // Обработчик клика по заголовку  
            window.location.href = item.link; // Переход на страницу 
        });  

        // Создаем пояснение   
        const explanation = document.createElement('p');   
        explanation.innerText = item.explanation;   

        // Создаем кнопку "Читать дальше"   
        const readMoreBtn = document.createElement('button');   
        readMoreBtn.innerText = "Читать дальше";   
        readMoreBtn.style.cursor = 'pointer';  

        // Создаем область для дополнительного текста   
        const extraTextDiv = document.createElement('div');   
        extraTextDiv.style.display = 'none'; // Скрываем по умолчанию   
        extraTextDiv.innerText = item.extraText;    

        // Обработчик клика по кнопке "Читать дальше"  
        readMoreBtn.addEventListener('click', () => {    
            extraTextDiv.style.display = extraTextDiv.style.display === 'none' ? 'block' : 'none';    
        });  

        // Создаем изображение   
        const img = document.createElement('img');   
        img.src = item.image; 
        img.alt = item.title;

        // Добавляем элементы в див   
        div.appendChild(title);   
        div.appendChild(explanation);   
        div.appendChild(readMoreBtn);   
        div.appendChild(extraTextDiv);   
        div.appendChild(img);   

        vyvod.appendChild(div);    
    });    
};    

displayItems(items); // Отображаем начальный массив
vvod.addEventListener('input', () => {    
    const filteredItems = items.filter(item =>    
        item.title.toLowerCase().includes(vvod.value.toLowerCase())    
    );    

    displayItems(filteredItems); // Отображаем отфильтрованные элементы    
});