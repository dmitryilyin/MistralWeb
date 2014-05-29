Ext.define('MistralWeb.Application', {
    name: 'MistralWeb',

    extend: 'Ext.app.Application',

    views: [
        'Workbook',
        'Task',
        'Execution',
        'Log',
    ],

    controllers: [
        'Workbook',
        'Task',
        'Execution',
    ],

    stores: [
        'Workbook',
        'Task',
        'Execution',
    ]
});
