Ext.define("MistralWeb.view.Workbook", {
    extend: 'Ext.Panel',
    alias: 'widget.workbook',
    title: 'Workbooks',
    layout: 'border',

    requires: [
        'Ext.grid.Panel',
        'Ext.form.field.TextArea',
        'Ext.grid.plugin.CellEditing',
        'Ext.window.MessageBox'
    ],

    defaults: {
      split: false,
      collapsible: false
    },

    items: [
        {
            region: 'north',
            xtype: 'grid',
            height: 150,
            id: 'grd_workbook',
            store: 'Workbook',
            autoHeight: true,
            columns: {
                defaults: {
                    flex: 1
                },
                items: [
                    {
                        text: 'Name',
                        dataIndex: 'name',
                        flex: 1
                    },
                    {
                        text: 'Description',
                        dataIndex: 'description',
                        editor: 'textfield',
                        flex: 2
                    }
                ]
            },
            selType: 'rowmodel',
            plugins: [
                {
                    ptype : 'cellediting',
                    clicksToEdit: 2
                }
            ]
        },
        {
            region: 'center',
            xtype: 'textareafield',
            id: 'txt_editor',
            anchor: '100%',
            collapsible: false,
            fieldStyle: "font-family: 'Lucida Console', Monaco, monospace; font-size: 2em"
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
                    id: 'btn_load',
                    height: 30,
                    width: 100,
                    margin: '3px'
                },
                {
                    xtype: 'button',
                    text: 'Save',
                    id: 'btn_save',
                    height: 30,
                    width: 100,
                    margin: '3px'
                },
                {
                    xtype: 'button',
                    text: 'New',
                    id: 'btn_new',
                    height: 30,
                    width: 100,
                    margin: '3px'
                },
                {
                    xtype: 'button',
                    text: 'Delete',
                    id: 'btn_delete',
                    height: 30,
                    width: 100,
                    margin: '3px'
                }
            ]
        }
    ]
});
