const items = [
    { title: "Пять пуль", explanation: "Я думал мы в ролевые понарошку", image: "five.jpg", link: "link_to_five_bullets.html" },  
    { title: "Сергей Разумовский", explanation: "Единственная моя мотивация учиться", image: "ISKUSSTVO.jpg", link: "link_to_sergey_razumovsky.html" },  
    { title: "Чумной доктор", explanation: "Самая адекватная тут", image: "adekvatish.png", link: "link_to_plague_doctor.html" },  
    { title: "Волчья преданность", explanation: "Между ними пять пуль и много недопониманий, но они такие няняня, взросли обнимающиеся мужики", image: "cerovolki.png", link: "link_to_wolf_loyalty.html" },  
    { title: "Главный любитель Леди Гаги", explanation: "Одной рукой писать не удобно", image: "HEARMYOUT.PNG", link: "link_to_lady_gaga_lover.html" },  
    { title: "Души Меня Олег Волков", explanation: "Поросятки, волк сдует этот домик", image: "Dushi_menia_Oleg.png", link: "link_to_oleg_volkov.html" },  
    { title: "Боттичелли", explanation: "Главный гиперфикс Сергея Разумовского", image: "bottichelli.jpg", link: "link_to_botticelli.html" },  
    { title: "Алтан", explanation: "Души меня рисовка Завидовой...", image: "altan2.png", link: "link_to_altan.html" },  
    { title: "Шаурма", explanation: "Я уже не знаю, что писать", image: "shaurma.jpg", link: "link_to_shawarma.html" },  
    { title: "Шаверма", explanation: "Я уже не знаю, что писать", image: "shaverma.jpg", link: "link_to_shaverma.html" },  
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

        // Создаем изображение  
        const img = document.createElement('img');  
        img.src = item.image; // Замените на актуальные ссылки на изображения  
        img.alt = item.title;  

        // Добавляем элементы в див  
        div.appendChild(title);  
        div.appendChild(explanation);  
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



