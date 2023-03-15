import{A as k,B as b}from"./BackendConnection.dd15044c.js";import{_ as f,L as e,r as h,o as l,c as d,e as w,d as r,t as m,w as M,F as _,f as x,g as B,a as p}from"./index.36d29975.js";const C="nottingham-frontend",A="1.0.230315",N="module",L={dev:"vite",build:"vite build",preview:"vite preview --host 0.0.0.0"},P={vue:"^3.2.40","vue-router":"^4.1.5"},S={"@vitejs/plugin-vue":"^3.0.3",vite:"^3.0.9"},V={name:C,private:!0,version:A,type:N,scripts:L,dependencies:P,devDependencies:S},D="/assets/login_background.80a0292f.jpeg";const T={props:["token","user","hasPermission","updateToken"],data(){return{moduleName:"login",title:e[e.selected].login.title,Model:class{constructor(s){this.username=s.username||"",this.password=s.password||""}},fields:[{name:"username",type:"email",placeholder:e[e.selected].login.username,required:!0,validation:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:e[e.selected].login.err_username},{name:"password",type:"password",placeholder:e[e.selected].login.password,required:!0,message:e[e.selected].login.err_password},{name:"submit",type:"submit",placeholder:e[e.selected].login.login},{name:"version",type:"view",placeholder:e[e.selected].login.version+" "+V.version}]}},created(){this.model=new this.Model({})},methods:{showMessage(o,s){this.$refs.AlertMessage.show(o,s)},showPassword(){var o=document.getElementById("password");o.type==="password"?o.type="text":o.type="password"},update(o,s,n){let u=!1,i="rounded border border-dark p-1";this.fields[o].validation&&(u=!String(n.value).toLowerCase().match(this.fields[o].validation)),u?i="rounded border border-danger p-1":i="rounded border border-success p-1",u&&this.showMessage(this.fields[o].message,"warning"),this.model[s]=n.value,n.className=i},async login(){if(this.model.username==""||this.model.password=="")return this.showMessage(e[e.selected].login.err_fields,"error");try{const o={METODO:this.moduleName,correo:this.model.username,contrase\u00F1a:this.model.password},s=await this.$refs.BackendConnection.login(o);if(s.codigoResultado==0)return this.showMessage(e[e.selected].login.err_login,"error");if(s.codigoResultado==-1)return this.showMessage(e[e.selected].login.err_login,"error");{s.user=this.model.username,await this.updateToken(s);const n=await this.$refs.BackendConnection.getAll("mis_permisos");if(console.log("Permissions query:",n),n.codigoResultado==-1)return this.showMessage(e[e.selected].login.err_permissions,"error");this.$router.push("/")}}catch(o){console.log(o),this.showMessage(e[e.selected].login.err_login,"error")}}},components:{AlertMessage:k,BackendConnection:b}},q=r("img",{src:D,alt:"Background",id:"background",class:"opacity-75"},null,-1),E={class:"row pt-3 w-100"},I={class:"col-auto mx-auto"},R={class:"card text-center m-5 p-5 text-light",style:{background:"#002133"}},j={class:"card-title px-3 py-3"},z=r("img",{src:B,height:"75",class:"mx-auto mb-4"},null,-1),F={id:"moduleTitle"},O={class:"card-body"},Z=["type","placeholder","value","id","onInput","title"],G={key:3,class:"text-muted"};function H(o,s,n,u,i,a){const v=h("AlertMessage"),y=h("BackendConnection");return l(),d(_,null,[q,w(v,{ref:"AlertMessage",class:"row pt-1"},null,512),r("div",E,[r("div",I,[r("div",R,[r("div",j,[z,r("h3",F,m(i.title),1)]),r("div",O,[r("form",{onSubmit:s[2]||(s[2]=M((...t)=>a.login&&a.login(...t),["prevent"]))},[(l(!0),d(_,null,x(i.fields,(t,g)=>(l(),d("div",{key:g,class:"form-group py-3"},[t.type!="view"&&t.type!="submit"?(l(),d("input",{key:0,type:t.type,placeholder:t.placeholder,value:t.value,id:t.name,onInput:c=>a.update(g,t.name,c.target),"data-toggle":"tooltip","data-placement":"bottom",title:t.placeholder,class:"rounded border border-dark p-1"},null,40,Z)):p("",!0),t.type=="password"?(l(),d("i",{key:1,class:"text-dark fa-solid fa-eye position-absolute",id:"togglePassword",onClick:s[0]||(s[0]=(...c)=>a.showPassword&&a.showPassword(...c)),style:{"margin-left":"-20px","margin-top":"7px",cursor:"pointer"}})):p("",!0),t.type=="submit"?(l(),d("button",{key:2,type:"button",onClick:s[1]||(s[1]=(...c)=>a.login&&a.login(...c)),class:"btn btn-light text-dark"},m(t.placeholder),1)):p("",!0),t.type=="view"?(l(),d("p",G,m(t.placeholder),1)):p("",!0)]))),128))],32)])])])]),w(y,{token:n.token,moduleName:i.moduleName,ref:"BackendConnection",onShowMessage:a.showMessage},null,8,["token","moduleName","onShowMessage"])],64)}const U=f(T,[["render",H]]);export{U as default};
