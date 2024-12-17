Ext.onReady(function(){      
    Ext.define('User', {
        extend: 'Ext.data.Model',
                  
         idProperty: 'userID',
                  
         fields: [{
             name: 'userID',
             type: 'int'
         }, {
             name: 'name',
             type: 'string'
         }, {
             name: 'surname',
             type: 'string'
         }, {
             name: 'date',
             type: 'date'
         }, {
             name: 'email',
             type: 'string'
         }, {
             name: 'married',
             type: 'bool'
         }]
   });
    //Взаимодействие с таблицей (удаление)
    var store = Ext.create('Ext.data.Store', {
                 model: 'User',
                 autoLoad: true,
                 proxy: {
                         type: 'ajax',
                         url: '../res/tableUsers.json',
                         reader: {
                             type: 'json',
                             root: 'users'
                         }
             }
     });
     Ext.create('Ext.grid.Panel', {
        title: 'Пользователи',
        height: 200,
        width: 600,
        store: store,
        columns: [{
            header: 'Имя',
            dataIndex: 'name'
        }, {
            header: 'Фамилия',
            dataIndex: 'surname'
        }, {
            header: 'Дата рождения',
            dataIndex: 'date',
            xtype:'datecolumn',
            format: 'd/m/Y',
            flex:1
        }, {
            header: 'E-mail',
            dataIndex: 'email',
            flex:1
        }, {
            header: 'Женат/Замужем',
            dataIndex: 'married',
            flex:1
        }],
        renderTo: Ext.getBody()
    });
    Ext.create('Ext.grid.Panel', {
        title: 'Пользователи',
        height: 200,
        width: 600,
        store: store,
        //selType: 'cellmodel', //по дефолту выбирается вся строка, но мы можем рабоать с конкретными ячейками.
        columns: [{
           xtype:'rownumberer'
          },{
           text:'Имя',
           xtype:'templatecolumn',
           flex:1,
           dataIndex:'name',
           tpl:'<b>{name} {surname} </b>'
      },{
            header: 'Дата рождения',
            dataIndex: 'date',
            xtype:'datecolumn',
            format: 'd/m/Y',
            flex:1
        }, {
            header: 'E-mail',
            dataIndex: 'email',
            flex:1
        },{
            text:'Женат (Замужем)',
            xtype:'booleancolumn',
            width:80,
            dataIndex:'married',
            trueText:'Да',
            falseText:'Нет'
        },{
            xtype:'actioncolumn',
            width:40,
            items:[{
                    icon:'../img/del.png',
                    handler:function (grid, rowIndex, colIndex) {
                    store.removeAt(rowIndex);
                 }
                }]
        }],
        renderTo: Ext.getBody()
    });
    //Редактирвоание строк - осуществляется через подключение плагинов
    Ext.create('Ext.grid.Panel', {
        title: 'Пользователи',
        plugins:[{
            ptype:'rowediting',
            //ptype:'cellediting', //- редактирвоание ячеек
            clicksToEdit: 1
        }],
        selType: 'rowmodel',
        height: 250,
        width: 550,
        margin:10,
        store: store,
        columns: [{
           xtype:'rownumberer'
          },{
           text:'Имя',
           xtype:'templatecolumn',
           flex:1,
           dataIndex:'name',
           tpl:'<b>{name} {surname}</b>'
      },{
            header: 'Дата рождения',
            dataIndex: 'date',
            xtype:'datecolumn',
            format: 'd/m/Y',
            flex:1,
            editor: {
                xtype: 'datefield',
                allowBlank: false
            }
        },{
            header: 'E-mail',
            dataIndex: 'email',
            flex:1,
           editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        },{
            text:'Женат/Замужем',
            xtype:'booleancolumn',
            width:90,
            dataIndex:'married',
            trueText:'Да',
            falseText:'Нет',
           editor: {
                xtype: 'checkbox',
                checked: false
            }
        },{
    xtype:'actioncolumn',
    width:40,
    items:[{
            icon:'../img/del.png',
            handler:function (grid, rowIndex, colIndex) {
                store.removeAt(rowIndex);
            }
        }]
    }],
        renderTo: Ext.getBody()
    });

    var store2 = Ext.create('Ext.data.Store', {
        model: 'User',
        autoLoad: true,
        pageSize: 4,
        proxy: {
                type: 'ajax',
                url: '../res/tableUsers.json',
                reader: {
                    type: 'json',
                    root: 'users'
                }
    }
    });

    //Постраничный вывод, отображается элементов ронво столько, сколько прописано в sotre
    Ext.create('Ext.grid.Panel', {
        title: 'Пользователи',
        height: 220,
        width: 550,
        margin:10,
        store: store2,
        dockedItems: [{
            xtype: 'pagingtoolbar',
            store:store,
            dock: 'bottom',
            displayInfo: true,
            beforePageText: 'Страница',
            afterPageText: 'из {0}',
            displayMsg: 'Пользователи {0} - {1} из {2}'
        }],
        columns: [{
           xtype:'rownumberer'
          },{
           text:'Имя',
           xtype:'templatecolumn',
           flex:1,
           dataIndex:'name',
           tpl:'{name} {surname}'
      },{
            header: 'Дата рождения',
            dataIndex: 'date',
            xtype:'datecolumn',
            format: 'd/m/Y',
            flex:1
        },{
            header: 'E-mail',
            dataIndex: 'email',
            flex:1
        },{
            text:'Женат/Замужем',
            xtype:'booleancolumn',
            width:90,
            dataIndex:'married',
            trueText:'Да',
            falseText:'Нет'
        },{
    xtype:'actioncolumn',
    width:40,
    items:[{
            icon:'../img/del.png',
            handler:function (grid, rowIndex, colIndex) {
                store.removeAt(rowIndex);
            }
        }]
    }],
        renderTo: Ext.getBody()
    });

    //Группировка
    var store3 = Ext.create('Ext.data.Store', {
        model: 'User',
        autoLoad: true,
        groupField: 'married',
        pageSize: 4,
        proxy: {
                type: 'ajax',
                url: '../res/tableUsers.json',
                reader: {
                    type: 'json',
                    root: 'users'
                }
    }
    });

    Ext.create('Ext.grid.Panel', {
        title: 'Пользователи',
        height: 260,
        width: 550,
        margin:10,
        store: store3,
        features: [Ext.create('Ext.grid.feature.Grouping', {groupHeaderTpl: 'Группа  {name} ({rows.length})' })],
        columns: [{
           xtype:'rownumberer'
          },{
           text:'Имя',
           xtype:'templatecolumn',
           flex:1,
           dataIndex:'name',
           tpl:'{name} {surname}'
      },{
            header: 'Дата рождения',
            dataIndex: 'date',
            xtype:'datecolumn',
            format: 'd/m/Y',
            flex:1
        },{
            header: 'E-mail',
            dataIndex: 'email',
            flex:1
        },{
            text:'Женат/Замужем',
            xtype:'booleancolumn',
            width:90,
            dataIndex:'married',
            trueText:'Да',
            falseText:'Нет'
        },{
    xtype:'actioncolumn',
    width:40,
    items:[{
            icon:'../img/del.png',
            handler:function (grid, rowIndex, colIndex) {
                store.removeAt(rowIndex);
            }
        }]
    }],
        renderTo: Ext.getBody()
    });
});