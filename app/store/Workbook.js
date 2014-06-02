Ext.define('MistralWeb.store.Workbook', {
    extend: 'Ext.data.Store',
    model: 'MistralWeb.model.Workbook',
    autoLoad: true,
    autoSync: true,

    requires: [
        'MistralWeb.model.Workbook',
        'Ext.data.proxy.Rest'
    ],

    proxy: {
        type: 'rest',
        url: '/v1/workbooks/',
        reader: {
            type: 'json',
            root: 'workbooks'
        },
        writer: {
            type: 'json',
        },
        noCache: false,
        limitParam: undefined,
        pageParam: undefined,
        startParam: undefined
    }

});
