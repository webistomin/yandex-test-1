<h1 align="center">
  <br>
   <img src="https://img.yasteq.com/2/safe_image.php?d=AQC4bY_-lBLgk1V0&url=http%3A%2F%2Fwww.seonews.ru%2Fupload%2Fiblock%2Fb05%2Fb05748953f6eb507c20f87fdcc8b7438.jpg&_nc_hash=AQDWN5s9hsSZq-BC" width="409" height="409" />
  <br>
</h1>

<p align="center">
  <a href="https://travis-ci.com/webistomin/cinema-app">
    <img src="https://travis-ci.com/webistomin/yandex-test-1.svg?token=CqDseQbTs4cMwNAwVsgp&branch=master">
  </a>
</p>

<p align="center">
  Тестовое задание для ШРИ 2019. Реализуйте дизайн-систему
</p>
   
## Команды   
<table id="development-setup">
  <thead>
    <tr>
      <th>Команда</th>
      <th>Результат</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="30%"><code>npm install</code></td>
      <td>Установить все зависимости</td>
    </tr>
    <tr>
      <td><code>npm run dev</code></td>
      <td>
        Собрать проект и запустить отслеживание изменений.
      </td>
    </tr>
      <tr>
        <td><code>npm run test:unit</code></td>
        <td>Запустить тесты</td>
      </tr>  
  </tbody>
</table>

## Описание

Страницы доступны по следующим ссылкам:
* Главная 
  * http://localhost:3000/pages/index.html – свёрстанная
  * http://localhost:3000/pages-template-engine/index.html – собранная с помощью функции
  
* Страница продукта 
  * http://localhost:3000/pages/product.html – свёрстанная
  * http://localhost:3000/pages-template-engine/product.html – собранная с помощью функции  
  
* Страница коллекции 
  * http://localhost:3000/pages/collect.html – свёрстанная
  * http://localhost:3000/pages-template-engine/collect.html – собранная с помощью функции   
  
* Страница контента 
  * http://localhost:3000/pages/content.html – свёрстанная
  * http://localhost:3000/pages-template-engine/content.html – собранная с помощью функции   
  
Сама функция лежит в [template-engine.js](src/js/template-engine.js).

BEMJSON для каждой страницы описан в файле [bemJSONs.js](src/js/bemJSONs.js)  

[Дизайн система](src/sass) написана на SASS и CSS Custom Properties + Grid. 

Как сборщик использовал Gulp с различными плагинами для оптимизаций.

Для тестирования использована Mocha. Проведены проверки на корректный вывод классов, тэгов и аттрибутов.
   
Так как использовались более менее современные технологии, старые браузеры не поддерживают данную дизайн систему. Но у меня была другая цель – хотелось попробовать новые свойства CSS, с которыми еще не доводилось работать.
