Ext.onReady(function(){      
    Ext.define('User', {
         extend: 'Ext.data.Model',
                    
          idProperty: 'id',
                    
          fields: [{
              name: 'id',
              type: 'int'
          }, {
              name: 'name',
              type: 'string'
          }, {
              name: 'email',
              type: 'string'
          }],
                    
           proxy: {
               type: 'localstorage',
               id: 'settings'
              }
    });
                
     var settings = Ext.create('User', {
           id: 1,
           name: 'Eugene22',
           email: 'eugene225@mail.ru'
     });
       
    //здесь мы видим как при первой загрузке данных нет, но при второй они появляются, 
    //так как есть данные в Local Storage   

    //загрузка из Local Storage      
    User.load(1, {
            callback: function(model, operation){
                    console.log('Ник:' + model.get('name'));
                    console.log('Электронная почта:' + model.get('email'));
            }
    });

    //сохранение данных в Local Storage    
    settings.save();
});