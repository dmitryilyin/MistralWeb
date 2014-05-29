Ext.define('MistralWeb.model.Execution', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'id', type: 'int' },
        { name: 'workbook_name', type: 'string' },
        { name: 'task', type: 'string' },
        { name: 'context', type: 'object' },
        { name: 'state', type: 'string' }
    ]

});
