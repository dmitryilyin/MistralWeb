Ext.define('MistralWeb.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    items: [{
        region: 'center',
        xtype: 'execution'
    },{
        region: 'west',
        xtype: 'workbook',
        width: '50%'
    },{
        region: 'north',
        xtype: 'task',
        height: 300
    },{
        region: 'south',
        xtype: 'log',
        height: 300
    }]

});