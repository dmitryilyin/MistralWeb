Ext.define('MistralWeb.store.Execution', {
    extend: 'Ext.data.Store',
    model: 'MistralWeb.model.Execution',
    requires: 'MistralWeb.model.Execution',
    autoLoad: true,
    data: [
        {
            id: 1,
            workbook_name: 'test1',
            task: 'test1',
            context: 'test1',
            state: 'RUNNING'
        }
    ]
});