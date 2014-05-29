set -e

sencha generate controller Workbook
sencha generate controller Execution
sencha generate controller Task

sencha generate view Workbook
sencha generate view Execution
sencha generate view Task

sencha generate model Workbook name:string,description:string,tags:array
sencha generate model Execution id:int,workbook_name:string,task:string,context:object,state:string
sencha generate model Task id:int,workbook_name:string,execution_id:string,name:string,description:string,action:string,state:string,tags:array
