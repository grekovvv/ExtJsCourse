Ext.application({
    name: 'HelloExt',
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            //layout: 'fit',
            renderTo: 'app-container',
            items: [
                {
                    title: 'Приложение на Ext JS 4',
                    html : '<h3>Добро пожаловать в мир Ext JS 4!</h3>'
                }
            ]
        });
        Ext.create('Ext.Button', {
            text: 'Click Me',
            renderTo: 'app-btn',
            handler: function() {
              Ext.Msg.alert('Button Clicked', 'You clicked the button!');
            }
          });
        // var button = Ext.create('Ext.Button', {
        //     margin:'10 0 0 30',
        //     text: 'Animate',
        //     renderTo: 'app-btn2',
        //     handler: function() {
        //         Ext.Msg.alert('Button Clicked', 'You clicked the button!');
        //       }
        // });
        // button.getEl().puff({
        //     easing: 'easeIn',
        //     duration: 2000,
        //     useDisplay: false,
        //     remove: false,
        // });
        Ext.create('Ext.Panel', {
            width: 500,
            height: 360,
            padding: 10,
            layout:'border',
            items: [{
                    xtype: 'panel',
                    title: 'Центральная панель',
                    html: 'Центральная панель',
                    region: 'center'
                },{
                    xtype: 'panel',
                    title: 'Верхняя панель',
                    html: 'Верхняя панель',
                    region: 'north',
                    height: 80,
                    collapsible: true,
                    titleCollapse: true
                },{
                    xtype: 'panel',
                    title: 'Нижняя панель',
                    html: 'Нижняя панель',
                    region: 'south',
                    height: 80
                },{
                    xtype: 'panel',
                    title: 'Левая панель',
                    html: 'Левая панель',
                    region: 'west',
                    width: 100,
                    collapsible: true,
                    collapsed: true
                },{
                    xtype: 'panel',
                    title: 'Правая панель',
                    html: 'Правая панель',
                    region: 'east',
                    width: 120,
                    split: true
                }] ,
            renderTo: Ext.getBody()
        });
        var window = Ext.create('Ext.window.Window', {
            title: 'Приложение',
            width: 300,
            height: 200,
            items:[{
                xtype: 'button',
                text: 'Кнопка 1',
                style:'margin-left:100px; margin-top:70px;',
            }]
        });
        window.show();
    }
});


/**
 * Demonstrates a responsive login form.
 */
Ext.define('KitchenSink.view.templates.Login', {
    extend: 'Ext.Container',
    xtype: 'template-login',
    renderTo: 'app-container',
    autoSize: true,
    profiles: {
        defaults: {
            width: 340,
            height: 544
        },
        phone: {
            defaults: {
                // reset the properties for phone
                height: undefined,
                margin: undefined,
                padding: undefined,
                shadow: undefined,
                width: undefined
            }
        }
    },
    width: 340,
    height: 544,
    layout: {
        type: 'vbox',
        pack: Ext.platformTags.phone && window.orientation === 0 ? 'center' : undefined,
        align: 'middle'
    },
    scrollable: 'y',
    otherContent: [
        {
            type: 'Controller',
            path: 'modern/src/view/templates/LoginController.js'
        }
    ],
    // setting the background of the container
    style: 'background-color: var(--base-color)',

    items: [
        {
            xtype: 'formpanel',
            height: 514,
            width: 340,
            reference: 'formLogin',
            layout: {
                type: 'vbox',
                align: 'middle'
            },
            bodyPadding: 30,
            items: [
                {
                    xtype: 'image',
                    height: 90,
                    width: 280,
                    alt: 'sencha-logo-image',
                    src: 'resources/images/SenchaLogoLg.svg'
                },
                {
                    xtype: 'component',
                    width: 280,
                    height: 27,
                    html: 'Login Into Your Account',
                    style: {
                        'font-size': '20px',
                        'text-align': 'center',
                        'margin': 'auto'
                    }
                },
                {
                    xtype: 'component',
                    reference: 'formLoginFailure',
                    tpl: '<tpl if="errors.length">' +
                        '<span class="x-fa fa-exclamation-circle" style="color: red;">' +
                        ' Login Failure</span>' +
                        '</tpl>',
                    height: 26,
                    width: 280,
                    style: {
                        'font-size': '20px',
                        'text-align': 'center',
                        'margin': 'auto'
                    }
                },
                {
                    xtype: 'textfield',
                    allowBlank: false,
                    required: true,
                    width: 280,
                    label: 'Email Address',
                    name: 'email',
                    placeholder: 'Email Address',
                    errorTarget: 'qtip',
                    style: {
                        'margin': 'auto'
                    },
                    responsiveConfig: {
                        'desktop': {
                            errorTarget: 'side'
                        }
                    }
                },
                {
                    xtype: 'passwordfield',
                    allowBlank: false,
                    required: true,
                    width: 280,
                    label: 'Password',
                    name: 'pass',
                    placeholder: 'password',
                    errorTarget: 'qtip',
                    style: {
                        'margin': 'auto'
                    },
                    responsiveConfig: {
                        'desktop': {
                            errorTarget: 'side'
                        }
                    }
                },
                {
                    xtype: 'checkbox',
                    width: 280,
                    bodyAlign: 'left',
                    boxLabel: 'Keep me logged in',
                    name: 'remember',
                    style: {
                        'font-size': '16px',
                        'letter-spacing': '1.25px',
                        'color': 'rgba(17, 17, 17, 0.54)',
                        'margin': 'auto'
                    }
                },
                {
                    xtype: 'button',
                    text: 'LOG IN',
                    autoSize: true,
                    handler: 'onLogin',
                    width: 280,
                    ui: 'action',
                    style: {
                        'text-align': 'center',
                        'letter-spacing': '1.25px',
                        'font-size': '14px',
                        'margin': 'auto'
                    }
                },
                {
                    xtype: 'component',
                    html: "<a style='color: var(--base-color);text-decoration: none;' href='#template-reset-password'>Forgot your Password?</a>",
                    style: {
                        'font-size': '16px',
                        'text-align': 'center',
                        'margin': 'auto'
                    },
                    width: 280
                }
            ]
        },
        {
            xtype: 'component',
            margin: '4 0 0 0',
            width: 280,
            style: {
                'font-size': '16px',
                'text-align': 'center',
                'color': 'var(--base-foreground-color)',
                'letter-spacing': '1.25px'
            },
            html: 'Don’t have an account?' +
                "<a style='font-weight:bold;color:var(--base-foreground-color);text-decoration: none;' href='#template-create-account'> Sign-Up</a>",
            responsiveConfig: {
                'phone': {
                    margin: '13 0 0 0'
                }
            }
        }
    ]
});



//   var store = Ext.create('Ext.data.Store', {
//     fields: ['name', 'email'],
//     data: [
//       { name: 'John Doe', email: 'john@example.com' },
//       { name: 'Jane Smith', email: 'jane@example.com' }
//     ]
//   });
  
//   Ext.create('Ext.grid.Panel', {
//     title: 'User List',
//     store: store,
//     columns: [
//       { text: 'Name', dataIndex: 'name' },
//       { text: 'Email', dataIndex: 'email' }
//     ],
//     renderTo: 'app-container'
//   })

// Ext.onReady(function() {
//     Ext.create('Ext.Panel', {
//         renderTo: 'helloWorldPanel',
//         height: 200,
//         width: 600,
//         title: 'Hello world',
//         html: 'First Ext JS Hello World Program'
//   });
// });