Ext.onReady(function(){
    var formPanel=Ext.create('Ext.form.Panel',{
        title: 'Форма авторизации',
        width: 300,
        height:200,
        margin: '50% 50%',
        layout: 'anchor',
        defaults: {
            anchor: '80%'
        },
            renderTo: Ext.getBody(),
            items:[{
                    xtype: 'textfield',
                    fieldLabel: 'Логин',
                    name: 'login',
                    labelAlign: 'top',
                    cls: 'field-margin',
                    flex: 1
                   }, {
                    xtype: 'textfield',
                    fieldLabel: 'Пароль',
                    name: 'password',
                    labelAlign: 'top',
                    cls: 'field-margin',
                    flex: 1
                  }],       
                     
        buttons: [{
            text: 'Вывести данные',
            handler: function() {
                var login = formPanel.getForm();
                 
                for(var i in login.getValues())
                {
                    alert(login.getValues()[i]);
                }
            }
        }],
    });

    //Валидация

    // Используется как  vtype:'alpha', у объекта формы

    // alpha: ограничивает ввод только алфавитными символами
    // alphnum: позволяет вводить только алфавитно-цифровые символы
    // url: проверяет правильность ввода адреса URL
    // email: проверяет правильность ввода адреса электронной почты
    
    //Заполняем форму данными
    var personalData = {
        FirstName: 'Евгений',
        LastName: 'Попов',
        Age: 28,
        Married: false
    };

    var formPanel2=Ext.create('Ext.form.Panel',{
        title: 'Данные',
        width: 300,
        height:300,
        margin: '50% 50%',
        layout: 'anchor',
    defaults: {
        anchor: '80%'
    },
        renderTo: Ext.getBody(),
        items:[{
                xtype: 'textfield',
                fieldLabel: 'Имя',
                name: 'FirstName',
                labelAlign: 'top',
                flex: 1
               }, {
                xtype: 'textfield',
                fieldLabel: 'Фамилия',
                name: 'LastName',
                labelAlign: 'top',
                vtype:'alpha', //Валидация, опционально
                flex: 1
              },
              {
                xtype: 'textfield',
                fieldLabel: 'Email',
                name: 'Email',
                labelAlign: 'top',
                vtype:'email',
                flex: 1
              },{
                xtype: 'numberfield',
                fieldLabel: 'Возраст',
                name: 'Age',
                minValue: 1,
                maxValue: 100,
            },{
                xtype: 'checkbox',
                boxLabel: 'Женат(Замужем)',
                name: 'Married',
                inputValue: 'Married',
                checked:'true',
                }],
        buttons: [{
            text: 'Отправить',
            handler: function() {
                // действие отмены
            }
        }, {
            text: 'Сброс',
            handler: function() {
                formPanel2.getForm().setValues(personalData);
            }
        }]
    });

    //Можно создавать свою валидацию
    var passNumberVType = {
        passNumber: function(val, field){
            var passNumberRegex = /^\d{4}\s\d{6}$/;
            return passNumberRegex.test(val);
        },
        passNumberText: 'Серия и номер паспорта должны содержать только цифры и между ними должен стоять пробел!',
        passNumberMask: /[\d\s]/
    };
    //Применяем (добавляем) нашу валидацию к типам глабальным валидации
    Ext.apply(Ext.form.field.VTypes, passNumberVType);
    var formPanel3=Ext.create('Ext.form.Panel',{ 
        title: 'Форма Запроса',
        margin: '50% 50%',
        bodyStyle:'padding:5px 5px 0',
            width: 400,
            height:130,
            layout: 'anchor',
            defaults: {
                anchor: '80%'
            },
            renderTo: Ext.getBody(),
        items: [{
                    xtype: 'textfield',
                    name: 'url', 
                    fieldLabel: 'Серия и номер пасспорта',
                    vtype:'passNumber'
                }]
        });

    //Отправка данных формы на сервер
    var loginForm=Ext.create('Ext.form.Panel',{
        title: 'Авторизация',
        width: 300,
        height:150,
        margin: '50% 50%',
        bodyPadding:10,
        layout: 'anchor',
        defaults: {
            anchor: '80%'
        },
        renderTo: Ext.getBody(),
        items: [{  
                xtype: 'textfield',
                fieldLabel: 'Логин',
                name: 'login'
            },
            {
                xtype: 'textfield',
                name: 'password',
                fieldLabel: 'Пароль',
                inputType: 'password'
            }],
        buttons: [{
            text: 'Отправить',
            handler: function() {
                loginForm.getForm().submit({
                    url: 'http://localhost:3000/login',
                    success: function(form, action){
                                Ext.MessageBox.alert('Авторизация пройдена. ',action.result.message);
                    },
                    failure: function(form, action){ 
                                Ext.MessageBox.alert('Ошибка авторизации. ',action.result.message);
                            }
                });
            }
        }]
    });

    var formPanel4=Ext.create('Ext.form.Panel',{ 
        title: 'Форма Запроса',
        bodyStyle:'padding:5px 5px 0',
        width: 400,
        height:150,
        renderTo: Ext.getBody(),
        items: [{
            xtype: 'filefield',
            name: 'file',
            fieldLabel: 'Выберите файл: ',
            msgTarget: 'side',
            allowBlank: false
        }],
        buttons: [{
            text: 'Загрузить файл',
            handler: function(){
                var form = this.up('form').getForm();
                if (form.isValid()) {
                        form.submit({
                        url: 'http://localhost:3000/upload',
                        waitMsg: 'Загрузка...',
                        success: function(fp, o){
                            Ext.Msg.alert('Загрузка прошла успешно', 'Файл ' +o.result.file +" загружен");
                        }
                    });
                }
            }
        }]
    });
});
