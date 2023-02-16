# FD3-partsianko

# headProject

### Запуск приложения

# Курс: React

### Запуск приложения

- Склонировать репозиторий.
- Установить зависимости командой npm i в терминале.
- Проект запустить командой npm run dev.
- База данных находится по ссылке: http://localhost:3500/question .
- Перейти на страницу по ссылке: http://localhost:8080/

### Критерии проверки задания

- Приложение подстраивается под действия пользователя.
  - При нажаи кнопки «узнать ответ», появляется подсказка одного цвета. Кнопка «ответить»,ответ не верный - будет другой текст другого цвета.
    А если ответ правильный, будет зелёный текст и поле инпута заполнится ответом. Так же во вкладке « список вопросов» появится зеленая отметка на которые вопросы дан верный ответ. И в мобильной версии в бургере так же будут отмечены верные ответы.
- Используется анимация (popup).
  - Появляется popup при нажатии на кнопку - приз.
- Реализован постраничный просмотр списка вопросовю
  - В шапке приложения имеются кнопки, которые делят список всех вопросов постранично, по двадцать на каждой странице, либо кнопка выводящая все вопросы сразу.
- Адаптивная верстка по принципу Mobile first. Переход на desktop при ширине экрана 767px и выше
- База данных загружается с сервера. Информацию по прохождению квеста сохраняется в LocalStorage.
- Использован Redux.
- Реализован бургер меню. В нем сделаны переходы по ссылкам.
- Кнопки браузера "вперёд", "назад", "освежить" работают корректно.
