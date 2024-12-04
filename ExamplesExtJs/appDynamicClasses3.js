Ext.Loader.setConfig({
    enabled: true,
    path: { 'Classes' : 'Classes' } //Пути как не пытался с ними играться, ничего не вышло. Только такой путь ест.
});
Ext.require('Classes.Manager');
//Код не работае, я хз почему
Ext.onReady(function(){
    var eugene = Ext.create('Classes.Manager','Tom', 'James', 'Software');
    eugene.getinfo();
});


// Либо мы можем сразу же вызывать определённый код, по заверешении загрузки класса
// Ext.require('Classes.Manager', function(){
//     var eugene = Ext.create('Classes.Manager','Tom', 'James', 'Software');
//     eugene.getinfo();
// });

//Можно отдельно загружать пространства имён и потом их использовать
//Ext.Loader.setPath('MyModels','Classes/MyModels');
