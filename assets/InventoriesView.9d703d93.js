import{A as x,B}from"./BackendConnection.dd15044c.js";import{E as S}from"./EditableTable.f5a05880.js";import{_ as O,r as h,o as n,h as y,l as D,T as P,d as l,m as v,i as k,c as i,f as _,t as p,F as c,a as g,e as w}from"./index.36d29975.js";import{S as E}from"./SearchField.90c31e67.js";import{E as F,I as T}from"./ImportButton.c1329f0a.js";import{F as C}from"./fields.a1c0c6d3.js";import"./PageGenerator.a37c01c8.js";const I={props:["token","user","moduleName","Model","models","fields","auxiliar","hasPermission"],data(){return{model:null}},created(){this.model=new this.Model({})},methods:{show(e,t="info",s=5e3){this.text=e,this.type=t,this.time=new Date().getTime()+s,setInterval(()=>{new Date().getTime()-this.time>=0&&(this.text="")},100)}},components:[S]},A={class:"modal-mask"},z={class:"modal-wrapper"},V={class:"modal-container bg-light"},G={class:"modal-header"},U={class:"modal-body"},q={class:"table table-striped mt-3"},L={class:"btn-group-vertical"},R=["onClick"],K=l("i",{class:"fa-solid fa-arrow-up-a-z"},null,-1),j=[K],H=["onClick"],J=l("i",{class:"fa-solid fa-arrow-down-z-a"},null,-1),Q=[J],W={key:0},X=["name","multiple","id","onFocusout"],Y=["value"],Z={class:"btn-group"},$={key:0,type:"button","data-bs-toggle":"dropdown","aria-expanded":"false","data-toggle":"tooltip","data-placement":"bottom",title:"Cambiar estado",class:"btn text-light",style:{background:"#002133"}},ee={class:"dropdown-menu"},te=["onClick"],se=["name","id","multiple","onFocusout"],oe=["value","selected"],ae={key:3},ne={class:"btn-group"},le=["onClick"],ie=["onClick"],re={class:"modal-footer"};function de(e,t,s,N,r,d){const b=h("EditableCell");return n(),y(P,{name:"modal"},{default:D(()=>[l("div",A,[l("div",z,[l("div",V,[l("div",G,[v(e.$slots,"header",{},()=>[k(" default header ")])]),l("div",U,[v(e.$slots,"body",{},()=>[l("table",q,[l("thead",null,[l("tr",null,[(n(!0),i(c,null,_(s.fields,(a,u)=>(n(),i("th",{key:u,scope:"col"},[l("div",L,[l("button",{onClick:o=>e.sortBy(a.name,!1),class:"btn btn-secundary btn-sm"},j,8,R),l("button",{onClick:o=>e.sortBy(a.name,!0),class:"btn btn-secundary btn-sm"},Q,8,H)]),k(" "+p(a.placeholder),1)]))),128))])]),l("tbody",null,[s.hasPermission(s.moduleName,"create")?(n(),i("tr",W,[(n(!0),i(c,null,_(s.fields,(a,u)=>(n(),i("td",{key:u,scope:"row"},[a.type=="status"?(n(),i(c,{key:0},[],64)):a.type=="combobox"||a.type=="multiple"?(n(),i("select",{key:1,name:a.name,index:-1,multiple:a.type=="multiple",id:a.type+"-1",onFocusout:o=>e.updateSelect(-1,a.name,o.target.value,a.type=="multiple"),class:"rounded border border-dark",style:{"min-width":"250px"}},[(n(!0),i(c,null,_(s.auxiliar[a.target],o=>(n(),i("option",{value:o._id},p(o.name),9,Y))),256))],40,X)):a.type!="view"?(n(),y(b,{key:2,moduleName:s.moduleName,name:a.name,index:-1,type:a.type,placeholder:a.placeholder,value:r.model[a.name],validation:a.validation,message:a.message,onCellChange:e.onChange,onShowMessage:e.showMessage},null,8,["moduleName","name","type","placeholder","value","validation","message","onCellChange","onShowMessage"])):g("",!0)]))),128)),l("td",null,[l("div",Z,[s.hasPermission(s.moduleName,"create")?(n(),i("button",{key:0,type:"button",class:"btn btn-success",onClick:t[0]||(t[0]=a=>e.$emit("createOne",r.model))}," Guardar ")):g("",!0),l("button",{type:"button",class:"btn btn-warning",onClick:t[1]||(t[1]=a=>r.model=new s.Model({}))}," Limpiar ")])])])):g("",!0),(n(!0),i(c,null,_(e.display,(a,u)=>(n(),i("tr",{key:u},[(n(!0),i(c,null,_(s.fields,(o,M)=>(n(),i("td",{key:M,scope:"row"},[s.hasPermission(s.moduleName,"modify.status")&&o.type=="status"?(n(),i("button",$,[k(p(a[o.name])+" ",1),l("ul",ee,[l("li",null,[(n(!0),i(c,null,_(s.auxiliar[o.target],m=>(n(),i("a",{onClick:f=>e.$emit("changeStatus",u,m._id),class:"dropdown-item"},p(m.name),9,te))),256))])])])):s.hasPermission(s.moduleName,"modify."+o.name)&&o.type=="combobox"||o.type=="multiple"?(n(),i("select",{key:1,name:o.name,id:o.type+u,multiple:o.type=="multiple",onFocusout:m=>e.updateSelect(u,o.name,m.target.value,o.type=="multiple"),class:"rounded border border-dark",style:{"min-width":"250px"}},[(n(!0),i(c,null,_(s.auxiliar[o.target],m=>(n(),i("option",{value:m._id,selected:e.checkSelected(m._id,a[o.name],o.type)},p(m.name),9,oe))),256))],40,se)):s.hasPermission(s.moduleName,"modify."+o.name)&&o.type!="view"?(n(),y(b,{key:2,moduleName:s.moduleName,name:o.name,index:u,type:o.type,placeholder:o.placeholder,value:a[o.name],validation:o.validation,message:o.message,onCellChange:e.onChange,onShowMessage:e.showMessage},null,8,["moduleName","name","index","type","placeholder","value","validation","message","onCellChange","onShowMessage"])):(n(),i("p",ae,p(a[o.name]),1))]))),128)),l("td",null,[l("div",ne,[s.hasPermission(s.moduleName,"update")?(n(),i("button",{key:0,type:"button",class:"btn btn-success",onClick:o=>e.$emit("updateOne",e.$refs.PageGenerator.getIndex(u))}," Guardar ",8,le)):g("",!0),s.hasPermission(s.moduleName,"delete")?(n(),i("button",{key:1,type:"button",class:"btn btn-danger",onClick:o=>e.$emit("deleteOne",e.$refs.PageGenerator.getIndex(u))}," Eliminar ",8,ie)):g("",!0)])])]))),128))])])])]),l("div",re,[v(e.$slots,"footer",{},()=>[k(" default footer "),l("button",{class:"modal-default-button",onClick:t[2]||(t[2]=a=>e.$emit("close"))}," OK ")])])])])])]),_:3})}const ue=O(I,[["render",de]]),me={props:["token","user","hasPermission","updateToken"],data(){return{moduleName:"inventories",title:C.inventories.title,Model:C.inventories.Model,fields:C.inventories.fields,models:[],original:[],auxiliar:[],showModal:!1}},created(){this.token?this.user?this.hasPermission(this.moduleName,"access")||this.$router.push("/"):this.$router.push("/"):this.$router.push("/")},methods:{showMessage(e,t){this.$refs.AlertMessage.show(e,t)},searchData(e){this.models=e},exportData(e=0){e==1?this.$refs.ExportButton.exportFile(this.original,this.moduleName):this.$refs.ExportButton.exportFile(this.models,this.moduleName)},async getData(){try{const e=await this.$refs.BackendConnection.getAll();if(this.original=e.data.map(t=>new this.Model(t)),this.models=this.original,this.updateToken({...e,token:this.token}),e.auxiliar){this.auxiliar=e.auxiliar;for(let t=0;t<this.auxiliar[4].length;t++)this.auxiliar[4][t].name="("+this.auxiliar[4][t].identification.document+") "+this.auxiliar[4][t].identification.name+" "+this.auxiliar[4][t].identification.lastname}}catch(e){console.log(e),this.showMessage("No se pudo obtener los registros de la base de datos.","error")}},async createOne(e){try{const t=await this.$refs.BackendConnection.createOne(e);this.showMessage("Nuevo registro creado en la base de datos.","success"),this.original.push(new this.Model(t.data))}catch(t){console.log(t),this.showMessage("No se pudo crear el registro en la base de datos.","error")}},async updateOne(e){try{const t=this.models[e];delete t.createdAt,delete t.createdBy,delete t.updatedAt,delete t.updatedBy;const s=await this.$refs.BackendConnection.updateOne(t);this.showMessage("Registro actualizado en la base de datos.","success")}catch(t){console.log(t),this.showMessage("No se pudo actualizar el registro en la base de datos.","error")}},async deleteOne(e){try{const t=window.prompt("\xBFEst\xE1 seguro que quiere eliminar el registro? De ser as\xED, escribe la raz\xF3n.","");if(t==null||t=="")return;this.$refs.BackendConnection.deleteOne(this.models[e],t),this.showMessage("Registro eliminado de la base de datos.","success"),this.getData()}catch(t){console.log(t),this.showMessage("No se pudo eliminar el registro de la base de datos.","error")}},async changeStatus(e,t){try{this.$refs.BackendConnection.changeStatus(this.models[e],t),this.showMessage("Estado del registro actualizado en la base de datos.","success"),this.getData()}catch(s){console.log(s),this.showMessage("No se pudo eliminar el registro de la base de datos.","error")}}},components:{AlertMessage:x,ModalForm:ue,SearchField:E,ExportButton:F,ImportButton:T,EditableTable:S,BackendConnection:B},mounted(){this.hasPermission(this.moduleName,"access")?this.getData():this.$router.push("/"),this.showModal=!0}},ce={class:"row pt-3 w-100"},he={class:"col"},ge={id:"moduleTitle"},_e={class:"col py-2"},pe={class:"btn-group"};function ye(e,t,s,N,r,d){const b=h("ModalForm"),a=h("SearchField"),u=h("ExportButton"),o=h("ImportButton"),M=h("AlertMessage"),m=h("EditableTable"),f=h("BackendConnection");return n(),i(c,null,[r.showModal?(n(),y(b,{key:0,token:s.token,user:s.user,moduleName:r.moduleName,Model:r.Model,fields:r.fields,models:r.models,auxiliar:r.auxiliar,hasPermission:s.hasPermission,onShowMessage:d.showMessage,onCreateOne:d.createOne,onUpdateOne:d.updateOne,onDeleteOne:d.deleteOne,onChangeStatus:d.changeStatus,onClose:t[0]||(t[0]=be=>r.showModal=!1)},null,8,["token","user","moduleName","Model","fields","models","auxiliar","hasPermission","onShowMessage","onCreateOne","onUpdateOne","onDeleteOne","onChangeStatus"])):g("",!0),l("div",ce,[l("div",he,[l("h1",ge,p(r.title),1)]),l("div",_e,[l("div",pe,[w(a,{original:r.original,onSearchData:d.searchData},null,8,["original","onSearchData"]),s.hasPermission(r.moduleName,"export")?(n(),y(u,{key:0,ref:"ExportButton",onExportData:d.exportData},null,8,["onExportData"])):g("",!0),s.hasPermission(r.moduleName,"import")?(n(),y(o,{key:1,moduleName:r.moduleName,onImportData:d.createOne},null,8,["moduleName","onImportData"])):g("",!0)])])]),w(M,{ref:"AlertMessage",class:"row pt-1"},null,512),w(m,{token:s.token,user:s.user,moduleName:r.moduleName,Model:r.Model,fields:r.fields,models:r.models,auxiliar:r.auxiliar,hasPermission:s.hasPermission,onShowMessage:d.showMessage,onCreateOne:d.createOne,onUpdateOne:d.updateOne,onDeleteOne:d.deleteOne,onChangeStatus:d.changeStatus},null,8,["token","user","moduleName","Model","fields","models","auxiliar","hasPermission","onShowMessage","onCreateOne","onUpdateOne","onDeleteOne","onChangeStatus"]),w(f,{token:s.token,moduleName:r.moduleName,ref:"BackendConnection",onShowMessage:d.showMessage},null,8,["token","moduleName","onShowMessage"])],64)}const Se=O(me,[["render",ye]]);export{Se as default};
