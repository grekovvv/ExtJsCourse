
Ext.onReady(function(){
    //Контейнер Viewport представлен классом Ext.container.Viewport и является основой веб-приложений, использующих все пространство браузера. 
    var viewport = Ext.create('Ext.container.Viewport', {
        layout : 'hbox',
        items : [
        {
            xtype : 'panel',
            region : 'center',
            title:'Центральная панель',
            id : 'centerPanel',
        }], 
        style: 'overflow-y: scroll',
    });
    //Компонент Window
    var window = Ext.create('Ext.window.Window', {
        title: 'Приложение',
        width: 300,
        height: 200,
        items:[{
            xtype: 'button',
            text: 'Кнопка 1',
            style:'margin-left:100px; margin-top:70px;',
        }]
    });
    window.show();

    //Компонент Ext.panel.Panel
    Ext.create('Ext.panel.Panel', {
        title: 'Приложение',
        width: 400,
        height: 200,
        bodyPadding: 5,
        style: 'margin: 50px 0px 0px 50px',
        html: 'Привет мир!',
        collapsible: true,
        closable: true,
        dockedItems: [{
            xtype: 'toolbar',
            dock: 'top',
            items: [{
            text: 'Файл',
            handler: function(){alert('Привет!');}
        }, '->', 'Верхний тулбар']
        }, {
            xtype: 'toolbar',
            dock: 'bottom',
            items: [{
            xtype: 'button',
            text: 'Кнопка 1'
        }, '-',{
            xtype: 'button',
            text: 'Кнопка 2'
        }, '-',{
            xtype: 'button',
            text: 'Кнопка 3'
        },'->', 'Нижний тулбар']
        }],
        fbar: ['->', { 
            xtype: 'button',
            text: 'OK'
            },{
            xtype: 'button',
            text: 'Отмена'
            }],
        tools: [
            {type: 'help',
            handler: function(event, toolEl, panel){
                alert('Help');
                }
            },
            {type: 'gear'},
            {type: 'search'} //есть 25 стандартных икононк
        ],
        renderTo: Ext.getBody()
    });
    
    //Деревья Ext.tree.Panel. Деревья
    Ext.create('Ext.tree.Panel', {
        title: 'Страны СНГ',
        width: 400,
        height: 200,
        style: 'margin: 50px 0px 0px 50px',
        rootVisible: true,
        renderTo: Ext.getBody(),
        root: {
            text: 'Страны СНГ',
            expanded: true,
            children:
            [{
                text: "Россия",
                children: [{
                    text: "Москва",
                    leaf: true
                }, {
                    text: "Санкт-Петербург",
                    leaf: true
                }, {
                    text: "Волгоград",
                    leaf: true
                }],
                leaf: false,
                "expanded": true
            },
            {
                text: "Украина",
                leaf: false
            },
            {
                text: "Белоруссия"
            }]
        }
    });

   //Панель вкладок
   //Можно ещё их сделать динамическими и удалять.
   Ext.create('Ext.tab.Panel', {
        title: 'Панель вкладок',
        width: 300,
        height: 200,
        style: 'margin: 50px 0px 0px 50px',
        items:[{
            title: 'C#',
            html: 'WPF, ASP.NET, MVC, Windows Forms'
        },{
            title: 'Java',
            html: 'JSP, Java FX, Swing, AWT'
        }],
        renderTo: Ext.getBody()
    });

    //Кнопки
    Ext.create('Ext.Button', {
            text: 'Кнопка',
            height:30,
            margin: '50px 0px 0px 50px',
            renderTo: Ext.getBody(),
            handler: function() {
                alert('Привет мир!')
            }
        });
    
    //Выбор дат. Ext.form.field.Date
    var dateField = Ext.create('Ext.form.field.Date', {
        fieldLabel: 'Выбрать дату',
        format: 'd/m/Y',
        margin:'50px 0px 0px 50px',
    });
    //DropdownList
    Ext.create('Ext.Panel', {
        width:400,
        height:200,
        id: 'himark',
        margin:'50px 0px 0px 50px',
        title: 'DropdownList and select Date',
        renderTo: Ext.getBody(),
        items  : [{
                xtype: 'button',
                text : 'Языки программирования',
                margin:'15 0 0 25',
                menu: [
                    {text: 'C#'},
                    {text: 'Java'},
                    {text: 'C++'},
                    {text: 'Basic'}
                ]
            }, dateField]
    });

    //Флажки и переключатели
    var radioGroupAutoLayout = Ext.create('Ext.form.Panel', {
        title: 'Переключатели',
        width: 400,
        autoHeight: true,
        bodyPadding: 5,
        margin:'50px 0px 0px 50px',
        items: [{
            xtype: 'radiogroup',
            fieldLabel: 'Пол',
            items: [{
            boxLabel: 'Мужской',
            name: 'gender',
            inputValue: 'male'
            }, {
            boxLabel: 'Женский',
            name: 'gender',
            inputValue: 'female'
            }]
        }],
        renderTo: Ext.getBody()
    });

    var checkboxGroup = new Ext.form.CheckboxGroup({
        columns: 1,
        fieldLabel: 'Овощи',
        name: 'veg',
        style: {
        },
        items: [{
            xtype: 'checkbox',
            boxLabel: 'Капуста',
            name: 'veg',
            inputValue: 'cabbage',
            checked:'true',
        }, {
            xtype: 'checkbox',
            boxLabel: 'Морковь',
            name: 'veg',
            inputValue: 'carrot'
        }, {
            xtype: 'checkbox',
            boxLabel: 'Свекла',
            name: 'veg',
            inputValue: 'beat'
        }, {
            xtype: 'checkbox',
            boxLabel: 'Лук',
            name: 'veg',
            inputValue: 'onion'
        }]
    });
    Ext.create('Ext.Panel', {
        width:280,
        height:120,
        margin:'50px 0px 0px 50px',
        items:
        [checkboxGroup],
        renderTo: Ext.getBody()
    });

    
    //Spinner
    var numberField=Ext.create('Ext.Panel', {
        width:280,
        height:120,
        margin:'50px 0px 0px 50px',
        items:
        [{
            xtype: 'numberfield',
            fieldLabel: 'Выберите число'
        }],
        renderTo: Ext.getBody()
    });
    //Слайдер
    var slider=Ext.create('Ext.slider.Single', {
        fieldLabel: 'Громкость',
        margin:'50px 0px 0px 50px',
        width: 400,
        renderTo: Ext.getBody()
    });

    var yourData = [
        [1, 'JavaScript'],
        [2, 'PHP'],
        [3, 'RUBY']
    ];
    //комбобокс
    Ext.create('Ext.Panel', {
        width:400,
        margin:'50px 0px 0px 50px',
        height:120,
        items: [{
            xtype: 'combobox',
            fieldLabel: 'Выберите язык',
            store: new Ext.data.SimpleStore({
                 id:0,
                fields:
                [
                    'myId',   //числовое значение - номер элемента
                    'myText' //текст
                ],
                data:yourData
            }),
            valueField:'myId',
            displayField:'myText',
            queryMode:'local'
        }],
        renderTo: Ext.getBody()
    });

    //html редактор
    var formPanel = Ext.create('Ext.Panel', {
        title: 'Редактор текста',
        width: 350,
        height:200,
        margin:'-1450 0 0 500',
        layout: 'fit',
        items: [{
        xtype: 'htmleditor',
            enableColors: false,
            enableLinks: false,
            fontFamilies: ["Arial", "Tahoma", "Verdana"]
        }],
        renderTo: Ext.getBody()
    });
    //Текстовые поля в ExtJS
    var formPanel = Ext.create('Ext.Panel', {
        title: 'Форма ввода',
        width: 300,
        autoHeight: true,
        margin:'-450 0 0 500',
        bodyPadding: 10,
        defaults: {
            labelWidth: 100
        },
        items: [{
            xtype: 'textfield',
            fieldLabel: 'Ваше имя:',
            name: 'name'
        }],
        renderTo: Ext.getBody()
    });
    //Тулбар
    var toolbar=Ext.create('Ext.toolbar.Toolbar', {
        dock: 'left',
        items: [
            {
                text: 'Кнопка'
            },{
                xtype: 'splitbutton',
                text : 'Кнопка с меню'
            },'->',{
                xtype    : 'textfield',
                name     : 'field',
                emptyText: 'Найти'
            }]
    });
    Ext.create('Ext.panel.Panel', { 
        title: 'Панель с тулбаром',
        width: 350,
        height: 150,
        margin:'5 0 0 500',
        renderTo: Ext.getBody(),
        dockedItems: [toolbar]
    });
    //Меню
    var menu = Ext.create('Ext.menu.Menu', {
        width: 100,
        height: 100,
        renderTo: Ext.getBody(),
        floating: false,
        items: [{
            text: 'JavaScript',
        },{
            text: 'Java'
        },{
            text: 'C/C++'
        }]
    });

    Ext.create('Ext.panel.Panel', { 
        title: 'Меню',
        width: 350,
        margin:'230 0 0 500',
        renderTo: Ext.getBody(),
        dockedItems: [menu]
    });
});