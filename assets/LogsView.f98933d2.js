import{A as k}from"./AlertMessage.34db8a29.js";import{S as B}from"./SearchField.be0ed887.js";import{E as M,I as N}from"./ImportButton.f8ea6782.js";import{E as x}from"./EditableTable.fb043589.js";import{F as l,B as w}from"./BackendConnection.bb4fb335.js";import{_ as D,L as E,r as t,o as m,c as S,b as a,t as O,d as i,g as c,a as d,F as C}from"./index.4d599292.js";import"./PageGenerator.37c4e9f7.js";const F={props:["token","user","hasPermission","updateToken"],data(){return{moduleName:"logs",title:l.logs.title,Model:l.logs.Model,fields:l.logs.fields,Lenguages:E,models:[],original:[],auxiliar:[]}},created(){this.token?this.user?this.hasPermission(this.moduleName,"access")||this.$router.push("/"):this.$router.push("/"):this.$router.push("/")},methods:{showMessage(e,n){this.$refs.AlertMessage.show(e,n)},searchData(e){this.models=e},exportData(e=0){e==1?this.$refs.ExportButton.exportFile(this.original,this.moduleName):this.$refs.ExportButton.exportFile(this.models,this.moduleName)},async getData(){try{const e=await this.$refs.BackendConnection.getAll("logs_get");this.original=e.resultados.map(n=>new this.Model(n)),this.models=this.original}catch(e){console.log(e),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.err_get,"error")}}},components:{AlertMessage:k,SearchField:B,ExportButton:M,ImportButton:N,EditableTable:x,BackendConnection:w},mounted(){this.hasPermission(this.moduleName,"access")?this.getData():this.$router.push("/")}},b={class:"row pt-3 w-100"},P={class:"col"},A={id:"moduleTitle"},y={class:"col py-2"},I={class:"btn-group"};function L(e,n,s,v,o,r){const u=t("SearchField"),h=t("ExportButton"),g=t("ImportButton"),p=t("AlertMessage"),_=t("EditableTable"),f=t("BackendConnection");return m(),S(C,null,[a("div",b,[a("div",P,[a("h1",A,O(o.title),1)]),a("div",y,[a("div",I,[i(u,{original:o.original,onSearchData:r.searchData},null,8,["original","onSearchData"]),s.hasPermission(o.moduleName,"export")?(m(),c(h,{key:0,ref:"ExportButton",onExportData:r.exportData},null,8,["onExportData"])):d("",!0),s.hasPermission(o.moduleName,"import")?(m(),c(g,{key:1,moduleName:o.moduleName,onImportData:e.createOne},null,8,["moduleName","onImportData"])):d("",!0)])])]),i(p,{ref:"AlertMessage",class:"row pt-1"},null,512),i(_,{token:s.token,user:s.user,moduleName:o.moduleName,Model:o.Model,fields:o.fields,models:o.models,auxiliar:o.auxiliar,hasPermission:s.hasPermission,onShowMessage:r.showMessage,onCreateOne:e.createOne,onUpdateOne:e.updateOne,onDeleteOne:e.deleteOne},null,8,["token","user","moduleName","Model","fields","models","auxiliar","hasPermission","onShowMessage","onCreateOne","onUpdateOne","onDeleteOne"]),i(f,{token:s.token,moduleName:o.moduleName,ref:"BackendConnection",onShowMessage:r.showMessage},null,8,["token","moduleName","onShowMessage"])],64)}const H=D(F,[["render",L]]);export{H as default};
