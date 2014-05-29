Ext.define('MistralWeb.store.Task', {
    extend: 'Ext.data.Store',
    model: 'MistralWeb.model.Task',
    requires: 'MistralWeb.model.Task',
    autoLoad: true,
    data: [
        {
            id: 1,
            workbook_name: 'test1',
            execution_id: '12304593450234',
            name: 'test1',
            description: 'test task 1',
            action: 'test',
            state: 'IDLE',
            tags: 'tst'
        },
        {
            id: 2,
            workbook_name: 'test1',
            execution_id: '12304593450235',
            name: 'test2',
            description: 'test task 2',
            action: 'test',
            state: 'RUNNING',
            tags: 'tst'
        }
    ]
});