Ext.define('Classes.Person', {
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
    getinfo: function(){
        console.log("Полное имя : " + this.config.name + " " + this.config.surname);
    },
  });