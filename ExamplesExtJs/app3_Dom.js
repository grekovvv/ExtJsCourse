
//.......В целом там есть вся та же история, что и у jquery или даже у ванильного js

Ext.onReady(function(){
    var elements = Ext.select('div#text');
    elements.hide();

    var elements = Ext.select('div').item(1);
    console.log(elements.dom.innerHTML);

    var element = Ext.select('div#text2').item(0);
    console.log(element.dom.innerHTML); //выведет 'Текст3'
    var el = element.next();
    console.log(el.dom.innerHTML); //выведет 'Текст4'
    el = element.prev();
    console.log(el.dom.innerHTML); //выведет 'Текст2'

    var element = Ext.get('content');
    var el = element.first();
    console.log(el.dom.innerHTML); //выведет 'Текст1'
    el = element.last();
    console.log(el.dom.innerHTML); //выведет 'Текст4'

    //////////////////////////////////////////////////////////////////////////////////////
    //Стилизация
    var element = Ext.get('content');
    var el = element.child('div#text1');
    el.setStyle('color', 'red');
    element.setStyle({
        'font-family': 'Verdana',
        'font-size': '13px',
        'background-color': 'silver',
    });

    //////////////////////////////////////////////////////////////////////////////////////
    //Создание новых элементов DOM
    var body = Ext.get('content'); // определяем id родительского элемента для вставки
    // определяем новый элемент
    var newElement = {
        tag: 'h2',
        html: 'Заголовок'
    };
    // добавление
    var createdElement = Ext.DomHelper.append(body, newElement);

    //Можно добавлять до или после 
    Ext.DomHelper.insertBefore(body.first(), newElement);
    Ext.DomHelper.insertAfter(body.first(), newElement);

    //////////////////////////////////////////////////////////////////////////////////////
    //Создание шаблонов
    var body = Ext.get('content');
    var templ = Ext.DomHelper.createTemplate({
        tag: 'h2',
        html: '{header}'
    });
    templ.append(body, {header:'Привет мир!'});

    //////////////////////////////////////////////////////////////////////////////////////
    //Обработка событий
    //Либо добавляем одно событие таким образом
    Ext.onReady(function(){
        var element = Ext.get('content');
        element.on('click', function(e, target, options){
            console.log('Элемент был нажат');
        }, this);
    });

    //Либо добавляем через пачку
    Ext.onReady(function(){
        var element = Ext.get('content');
        element.on({
            click: function(e, target, options){
                console.log('Элемент нажат!');
            },
            contextmenu: function(e, target, options){
                console.log('На элемент нажали правой кнопкой!');
            },
            scope: this
        });
    });

    //На компонентах добавляется через listeners
    Ext.onReady(function(){
        Ext.create('Ext.Button', {
            margin:'10 0 0 30',
            text: 'Жми здесь',
            renderTo: Ext.getBody(),
            listeners: { 
                click: function(){
                    alert('А чё ты жал?');
                },
                scope:this
            }
        });
    });
});