
//Хранилище предназначено для хранения объектов модели.
Ext.define('User', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id',  type: 'int'},
        {name: 'name', type: 'string'}
    ]
});
 
var myStore = Ext.create('Ext.data.Store', {
    model: 'User'
});

//Добавляем данные в хранилище
var user = Ext.create('User', {
    id: 1, name: 'Eugene'
});
var user2 = Ext.create('User', {
    id: 2, name: 'Eugene2'
});
var user3 = Ext.create('User', {
    id: 3, name: 'Eugene3'
});
myStore.add(user);
myStore.add(user2);
//Если вдруг нам надо добавить объект на определенное место в хранилище, то мы используем метод insert
//Объекты, кстати, не дублируются.
myStore.insert(0,user);

// Удаление объектов
// myStore.remove(user1); // удаление определенной модели
// myStore.removeAt(0); // удаление по индексу
// myStore.removeAll(); // удаление всех объектов из хранилища

console.log(myStore.count());
////////////////
//Получение данных из хранилища
var userFromStore = myStore.getAt(0); //получение по индексу в хранилище
console.log(userFromStore.get('name'));
 
var i=3;
// проверка на наличие элемента по индексу
if(i<myStore.count())
{
   userFromStore = myStore.getAt(i);
   console.log(userFromStore.get('name'));
}
 
var first = myStore.first(); //получение первого объекта
var last = myStore.last(); // получение последнего объекта
console.log(first.get('name'));
console.log(last.get('name'));


//Получение диапазона значений
var i=0;
  var j=1
 if(i<myStore.count() && j<myStore.count())
 {
    var users = myStore.getRange(i,j);
    Ext.each(users, function(record,index){
        console.log((index+1)+'. '+record.get('name'));
    });
 }

 //Перебор всего хранилища
 myStore.each(function(record,index){
    console.log((index+1)+'. '+record.get('name'));
});

Ext.onReady(function(){      
    Ext.define('User', {
      extend: 'Ext.data.Model',
      fields: [
          {name: 'id',  type: 'int'},
          {name: 'name', type: 'string'}
      ]
  });
   Ext.define('UserStore', {
      extend: 'Ext.data.Store',
      model: 'User',
      proxy: {
          type: 'ajax',
          url: '../res/users.json',
          reader:{
              type:'json',
              root: 'data.users'
          }
      }
  });
  var myStore = Ext.create('UserStore');
  myStore.load(function() {
    console.log('Перебор данных, загруженных из файла');
      myStore.each(function(record){
        console.log(record.get('name'));
      });
  });
});