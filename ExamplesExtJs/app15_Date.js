//Для работы с датами в Ext JS имеется класс Ext.Date, 
//который расширяет функциональность стандартного объекта JavaScript Datе
Ext.onReady(function(){
    var date = new Date(2012, 10, 22, 16, 15);
    Ext.Date.patterns={
        ISO8601Long: "d-m-Y H:i:sP",
        ISO8601Short:"d-m-Y",
        ShortDate: "j/n/y",
        FullDateTime: "l, F d, Y g:i:s A",
        LongTime: "g:i:s A",
        SortableDateTime: "d-m-Y\ H:i:s",
        UniversalSortableDateTime: "Y-m-d H:i:sO", 
        CustomFormat: "H:i d-m"
    };
     
    var time = "<p><b>ISO8601Long</b>: "+Ext.Date.format(date, Ext.Date.patterns.ISO8601Long) + 
       "</p><p><b>ISO8601Short</b>: " + Ext.Date.format(date, Ext.Date.patterns.ISO8601Short) +
       "</p><p><b>ShortDate</b>:    " + Ext.Date.format(date, Ext.Date.patterns.ShortDate) +
       "</p><p><b>FullDateTime</b>: " + Ext.Date.format(date, Ext.Date.patterns.FullDateTime) +
       "</p><p><b>SortableDateTime</b>: " + Ext.Date.format(date, Ext.Date.patterns.SortableDateTime) +
       "</p><p><b>UniversalSortableDateTime</b>: " + Ext.Date.format(date, Ext.Date.patterns.UniversalSortableDateTime) +
       "</p><p><b>CustomFormat</b>: " + Ext.Date.format(date, Ext.Date.patterns.CustomFormat);
 
    var pannel=Ext.create('Ext.Panel', {
            title: 'Приложение Ext JS 4',
            html:time,
            width: 400,
            height: 250,
            renderTo: Ext.getBody()
        }); 
});