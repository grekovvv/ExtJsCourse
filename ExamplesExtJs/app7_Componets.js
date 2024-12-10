Ext.onReady(function(){
    var childPanel1 = Ext.create('Ext.panel.Panel', {
        title: 'Панель 1',
        html: 'Внутренняя панель 1'
    });
     
    var childPanel2 = Ext.create('Ext.panel.Panel', {
        title: 'Панель 2',
        html: 'Внутренняя панель 2'
    });
    //Каждый контейнер имеет свойство items, в котором можно установить дочерние элементы.
    Ext.create('Ext.container.Viewport', {
        items: [ childPanel1, childPanel2 ]
    });

    //////////////////////////////
    //Аналог создания.
    //Чтобы создать компонент, можно сокращенно укзаать его псевдоним в xtype.
    //
    // Ext.create('Ext.container.Viewport', {
    //     items: [{
    //             xtype: 'panel',
    //             title: 'Панель 1',
    //             html: 'Внутренняя панель 1'
    //         },
    //         {
    //             xtype: 'panel',
    //             title: 'Панель 2',
    //             html: 'Внутренняя панель 2'
    //     }]
    // });

    //////////////////////////////
    //Рендеринг
    //direct - рендеринг
    //Либо в Body
    Ext.create('Ext.Panel', {
        title: 'Приложение Ext JS 4',
        width: 300,
        height: 200,
        renderTo: Ext.getBody()
    });
    //Либо в Body в div с id = 'anyIdWhatYouWant'
    Ext.create('Ext.Panel', {
        title: 'Приложение Ext JS 4',
        width: 300,
        height: 200,
        renderTo:'tiptop'
    });

    //lazy - рендеринг
    var bigPannel = Ext.create('Ext.Panel', {
        title: 'Приложение Ext JS 4',
        width: 300,
        height: 200
    });
    
    //////////////////////////////
    //Добавление и удаление компонентов
    //Метод add просто добавляет компонент в конец массива items контейнера
    var bigPannel2 = Ext.create('Ext.Panel', {
        title: 'Приложение Ext JS 4',
        width: 300,
        height: 200,
        id : 'bigPannel2',
        renderTo: Ext.getBody()
    });
    Ext.getCmp('bigPannel2').add({
            title: 'Внутренняя панель',
            width: 100,
            height: 100,
            html:'Привет мир!'
    });
    //Метод insert, только он вставляет элемент по указанному индексу
    var bigPannel3=Ext.create('Ext.Panel', {
        title: 'Приложение Ext JS 4',
        width: 300,
        height: 200,
        id : 'bigPannel3',
        renderTo: Ext.getBody()
    });
    Ext.getCmp('bigPannel3').insert(0, {
        title: 'Панель 1',
        width: 200,
        height: 80,
        html:'Панель 1'
    });
    Ext.getCmp('bigPannel3').insert(0, {
            title: 'Панель 2',
            width: 200,
            height: 80,
            html:'Панель 2'
    });

    //Удаление компонентов
    var newPannel=Ext.create('Ext.Panel', {
        title: 'panel1',
        width: 300,
        height: 200,
        id : 'bigPannel'
    });
    //.....прочая логика приложения
    // удаляем по id
    Ext.getCmp('bigPannel').remove('panel1');
    // удаляем по ссылке
    Ext.getCmp('bigPannel').remove(newPannel);


    //Отображение и скрытие элементов
    var bigPannel4=Ext.create('Ext.Panel', {
        title: 'Приложение Ext JS 4',
        width: 300,
        height: 200,
        id : 'bigPannel4',
        renderTo: Ext.getBody()
    });
    bigPannel4.hide(); // скрываем компонент
    bigPannel4.show(); // отображаем компонент
});

//...тут остальной код //lazy - рендеринг
bigPannel.render(document.body);
//или рендеринг в элемент по id <div id="tiptop" ...
//bigPannel.render('tiptop');