Ext.define("MistralWeb.view.Workbook", {
    extend: 'Ext.Panel',
    alias: 'widget.workbook',
    title: 'Workbooks',
    layout: 'border',

    requires: [
        'Ext.grid.Panel',
        'Ext.form.field.TextArea',
        'Ext.grid.plugin.CellEditing'
    ],

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
                    },
                    {
                        text: 'Description',
                        dataIndex: 'description',
                        editor: 'textfield'
                    },
                    {
                        text: 'Tags',
                        dataIndex: 'tags',
                        editor: 'textfield'
                    }
                ]
            },
            selType: 'cellmodel',
            plugins: [
                Ext.create('Ext.grid.plugin.CellEditing', {
                    clicksToEdit: 2
                })
            ]
        },
        {
            region: 'center',
            xtype: 'textareafield',
            id: 'txt_editor',
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
                }
            ]
        }
    ]
});