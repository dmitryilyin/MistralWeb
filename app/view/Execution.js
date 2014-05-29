Ext.define("MistralWeb.view.Execution", {
    extend: 'Ext.Panel',
    alias: 'widget.execution',
    title: 'Executions',
    layout: 'border',
    items: [
        {
            region: 'center',
            xtype: 'grid',
            store: 'Execution',
            columns: {
                defaults: {
                    flex: 1
                },
                items: [
                    { header: 'ID', dataIndex: 'id' },
                    { text: 'Workbook', dataIndex: 'workbook_name' },
                    { text: 'Task', dataIndex: 'task' },
                    { text: 'Context', dataIndex: 'context' },
                    { text: 'State', dataIndex: 'state' }
                ]
            }
        },
        {
            region: 'south',
            xtype: 'panel',
            layout: 'hbox',
            height: 40,
            items: [
                {
                    xtype: 'button',
                    text: 'Run execution',
                    height: 30,
                    width: 100,
                    margin: '3px'
                },
                {
                    xtype: 'textfield',
                    name: 'Target',
                    margin: '3px',
                    width: 150,
                    emptyText: 'Target'
                },
                {
                    xtype: 'textfield',
                    name: 'Target',
                    margin: '3px',
                    width: 300,
                    emptyText: 'Condition'
                }
            ]
        }
    ]
});