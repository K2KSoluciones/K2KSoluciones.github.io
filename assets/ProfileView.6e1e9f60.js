import{_ as c,o as l,c as p,b as s,w as u,i,j as d}from"./index.129a2ee6.js";class m{constructor(t,r){this.username=t,this.password=r}}const h={data(){return{user:new m}},methods:{async login(){try{const e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.user)},r=await(await fetch("http://localhost:3000/login",e)).json();this.updateToken(r),this.$router.push("/")}catch{alert("Las contrase\xF1as no coiciden con las guardadas.")}},showPassword(){var e=document.getElementById("password");e.type==="password"?e.type="text":e.type="password"}},props:["updateToken"]},_={class:"container"},w={class:"row py-5 px-5"},y={class:"col-md-5 mx-auto"},f={class:"card text-center"},b=s("div",{class:"card-title px-3 py-3"},[s("h1",null,"Inicio de sesi\xF3n")],-1),v={class:"card-body"},x={class:"form-group py-3"},g={class:"form-group py-3"},k={class:"col py-3 text-center"},P=s("button",{type:"submit",class:"btn btn-primary btn-lg mx-3"},"Iniciar sesi\xF3n",-1),T=s("div",{class:"form-group py-3"},[s("p",{class:"text-muted"},"Versi\xF3n: 1.0.0")],-1);function V(e,t,r,B,n,a){return l(),p("div",null,[s("div",_,[s("div",w,[s("div",y,[s("div",f,[b,s("div",v,[s("form",{onSubmit:t[3]||(t[3]=u((...o)=>a.login&&a.login(...o),["prevent"]))},[s("div",x,[i(s("input",{type:"email","onUpdate:modelValue":t[0]||(t[0]=o=>n.user.username=o),placeholder:"Nombre de usuario",class:"form-control",required:""},null,512),[[d,n.user.username]])]),s("div",g,[i(s("input",{id:"password",type:"password","onUpdate:modelValue":t[1]||(t[1]=o=>n.user.password=o),placeholder:"Contrase\xF1a",class:"form-control",required:""},null,512),[[d,n.user.password]])]),s("div",k,[P,s("button",{type:"button",class:"btn btn-secondary btn-lg mx-3",onClick:t[2]||(t[2]=(...o)=>a.showPassword&&a.showPassword(...o))},"Mostrar contrase\xF1a")]),T],32)])])])])])])}const q=c(h,[["render",V]]);export{q as default};
