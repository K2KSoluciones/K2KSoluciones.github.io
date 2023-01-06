import{A as w}from"./AlertMessage.84bd585a.js";import{S as M}from"./SearchField.eb6fe141.js";import{P as x}from"./PageGenerator.6dd1f65b.js";import{F as h,B as N}from"./BackendConnection.e2fe1e63.js";import{_ as P,r as o,o as c,c as d,b as s,t as r,d as t,F as m,e as v,k as B}from"./index.7a9218e6.js";const S={props:["token","user","hasPermission","updateToken"],data(){return{moduleName:"permissions",title:h.permissions.title,Model:h.permissions.Model,models:[],original:[]}},created(){this.token?this.user?this.hasPermission(this.moduleName,"access")||this.$router.push("/"):this.$router.push("/"):this.$router.push("/")},methods:{showMessage(e,a){this.$refs.AlertMessage.show(e,a)},searchData(e){this.models=e},async getData(){try{const e=await this.$refs.BackendConnection.getAll();this.original=e.data.map(a=>new this.Model(a)),this.models=this.original,this.updateToken({...e,token:this.token}),e.auxiliar&&(this.auxiliar=e.auxiliar)}catch(e){console.log(e),this.showMessage("No se pudo obtener los registros de la base de datos.","error")}}},components:{AlertMessage:w,SearchField:M,PageGenerator:x,BackendConnection:N},computed:{display(){return this.models.length?this.$refs.PageGenerator.paginate(this.models):[]}},mounted(){this.hasPermission(this.moduleName,"access")?this.getData():this.$router.push("/")}},A={class:"row pt-3 w-100"},C={class:"col"},D={id:"moduleTitle"},F={class:"col py-2"},y={class:"btn-group"},G={class:"row mt-1"},b={class:"col-xl m-1"},L={class:"list-group mt-1"},T={class:"list-group-item p-2"},V=s("h6",null,"Usuario",-1);function $(e,a,u,R,i,l){const _=o("SearchField"),p=o("AlertMessage"),g=o("RouterLink"),f=o("PageGenerator"),k=o("BackendConnection");return c(),d(m,null,[s("div",A,[s("div",C,[s("h1",D,r(i.title),1)]),s("div",F,[s("div",y,[t(_,{original:i.original,onSearchData:l.searchData},null,8,["original","onSearchData"])])])]),t(p,{ref:"AlertMessage",class:"row pt-1"},null,512),s("div",G,[s("div",b,[s("div",L,[(c(!0),d(m,null,v(l.display,n=>(c(),d("div",T,[t(g,{to:i.moduleName+"/"+n._id,class:"text-dark text-decoration-none"},{default:B(()=>[V,s("h2",null,r(n.username),1),s("h4",null,r(n.name)+" "+r(n.lastname),1)]),_:2},1032,["to"])]))),256))])])]),t(f,{ref:"PageGenerator"},null,512),t(k,{token:u.token,moduleName:i.moduleName,ref:"BackendConnection",onShowMessage:l.showMessage},null,8,["token","moduleName","onShowMessage"])],64)}const H=P(S,[["render",$]]);export{H as default};