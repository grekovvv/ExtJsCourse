//////////////////////////////////////////////////////////////////////////////////////
    //Анимация
    Ext.onReady(function(){
        var element = Ext.get('blackQv');
        //puff Эта функция в течение определенного времени растягивает элемент, при этом постепенно делая его прозрачным
        // element.puff({
        //     easing: 'easeIn',
        //     duration: 2000,
        //     useDisplay: false
        // });
        
        //switchOff - действует противоположным образом, постепенно уменьшая элемент, пока он полностью не исчезнет
        
        // element.switchOff({
        //     easing: 'easeOut',
        //     duration: 3000,
        //     remove: false,
        //     useDisplay: false
        // });
        
        //slideIn и slideOut производят скольжение элемента в указанном направлении. 
        //Если slideIn постепенно выдвигает элемент на страницу как бы из-за границ, то slideOut, наоборот, убирает его со страницы
        
        // element.slideIn('t', {
        //     easing: 'easeIn',
        //     duration: 2000
        // });
        // element.slideOut('r', {
        //     easing: 'easeOut',
        //     duration: 3000,
        //     remove: false,
        //     useDisplay: false
        // });

        //fadeOut постепенно обесцвечивает элемент, делая его прозрачным
        
        // element.fadeOut({
        //     opacity: 0,
        //     easing: 'easeOut',
        //     duration: 2000,
        //     remove: false,
        //     useDisplay: false
        // });

        //frame задает пульсацию элемента
        element.frame("#0000b9", 10, { //кол-во повтороений
            duration: 1000
        });


         //Так выглядит анимаация компонентов
        var button = Ext.create('Ext.Button', {
            margin:'10 0 100 30',
            text: 'Animate',
            renderTo: Ext.getBody(),
        });
        button.getEl().frame("#0000b9", 3, {
            duration: 1000
        });

        // //Можем забахать свою анимацию
        // Ext.create('Ext.fx.Animator', {
        //     target: 'jump',
        //     duration: 4000,
        //     keyframes: {
        //         0: {
        //             y: 100
        //         },
        //         20: {
        //             y: 250,
        //             backgroundColor: 'yellow'
        //         },
        //         40: {
        //             y: 155,
        //             x:110,
        //             backgroundColor: '#0000FF'
        //         },
        //         60: {
        //             y: 250,
        //             x:120
        //         },
        //         80: {
        //             y: 225,
        //             x:170,
        //             backgroundColor: 'red'
        //         },
        //         100: {
        //             y: 250,
        //             x:180
        //         }
        //     }
        // });
    });