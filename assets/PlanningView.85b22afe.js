import{A as k,B as x}from"./BackendConnection.cc9b0f2b.js";import{S as B}from"./SearchField.407bd178.js";import{E as M,I as L}from"./ImportButton.850a0d7f.js";import{E as N}from"./EditableTable.3d7f97cc.js";import{F as c}from"./fields.29fd1251.js";import{_ as C,L as D,r as i,o as d,c as O,d as r,t as y,e as l,h as u,a as h,F as E}from"./index.8fefd7d7.js";import"./PageGenerator.42a8d2f1.js";const A={props:["token","user","hasPermission","updateToken"],data(){return{moduleName:"planning",title:c.planning.title,Model:c.planning.Model,fields:c.planning.fields,Lenguages:D,models:[],original:[],auxiliar:[]}},created(){this.token?this.user?this.hasPermission(this.moduleName,"access")||this.$router.push("/"):this.$router.push("/"):this.$router.push("/")},methods:{showMessage(s,e){this.$refs.AlertMessage.show(s,e)},searchData(s){this.models=s},exportData(s=0){s==1?this.$refs.ExportButton.exportFile(this.original,this.moduleName):this.$refs.ExportButton.exportFile(this.models,this.moduleName)},async getData(){try{const s=await this.$refs.BackendConnection.getAll("planeacion_get");this.original=s.resultados.map(t=>new this.Model(t)),this.models=this.original;const e=await this.$refs.BackendConnection.getAllAuxiliar("cuadrillas_get");for(let t=0;t<e.resultados.length;t++)e.resultados[t].identification=e.resultados[t].lider.split('"')[3];const a=await this.$refs.BackendConnection.getAllAuxiliar("lugares_get");for(let t=0;t<a.resultados.length;t++)a.resultados[t].identification=a.resultados[t].ident_id,a.resultados[t].nombre=a.resultados[t].sitio;this.auxiliar={leaders:e.resultados,places:a.resultados}}catch(s){console.log(s),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.err_get,"error")}},async createOne(s){try{const e=Object.values(JSON.parse(s.lider_cuadrilla))[0];for(let t=0;t<this.auxiliar.leaders.length;t++)e==this.auxiliar.leaders[t].nombre&&(s.lider_cuadrilla=this.auxiliar.leaders[t].lider,s.cuadrilla=JSON.stringify(this.auxiliar.leaders[t].integrantes));s.lider_cuadrilla=encodeURIComponent(s.lider_cuadrilla),s.cuadrilla=encodeURIComponent(s.cuadrilla);const a=await this.$refs.BackendConnection.createOne("planeacion_create",s);a.codigoResultado==1&&this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.ok_post,"success"),this.original.push(new this.Model(a.resultados))}catch(e){console.log(e),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.err_post,"error")}},async updateOne(s){try{const e=this.models[s];delete e.createdAt,delete e.createdBy,delete e.updatedAt,delete e.updatedBy,e.lider_cuadrilla=encodeURIComponent(e.lider_cuadrilla),e.sitio=encodeURIComponent(e.sitio);const a=await this.$refs.BackendConnection.updateOne("planeacion_up",e);this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.ok_put,"success")}catch(e){console.log(e),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.err_put,"error")}},async deleteOne(s){try{const e=window.prompt(this.Lenguages[this.Lenguages.selected].alerts.ask_delete,"");if(e==null||e=="")return;this.$refs.BackendConnection.deleteOne("planeacion_delete",this.models[s],e),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.ok_delete,"success"),this.getData()}catch(e){console.log(e),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.err_delete,"error")}},async importData(s){try{const e=await this.$refs.BackendConnection.uploadFile("planeacion_imp",s)}catch(e){console.log(e),this.showMessage(this.Lenguages[this.Lenguages.selected].alerts.err_get,"error")}}},components:{AlertMessage:k,SearchField:B,ExportButton:M,ImportButton:L,EditableTable:N,BackendConnection:x},mounted(){this.hasPermission(this.moduleName,"access")?this.getData():this.$router.push("/")}},S={class:"row pt-3 w-100"},b={class:"col"},F={id:"moduleTitle"},I={class:"col py-2"},P={class:"btn-group"};function v(s,e,a,t,o,n){const g=i("SearchField"),m=i("ExportButton"),p=i("ImportButton"),_=i("AlertMessage"),f=i("EditableTable"),w=i("BackendConnection");return d(),O(E,null,[r("div",S,[r("div",b,[r("h1",F,y(o.title),1)]),r("div",I,[r("div",P,[l(g,{original:o.original,onSearchData:n.searchData},null,8,["original","onSearchData"]),a.hasPermission(o.moduleName,"export")?(d(),u(m,{key:0,ref:"ExportButton",onExportData:n.exportData},null,8,["onExportData"])):h("",!0),a.hasPermission(o.moduleName,"import")?(d(),u(p,{key:1,moduleName:o.moduleName,onImportData:n.importData},null,8,["moduleName","onImportData"])):h("",!0)])])]),l(_,{ref:"AlertMessage",class:"row pt-1"},null,512),l(f,{token:a.token,user:a.user,moduleName:o.moduleName,Model:o.Model,fields:o.fields,models:o.models,auxiliar:o.auxiliar,hasPermission:a.hasPermission,onShowMessage:n.showMessage,onCreateOne:n.createOne,onUpdateOne:n.updateOne,onDeleteOne:n.deleteOne},null,8,["token","user","moduleName","Model","fields","models","auxiliar","hasPermission","onShowMessage","onCreateOne","onUpdateOne","onDeleteOne"]),l(w,{token:a.token,moduleName:o.moduleName,ref:"BackendConnection",onShowMessage:n.showMessage},null,8,["token","moduleName","onShowMessage"])],64)}const z=C(A,[["render",v]]);export{z as default};