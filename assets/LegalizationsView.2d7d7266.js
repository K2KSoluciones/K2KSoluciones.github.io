import{A as w}from"./AlertMessage.84bd585a.js";import{S as M}from"./SearchField.eb6fe141.js";import{E as k,I as x}from"./ImportButton.00007d52.js";import{E as B}from"./EditableTable.08449f6c.js";import{F as l,B as N}from"./BackendConnection.e2fe1e63.js";import{_ as b,r,o as d,c as D,b as n,t as y,d as i,g as c,a as h,F as E}from"./index.7a9218e6.js";import"./PageGenerator.6dd1f65b.js";const O={props:["token","user","hasPermission","updateToken"],data(){return{moduleName:"legalizations",title:l.legalizations.title,Model:l.legalizations.Model,fields:l.legalizations.fields,models:[],original:[],auxiliar:[]}},created(){this.token?this.user?this.hasPermission(this.moduleName,"access")||this.$router.push("/"):this.$router.push("/"):this.$router.push("/")},methods:{showMessage(s,e){this.$refs.AlertMessage.show(s,e)},searchData(s){this.models=s},exportData(s=0){s==1?this.$refs.ExportButton.exportFile(this.original,this.moduleName):this.$refs.ExportButton.exportFile(this.models,this.moduleName)},async getData(){try{const s=await this.$refs.BackendConnection.getAll();if(this.original=s.data.map(e=>new this.Model(e)),this.models=this.original,this.updateToken({...s,token:this.token}),s.auxiliar){this.auxiliar=s.auxiliar;for(let e=0;e<this.auxiliar[2].length;e++)this.auxiliar[2][e].name=this.auxiliar[2][e].description}}catch(s){console.log(s),this.showMessage("No se pudo obtener los registros de la base de datos.","error")}},async createOne(s){try{const e=await this.$refs.BackendConnection.createOne(s);this.showMessage("Nuevo registro creado en la base de datos.","success"),this.original.push(new this.Model(e.data))}catch(e){console.log(e),this.showMessage("No se pudo crear el registro en la base de datos.","error")}},async updateOne(s){try{const e=this.models[s];delete e.createdAt,delete e.createdBy,delete e.updatedAt,delete e.updatedBy;const o=await this.$refs.BackendConnection.updateOne(e);this.showMessage("Registro actualizado en la base de datos.","success")}catch(e){console.log(e),this.showMessage("No se pudo actualizar el registro en la base de datos.","error")}},async deleteOne(s){try{const e=window.prompt("\xBFEst\xE1 seguro que quiere eliminar el registro? De ser as\xED, escribe la raz\xF3n.","");if(e==null||e=="")return;this.$refs.BackendConnection.deleteOne(this.models[s],e),this.showMessage("Registro eliminado de la base de datos.","success"),this.getData()}catch(e){console.log(e),this.showMessage("No se pudo eliminar el registro de la base de datos.","error")}},async changeStatus(s,e){try{this.$refs.BackendConnection.changeStatus(this.models[s],e),this.showMessage("Estado del registro actualizado en la base de datos.","success"),this.getData()}catch(o){console.log(o),this.showMessage("No se pudo eliminar el registro de la base de datos.","error")}}},components:{AlertMessage:w,SearchField:M,ExportButton:k,ImportButton:x,EditableTable:B,BackendConnection:N},mounted(){this.hasPermission(this.moduleName,"access")?this.getData():this.$router.push("/")}},S={class:"row pt-3 w-100"},C={class:"col"},z={id:"moduleTitle"},A={class:"col py-2"},F={class:"btn-group"};function P(s,e,o,v,t,a){const u=r("SearchField"),m=r("ExportButton"),g=r("ImportButton"),p=r("AlertMessage"),f=r("EditableTable"),_=r("BackendConnection");return d(),D(E,null,[n("div",S,[n("div",C,[n("h1",z,y(t.title),1)]),n("div",A,[n("div",F,[i(u,{original:t.original,onSearchData:a.searchData},null,8,["original","onSearchData"]),o.hasPermission(t.moduleName,"export")?(d(),c(m,{key:0,ref:"ExportButton",onExportData:a.exportData},null,8,["onExportData"])):h("",!0),o.hasPermission(t.moduleName,"import")?(d(),c(g,{key:1,moduleName:t.moduleName,onImportData:a.createOne},null,8,["moduleName","onImportData"])):h("",!0)])])]),i(p,{ref:"AlertMessage",class:"row pt-1"},null,512),i(f,{token:o.token,user:o.user,moduleName:t.moduleName,Model:t.Model,fields:t.fields,models:t.models,auxiliar:t.auxiliar,hasPermission:o.hasPermission,onShowMessage:a.showMessage,onCreateOne:a.createOne,onUpdateOne:a.updateOne,onDeleteOne:a.deleteOne,onChangeStatus:a.changeStatus},null,8,["token","user","moduleName","Model","fields","models","auxiliar","hasPermission","onShowMessage","onCreateOne","onUpdateOne","onDeleteOne","onChangeStatus"]),i(_,{token:o.token,moduleName:t.moduleName,ref:"BackendConnection",onShowMessage:a.showMessage},null,8,["token","moduleName","onShowMessage"])],64)}const j=b(O,[["render",P]]);export{j as default};
