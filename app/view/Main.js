Ext.define('MistralWeb.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.layout.container.Border'
    ],

    xtype: 'app-main',

    defaults: {
        collapsible: true,
        collapsed: false,
        split: true
    },

    layout: {
        type: 'border'
    },

    items: [{
        region: 'east',
        xtype: 'execution',
        width: '50%'
    },{
        region: 'center',
        xtype: 'workbook',
        collapsible: false,
    },{
        region: 'south',
        xtype: 'task',
        height: 300
    }]

});