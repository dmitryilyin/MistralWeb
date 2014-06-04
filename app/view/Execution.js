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
                    margin: '8px',
                    height: 20,
                    width: 150,
                    emptyText: 'Target'
                },
                {
                    xtype: 'textfield',
                    name: 'Target',
                    id: 'txt_execution_context',
                    height: 25,
                    margin: '3px',
                    width: 200,
                    emptyText: "Context (example: {'name' : 'test'})"
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
        },
        {
            region: 'east',
            xtype: 'panel',
            layout: 'vbox',
            collapsible: true,
            collapsed: true,
            split: true,
            width: 100,
            title: 'Set status',
            items: [
                {
                    xtype: 'button',
                    text: 'RUNNING',
                    id: 'btn_execution_set_running',
                    margin: '3px',
                    height: 30
                },
                {
                    xtype: 'button',
                    text: 'SUSPENDED',
                    id: 'btn_execution_set_suspended',
                    margin: '3px',
                    height: 30
                },
                {
                    xtype: 'button',
                    text: 'STOPPED',
                    id: 'brn_execution_set_stopped',
                    margin: '3px',
                    height: 30
                },
                {
                    xtype: 'button',
                    text: 'SUCCESS',
                    id: 'btn_execution_set_success',
                    margin: '3px',
                    height: 30
                },
                {
                    xtype: 'button',
                    text: 'ERROR',
                    id: 'btn_execution_set_error',
                    margin: '3px',
                    height: 30
                },
            ]
        }
    ]
});