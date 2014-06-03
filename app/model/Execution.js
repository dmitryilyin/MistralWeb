Ext.define('MistralWeb.model.Execution', {
    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields: [
        {
            name: 'id',
            type: 'string'
        },
        {
            name: 'workbook_name',
            type: 'string'
        },
        {
            name: 'task',
            type: 'string'
        },
        {
            name: 'context',
            type: 'string'
        },
        {
            name: 'state',
            type: 'string'
        }
    ]

});
