Ext.define('MistralWeb.store.Workbook', {
    extend: 'Ext.data.Store',
    model: 'MistralWeb.model.Workbook',
    requires: 'MistralWeb.model.Workbook',
    autoLoad: true,
    data: [
        {
            name: 'test1',
            description: 'test desc1',
            tags: 'tst'
        },
        {
            name: 'test2',
            description: 'test desc2',
            tags: 'tst'
        },
        {
            name: 'test3',
            description: 'test desc3',
            tags: 'tst'
        }
    ]
});