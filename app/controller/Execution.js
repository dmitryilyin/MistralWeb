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
            },
            'execution #grd_execution': {
                selectionchange: this.reloadTask
            },

            'execution #btn_execution_set_running': {
                click: function() {
                    var that = this;
                    that.executionSetStatusButton('RUNNING')
                }
            },
            'execution #btn_execution_set_suspended': {
                click: function() {
                    var that = this;
                    that.executionSetStatusButton('SUSPENDED')
                }
            },
            'execution #brn_execution_set_stopped': {
                click: function() {
                    var that = this;
                    that.executionSetStatusButton('STOPPED')
                }
            },
            'execution #btn_execution_set_success': {
                click: function() {
                    var that = this;
                    that.executionSetStatusButton('SUCCESS')
                }
            },
            'execution #btn_execution_set_error': {
                click: function() {
                    var that = this;
                    that.executionSetStatusButton('ERROR')
                }
            }
        });
    },

    executionSetStatusButton: function(execution_status) {
      console.debug('Execution Set Status press');
      var workbook_name = this.getSelectedWorkbook();
      var execution_id = this.getSelectedExecution();
      if ((workbook_name) && (execution_id) && (execution_status)) {
          this.executionSetStatus(workbook_name, execution_id, execution_status);
      }
    },

    executionSetStatus: function(workbook_name, execution_id, execution_status) {
        console.debug('Set execution status: workbook: ' + workbook_name + ' execution_id: ' + execution_id + ' status: ' + execution_status);

        Ext.Ajax.disableCaching = false;

        var execution = {
            'state' : execution_status,
            'id' : execution_id
        };

        Ext.Ajax.request({
            url: '/v1/workbooks/' + workbook_name + '/executions/' + execution_id,
            method: 'PUT',
            noCache: false,
            disableCache: false,
            limitParam: undefined,
            pageParam: undefined,
            startParam: undefined,
            jsonData: Ext.encode(execution),
            success: function (response, opts) {
                var that = this;
                console.debug(response.responseText);
                that.executionLoad(workbook_name);
            },
            failure: function (response, opts) {
                console.debug(response.responseText);
                Ext.Msg.alert('Error!', response.responseText);
            },
            scope: this
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
        var txt_execution_context = Ext.getCmp('txt_execution_context');
        var context = txt_execution_context.getValue();
        this.executionRun(workbook_name, target_task, context);
    },

    executionStopButton: function() {
        console.debug('Execution Stop press');
        var workbook_name = this.getSelectedWorkbook();
        if (!workbook_name) {
            return;
        }
        var execution_id = this.getSelectedExecution();
        if (execution_id) {
            Ext.Msg.confirm('Stop Execution', 'Are you sure you want to stop execution "' + execution_id + '" of workbook "' + workbook_name + '"?',
                function(btn){
                    if (btn == 'yes'){
                        this.executionStop(workbook_name, execution_id);
                    }
                },
                this
            );
        }

    },

    reloadTask: function() {
        var task_controller = this.getController('Task');
        if (task_controller) {
            task_controller.taskLoadButton();
        }
    },

    getSelectedExecution: function() {
        var grid = Ext.getCmp('grd_execution');
        if (!grid) {
            return null;
        }
        var sel_model = grid.getSelectionModel();
        if (!sel_model) {
            return null;
        }
        var sel_records = sel_model.getSelection();
        if ((!sel_records) || (sel_records.length == 0)) {
            return null;
        }
        var name = sel_records[0].data.id;
        if (!name) {
            return null;
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
            url: '/v1/workbooks/' + workbook_name + '/executions/' + execution_id,
            method: 'DELETE',
            noCache: false,
            disableCache: false,
            limitParam: undefined,
            pageParam: undefined,
            startParam: undefined,
            success: function (response, opts) {
                var that = this;
                console.debug(response.responseText);
                that.executionLoad(workbook_name);
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
            success: function (response) {
                var that = this;
                console.debug(response.responseText);
                that.executionLoad(workbook_name);
            },
            failure: function (response) {
                console.debug(response.responseText);
                Ext.Msg.alert('Error!', response.responseText);
            },
            scope: this
        });

    }

});
