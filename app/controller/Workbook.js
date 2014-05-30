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
            'workbook #grd_workbook': {
                selectionchange: this.gridSelection
            }
        });
    },

    loadButton: function() {
        console.log('load button');
        var store = this.getWorkbookStore();
        store.reload();



//        Ext.Ajax.request({
//            url: '/task/' + name,
//            method: 'GET',
//            success: function (response, opts) {
//                var obj = Ext.decode(response.responseText);
//                var log = Ext.getCmp('log');
//                logdata = logdata + '<br />' + 'Task: ' + name + ' Status: ' + obj.status + ' PID: ' + obj.pid;
//                log.body.update(logdata.replace(/\n/g, '<br />'));
//            },
//            failure: function (response, opts) {
//                var obj = Ext.decode(response.responseText);
//                console.error(obj);
//            }
//        });


    },

    saveButton: function() {
        console.log('save button');
    },

    gridSelection: function(selectionModel,record) {
        console.log('grid selection');
        console.log(record);

        if (!record[0]) {
            return;
        }

        var selected_name = record[0].data.name;
        console.log(selected_name);

        Ext.Ajax.disableCaching = false;

        Ext.Ajax.request({
            url: '/v1/workbooks/'+ selected_name + '/definition',
            method: 'GET',
            noCache: false,
            disableCache: false,
            limitParam: undefined,
            pageParam: undefined,
            startParam: undefined,
            success: function (response, opts) {
                var editor = Ext.getCmp('#txt_editor');
                console.log(response.responseText);
                console.log(editor);
            },
            failure: function (response, opts) {
                var obj = Ext.decode(response.responseText);
                console.error(obj);
            }
        })

    }


});
