Ext.onReady(function(){
    //Объявляем класс
    Ext.define('Person', {
        extend: 'Ext.data.Model',
        fields: [{
            name: 'Name',
            type: 'string'
        }, {
            name: 'Surname',
            type: 'string'
        }, {
            name: 'BirthDate',
            type: 'date',
            dateFormat: 'd-m-Y'
        }, {
            name: 'Salary',
            type: 'int',
            //если мы хотим отдавать при запросе определённый результат, используем convert
            convert: function(v, record){
                        return record.get('Name') + ' получает ' + v + ' рублей';
                    }
        }, {
            name: 'Married',
            type: 'boolean'
        }]
    });
    //Создаём экземпляр класса
    var person = Ext.create('Person', {
        Name: 'Eugene',
        Surname: 'Popov',
        BirthDate: '22-05-1984',
        Salary: 300,
        Married: false
    });
    //Выводим
    Ext.create('Ext.Panel', {
        title: 'Person: ' +person.get('Name')+ ' ' +person.get('Surname'),
        html: '<p>Имя: '+person.get('Name')+'</p>' +
        '<p>Фамилия: '+person.get('Surname')+'</p>' +
        '<p>Дата рождения: '+person.get('BirthDate')+'</p>' +
        '<p>Женат: '+(person.get('Married')==true?'да':'нет')+'</p>',
        width: 200,
        height: 200,
        renderTo: Ext.getBody(),
        style: 'margin-left: 30px;margin-top: 10px;'
    });
});


//Тоже самое только в форме 
Ext.onReady(function(){
    Ext.define('Person', {
        extend: 'Ext.data.Model',
        fields: [{
            name: 'Name',
            type: 'string'
        }, {
            name: 'Surname',
            type: 'string'
        }, {
            name: 'BirthDate',
            type: 'date',
            dateFormat: 'd-m-Y'
        }, {
            name: 'Salary',
            type: 'int'
        }, {
            name: 'Married',
            type: 'boolean'
        }]
    });
      
    var person = Ext.create('Person', {
        Name: 'Eugene',
        Surname: 'Popov',
        BirthDate: '22-05-1984',
        Salary: 300,
        Married: false
    });
      
    var formPanel=Ext.create('Ext.form.Panel',{
        title: 'Данные',
        width: 300,
        height:280,
        bodyPadding: 10,
        style: 'margin-left: 30px;',
        layout: 'anchor',
    defaults: {
        anchor: '90%'
    },
        renderTo: Ext.getBody(),
        items:[{
                xtype: 'textfield',
                fieldLabel: 'Имя',
                name: 'Name',
                labelAlign: 'top',
                flex: 1
               }, {
                xtype: 'textfield',
                fieldLabel: 'Фамилия',
                name: 'Surname',
                labelAlign: 'top',
                flex: 1
              },{
                xtype: 'datefield',
                fieldLabel: 'Дата рождения',
                name: 'BirthDate',
                },{
                xtype: 'numberfield',
                fieldLabel: 'Доход',
                name: 'Salary',
                },{
                xtype: 'checkbox',
                boxLabel: 'Женат(Замужем)',
                name: 'Married',
                checked:'true',
                }],
        buttons: [{
            text: 'По умолчанию',
            handler: function() {
                formPanel.getForm().loadRecord(person);
            }
        }]
    });
});
//Валидация
Ext.onReady(function(){
    
    Ext.define('User', {
            extend: 'Ext.data.Model',
            fields: [{
                name: 'name',     
                type: 'string'
            },{
                name: 'age',
                type: 'int'
            },{
                name: 'phone',
                type: 'string'
            },{
                name: 'gender',   
                type: 'string'
            },{
                name: 'username', 
                type: 'string'
            }],
            validations: [{
                type: 'presence',  
                field: 'age'
                },{
                type: 'length',    
                field: 'name',     
                min: 2
                },{
                type: 'inclusion', 
                field: 'gender',   
                list: ['М', 'Ж']
                },{
                type: 'exclusion', 
                field: 'username', 
                list: ['Admin', 'Operator']
                },{
                type: 'format',    
                field: 'username', 
                matcher: /([a-z]+)[0-9]{2,3}/
                },{
                type: 'phone',  
                field: 'phone'
                }]
        });
        var user = Ext.create('User', {
            name: 'Eugeneies',
            age: '18',
            gender: 'М',
            username: 'Demon',
            phone: 89892765656
        });
        
        
        
       
        //Ниже форма работать не будет, так как валидация работает на объект, а не на поля формы.
        //Для полей формы своя валидация.
        //Тут можно поступить следующим образом - заполнить форму, создать с неё объект и провалидировать его.

        // var formPanel2=Ext.create('Ext.form.Panel',{
        //     title: 'Данные',
        //     width: 300,
        //     height:280,
        //     bodyPadding: 10,
        //     style: 'margin-left: 30px;',
        //     layout: 'anchor',
        //     defaults: {
        //         anchor: '90%'
        //     },
        //     renderTo: Ext.getBody(),
        //     items:[{
        //             xtype: 'textfield',
        //             fieldLabel: 'Имя',
        //             name: 'name',
        //             labelAlign: 'top',
        //             flex: 1
        //         }, {
        //             xtype: 'numberfield',
        //             fieldLabel: 'Возраст',
        //             name: 'age',
        //             labelAlign: 'top',
        //             flex: 1
        //         },{
        //             xtype: 'textfield',
        //             fieldLabel: 'Номер',
        //             name: 'phone',
        //             },{
        //             xtype: 'textfield',
        //             fieldLabel: 'Логин',
        //             name: 'username',
        //             },{
        //             xtype: 'textfield',
        //             fieldLabel: 'Пол',
        //             name: 'gender'
        //             }],
        //     buttons: [{
        //         text: 'По умолчанию',
        //         handler: function() {
        //             formPanel2.getForm().loadRecord(user);
        //         }
        //     },
        //     {
        //         text: 'Пройти валидацию',
        //         handler: function() {
        //             //хз почему, но первый вызов isValid() даёт ошибку. Второй же адекватный результат.
        //             //поэтому тут такой костыль...
        //             //Предполагаю, что объект не успевает создаться
        //             try {
        //                 user.isValid()
        //             } catch (error) {}

        //             if (user.isValid())
        //             {
        //                 alert('Модель прошла валидацию');
        //             }
        //             else
        //             {
        //                 var errors = user.validate();
        //                 errors.each(function(error){
        //                     alert("Ошибка в определении поля " + error.field + ": " + error.message);
        //                 });
        //             }
        //         }
        //     }]
        // });
        // Ext.data.validations.phoneMessage = 'Неправильный формат номера телефона';
        // Ext.data.validations.phone=function(config,value){
        //         var valid =false;
        //         valid=value.length=== 9;// 7 цифр + 2 дефиса
        //         valid=valid&&(value.split('-').length===3); //3 части номера, разделенные 2-мя дефисами
        //         return valid;
        // };
    });