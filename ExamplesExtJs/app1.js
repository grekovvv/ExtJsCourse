//application инициализирует класс
Ext.application({
    name: 'HelloExt',
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    title: 'Приложение на Ext JS 4',
                    html : `
                    <h3>Добро пожаловать в мир Ext JS 4!</h3> 
                    <br> 
                    <a href="../index.html">Вернутся в меню</a>
                    `
                }]
        });
    }
});

//Аналогично можно вызывать Ext.onReady, он срабатывает после загрузки страницы
//В данном случае оба подхода взаимозаменяемы. 

// Ext.onReady(function(){
//     Ext.create('Ext.container.Viewport', {
//         layout: 'fit',
//         items: [
//             {
//                 title: 'Приложение на Ext JS 4',
//                 html : '<h3>Добро пожаловать в мир Ext JS 4!</h3>'
//             },
//         ]
//     });
// });