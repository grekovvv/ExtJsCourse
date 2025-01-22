
	
//Ext.define(className, members, onClassCreated);

//Создадим простой класс
Ext.define('Classes.Person', {
    name: 'Eugene',
    surname : 'Popov',

    getinfo: function() {
        console.log("Полное имя : " + this.name + " " + this.surname);
    }
});

var eugene = Ext.create('Classes.Person');
eugene.getinfo();

//Свойства мы можем менять
eugene.name = 'Tomas';
console.log(eugene.name)

//////////////////////////////////////////////////////////////////////////////////////
//Конструкторы

Ext.define('Classes.Person2', {
    name: 'Rick',
    surname : 'Emon',
    // конструктор объекта
    constructor: function(name, surname) {
        if (name && surname) {
            this.name = name;
            this.surname = surname;
        }
    },
    getinfo: function() 
    {
        console.log("Полное имя : " + this.name + " " + this.surname);
    }
});

var eugene1 = Ext.create('Classes.Person2');
eugene1.getinfo();

var eugene2 = Ext.create('Classes.Person2', 'Sex', 'Pistols');
eugene2.getinfo();

//Так тоже можно создавать классы
var eugene3 = new Classes.Person2('Bill', 'Gates');
eugene3.getinfo();

//////////////////////////////////////////////////////////////////////////////////////
/// Конфиг
//  Свойства в секции config (конфигурации) полностью инкапсулируются от других членов класса
//  Более правильное написание свойств, как по мне.
Ext.define('Classes.Person3', {
    config: {
            name: 'Eugene',
            surname : 'Popov'
    },
    constructor: function(config) {
        this.initConfig(config);
    },
    getinfo: function(){
        console.log("Полное имя : " + this.name + " " + this.surname);
    },
});


//////////////////////////////////////////////////////////////////////////////////////
// Статистические члены (Static)
//Статистическая переменная общая для всех объектов класса
Ext.define('Classes.Person', {
    config: {
            name: 'Eugene',
            surname : 'Popov'
    },
    statics: {
        instanceCount: 0,
        // статический метод, возвращающий объект класса
        factory: function(name, surname) {
            return new this({name: name, surname: surname});
        }
    },
    constructor: function(config) {
        this.initConfig(config);
        // свойство 'self' ссылается на класс объекта
        this.self.instanceCount ++;
    },
    getinfo: function() 
    {
        console.log("Полное имя : " + this.name + " " + this.surname);
    },
  });

var eugene = Ext.create('Classes.Person');
eugene.getinfo();
var james = Classes.Person.factory('James', 'Gosling');
console.log(Classes.Person.instanceCount);
james.getinfo();

//////////////////////////////////////////////////////////////////////////////////////
//Наследование (extend)

Ext.define('Classes.Manager', {
    extend: 'Classes.Person',
    config: {
            department: 'sales'
    },
    constructor: function(name, surname, department) {
        this.initConfig();
        if(department){
            this.setDepartment(department);
        }
        // передаем параметры в конcтруктор родительского класса
        this.callParent([name, surname]);
    }
  });

//////////////////////////////////////////////////////////////////////////////////////
//Переопределие базовых методов
  Ext.define('Classes.Manager', {
    extend: 'Classes.Person',
    config: {
            department: 'sales'
    },
    constructor: function(name, surname, department) {
        this.initConfig();
        if(department){
            this.setDepartment(department);
        }
        // передаем параметры в конcтруктор родительского класса
        this.callParent([name, surname]);
    },
    // переопределяем метод базового класса
    getinfo: function() {
        this.callParent();
        console.log("Департамент : " + this.department);
    }
  });
//////////////////////////////////////////////////////////////////////////////////////
//Миксины - множественное наследование
  
Ext.define('Classes.Car', {
    speed:0,
    drive: function(speed) {
        this.speed=speed;
        if(speed>0){
            console.log("Машина едет");
        }
        else{
            console.log("Машина останавливается");
        }
    },
});


Ext.define('Classes.Person', {
    mixins: {
        car: 'Classes.Car'
    },
    config: {
            name: 'Eugene',
            surname : 'Popov'
    },
    constructor: function(name, surname) {
        this.initConfig();
        if(name){
            this.setName(name);
        }
        if(surname){
            this.setSurname(surname);
        }
    },
    go: function(speed){
        this.drive(speed);
    },
});
//использование миксин-класса
var eugene = Ext.create('Classes.Person');
eugene.go(10);
eugene.go(0);


//////////////////////////////////////////////////////////////////////////////////////
//Динамическая подгрузка классов - СМОТРИ в папке Classes

//Нужно поместить файлы классов в отдельную папку. 
//Файлы назвать также как классы.
//Тогда можно будет их динамически подгружать на страницу, обращаясь к конкретному файлу.


  
//////////////////////////////////////////////////////////////////////////////////////
//Singleton
// Можно создать только один класс
Ext.define('Classes.Person', {
    singleton: true,
    name: 'Eugene',
    surname : 'Popov',
    getinfo: function()
    {
        console.log("Полное имя : " + this.name + " " + this.surname);
    }
});

Classes.Person.getinfo();

// здесь будет ошибка
var eugene = Ext.create('Classes.Person');
eugene.getinfo();


//////////////////////////////////////////////////////////////////////////////////////
//Псевдонимы классов
Ext.define('Classes.Person', {
    alias: 'person',
    name: 'Eugene',
    surname : 'Popov',
    constructor: function(name, surname) {
        if (name && surname) {
            this.name = name;
            this.surname = surname;
        }
    },
    getinfo: function()
    {
        console.log("Полное имя : " + this.name + " " + this.surname);
    }
});

var eugene = Ext.create('person');