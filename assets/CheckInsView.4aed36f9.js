import{A as w,B}from"./BackendConnection.2aa24a65.js";import{S as M}from"./SearchField.de05d0f8.js";import{E as x,I as L}from"./ImportButton.327fe6b4.js";import{E as D}from"./EditableTable.addd501f.js";import{F as c}from"./fields.bf64cb4c.js";import{_ as N,L as y,r as i,o as d,c as C,d as r,t as O,e as l,h,a as u,F as A}from"./index.99972e7e.js";import"./PageGenerator.0dd20328.js";const E={props:["token","user","hasPermission","updateToken"],data(){return{moduleName:"checkins",title:c.checkins.title,Model:c.checkins.Model,fields:c.checkins.fields,Lenguages:y,models:[],original:[],auxiliar:[]}},created(){this.token?this.user?this.hasPermission(this.moduleName,"access")||this.$router.push("/"):this.$router.push("/"):this.$router.push("/")},methods:{showMessage(t,e){this.$refs.AlertMessage.show(t,e)},searchData(t){this.models=t},exportData(t=0){t==1?this.$refs.ExportButton.exportFile(this.original,this.moduleName):this.$refs.ExportButton.exportFile(this.models,this.moduleName)},async getData(){try{const t=await this.$refs.BackendConnection.getAll("marcacion_get");this.original=this.models=t.resultados.map(s=>new this.Model(s));for(let s=0;s<this.original.length;s++)this.models[s].fecha_inicial=new Date(this.models[s].fecha_inicial).toLocaleDateString().replaceAll("-","/");const e=await this.$refs.BackendConnection.getAllAuxiliar("lugares_get"),o=await this.$refs.BackendConnection.getAllAuxiliar("cuadrillas_get");for(let s=0;s<e.resultados.length;s++)e.resultados[s].identification=e.resultados[s].ident_id,e.resultados[s].nombre=e.resultados[s].sitio;for(let s=0;s<o.resultados.length;s++)o.resultados[s].identification=o.resultados[s].lider;this.auxiliar={places:e.resultados,crews:o.resultados,states:[{id:"started",nombre:"Started",identification:"0"},{id:"pending",nombre:"Pending",identification:"1"},{id:"finished",nombre:"Finished",identification:"2"}]}}catch(t){console.log(t),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.err_get,"error")}},async createOne(t){try{(await this.$refs.BackendConnection.createOne("marcacion_create",t)).codigoResultado==1&&this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.ok_post,"success")}catch(e){console.log(e),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.err_post,"error")}},async updateOne(t){try{const e=this.models[t];delete e.createdAt,delete e.createdBy,delete e.updatedAt,delete e.updatedBy;const o=await this.$refs.BackendConnection.updateOne("marcacion_up",e);this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.ok_put,"success")}catch(e){console.log(e),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.err_put,"error")}},async deleteOne(t){try{const e=window.prompt(this.Lenguages[this.Lenguages.selected].alerts.ask_delete,"");if(e==null||e=="")return;this.$refs.BackendConnection.deleteOne("marcacion_delete",this.models[t],e),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.ok_delete,"success"),this.getData()}catch(e){console.log(e),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.err_delete,"error")}},async importData(t){try{const e=await this.$refs.BackendConnection.uploadFile("marcacion_imp",t)}catch(e){console.log(e),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.err_get,"error")}}},components:{AlertMessage:w,SearchField:M,ExportButton:x,ImportButton:L,EditableTable:D,BackendConnection:B},mounted(){this.hasPermission(this.moduleName,"access")?this.getData():this.$router.push("/")}},S={class:"row pt-3 w-100"},b={class:"col"},F={id:"moduleTitle"},P={class:"col py-2"},I={class:"btn-group"};function v(t,e,o,s,a,n){const m=i("SearchField"),g=i("ExportButton"),p=i("ImportButton"),_=i("AlertMessage"),f=i("EditableTable"),k=i("BackendConnection");return d(),C(A,null,[r("div",S,[r("div",b,[r("h1",F,O(a.title),1)]),r("div",P,[r("div",I,[l(m,{original:a.original,onSearchData:n.searchData},null,8,["original","onSearchData"]),o.hasPermission(a.moduleName,"export")?(d(),h(g,{key:0,ref:"ExportButton",onExportData:n.exportData},null,8,["onExportData"])):u("",!0),o.hasPermission(a.moduleName,"import")?(d(),h(p,{key:1,moduleName:a.moduleName,onImportData:n.importData},null,8,["moduleName","onImportData"])):u("",!0)])])]),l(_,{ref:"AlertMessage",class:"row pt-1"},null,512),l(f,{token:o.token,user:o.user,moduleName:a.moduleName,Model:a.Model,fields:a.fields,models:a.models,auxiliar:a.auxiliar,hasPermission:o.hasPermission,onShowMessage:n.showMessage,onCreateOne:n.createOne,onUpdateOne:n.updateOne,onDeleteOne:n.deleteOne},null,8,["token","user","moduleName","Model","fields","models","auxiliar","hasPermission","onShowMessage","onCreateOne","onUpdateOne","onDeleteOne"]),l(k,{token:o.token,moduleName:a.moduleName,ref:"BackendConnection",onShowMessage:n.showMessage},null,8,["token","moduleName","onShowMessage"])],64)}const G=N(E,[["render",v]]);export{G as default};
