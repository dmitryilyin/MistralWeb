Ext.define('MistralWeb.controller.Task', {
    extend: 'Ext.app.Controller',
    stores: ['Task'],
    models: ['Task'],

    init: function() {
        console.log('Initialized Task controller!');
        this.control({
            'task #btn_task_load': {
                click: this.taskLoadButton
            },
            'task #btn_task_set_idle': {
                click: function() {
                    var that = this;
                    that.taskSetStatusButton('IDLE');
                }
            },
            'task #btn_task_set_running': {
                click: function() {
                    var that = this;
                    that.taskSetStatusButton('RUNNING');
                }
            },
            'task #btn_task_set_success': {
                click: function() {
                    var that = this;
                    that.taskSetStatusButton('SUCCESS');
                }
            },
            'task #btn_task_set_error': {
                click: function() {
                    var that = this;
                    that.taskSetStatusButton('ERROR');
                }
            }
        });
    },

    taskSetStatusButton: function(task_status) {
      console.debug('Task Set Status press');
      var workbook_name = this.getSelectedWorkbook();
      var execution_id = this.getSelectedExecution();
      var task_id = this.getSelectedTask();
      if ((workbook_name) && (execution_id) && (task_id)) {
        this.taskSetStatus(workbook_name, execution_id, task_id, task_status);
      }
    },

    getSelectedTask: function() {
        var grid = Ext.getCmp('grd_task');
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

    taskSetStatus: function(workbook_name, execution_id, task_id, task_status) {
        console.debug('Set task status: workbook: ' + workbook_name + ' execution_id: ' + execution_id + ' status: ' + task_status);

        Ext.Ajax.disableCaching = false;

        var task = {
            'state' : task_status,
            'id' : task_id,
            'execution_id' : execution_id,
            'workbook_name' : workbook_name
        };

        Ext.Ajax.request({
            url: '/v1/workbooks/' + workbook_name + '/executions/' + execution_id + '/tasks/' + task_id,
            method: 'PUT',
            noCache: false,
            disableCache: false,
            limitParam: undefined,
            pageParam: undefined,
            startParam: undefined,
            jsonData: Ext.encode(task),
            success: function (response, opts) {
                var that = this;
                console.debug(response.responseText);
                that.taskLoad(workbook_name, execution_id);
            },
            failure: function (response, opts) {
                console.debug(response.responseText);
                Ext.Msg.alert('Error!', response.responseText);
            },
            scope: this
        });

    },

    taskLoadButton: function() {
        console.debug('Task Load press');
        var workbook_name = this.getSelectedWorkbook();
        var execution_id = this.getSelectedExecution();
        if ((workbook_name) && (execution_id)) {
            this.taskLoad(workbook_name, execution_id);
        }
    },

    getSelectedWorkbook: function() {
        var workbook_controller = this.getController('Workbook');
        return workbook_controller.getSelectedWorkbook();
    },

    getSelectedExecution: function() {
        var execution_controller = this.getController('Execution');
        return execution_controller.getSelectedExecution();
    },

    taskLoad: function(workbook_name, execution_id) {
        console.debug('Load tasks: workbook: ' + workbook_name + ' execution_id: ' + execution_id);
        var store = this.getTaskStore();
        store.setExecution(workbook_name, execution_id);
        store.reload();
    }

});
