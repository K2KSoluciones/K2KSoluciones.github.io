import{A as k,B as w}from"./BackendConnection.681fb1e6.js";import{S as M}from"./SearchField.d34724e3.js";import{E as B,I as x}from"./ImportButton.3bc559d0.js";import{E as L}from"./EditableTable.1d63fcdc.js";import{F as l}from"./fields.30cb816c.js";import{_ as N,L as D,r as n,o as c,c as O,b as r,t as y,d as i,g as u,a as d,F as E}from"./index.79384133.js";import"./PageGenerator.e0616629.js";const C={props:["token","user","hasPermission","updateToken"],data(){return{moduleName:"users",title:l.users.title,Model:l.users.Model,fields:l.users.fields,Lenguages:D,models:[],original:[],auxiliar:[]}},created(){this.token?this.user?this.hasPermission(this.moduleName,"access")||this.$router.push("/"):this.$router.push("/"):this.$router.push("/")},methods:{showMessage(s,e){this.$refs.AlertMessage.show(s,e)},searchData(s){this.models=s},exportData(s=0){s==1?this.$refs.ExportButton.exportFile(this.original,this.moduleName):this.$refs.ExportButton.exportFile(this.models,this.moduleName)},async getData(){try{const s=await this.$refs.BackendConnection.getAll("usuarios_get");this.original=s.resultados.map(e=>new this.Model(e)),this.models=this.original,s.auxiliar&&(this.auxiliar=s.auxiliar)}catch(s){console.log(s),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.err_get,"error")}},async createOne(s){try{const e=await this.$refs.BackendConnection.createOne("usuarios_create",s);this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.ok_post,"success")}catch(e){console.log(e),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.err_post,"error")}},async updateOne(s){try{const e=this.models[s];delete e.activatedAt,delete e.onlineAt,delete e.createdAt,delete e.createdBy,delete e.updatedAt,delete e.updatedBy;const a=await this.$refs.BackendConnection.updateOne("usuarios_up",e);this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.ok_put,"success")}catch(e){console.log(e),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.err_put,"error")}},async deleteOne(s){try{const e=window.prompt(this.Lenguages[this.Lenguages.selected].alerts.ask_delete,"");if(e==null||e=="")return;this.$refs.BackendConnection.deleteOne("usuarios_delete",this.models[s],e),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.ok_delete,"success"),this.getData()}catch(e){console.log(e),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.err_delete,"error")}}},components:{AlertMessage:k,SearchField:M,ExportButton:B,ImportButton:x,EditableTable:L,BackendConnection:w},mounted(){this.hasPermission(this.moduleName,"access")?this.getData():this.$router.push("/")}},A={class:"row pt-3 w-100"},S={class:"col"},F={id:"moduleTitle"},b={class:"col py-2"},P={class:"btn-group"};function v(s,e,a,I,t,o){const h=n("SearchField"),m=n("ExportButton"),g=n("ImportButton"),p=n("AlertMessage"),_=n("EditableTable"),f=n("BackendConnection");return c(),O(E,null,[r("div",A,[r("div",S,[r("h1",F,y(t.title),1)]),r("div",b,[r("div",P,[i(h,{original:t.original,onSearchData:o.searchData},null,8,["original","onSearchData"]),a.hasPermission(t.moduleName,"export")?(c(),u(m,{key:0,ref:"ExportButton",onExportData:o.exportData},null,8,["onExportData"])):d("",!0),a.hasPermission(t.moduleName,"import")?(c(),u(g,{key:1,moduleName:t.moduleName,onImportData:o.createOne},null,8,["moduleName","onImportData"])):d("",!0)])])]),i(p,{ref:"AlertMessage",class:"row pt-1"},null,512),i(_,{token:a.token,user:a.user,moduleName:t.moduleName,Model:t.Model,fields:t.fields,models:t.models,auxiliar:t.auxiliar,hasPermission:a.hasPermission,onShowMessage:o.showMessage,onCreateOne:o.createOne,onUpdateOne:o.updateOne,onDeleteOne:o.deleteOne},null,8,["token","user","moduleName","Model","fields","models","auxiliar","hasPermission","onShowMessage","onCreateOne","onUpdateOne","onDeleteOne"]),i(f,{token:a.token,moduleName:t.moduleName,ref:"BackendConnection",onShowMessage:o.showMessage},null,8,["token","moduleName","onShowMessage"])],64)}const H=N(C,[["render",v]]);export{H as default};