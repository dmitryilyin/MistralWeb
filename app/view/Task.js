Ext.define("MistralWeb.view.Task", {
    extend: 'Ext.Panel',
    alias: 'widget.task',
    title: 'Tasks',
    layout: 'border',
    items: [
        {
          region: 'center',
          xtype: 'grid',
          store: 'Task',
          columns: {
              defaults: {
                flex: 1
              },
              items: [
                  { header: 'ID', dataIndex: 'id' },
                  { text: 'Workbook', dataIndex: 'workbook_name' },
                  { text: 'Execution', dataIndex: 'execution_id' },
                  { text: 'Name', dataIndex: 'name' },
                  { text: 'Description', dataIndex: 'description' },
                  { text: 'Action', dataIndex: 'action' },
                  { text: 'State', dataIndex: 'state' },
              ]
          }
        },{
            region: 'east',
            xtype: 'panel',
            collapsible: true,
            collapsed: true,
            width: 100,
            title: 'Set status',
            layout: 'vbox',
            items: [
                {
                    xtype: 'button',
                    text: 'IDLE',
                    id: 'btn_task_set_idle',
                    margin: '3px',
                    height: 30
                },
                {
                    xtype: 'button',
                    text: 'RUNNING',
                    id: 'btn_task_set_running',
                    margin: '3px',
                    height: 30
                },
                {
                    xtype: 'button',
                    text: 'SUCCESS',
                    id: 'btn_task_set_success',
                    margin: '3px',
                    height: 30
                },
                {
                    xtype: 'button',
                    text: 'ERROR',
                    id: 'btn_task_set_error',
                    margin: '3px',
                    height: 30
                },
            ]

        },{
            xtype: 'panel',
            region: 'south',
            layout: 'vbox',
            items: [
                {
                    xtype: 'button',
                    text: 'Load',
                    id: 'btn_task_load',
                    margin: '3px',
                    height: 30,
                    width: 100
                }
            ]
        }
    ]
});