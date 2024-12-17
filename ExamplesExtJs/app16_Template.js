var tiobeData = [
    {
        position: 1,
        title: 'C',
        rate: '19.224%'
    }, {
        position: 2,
        title: 'Java',
        rate: '17.455%'
    }, {
        position: 3,
        title: 'Objective-C',
        rate: '10.383%'
    }, {
        position: 4,
        title: 'C++',
        rate: '9.689%'
    }, {
        position: 5,
        title: 'PHP',
        rate: '5.732%'
}];

Ext.onReady(function(){
    var tpl = new Ext.XTemplate
        ('<h1>TIOBE Rate</h1>',
        '<table>',
        '<tr>',
        '<td>Позиция на Ноябрь 2012</td>',
        '<td>Язык программирования</td>',
        '<td>Рейтинг</td>',
        '</tr>',
        '<tpl for=".">',
            '<tr>',
            '<td>{position}</td>',
            '<td>{title}</td>',
            '<td>{rate}</td>',
            '</tr>',
        '</tpl>',
        '</table>');                          
tpl.append(Ext.getBody(), tiobeData);
});

//Условные конструкции как во vue (или во vue как тут)

Ext.onReady(function(){
    var tpl = new Ext.XTemplate('<h1>Рейтинг TIOBE</h1>',
                                        '<table>',
                                            '<tr>',
                                                '<td>Позиция на Ноябрь 2012</td>',
                                                '<td>Язык программирования</td>',
                                                '<td>Рейтинг</td>',
                                                '<td>Группа</td>',
                                            '</tr>',
                                            '<tpl for=".">',
                                            '<tr <tpl if="values.position%2 == 1">style="background-color: silver;"</tpl>>',
                                                '<td>{position}</td>',
                                                '<td>{title}</td>',
                                                '<td>{rate}</td>',
                                                '<tpl if="values.position<3">',
                                                    '<td>A</td>',
                                                '<tpl elseif="values.position<5">',
                                                        '<td>B</td>',
                                                '<tpl else>',
                                                        '<td>C</td>',
                                                '</tpl>',
                                            '</tr>',
                                            '</tpl>',
                                        '</table>');                         
            tpl.append(Ext.getBody(), tiobeData);
});

//Вставляем ещё js

var tpl = new Ext.XTemplate('<h1>TIOBE Rate</h1>',
    '<table>',
        '<tr>',
            '<td>Позиция на Ноябрь 2012</td>',
            '<td>Язык программирования</td>',
            '<td>Рейтинг</td>',
        '</tr>',
        '<tpl for=".">',
            '<tr <tpl if="values.position%2 == 1">style="background-color: silver;"</tpl>>',
                '<td>{position}</td>',
                '<td>{[this.getStringValue(values.title)]}</td>',
                '<td>{rate}</td>',
            '</tr>',
        '</tpl>',
    '</table>',
    {
         getStringValue: function(values){
                    if(values=="C"){return "C (упер)";} //добавляем к называнию
                    else {return values}
                }
    });
tpl.append(Ext.getBody(), tiobeData);