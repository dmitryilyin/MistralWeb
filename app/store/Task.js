Ext.define('MistralWeb.store.Task', {
    extend: 'Ext.data.Store',
    model: 'MistralWeb.model.Task',

    autoLoad: false,
    autoSync: false,

    setExecution: function(workbook_name, execution_id) {
        this.workbook = workbook_name;
        this.execution_id = execution_id;
        this.getProxy().url = '/v1/workbooks/' + workbook_name + '/executions/' + execution_id + '/tasks';
    },

    requires: [
        'MistralWeb.model.Task',
        'Ext.data.proxy.Rest'
    ],

    proxy: {
        type: 'rest',
        url: null,
        reader: {
            type: 'json',
            root: 'tasks'
        },
        writer: {
            type: 'json'
        },
        noCache: false,
        limitParam: undefined,
        pageParam: undefined,
        startParam: undefined
    }
});