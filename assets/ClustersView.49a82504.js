import{A as x,B as w}from"./BackendConnection.ecfc1fb4.js";import{S as M}from"./SearchField.df00062c.js";import{E as k,I as B}from"./ImportButton.5a174438.js";import{E as N}from"./EditableTable.a6313a6f.js";import{F as l}from"./fields.5d55b05c.js";import{_ as b,r,o as d,c as D,b as i,t as O,d as n,g as c,a as u,F as E}from"./index.0721faa3.js";import"./PageGenerator.8ed50f9f.js";const y={props:["token","user","hasPermission","updateToken"],data(){return{moduleName:"clusters",title:l.clusters.title,Model:l.clusters.Model,fields:l.clusters.fields,models:[],original:[],auxiliar:[]}},created(){this.token?this.user?this.hasPermission(this.moduleName,"access")||this.$router.push("/"):this.$router.push("/"):this.$router.push("/")},methods:{showMessage(s,e){this.$refs.AlertMessage.show(s,e)},searchData(s){this.models=s},exportData(s=0){s==1?this.$refs.ExportButton.exportFile(this.original,this.moduleName):this.$refs.ExportButton.exportFile(this.models,this.moduleName)},async getData(){try{const s=await this.$refs.BackendConnection.getAll();if(this.original=s.data.map(e=>new this.Model(e)),this.models=this.original,this.updateToken({...s,token:this.token}),s.auxiliar){this.auxiliar=s.auxiliar;for(let e=0;e<this.auxiliar[0].length;e++)this.auxiliar[0][e].name="("+this.auxiliar[0][e].identification.document+") "+this.auxiliar[0][e].identification.name+" "+this.auxiliar[0][e].identification.lastname}}catch(s){console.log(s),this.showMessage("No se pudo obtener los registros de la base de datos.","error")}},async createOne(s){try{const e=await this.$refs.BackendConnection.createOne(s);this.showMessage("Nuevo registro creado en la base de datos.","success"),this.original.push(new this.Model(e.data))}catch(e){console.log(e),this.showMessage("No se pudo crear el registro en la base de datos.","error")}},async updateOne(s){try{const e=this.models[s];delete e.createdAt,delete e.createdBy,delete e.updatedAt,delete e.updatedBy;const a=await this.$refs.BackendConnection.updateOne(e);this.showMessage("Registro actualizado en la base de datos.","success")}catch(e){console.log(e),this.showMessage("No se pudo actualizar el registro en la base de datos.","error")}},async deleteOne(s){try{const e=window.prompt("\xBFEst\xE1 seguro que quiere eliminar el registro? De ser as\xED, escribe la raz\xF3n.","");if(e==null||e=="")return;this.$refs.BackendConnection.deleteOne(this.models[s],e),this.showMessage("Registro eliminado de la base de datos.","success"),this.getData()}catch(e){console.log(e),this.showMessage("No se pudo eliminar el registro de la base de datos.","error")}}},components:{AlertMessage:x,SearchField:M,ExportButton:k,ImportButton:B,EditableTable:N,BackendConnection:w},mounted(){this.hasPermission(this.moduleName,"access")?this.getData():this.$router.push("/")}},C={class:"row pt-3 w-100"},S={class:"col"},A={id:"moduleTitle"},F={class:"col py-2"},P={class:"btn-group"};function v(s,e,a,I,t,o){const h=r("SearchField"),m=r("ExportButton"),g=r("ImportButton"),p=r("AlertMessage"),f=r("EditableTable"),_=r("BackendConnection");return d(),D(E,null,[i("div",C,[i("div",S,[i("h1",A,O(t.title),1)]),i("div",F,[i("div",P,[n(h,{original:t.original,onSearchData:o.searchData},null,8,["original","onSearchData"]),a.hasPermission(t.moduleName,"export")?(d(),c(m,{key:0,ref:"ExportButton",onExportData:o.exportData},null,8,["onExportData"])):u("",!0),a.hasPermission(t.moduleName,"import")?(d(),c(g,{key:1,moduleName:t.moduleName,onImportData:o.createOne},null,8,["moduleName","onImportData"])):u("",!0)])])]),n(p,{ref:"AlertMessage",class:"row pt-1"},null,512),n(f,{token:a.token,user:a.user,moduleName:t.moduleName,Model:t.Model,fields:t.fields,models:t.models,auxiliar:t.auxiliar,hasPermission:a.hasPermission,onShowMessage:o.showMessage,onCreateOne:o.createOne,onUpdateOne:o.updateOne,onDeleteOne:o.deleteOne},null,8,["token","user","moduleName","Model","fields","models","auxiliar","hasPermission","onShowMessage","onCreateOne","onUpdateOne","onDeleteOne"]),n(_,{token:a.token,moduleName:t.moduleName,ref:"BackendConnection",onShowMessage:o.showMessage},null,8,["token","moduleName","onShowMessage"])],64)}const G=b(y,[["render",v]]);export{G as default};
