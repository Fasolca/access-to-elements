"use script"

//Задание 1 Используя средства и возможности навигации по DOM, получите доступ к следующим HTML-элементам:

//1.1 К элементу1 с текстом «Сезоны года»

const header_1 = document.body.children;
const SeasonYear = header_1[0];

console.log( SeasonYear );


//1.2. К элементу с текстом «Дополнительная информация»

const textInfo_1 = header_1[1].childNodes[1]

console.log( textInfo_1 );


//1.3. К элементу со списком всех сезонов года

const seasonList_1 = header_1['season-list']

console.log( seasonList_1 );


//4. К элементу списка с текстом «Осень» и списком осенних месяцев

const seasonAutumn = header_1[2].lastElementChild

console.log( seasonAutumn );


//5. К элементу с текстом «Зима» и списком зимних месяцев от предыдущего элемента с текстом «Осень»

const winterSeason = seasonAutumn.parentElement.firstElementChild

console.log( winterSeason );


//6. К элементу с месяцем вашего рождения или к любому другому любимому месяцу.

const monthBirth = winterSeason.nextElementSibling.children[0].children[0]

console.log(monthBirth);


//Задание 2  Используя средства и возможности поиска элементов по DOM вместе с навигацией по DOM, получите доступ к следующим HTML-элементам:


//1. К элементу с текстом «Сезоны года»

const header_2 = document.getElementById('header')

console.log( header_2 );

//2. К элементу с текстом «Дополнительная информация»

const textInfo_2 = document.getElementsByTagName('p')[0]

console.log( textInfo_2 );


//3. К элементу с текстом текущего месяца

const currentMonth = document.getElementById('season-list').lastElementChild.getElementsByClassName('month')[1]

console.log( currentMonth );


//4. Проверьте находится ли элемент текущего месяца в элементе сезона с текстом «Осень», который является 4-м по счёту (используя метод matches)

const checkAutumnElement = document.getElementsByClassName('season')[3].matches('li.season')

console.log( checkAutumnElement );


//5. Получите доступ к элементу со списком всех сезонов года от элемента текущего месяца (используя метод closest)

const seasonList_2 =
currentMonth.parentNode.parentNode.closest('ul')

console.log( seasonList_2 );


//6. Проверьте вложен ли элемент текущего месяца в элемент со списком всех сезонов года (используя метод contains)

seasonList_1.contains( currentMonth )