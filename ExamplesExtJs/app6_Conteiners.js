//Панель
Ext.onReady(function(){
    Ext.create('Ext.panel.Panel', {
        renderTo: Ext.getBody(),
        width: 300,
        height: 230,
        padding:10,
        title: 'Основной контейнер',
        items: [
            {
                xtype: 'panel',
                title: 'Внутренняя панель 1',
                height: 100,
                width: '100%'
            },
            {
                xtype: 'panel',
                title: 'Внутренняя панель 2',
                height: 200,
                width: '100%'
            }
        ]
    });

    Ext.create('Ext.panel.Panel', {
        renderTo: Ext.getBody(),
        width: 200,
        height: 500,
        padding:10,
        title: 'vbox',
        layout: {
                type: 'vbox',
                align: 'stretch'
            },
        items: [{
                xtype: 'panel',
                title: 'Первая панель',
                height:120
            },{
                xtype: 'panel',
                title: 'Вторая панель',
                height:140
            },{
                xtype: 'panel',
                title: 'Третья панель',
                height:120
            }]
    });

    Ext.create('Ext.panel.Panel', {
        renderTo: Ext.getBody(),
        width: 700,
        height: 200,
        padding:10,
        title: 'hbox',
        layout: {
                type: 'hbox',
                align: 'stretch',
                pack:'end'
            },
        items: [{
                xtype: 'panel',
                title: 'Первая панель',
                width:120
            },{
                xtype: 'panel',
                title: 'Вторая панель',
                width:120
            },{
                xtype: 'panel',
                title: 'Третья панель',
                width:120
            }]
    });
    
    //Можно использовать flex
    Ext.create('Ext.panel.Panel', {
        renderTo: Ext.getBody(),
        width: 700,
        height: 200,
        padding:10,
        title: 'hbox',
        layout: {
                type: 'hbox',
                align: 'stretch',
                pack:'end'
            },
        items: [{
                xtype: 'panel',
                title: 'Первая панель',
                width:120
            },{
                xtype: 'panel',
                title: 'Вторая панель',
                flex: 1
            },{
                xtype: 'panel',
                title: 'Третья панель',
                flex: 2
            }]
    });

    //Таблица
    Ext.create('Ext.Panel', {
        title: 'Таблица',
        width: 700,
        height: 200,
        padding: 10,
        layout:'column',
        items: [
            {
                xtype: 'panel',
                title: 'Первый столбец',
                html: 'Поле 1',
                width: 200
            },
            {
                xtype: 'panel',
                title: 'Второй столбец',
                html: 'Поле 2',
                width: 200
            },
            {
                xtype: 'panel',
                title: 'Третий столбец',
                html: 'Поле 3',
                columnWidth:.3 //можно как в гриде задавать
            }],
        renderTo: Ext.getBody()
    });

    //Аккордеоны
    Ext.create('Ext.Panel', {
        title: 'Аккордион',
        width: 500,
        height: 200,
        layout:'accordion', //Если бы мы закомментировали строку layout:'accordion', то нам отобразились бы все панели
        items: [
            {
                xtype: 'panel',
                title: 'Л. Толстой',
                html: 'Произведения Л. Толстого: ....'
            },
            {
                xtype: 'panel',
                title: 'Ф. Достоевский',
                html: 'Произведения Ф. Достоевского: ...'
            },
            {
                xtype: 'panel',
                title: 'И. Тургенев',
                html: 'Произведения И. Тургенева: ...'
            }],
        renderTo: Ext.getBody()
    });
    //Слайды
    var panel= Ext.create('Ext.Panel', {
        title: 'Слайды писателей',
        width: 400,
        height: 200,
        layout:'card',
        items: [
            {
                xtype: 'panel',
                title: 'Л. Толстой',
                html: 'Произведения Л. Толстого: "Война и мир", "Воскресение", "Крейцерова соната"'
            },
            {
                xtype: 'panel',
                title: 'Ф. Достоевский',
                html: 'Произведения Ф. Достоевского: "Преступление и наказание", "Братья Карамазовы", "Идиот"'
            },
            {
                xtype: 'panel',
                title: 'И. Тургенев',
                html: 'Произведения И. Тургенева: "Отцы и дети", "Рудин", "Вешние воды"'
            }],
            bbar: ['->', {
                xtype: 'button',
                text: 'Предыдущее',
                handler: function(but){
                    var layout=panel.getLayout();
                    if(layout.getPrev()){
                        layout.prev();
                    }
                }
            }, {
                xtype: 'button',
                text: 'Далее',
                handler: function(but){
                    var layout=panel.getLayout();
                    if(layout.getNext()){
                        layout.next();
                    }
                }
            }],
        renderTo: Ext.getBody()
    });

    //BorderLayout позволяет прикреплять элементы к одной из четырех сторон окна, либо закрепить его в центре
    Ext.create('Ext.Panel', {
        width: 500,
        height: 360,
        padding: 10,
        layout:'border',
        title: 'BorderLayout (Граничная)',
        items: [{
                xtype: 'panel',
                title: 'Центральная панель',
                html: 'Центральная панель',
                region: 'center',
                margin: '5 5 5 5'
            },{
                xtype: 'panel',
                title: 'Верхняя панель',
                html: 'Верхняя панель',
                region: 'north',
                height: 80
            },{
                xtype: 'panel',
                title: 'Нижняя панель',
                html: 'Нижняя панель',
                region: 'south',
                height: 80
            },{
                xtype: 'panel',
                title: 'Левая панель',
                html: 'Левая панель',
                region: 'west',
                width: 100
            },{
                xtype: 'panel',
                title: 'Правая панель',
                html: 'Правая панель',
                region: 'east',
                width: 120
            }] ,
        renderTo: Ext.getBody()
    });

    //Анкорная
    Ext.create('Ext.Panel', {
        title: 'Компоновка Anchor',
        width: 300,
        height: 200,
        layout:'anchor',
        items: [
            {
                xtype: 'panel',
                title: 'Л. Толстой',
                html: 'Произведения Л. Толстого: "Война и мир", "Воскресение", "Крейцерова соната"',
                anchor: '60% 85%'
            }],
        renderTo: Ext.getBody()
    });
});