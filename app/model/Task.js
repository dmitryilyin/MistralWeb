Ext.define('MistralWeb.model.Task', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'id', type: 'int' },
        { name: 'workbook_name', type: 'string' },
        { name: 'execution_id', type: 'string' },
        { name: 'name', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'action', type: 'string' },
        { name: 'state', type: 'string' },
        { name: 'tags', type: 'array' }
    ]
});
