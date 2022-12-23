import{A as _}from"./AlertMessage.cb97aba4.js";import{_ as v,L as e,r as y,o as i,c as l,d as b,b as a,t as m,w as k,F as h,e as f,f as M,a as u}from"./index.b3591c9f.js";const x="nottingham-frontend",A="1.0.0",N="module",C={dev:"vite",build:"vite build",preview:"vite preview --host 0.0.0.0"},L={vue:"^3.2.40","vue-router":"^4.1.5"},P={"@vitejs/plugin-vue":"^3.0.3",vite:"^3.0.9"},S={name:x,private:!0,version:A,type:N,scripts:C,dependencies:L,devDependencies:P},T="/assets/login_background.80a0292f.jpeg";const j="https://processmanager.k2ksoluciones.com/api/",B={props:["token","user","hasPermission","updateToken"],data(){return{moduleName:"login",title:e[e.selected].login.title,Model:class{constructor(t){this.username=t.username||"",this.password=t.password||""}},fields:[{name:"username",type:"email",placeholder:e[e.selected].login.username,required:!0,validation:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:e[e.selected].login.err_username},{name:"password",type:"password",placeholder:e[e.selected].login.password,required:!0,message:e[e.selected].login.err_password},{name:"submit",type:"submit",placeholder:e[e.selected].login.login},{name:"version",type:"view",placeholder:e[e.selected].login.version+" "+S.version}]}},created(){this.model=new this.Model({})},methods:{showMessage(s,t){this.$refs.AlertMessage.show(s,t)},showPassword(){var s=document.getElementById("password");s.type==="password"?s.type="text":s.type="password"},update(s,t,c){let r=!1,d="rounded border border-dark p-1";this.fields[s].validation&&(r=!String(c.value).toLowerCase().match(this.fields[s].validation)),r?d="rounded border border-danger p-1":d="rounded border border-success p-1",r&&this.showMessage(this.fields[s].message,"warning"),this.model[t]=c.value,c.className=d},async login(){if(this.model.username==""||this.model.password=="")return this.showMessage(e[e.selected].login.err_fields,"error");try{const s={METODO:this.moduleName,correo:this.model.username,contrase\u00F1a:this.model.password},t={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(s)},r=await(await fetch(j,t)).json();if(r.codigoResultado==0)return this.showMessage(e[e.selected].login.err_login,"error");if(r.codigoResultado==-1)return this.showMessage(e[e.selected].login.err_login,"error");r.user=this.model.username,this.updateToken(r),this.$router.push("/")}catch(s){console.log(s),this.showMessage(e[e.selected].login.err_login,"error")}}},components:{AlertMessage:_}},V=a("img",{src:T,alt:"Background",id:"background"},null,-1),D={class:"row pt-3 w-100"},O={class:"col-auto mx-auto"},E={class:"card text-center m-5 p-5 text-light",style:{background:"#002133"}},I={class:"card-title px-3 py-3"},q=a("img",{src:M,height:"75",class:"mx-auto mb-4"},null,-1),z={id:"moduleTitle"},F={class:"card-body"},R=["type","placeholder","value","id","onInput","title"],Z={key:3,class:"text-muted"};function J(s,t,c,r,d,n){const w=y("AlertMessage");return i(),l(h,null,[V,b(w,{ref:"AlertMessage",class:"row pt-1"},null,512),a("div",D,[a("div",O,[a("div",E,[a("div",I,[q,a("h3",z,m(d.title),1)]),a("div",F,[a("form",{onSubmit:t[2]||(t[2]=k((...o)=>n.login&&n.login(...o),["prevent"]))},[(i(!0),l(h,null,f(d.fields,(o,g)=>(i(),l("div",{key:g,class:"form-group py-3"},[o.type!="view"&&o.type!="submit"?(i(),l("input",{key:0,type:o.type,placeholder:o.placeholder,value:o.value,id:o.name,onInput:p=>n.update(g,o.name,p.target),"data-toggle":"tooltip","data-placement":"bottom",title:o.placeholder,class:"rounded border border-dark p-1"},null,40,R)):u("",!0),o.type=="password"?(i(),l("i",{key:1,class:"text-dark fa-solid fa-eye position-absolute",id:"togglePassword",onClick:t[0]||(t[0]=(...p)=>n.showPassword&&n.showPassword(...p)),style:{"margin-left":"-20px","margin-top":"7px",cursor:"pointer"}})):u("",!0),o.type=="submit"?(i(),l("button",{key:2,type:"button",onClick:t[1]||(t[1]=(...p)=>n.login&&n.login(...p)),class:"btn btn-light text-dark"},m(o.placeholder),1)):u("",!0),o.type=="view"?(i(),l("p",Z,m(o.placeholder),1)):u("",!0)]))),128))],32)])])])])],64)}const Q=v(B,[["render",J]]);export{Q as default};
