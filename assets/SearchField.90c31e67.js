import{_ as l,L as c,o as p,c as g,d as n,F as d}from"./index.36d29975.js";const h={props:["original"],emits:["searchData"],data(){return{Lenguages:c}},methods:{searchData(o){const e=o.target.value.toLowerCase();if(e.length){const s=[];this.original.forEach(a=>{for(let t in a)if(typeof a[t]=="string"&&a[t].toLowerCase().indexOf(e)!=-1){s.push(a);break}}),this.$emit("searchData",s)}else this.$emit("searchData",this.original)}}},u=["placeholder"],f=n("i",{class:"fa fa-magnifying-glass position-absolute",style:{"margin-left":"7px","margin-top":"10px"}},null,-1);function m(o,e,s,a,t,r){return p(),g(d,null,[n("input",{id:"searchText",type:"text",placeholder:t.Lenguages[t.Lenguages.selected].general.search,onInput:e[0]||(e[0]=(...i)=>r.searchData&&r.searchData(...i)),class:"rounded px-4 py-1","data-toggle":"tooltip","data-placement":"bottom",title:"Buscar en todos los campos",style:{"border-color":"#002133"}},null,40,u),f],64)}const x=l(h,[["render",m]]);export{x as S};
