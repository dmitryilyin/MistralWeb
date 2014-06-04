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
                    that.taskSetStatus('IDLE');
                }
            },
            'task #btn_task_set_running': {
                click: function() {
                    var that = this;
                    that.taskSetStatus('RUNNING');
                }
            },
            'task #btn_task_set_success': {
                click: function() {
                    var that = this;
                    that.taskSetStatus('SUCCESS');
                }
            },
            'task #btn_task_set_error': {
                click: function() {
                    var that = this;
                    that.taskSetStatus('ERROR');
                }
            }
        });
    },

    taskSetStatus: function(status) {
        console.log('Set task status: ' + status);
    },

    taskLoadButton: function() {
        console.log('Task Load press');
        var workbook_name = this.getSelectedWorkbook();
        console.log(workbook_name);
        var execution_id = this.getSelectedExecution();
        console.log(execution_id);
        if ((workbook_name) && (execution_id)) {
            this.loadTasks(workbook_name, execution_id);
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

    loadTasks: function(workbook_name, execution_id) {
        console.debug('Load tasks: workbook: ' + workbook_name + ' execution_id: ' + execution_id);
        var store = this.getTaskStore();
        console.log(store);
        store.setExecution(workbook_name, execution_id);
        store.reload();
    }

});
