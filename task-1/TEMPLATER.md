### Функция шаблонизации

Реализовать функцию-шаблонизатор, трансформирующую JSON с конкретными блоками и элементами в валидную HTML-разметку, и сделать нужные элементы интерактивными.

В качестве JSON-формата использовать [BEMJSON](https://ru.bem.info/technologies/classic/bemjson/) с некоторыми упрощениями.

Миксы задаются массивами, каждый элемент которого включает в себя название блока и/или элемента:
```
{
    block: 'my-block`,
    mix: [
        {block: 'other-block', mods: {'mod-name': 'mod-value'}},
        {block: 'other-block', elem: 'second-elem', mod: {'elem-mod-name': 'elem-mod-value'}}
    ]
}
```

Если в свойстве content блока вы описываете его элемент, то необходимо явно указывать название блока:
```
{
    block: 'my-block',
    content: {
        block: 'my-block',
        elem: 'my-block-element'
    }
}
```
