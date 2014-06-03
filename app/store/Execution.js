Ext.define('MistralWeb.store.Execution', {
    extend: 'Ext.data.Store',
    model: 'MistralWeb.model.Execution',

    autoLoad: false,
    autoSync: false,

    setWorkbook: function(workbook) {
        this.workbook = workbook;
        this.getProxy().url = '/v1/workbooks/' + workbook + '/executions';
    },

    getWorkbook: function() {
        return this.workbook;
    },

    requires: [
        'MistralWeb.model.Execution',
        'Ext.data.proxy.Rest'
    ],

    proxy: {
        type: 'rest',
        url: null,
        reader: {
            type: 'json',
            root: 'executions'
        },
//        writer: {
//            type: 'json'
//        },
        noCache: false,
        limitParam: undefined,
        pageParam: undefined,
        startParam: undefined,
        scope: this,
    }
});