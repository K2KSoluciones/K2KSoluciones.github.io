import{_ as r,o as l,c,d as s,t as p,a,F as h,f as _,i as g,j as d,v as u}from"./index.8f6c1ea1.js";const f={data(){return{page:1,size:10,pages:[],total:0}},methods:{paginate(o){this.calculate(o);const t=this.page*this.size-this.size,n=this.page*this.size;return o.slice(t,n)},calculate(o){this.pages=[],this.total=o.length;const t=Math.ceil(this.total/this.size);for(let n=1;n<=t;n++)this.pages.push(n);this.page>this.pages.length&&(this.page=1)},getIndex(o){return parseInt(o)+(this.page-1)*this.size}}},v={class:"row w-100"},z={class:"col"},k={class:"text-muted py-3"},y={class:"col py-2"},b={class:"btn-group py-2"},m=s("i",{class:"fa fa-angles-left"},null,-1),x=[m],w=["onClick"],C=s("i",{class:"fa fa-angles-right"},null,-1),S=[C],V={class:"col"},B={class:"text-muted py-3"},N=["selected"],D=["selected"],F=["selected"],I=["selected"],M=["selected"];function P(o,t,n,T,e,j){return l(),c("div",v,[s("div",z,[s("p",k,"Showing page "+p(e.page)+" of "+p(e.pages.length)+" pages.",1)]),s("div",y,[s("div",b,[e.page!=1?(l(),c("button",{key:0,type:"button",onClick:t[0]||(t[0]=i=>e.page--),class:"btn text-light",style:{background:"#002133"}},x)):a("",!0),(l(!0),c(h,null,_(e.pages.slice(e.page-1,e.page+5),i=>(l(),c("button",{key:i,onClick:E=>e.page=i,class:"btn text-light",style:{background:"#002133"}},p(i),9,w))),128)),e.page<e.pages.length?(l(),c("button",{key:1,onClick:t[1]||(t[1]=i=>e.page++),class:"btn text-light",style:{background:"#002133"}},S)):a("",!0)])]),s("div",V,[s("p",B,[g(" Showing "),d(s("select",{"onUpdate:modelValue":t[2]||(t[2]=i=>e.size=i),class:"rounded"},[s("option",{value:"10",selected:e.size==10},"10",8,N),s("option",{value:"25",selected:e.size==25},"25",8,D),s("option",{value:"50",selected:e.size==50},"50",8,F),s("option",{value:"100",selected:e.size==100},"100",8,I),s("option",{value:"100000",selected:e.size>=101},"Todos",8,M)],512),[[u,e.size]]),g(" of "+p(e.total)+" registers. ",1)])])])}const L=r(f,[["render",P]]);export{L as P};
