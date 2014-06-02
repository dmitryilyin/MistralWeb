Ext.define('MistralWeb.controller.Workbook', {
    extend: 'Ext.app.Controller',
    stores: ['Workbook'],
    models: ['Workbook'],

    init: function() {
        console.log('Initialized Workbook controller!');
        this.control({
            'workbook #btn_load': {
                click: this.loadButton
            },
            'workbook #btn_save': {
                click: this.saveButton
            },
            'workbook #btn_new': {
                click: this.newButton
            },
            'workbook #btn_delete': {
                click: this.deleteButton
            },
            'workbook #grd_workbook': {
                selectionchange: this.gridSelection
            }
        });
    },

    loadButton: function() {
        console.debug('Load button press');
        var store = this.getWorkbookStore();
        store.reload();
    },

    gridSelection: function(selectionModel, record) {
        console.debug('Grid selection');

        if (!record[0]) {
            return;
        }

        this.loadWorkbook(record[0].data.name);
    },

    getSelectedWorkbook: function() {
        var grid = Ext.getCmp('grd_workbook');
        if (!grid) {
            console.error('No grid selected!');
            return;
        }
        var sel_model = grid.getSelectionModel();
        if (!sel_model) {
            console.error('No selmodel selected!');
            return;
        }
        var sel_records = sel_model.getSelection()
        if (!sel_records) {
            console.error('No records selected!');
            return;
        }
        var name = sel_records[0].data.name;
        if (!name) {
            console.error('No name selected!');
            return;
        }
        return name;
    },

    saveButton: function() {
        console.debug('Save button press');
        var name = this.getSelectedWorkbook();
        var editor = Ext.getCmp('txt_editor');
        var data = editor.getValue();
        console.log('name: ' + name);
        console.log('data: ' + data);

        if ((data) && (name)) {
          this.saveWorkbook(name, data);
        }
    },

    newButton: function() {
        console.debug('New button press');
        Ext.Msg.prompt('Create Workbook', 'Workbook name:', function(btn, name){
            if (btn == 'ok'){
                this.createWorkbook(name);
            }
        },
        this);
    },

    deleteButton: function() {
        console.debug('Delete button press');
        var name = this.getSelectedWorkbook();
        if (name) {
            this.deleteWorkbook(name);
        }
    },

//    =====

    deleteWorkbook: function(name) {
        console.debug('Delete workbook: ' + name);

        Ext.Ajax.disableCaching = false;
        Ext.Ajax.request({
            url: '/v1/workbooks/' + name,
            method: 'DELETE',
            noCache: false,
            disableCache: false,
            limitParam: undefined,
            pageParam: undefined,
            startParam: undefined,
            success: function (response, opts) {
                console.debug(response.responseText);
                this.loadButton()
            },
            failure: function (response, opts) {
                console.debug(response.responseText);
                console.error('Error!', 'Failed to delete workbook!');
            },
            scope: this
        });
    },

    createWorkbook: function(name) {
        console.debug('Create workbook: ' + name);

        var workbook = {
            'name' : name,
            'description' : '',
            'tags' : []
        };

        Ext.Ajax.disableCaching = false;
        Ext.Ajax.request({
            url: '/v1/workbooks',
            method: 'POST',
            noCache: false,
            disableCache: false,
            limitParam: undefined,
            pageParam: undefined,
            startParam: undefined,
            jsonData: Ext.encode(workbook),
            success: function (response, opts) {
                console.debug(response.responseText);
                this.loadButton()
            },
            failure: function (response, opts) {
                console.debug(response.responseText);
                console.error('Error!', 'Failed to create workbook!');
            },
            scope: this
        });
    },

    loadWorkbook: function(name) {
        console.debug('Load workbook: ' + name);
        Ext.Ajax.disableCaching = false;
        Ext.Ajax.request({
            url: '/v1/workbooks/'+ name + '/definition',
            method: 'GET',
            noCache: false,
            disableCache: false,
            limitParam: undefined,
            pageParam: undefined,
            startParam: undefined,
            success: function (response, opts) {
                var editor = Ext.getCmp('txt_editor');
                console.debug(response.responseText);
                if (editor) {
                    editor.setValue(response.responseText);
                }
            },
            failure: function (response, opts) {
                console.debug(response.responseText);
                console.error('Error!', 'Failed to load workbook definition!');
            }
        });
    },

    saveWorkbook: function(name, data) {
        Ext.Ajax.disableCaching = false;
        Ext.Ajax.request({
            url: '/v1/workbooks/'+ name + '/definition',
            method: 'PUT',
            noCache: false,
            disableCache: false,
            limitParam: undefined,
            pageParam: undefined,
            startParam: undefined,
            headers: {
                'Content-Type': 'text/plain'
            },
            params: data,
            success: function (response, opts) {
                console.debug(response.responseText);
                console.info('Workbook saved!');
            },
            failure: function (response, opts) {
                console.debug(response.responseText);
                Ext.Msg.alert('Error!', response.responseText);
            }
        });
    }

});
