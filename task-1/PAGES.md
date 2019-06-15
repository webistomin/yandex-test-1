# Собрать страницы
Из имеющихся блоков нужно собрать интерфейсные страницы, путём встраивания свёрстанных блоков лейаут и секции с адаптивной сеткой.

### 1-й шаг
Собрать структуру страниц используя каркасные блоки из дизайн-системы (layout и grid), сквозные блоки (header и footer) и блок переключателя, который переключает значение цветового модификатора темы (onoffswitch);

### 2-й шаг
Интегрировать в них свёрстанные на предыдущем шаге смысловые блоки (payment, warning, product, history, commercial, cover, product, collect, articles, offer, subscribtion, event).

### Использование смысловых блоков на страницах

#### Главная страница (index.html) собирается из:
[Скриншот](https://github.com/yndx-shri-reviewer/task-1/blob/master/assets/pages/index.png)
- payment (блок платёжной формы);
- warning (блок предупреждения);
- product (блок карточки товара);
- history (блдок истории операций);
- commercial (блок рекламной вставки).

#### Страница продукта (product.html) собирается из:
[Скриншот](https://github.com/yndx-shri-reviewer/task-1/blob/master/assets/pages/product.png)
- cover (блок обложки товара);
- product (блок товара).

#### Страница сбора средств (collect.html) собирается из:
[Скриншот](https://github.com/yndx-shri-reviewer/task-1/blob/master/assets/pages/collect.png)
- collect (блок сбора средств. Величины заполнения прогресс-баров: 2/3, 1/3, 1/2, 2/3);
- articles (блок публикации);
- offer (блок скидочного предложения);
- subscribtion (блок подписки).

#### Контентная страница (content.html) собирается из:
[Скриншот](https://github.com/yndx-shri-reviewer/task-1/blob/master/assets/pages/content.png)
- event (блок мероприятия).

Размеры слов для каждого блока каждой страницы указаны в отдельном [файле](https://github.com/yndx-shri-reviewer/task-1/blob/master/text-mods.md)

### 3-й шаг

Описать свёрстанные страницы в синтаксисе [шаблонизатора](TEMPLATER.md).
