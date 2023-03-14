import{A as k,B as w}from"./BackendConnection.587843a6.js";import{S as B}from"./SearchField.5e31640e.js";import{E as M,I as x}from"./ImportButton.9cc379b0.js";import{E as L}from"./EditableTable.b75c25a4.js";import{F as l}from"./fields.350b2f5c.js";import{_ as N,L as D,r as n,o as c,c as y,d as r,t as O,e as i,h,a as d,F as C}from"./index.15087d57.js";import"./PageGenerator.5664b64e.js";const E={props:["token","user","hasPermission","updateToken"],data(){return{moduleName:"humans",title:l.humans.title,Model:l.humans.Model,fields:l.humans.fields,Lenguages:D,models:[],original:[],auxiliar:{}}},created(){this.token?this.user?this.hasPermission(this.moduleName,"access")||this.$router.push("/"):this.$router.push("/"):this.$router.push("/")},methods:{showMessage(s,e){this.$refs.AlertMessage.show(s,e)},searchData(s){this.models=s},exportData(s=0){s==1?this.$refs.ExportButton.exportFile(this.original,this.moduleName):this.$refs.ExportButton.exportFile(this.models,this.moduleName)},async getData(){try{const s=await this.$refs.BackendConnection.getAll("personal2_get");this.original=this.models=s.resultados.map(t=>new this.Model(t));const e=await this.$refs.BackendConnection.getAll("profile_get");this.auxiliar={profiles:[]};for(let t=0;t<e.resultados.length;t++)this.auxiliar.profiles.push({identification:e.resultados[t].id,nombre:e.resultados[t].profile})}catch(s){console.log(s),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.err_get,"error")}},async createOne(s){try{const e=await this.$refs.BackendConnection.createOne("personal2_create",s);this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.ok_post,"success")}catch(e){console.log(e),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.err_post,"error")}},async updateOne(s){try{const e=this.models[s];delete e.createdAt,delete e.createdBy,delete e.updatedAt,delete e.updatedBy;const t=await this.$refs.BackendConnection.updateOne("personal2_up",e);this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.ok_put,"success")}catch(e){console.log(e),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.err_put,"error")}},async deleteOne(s){try{const e=window.prompt(this.Lenguages[this.Lenguages.selected].alerts.ask_delete,"");if(e==null||e=="")return;this.$refs.BackendConnection.deleteOne("personal2_delete",this.models[s],e),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.ok_delete,"success"),this.getData()}catch(e){console.log(e),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.err_delete,"error")}},async importData(s){try{const e=await this.$refs.BackendConnection.uploadFile("personal2_imp",s)}catch(e){console.log(e),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.err_get,"error")}}},components:{AlertMessage:k,SearchField:B,ExportButton:M,ImportButton:x,EditableTable:L,BackendConnection:w},mounted(){this.hasPermission(this.moduleName,"access")?this.getData():this.$router.push("/")}},S={class:"row pt-3 w-100"},A={class:"col"},F={id:"moduleTitle"},b={class:"col py-2"},P={class:"btn-group"};function I(s,e,t,v,o,a){const u=n("SearchField"),m=n("ExportButton"),g=n("ImportButton"),p=n("AlertMessage"),_=n("EditableTable"),f=n("BackendConnection");return c(),y(C,null,[r("div",S,[r("div",A,[r("h1",F,O(o.title),1)]),r("div",b,[r("div",P,[i(u,{original:o.original,onSearchData:a.searchData},null,8,["original","onSearchData"]),t.hasPermission(o.moduleName,"export")?(c(),h(m,{key:0,ref:"ExportButton",onExportData:a.exportData},null,8,["onExportData"])):d("",!0),t.hasPermission(o.moduleName,"import")?(c(),h(g,{key:1,moduleName:o.moduleName,onImportData:a.createOne},null,8,["moduleName","onImportData"])):d("",!0)])])]),i(p,{ref:"AlertMessage",class:"row pt-1"},null,512),i(_,{token:t.token,user:t.user,moduleName:o.moduleName,Model:o.Model,fields:o.fields,models:o.models,auxiliar:o.auxiliar,hasPermission:t.hasPermission,onShowMessage:a.showMessage,onCreateOne:a.createOne,onUpdateOne:a.updateOne,onDeleteOne:a.deleteOne},null,8,["token","user","moduleName","Model","fields","models","auxiliar","hasPermission","onShowMessage","onCreateOne","onUpdateOne","onDeleteOne"]),i(f,{token:t.token,moduleName:o.moduleName,ref:"BackendConnection",onShowMessage:a.showMessage},null,8,["token","moduleName","onShowMessage"])],64)}const G=N(E,[["render",I]]);export{G as default};
