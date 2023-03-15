import{A as w,B as M}from"./BackendConnection.d2e3ca8d.js";import{S as k}from"./SearchField.fb805814.js";import{E as B,I as N}from"./ImportButton.48aa4f9b.js";import{E as x}from"./EditableTable.2575550e.js";import{F as l}from"./fields.a9b8223d.js";import{_ as D,r as n,o as d,c as b,d as r,t as O,e as i,h as c,a as h,F as E}from"./index.69541d17.js";import"./PageGenerator.bde4ec7a.js";const y={props:["token","user","hasPermission","updateToken"],data(){return{moduleName:"clients",title:l.clients.title,Model:l.clients.Model,fields:l.clients.fields,models:[],original:[],auxiliar:[]}},created(){this.token?this.user?this.hasPermission(this.moduleName,"access")||this.$router.push("/"):this.$router.push("/"):this.$router.push("/")},methods:{showMessage(s,e){this.$refs.AlertMessage.show(s,e)},searchData(s){this.models=s},exportData(s=0){s==1?this.$refs.ExportButton.exportFile(this.original,this.moduleName):this.$refs.ExportButton.exportFile(this.models,this.moduleName)},async getData(){try{const s=await this.$refs.BackendConnection.getAll();this.original=s.data.map(e=>new this.Model(e)),this.models=this.original,this.updateToken({...s,token:this.token}),s.auxiliar&&(this.auxiliar=s.auxiliar)}catch(s){console.log(s),this.showMessage("No se pudo obtener los registros de la base de datos.","error")}},async createOne(s){try{const e=await this.$refs.BackendConnection.createOne(s);this.showMessage("Nuevo registro creado en la base de datos.","success"),this.original.push(new this.Model(e.data))}catch(e){console.log(e),this.showMessage("No se pudo crear el registro en la base de datos.","error")}},async updateOne(s){try{const e=this.models[s];delete e.createdAt,delete e.createdBy,delete e.updatedAt,delete e.updatedBy;const a=await this.$refs.BackendConnection.updateOne(e);this.showMessage("Registro actualizado en la base de datos.","success")}catch(e){console.log(e),this.showMessage("No se pudo actualizar el registro en la base de datos.","error")}},async deleteOne(s){try{const e=window.prompt("\xBFEst\xE1 seguro que quiere eliminar el registro? De ser as\xED, escribe la raz\xF3n.","");if(e==null||e=="")return;this.$refs.BackendConnection.deleteOne(this.models[s],e),this.showMessage("Registro eliminado de la base de datos.","success"),this.getData()}catch(e){console.log(e),this.showMessage("No se pudo eliminar el registro de la base de datos.","error")}}},components:{AlertMessage:w,SearchField:k,ExportButton:B,ImportButton:N,EditableTable:x,BackendConnection:M},mounted(){this.hasPermission(this.moduleName,"access")?this.getData():this.$router.push("/")}},C={class:"row pt-3 w-100"},S={class:"col"},A={id:"moduleTitle"},F={class:"col py-2"},P={class:"btn-group"};function v(s,e,a,I,t,o){const m=n("SearchField"),u=n("ExportButton"),p=n("ImportButton"),g=n("AlertMessage"),f=n("EditableTable"),_=n("BackendConnection");return d(),b(E,null,[r("div",C,[r("div",S,[r("h1",A,O(t.title),1)]),r("div",F,[r("div",P,[i(m,{original:t.original,onSearchData:o.searchData},null,8,["original","onSearchData"]),a.hasPermission(t.moduleName,"export")?(d(),c(u,{key:0,ref:"ExportButton",onExportData:o.exportData},null,8,["onExportData"])):h("",!0),a.hasPermission(t.moduleName,"import")?(d(),c(p,{key:1,moduleName:t.moduleName,onImportData:o.createOne},null,8,["moduleName","onImportData"])):h("",!0)])])]),i(g,{ref:"AlertMessage",class:"row pt-1"},null,512),i(f,{token:a.token,user:a.user,moduleName:t.moduleName,Model:t.Model,fields:t.fields,models:t.models,auxiliar:t.auxiliar,hasPermission:a.hasPermission,onShowMessage:o.showMessage,onCreateOne:o.createOne,onUpdateOne:o.updateOne,onDeleteOne:o.deleteOne},null,8,["token","user","moduleName","Model","fields","models","auxiliar","hasPermission","onShowMessage","onCreateOne","onUpdateOne","onDeleteOne"]),i(_,{token:a.token,moduleName:t.moduleName,ref:"BackendConnection",onShowMessage:o.showMessage},null,8,["token","moduleName","onShowMessage"])],64)}const G=D(y,[["render",v]]);export{G as default};
