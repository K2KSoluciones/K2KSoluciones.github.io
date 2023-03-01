import{A as k,B as w}from"./BackendConnection.e0f21fa9.js";import{S as M}from"./SearchField.680eb6f0.js";import{E as B,I as L}from"./ImportButton.0480fb70.js";import{E as x}from"./EditableTable.11bcd250.js";import{F as l}from"./fields.e5b11a48.js";import{_ as D,L as N,r as n,o as c,c as y,b as r,t as O,d as i,g as h,a as d,F as C}from"./index.14abfc42.js";import"./PageGenerator.c640495f.js";const E={props:["token","user","hasPermission","updateToken"],data(){return{moduleName:"checkins",title:l.checkins.title,Model:l.checkins.Model,fields:l.checkins.fields,Lenguages:N,models:[],original:[],auxiliar:[]}},created(){this.token?this.user?this.hasPermission(this.moduleName,"access")||this.$router.push("/"):this.$router.push("/"):this.$router.push("/")},methods:{showMessage(s,e){this.$refs.AlertMessage.show(s,e)},searchData(s){this.models=s},exportData(s=0){s==1?this.$refs.ExportButton.exportFile(this.original,this.moduleName):this.$refs.ExportButton.exportFile(this.models,this.moduleName)},async getData(){try{const s=await this.$refs.BackendConnection.getAll("marcacion_get");this.original=s.resultados.map(e=>new this.Model(e)),this.models=this.original;for(let e=0;e<this.models.length;e++)this.models[e].integrantes=this.models[e].integrantes.replaceAll("&quot;",'"'),this.models[e].fecha_inicial=new Date(this.models[e].fecha_inicial).toLocaleDateString()}catch(s){console.log(s),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.err_get,"error")}},async createOne(s){try{(await this.$refs.BackendConnection.createOne("marcacion_create",s)).codigoResultado==1&&this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.ok_post,"success")}catch(e){console.log(e),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.err_post,"error")}},async updateOne(s){try{const e=this.models[s];delete e.createdAt,delete e.createdBy,delete e.updatedAt,delete e.updatedBy;const a=await this.$refs.BackendConnection.updateOne("marcacion_up",e);this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.ok_put,"success")}catch(e){console.log(e),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.err_put,"error")}},async deleteOne(s){try{const e=window.prompt(this.Lenguages[this.Lenguages.selected].alerts.ask_delete,"");if(e==null||e=="")return;this.$refs.BackendConnection.deleteOne("marcacion_delete",this.models[s],e),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.ok_delete,"success"),this.getData()}catch(e){console.log(e),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.err_delete,"error")}},async importData(s){try{const e=await this.$refs.BackendConnection.uploadFile("marcacion_imp",s)}catch(e){console.log(e),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.err_get,"error")}}},components:{AlertMessage:k,SearchField:M,ExportButton:B,ImportButton:L,EditableTable:x,BackendConnection:w},mounted(){this.hasPermission(this.moduleName,"access")?this.getData():this.$router.push("/")}},S={class:"row pt-3 w-100"},A={class:"col"},F={id:"moduleTitle"},b={class:"col py-2"},P={class:"btn-group"};function I(s,e,a,v,t,o){const m=n("SearchField"),u=n("ExportButton"),g=n("ImportButton"),p=n("AlertMessage"),_=n("EditableTable"),f=n("BackendConnection");return c(),y(C,null,[r("div",S,[r("div",A,[r("h1",F,O(t.title),1)]),r("div",b,[r("div",P,[i(m,{original:t.original,onSearchData:o.searchData},null,8,["original","onSearchData"]),a.hasPermission(t.moduleName,"export")?(c(),h(u,{key:0,ref:"ExportButton",onExportData:o.exportData},null,8,["onExportData"])):d("",!0),a.hasPermission(t.moduleName,"import")?(c(),h(g,{key:1,moduleName:t.moduleName,onImportData:o.importData},null,8,["moduleName","onImportData"])):d("",!0)])])]),i(p,{ref:"AlertMessage",class:"row pt-1"},null,512),i(_,{token:a.token,user:a.user,moduleName:t.moduleName,Model:t.Model,fields:t.fields,models:t.models,auxiliar:t.auxiliar,hasPermission:a.hasPermission,onShowMessage:o.showMessage,onCreateOne:o.createOne,onUpdateOne:o.updateOne,onDeleteOne:o.deleteOne},null,8,["token","user","moduleName","Model","fields","models","auxiliar","hasPermission","onShowMessage","onCreateOne","onUpdateOne","onDeleteOne"]),i(f,{token:a.token,moduleName:t.moduleName,ref:"BackendConnection",onShowMessage:o.showMessage},null,8,["token","moduleName","onShowMessage"])],64)}const G=D(E,[["render",I]]);export{G as default};
