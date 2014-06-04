Ext.define('MistralWeb.store.Execution', {
    extend: 'Ext.data.Store',
    model: 'MistralWeb.model.Execution',

    autoLoad: false,
    autoSync: false,

    setWorkbook: function(workbook_name) {
        this.workbook = workbook_name;
        this.getProxy().url = '/v1/workbooks/' + workbook_name + '/executions';
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
        noCache: false,
        limitParam: undefined,
        pageParam: undefined,
        startParam: undefined,
        scope: this
    }
});