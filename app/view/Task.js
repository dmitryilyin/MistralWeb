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
                  { text: 'Tags', dataIndex: 'tags' }
              ]
          }
        },{
            region: 'east',
            xtype: 'panel',
            wifth: 150,
            layout: 'vbox',
            items: [
                {
                    xtype: 'button',
                    text: 'Refresh',
                    margin: '3px',
                    height: 30
                },
                {
                    xtype: 'button',
                    text: 'Set OK',
                    margin: '3px',
                    height: 30
                },
                {
                    xtype: 'button',
                    text: 'Set Fail',
                    margin: '3px',
                    height: 30
                }
            ]

        }
    ]
});