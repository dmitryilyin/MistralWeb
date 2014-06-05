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
            fieldStyle: "font-family: 'Lucida Console', Monaco, monospace; font-size: 1.5em",
            enableKeyEvents: true,
            listeners : {
                specialkey : function(textfield, e) {
                    if (e.keyCode == 9) {
                        var text_area = document.getElementById('txt_editor-inputEl');
                        if (text_area) {
                            var startPos = text_area.selectionStart;
                            var endPos = text_area.selectionEnd;
                            text_area.value = text_area.value.substring(0, startPos) + '  ' + text_area.value.substring(endPos, text_area.value.length);
                            text_area.selectionStart = text_area.selectionEnd = startPos + 2;
                        }
                        e.preventDefault();
                    }
                }
            }
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
        },
        {
            region: 'west',
            xtype: 'panel',
            title: 'Examples',
            width: '50%',
            split: true,
            collapsible: true,
            collapsed: true,
            autoScroll: true,
            loader: {
                autoLoad:true,
                url :'/examples.txt',
                renderer: function(loader, response, active){
                    var success = true;
                    try {
                        loader.getTarget().update('<pre style="padding: 3px">' + response.responseText + '</pre>');
                    } catch (e) {
                        success = false;
                    }
                    return success;
                }
            }
        }
    ]
});
