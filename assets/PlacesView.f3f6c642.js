import{A as w,B as M}from"./BackendConnection.2aa24a65.js";import{S as k}from"./SearchField.de05d0f8.js";import{E as B,I as x}from"./ImportButton.327fe6b4.js";import{E as L}from"./EditableTable.addd501f.js";import{F as i}from"./fields.bf64cb4c.js";import{_ as N,L as D,r,o as c,c as y,d as n,t as O,e as l,h,a as d,F as E}from"./index.99972e7e.js";import"./PageGenerator.0dd20328.js";const C={props:["token","user","hasPermission","updateToken"],data(){return{moduleName:"places",title:i.places.title,Model:i.places.Model,fields:i.places.fields,Lenguages:D,models:[],original:[],auxiliar:[]}},created(){this.token?this.user?this.hasPermission(this.moduleName,"access")||this.$router.push("/"):this.$router.push("/"):this.$router.push("/")},methods:{showMessage(s,e){this.$refs.AlertMessage.show(s,e)},searchData(s){this.models=s},exportData(s=0){s==1?this.$refs.ExportButton.exportFile(this.original,this.moduleName):this.$refs.ExportButton.exportFile(this.models,this.moduleName)},async getData(){try{const s=await this.$refs.BackendConnection.getAll("lugares_get");this.original=s.resultados.map(e=>new this.Model(e)),this.models=this.original,s.auxiliar&&(this.auxiliar=s.auxiliar)}catch(s){console.log(s),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.err_get,"error")}},async createOne(s){try{const e=await this.$refs.BackendConnection.createOne("lugares_create",s);this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.ok_post,"success"),this.original.push(new this.Model(e.resultados))}catch(e){console.log(e),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.err_post,"error")}},async updateOne(s){try{const e=this.models[s];delete e.createdAt,delete e.createdBy,delete e.updatedAt,delete e.updatedBy;const o=await this.$refs.BackendConnection.updateOne("lugares_up",e);this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.ok_put,"success"),this.original[s]=new this.Model(o.resultados)}catch(e){console.log(e),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.err_put,"error")}},async deleteOne(s){try{const e=window.prompt(this.Lenguages[this.Lenguages.selected].alerts.ask_delete,"");if(e==null||e=="")return;this.$refs.BackendConnection.deleteOne("lugares_delete",this.models[s],e),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.ok_delete,"success"),this.getData()}catch(e){console.log(e),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.err_delete,"error")}},async importData(s){try{const e=await this.$refs.BackendConnection.uploadFile("lugares_imp",s)}catch(e){console.log(e),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.err_get,"error")}}},components:{AlertMessage:w,SearchField:k,ExportButton:B,ImportButton:x,EditableTable:L,BackendConnection:M},mounted(){this.hasPermission(this.moduleName,"access")?this.getData():this.$router.push("/")}},S={class:"row pt-3 w-100"},F={class:"col"},A={id:"moduleTitle"},P={class:"col py-2"},b={class:"btn-group"};function I(s,e,o,v,t,a){const u=r("SearchField"),g=r("ExportButton"),m=r("ImportButton"),p=r("AlertMessage"),_=r("EditableTable"),f=r("BackendConnection");return c(),y(E,null,[n("div",S,[n("div",F,[n("h1",A,O(t.title),1)]),n("div",P,[n("div",b,[l(u,{original:t.original,onSearchData:a.searchData},null,8,["original","onSearchData"]),o.hasPermission(t.moduleName,"export")?(c(),h(g,{key:0,ref:"ExportButton",onExportData:a.exportData},null,8,["onExportData"])):d("",!0),o.hasPermission(t.moduleName,"import")?(c(),h(m,{key:1,moduleName:t.moduleName,onImportData:a.createOne},null,8,["moduleName","onImportData"])):d("",!0)])])]),l(p,{ref:"AlertMessage",class:"row pt-1"},null,512),l(_,{token:o.token,user:o.user,moduleName:t.moduleName,Model:t.Model,fields:t.fields,models:t.models,auxiliar:t.auxiliar,hasPermission:o.hasPermission,onShowMessage:a.showMessage,onCreateOne:a.createOne,onUpdateOne:a.updateOne,onDeleteOne:a.deleteOne},null,8,["token","user","moduleName","Model","fields","models","auxiliar","hasPermission","onShowMessage","onCreateOne","onUpdateOne","onDeleteOne"]),l(f,{token:o.token,moduleName:t.moduleName,ref:"BackendConnection",onShowMessage:a.showMessage},null,8,["token","moduleName","onShowMessage"])],64)}const H=N(C,[["render",I]]);export{H as default};
