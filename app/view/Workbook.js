Ext.define("MistralWeb.view.Workbook", {
    extend: 'Ext.Panel',
    alias: 'widget.workbook',
    title: 'Workbooks',
    layout: 'border',
    items: [
        {
            region: 'north',
            xtype: 'grid',
            height: 150,
            store: 'Workbook',
            autoHeight: true,
            columns: {
                defaults: {
                    flex: 1
                },
                items: [
                    { text: 'Name', dataIndex: 'name' },
                    { text: 'Description', dataIndex: 'description' },
                    { text: 'Tags', dataIndex: 'tags' }
                ]
            }
        },
        {
            region: 'center',
            xtype: 'textareafield',
            anchor: '100%'
        },
        {
            region: 'south',
            xtype: 'panel',
            height: 40,
            layout: 'hbox',
            items: [
                {
                    xtype: 'button',
                    text: 'Load',
                    height: 30,
                    width: 100,
                    margin: '3px'
                },
                {
                    xtype: 'button',
                    text: 'Save',
                    height: 30,
                    width: 100,
                    margin: '3px'
                }
            ]
        }
    ]
});