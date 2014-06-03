Ext.define('MistralWeb.controller.Execution', {
    extend: 'Ext.app.Controller',
    stores: ['Execution'],
    models: ['Execution'],

    init: function() {
        console.log('Initialized Execution controller!');
        this.control({
            'execution #btn_execution_load': {
                click: this.executionLoadButton
            },
            'execution #btn_execution_run': {
                click: this.executionRunButton
            },
            'execution #btn_execution_stop': {
                click: this.executionStopButton
            }
        });
    },

    executionLoadButton: function() {
        console.debug('Execution Load press');
        var workbook_name = this.getSelectedWorkbook();
        if (!workbook_name) {
            return;
        }
        this.executionLoad(workbook_name);
    },

    executionRunButton: function() {
        console.debug('Execution Run press');
        var workbook_name = this.getSelectedWorkbook();
        if (!workbook_name) {
            return;
        }
        var txt_execution_target = Ext.getCmp('txt_execution_target');
        var target_task = txt_execution_target.getValue();
        if (!target_task) {
            return;
        }
        var txt_execution_condition = Ext.getCmp('txt_execution_condition');
        var context = txt_execution_condition.getValue();
        this.executionRun(workbook_name, target_task, context);
    },

    executionStopButton: function() {
        console.debug('Execution Stop press');
        var workbook_name = this.getSelectedWorkbook();
        if (!workbook_name) {
            return;
        }
        var execution_id = this.getSelectedExecution();
        if (!execution_id) {
            return;
        }
        this.executionStop(workbook_name, execution_id);
    },

    getSelectedExecution: function() {
        var grid = Ext.getCmp('grd_execution');
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
        var name = sel_records[0].data.id;
        if (!name) {
            console.error('No name selected!');
            return;
        }
        return name;
    },

    getSelectedWorkbook: function() {
        var workbook_controller = this.getController('Workbook');
        return workbook_controller.getSelectedWorkbook();
    },

    executionStop: function(workbook_name, execution_id) {
        console.debug('Delete execution: ' + execution_id + ' of ' + workbook_name);
        Ext.Ajax.disableCaching = false;
        Ext.Ajax.request({
            url: '/v1/workbooks/test/executions/' + execution_id,
            method: 'DELETE',
            noCache: false,
            disableCache: false,
            limitParam: undefined,
            pageParam: undefined,
            startParam: undefined,
            success: function (response, opts) {
                console.debug(response.responseText);
                this.executionLoad(workbook_name);
            },
            failure: function (response, opts) {
                console.debug(response.responseText);
                Ext.Msg.alert('Error!', response.responseText);
            },
            scope: this
        });
    },

    executionLoad: function(workbook_name) {
        var store = this.getExecutionStore();
        store.setWorkbook(workbook_name);
        store.reload();
    },

    executionRun: function(workbook_name, target_task, context) {
        if ((!context) || (context == '')) {
            context = '{}';
        }

        if ((!workbook_name) || (!target_task)) {
            return;
        }

        var execution = {
            'workbook_name' : workbook_name,
            'task' : target_task,
            'context' : context
        };

        Ext.Ajax.disableCaching = false;
        Ext.Ajax.request({
            url: '/v1/workbooks/' + workbook_name + '/executions',
            method: 'POST',
            noCache: false,
            disableCache: false,
            limitParam: undefined,
            pageParam: undefined,
            startParam: undefined,
            jsonData: Ext.encode(execution),
            success: function (response, opts) {
                console.debug(response.responseText);
                this.getExecutionStore().reload();
            },
            failure: function (response, opts) {
                console.debug(response.responseText);
                Ext.Msg.alert('Error!', response.responseText);
            },
            scope: this
        });

    }

});
