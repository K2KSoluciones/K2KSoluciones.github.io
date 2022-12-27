import{A as w}from"./AlertMessage.ff7261e4.js";import{F as y,B as M}from"./BackendConnection.880e9f2f.js";import{_ as P,r as g,o as i,c as r,b as s,t as u,d as p,w as v,F as m,e as k,h as l,a as _}from"./index.d1745c2d.js";const B={props:["token","user","hasPermission","updateToken"],data(){return{moduleName:"permissions",title:"Permisos",Model:class{constructor(e){this._id=e._id,this.permissions=e.permissions}},fields:y,auxiliar:[]}},created(){this.token?this.user?this.hasPermission(this.moduleName,"access")?this.model=new this.Model({}):this.$router.push("/"):this.$router.push("/"):this.$router.push("/")},methods:{showMessage(o,e){this.$refs.AlertMessage.show(o,e)},checkPermission(o,e){if(this.model.permissions){const c=o+"."+e;if(this.model.permissions.find(h=>h===c))return!0}return!1},onChange(o){if(o.target.checked){if(this.model.permissions.find(c=>c===o.target.name))return;this.model.permissions.push(o.target.name)}else this.model.permissions=this.model.permissions.filter(e=>e!==o.target.name)},async getData(){try{const o=await this.$refs.BackendConnection.getOne(this.$route.params.id);this.model=new this.Model(o.data),this.title="Permisos de "+o.data.account.username,this.updateToken({...o,token:this.token}),o.auxiliar&&(this.auxiliar=o.auxiliar)}catch(o){console.log(o),this.showMessage("No se pudo obtener los registros de la base de datos.","error")}},async setData(){try{await this.$refs.BackendConnection.updateOne(this.model),this.showMessage("Registro actualizado en la base de datos.","success")}catch(o){console.log(o),this.showMessage("No se pudo obtener los registros de la base de datos.","error")}}},components:{AlertMessage:w,BackendConnection:M},mounted(){this.hasPermission(this.moduleName,"access")?this.getData():this.$router.push("/")}},A={class:"row pt-3 w-100"},D={class:"col"},V={id:"moduleTitle"},F={class:"row mt-1"},S={class:"col-xl m-1"},T={class:"list-group-item p-2 text-dark"},E={class:"row"},z={class:"form-group"},O=s("h6",{class:"mx-1"},"Permisos de m\xF3dulo:",-1),G={class:"form-label m-1 p-1"},I=["name","checked"],L={class:"form-label m-1 p-1"},R=["name","checked"],j={class:"form-label m-1 p-1"},q=["name","checked"],H={class:"form-label m-1 p-1"},J=["name","checked"],K={class:"form-label m-1 p-1"},Q=["name","checked"],U={class:"form-label m-1 p-1"},W=["name","checked"],X={class:"form-group"},Y={key:0,class:"mx-1"},Z={key:0,class:"form-label m-1 p-1"},N=["name","checked"],$=s("div",{class:"form-group mx-auto"},[s("input",{type:"submit",value:"Guardar",class:"btn btn-block m-3 text-light",style:{background:"#002133"}})],-1);function ee(o,e,c,f,h,t){const b=g("AlertMessage"),x=g("BackendConnection");return i(),r(m,null,[s("div",A,[s("div",D,[s("h1",V,u(h.title),1)])]),p(b,{ref:"AlertMessage",class:"row pt-1"},null,512),s("div",F,[s("div",S,[s("form",{onSubmit:e[7]||(e[7]=v((...d)=>t.setData&&t.setData(...d),["prevent"])),class:"list-group mt-1"},[(i(!0),r(m,null,k(h.fields,(d,a)=>(i(),r("div",T,[s("div",E,[s("h3",null,u(d.title),1)]),s("div",z,[O,s("label",G,[l("Acceder "),s("input",{type:"checkbox",name:a+".access",class:"mx-2",checked:t.checkPermission(a,"access"),onChange:e[0]||(e[0]=(...n)=>t.onChange&&t.onChange(...n))},null,40,I)]),s("label",L,[l("Crear "),s("input",{type:"checkbox",name:a+".create",class:"mx-2",checked:t.checkPermission(a,"create"),onChange:e[1]||(e[1]=(...n)=>t.onChange&&t.onChange(...n))},null,40,R)]),s("label",j,[l("Actualizar "),s("input",{type:"checkbox",name:a+".update",class:"mx-2",checked:t.checkPermission(a,"update"),onChange:e[2]||(e[2]=(...n)=>t.onChange&&t.onChange(...n))},null,40,q)]),s("label",H,[l("Eliminar "),s("input",{type:"checkbox",name:a+".delete",class:"mx-2",checked:t.checkPermission(a,"delete"),onChange:e[3]||(e[3]=(...n)=>t.onChange&&t.onChange(...n))},null,40,J)]),s("label",K,[l("Importar "),s("input",{type:"checkbox",name:a+".import",class:"mx-2",checked:t.checkPermission(a,"import"),onChange:e[4]||(e[4]=(...n)=>t.onChange&&t.onChange(...n))},null,40,Q)]),s("label",U,[l("Exportar "),s("input",{type:"checkbox",name:a+".export",class:"mx-2",checked:t.checkPermission(a,"export"),onChange:e[5]||(e[5]=(...n)=>t.onChange&&t.onChange(...n))},null,40,W)])]),s("div",X,[d.fields.length?(i(),r("h6",Y,"Permisos de modificaci\xF3n:")):_("",!0),(i(!0),r(m,null,k(d.fields,n=>(i(),r(m,null,[n.type!="view"?(i(),r("label",Z,[l(u(n.placeholder)+" ",1),s("input",{type:"checkbox",name:a+".modify."+n.name,class:"mx-2",checked:t.checkPermission(a,"modify."+n.name),onChange:e[6]||(e[6]=(...C)=>t.onChange&&t.onChange(...C))},null,40,N)])):_("",!0)],64))),256))])]))),256)),$],32)])]),p(x,{token:c.token,moduleName:h.moduleName,ref:"BackendConnection",onShowMessage:t.showMessage},null,8,["token","moduleName","onShowMessage"])],64)}const ae=P(B,[["render",ee]]);export{ae as default};
