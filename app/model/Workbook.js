Ext.define('MistralWeb.model.Workbook', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'name', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'tags', type: 'array' }

    ]
});
