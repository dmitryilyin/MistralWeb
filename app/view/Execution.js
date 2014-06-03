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
            id: 'grd_execution',
            columns: {
                defaults: {
                    flex: 1
                },
                items: [
                    {
                        header: 'ID',
                        dataIndex: 'id',
                        flex: 2
                    },
                    {
                        text: 'Workbook',
                        dataIndex: 'workbook_name'
                    },
                    {
                        text: 'Task',
                        dataIndex: 'task'
                    },
                    {
                        text: 'Context',
                        dataIndex: 'context'
                    },
                    {
                        text: 'State',
                        dataIndex: 'state'
                    }
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
                    text: 'Load',
                    id: 'btn_execution_load',
                    height: 30,
                    width: 100,
                    margin: '3px'
                },
                {
                    xtype: 'button',
                    text: 'Run execution',
                    id: 'btn_execution_run',
                    height: 30,
                    width: 100,
                    margin: '3px'
                },
                {
                    xtype: 'textfield',
                    name: 'Target',
                    id: 'txt_execution_target',
                    margin: '3px',
                    width: 150,
                    emptyText: 'Target'
                },
                {
                    xtype: 'textfield',
                    name: 'Target',
                    id: 'txt_execution_condition',
                    margin: '3px',
                    width: 300,
                    emptyText: 'Condition'
                },
                {
                    xtype: 'button',
                    text: 'Stop execution',
                    id: 'btn_execution_stop',
                    height: 30,
                    width: 100,
                    margin: '3px'
                },
            ]
        }
    ]
});