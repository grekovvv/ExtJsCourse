Ext.Ajax.request({
    url: '../res/ajaxData.json', //Параметр url указывает на ресурс, к которому мы осуществляем запрос. 
    success: function(response, options) { //необязательный параметр options, который содержит дополнительные данные о запросе
     
    },
    failure: function(response, options) {
         
    }
});
//Другой вариант обработки ответа
Ext.Ajax.request({
    url: '../res/ajaxData.json',
    callback: function(options, success, response){
         
    },
}); 

Ext.onReady(function(){
    Ext.Ajax.request({
        url: '../res/ajaxData.json',
        success: function(response, options){
            alert(response.responseText);
        },
        failure: function(response, options){
            alert("Ошибка: " + response.statusText);
        }
    }); 
});

//Декодинг Json

Ext.onReady(function(){
    Ext.Ajax.request({
        url: '../res/ajaxData.json',
        success: function(response, options){
            var objAjax = Ext.decode(response.responseText); // декодируем полученные json-объекты
            // устанавливаем для каждого свойства декодированное значение
            panel.getComponent('txtName').setValue(objAjax.firstname);
            panel.getComponent('txtSurname').setValue(objAjax.lastname);
            panel.getComponent('txtCompany').setValue(objAjax.company);
        },
        failure: function(response, options){
            alert("Ошибка: " + response.statusText);
        }
    }); 
     
    var panel=Ext.create('Ext.panel.Panel', {
        title:'Приложение ExtJS 4',
        width: 350,
        height: 150,
        padding:10,
        bodyPadding:5,
        items : [{
            xtype: 'textfield',
            fieldLabel: 'Имя',
            id: 'txtName',
            height: 20,
         },{
            xtype: 'textfield',
            fieldLabel: 'Фамилия',
            id: 'txtSurname',
            height: 20,
         },{
            xtype: 'textfield',
            fieldLabel: 'Компания',
            id: 'txtCompany',
            height: 20,
         }],
        renderTo: Ext.getBody()
    });
    
    Ext.Ajax.request({
        url: '../res/xmlData.xml',
        success: function(response, options){
            var doc = response.responseXML;
            var root = Ext.DomQuery.selectNode('languages', doc);
            var langs=Ext.DomQuery.select('language', root);
            var lansData='<table class="tab">';
            for(var i=0;i<langs.length;i++){
                lansData+='<tr><td>'+Ext.DomQuery.selectValue('position', langs[i])+'</td>';
                lansData+='<td>'+Ext.DomQuery.selectValue('title', langs[i])+'</td>';
                lansData+='<td>'+Ext.DomQuery.selectValue('rate', langs[i])+'</td></tr>';
            }
            lansData+='</table>';
            panel2.update(lansData);
        },
        failure: function(response, options){
            alert("Ошибка: " + response.statusText);
        }
    }); 
     
    var panel2=Ext.create('Ext.panel.Panel', {
        title:'Приложение ExtJS 4',
        width: 300,
        height: 150,
        padding:10,
        bodyPadding:5,
        renderTo: Ext.getBody()
    });
});