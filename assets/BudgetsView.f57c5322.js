import{A as w}from"./AlertMessage.34db8a29.js";import{S as M}from"./SearchField.be0ed887.js";import{E as k,I as B}from"./ImportButton.f8ea6782.js";import{E as N}from"./EditableTable.fb043589.js";import{F as l,B as b}from"./BackendConnection.bb4fb335.js";import{_ as x,r,o as d,c as D,b as n,t as y,d as i,g as c,a as h,F as E}from"./index.4d599292.js";import"./PageGenerator.37c4e9f7.js";const O={props:["token","user","hasPermission","updateToken"],data(){return{moduleName:"budgets",title:l.budgets.title,Model:l.budgets.Model,fields:l.budgets.fields,models:[],original:[],auxiliar:[]}},created(){this.token?this.user?this.hasPermission(this.moduleName,"access")||this.$router.push("/"):this.$router.push("/"):this.$router.push("/")},methods:{showMessage(s,e){this.$refs.AlertMessage.show(s,e)},searchData(s){this.models=s},exportData(s=0){s==1?this.$refs.ExportButton.exportFile(this.original,this.moduleName):this.$refs.ExportButton.exportFile(this.models,this.moduleName)},async getData(){try{const s=await this.$refs.BackendConnection.getAll();this.original=s.data.map(e=>new this.Model(e)),this.models=this.original,this.updateToken({...s,token:this.token}),s.auxiliar&&(this.auxiliar=s.auxiliar)}catch(s){console.log(s),this.showMessage("No se pudo obtener los registros de la base de datos.","error")}},async createOne(s){try{const e=await this.$refs.BackendConnection.createOne(s);this.showMessage("Nuevo registro creado en la base de datos.","success"),this.original.push(new this.Model(e.data))}catch(e){console.log(e),this.showMessage("No se pudo crear el registro en la base de datos.","error")}},async updateOne(s){try{const e=this.models[s];delete e.createdAt,delete e.createdBy,delete e.updatedAt,delete e.updatedBy;const o=await this.$refs.BackendConnection.updateOne(e);this.showMessage("Registro actualizado en la base de datos.","success"),this.original[s]=new this.Model(o.data)}catch(e){console.log(e),this.showMessage("No se pudo actualizar el registro en la base de datos.","error")}},async deleteOne(s){try{const e=window.prompt("\xBFEst\xE1 seguro que quiere eliminar el registro? De ser as\xED, escribe la raz\xF3n.","");if(e==null||e=="")return;this.$refs.BackendConnection.deleteOne(this.models[s],e),this.showMessage("Registro eliminado de la base de datos.","success"),this.getData()}catch(e){console.log(e),this.showMessage("No se pudo eliminar el registro de la base de datos.","error")}},async changeStatus(s,e){try{this.$refs.BackendConnection.changeStatus(this.models[s],e),this.showMessage("Estado del registro actualizado en la base de datos.","success"),this.getData()}catch(o){console.log(o),this.showMessage("No se pudo eliminar el registro de la base de datos.","error")}}},components:{AlertMessage:w,SearchField:M,ExportButton:k,ImportButton:B,EditableTable:N,BackendConnection:b},mounted(){this.hasPermission(this.moduleName,"access")?this.getData():this.$router.push("/")}},S={class:"row pt-3 w-100"},C={class:"col"},A={id:"moduleTitle"},F={class:"col py-2"},P={class:"btn-group"};function v(s,e,o,I,t,a){const u=r("SearchField"),m=r("ExportButton"),g=r("ImportButton"),p=r("AlertMessage"),f=r("EditableTable"),_=r("BackendConnection");return d(),D(E,null,[n("div",S,[n("div",C,[n("h1",A,y(t.title),1)]),n("div",F,[n("div",P,[i(u,{original:t.original,onSearchData:a.searchData},null,8,["original","onSearchData"]),o.hasPermission(t.moduleName,"export")?(d(),c(m,{key:0,ref:"ExportButton",onExportData:a.exportData},null,8,["onExportData"])):h("",!0),o.hasPermission(t.moduleName,"import")?(d(),c(g,{key:1,moduleName:t.moduleName,onImportData:a.createOne},null,8,["moduleName","onImportData"])):h("",!0)])])]),i(p,{ref:"AlertMessage",class:"row pt-1"},null,512),i(f,{token:o.token,user:o.user,moduleName:t.moduleName,Model:t.Model,fields:t.fields,models:t.models,auxiliar:t.auxiliar,hasPermission:o.hasPermission,onShowMessage:a.showMessage,onCreateOne:a.createOne,onUpdateOne:a.updateOne,onDeleteOne:a.deleteOne,onChangeStatus:a.changeStatus},null,8,["token","user","moduleName","Model","fields","models","auxiliar","hasPermission","onShowMessage","onCreateOne","onUpdateOne","onDeleteOne","onChangeStatus"]),i(_,{token:o.token,moduleName:t.moduleName,ref:"BackendConnection",onShowMessage:a.showMessage},null,8,["token","moduleName","onShowMessage"])],64)}const G=x(O,[["render",v]]);export{G as default};
