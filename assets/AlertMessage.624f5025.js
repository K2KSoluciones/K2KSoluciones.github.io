import{_,o as t,c as s,t as r,a as o}from"./index.5c488590.js";const a={data(){return{text:"",type:"",time:0}},methods:{show(i,n="info",l=5e3){this.text=i,this.type=n,this.time=new Date().getTime()+l,setInterval(()=>{new Date().getTime()-this.time>=0&&(this.text="")},100)}}},p={key:0,class:"alert alert-success",role:"alert"},x={key:1,class:"alert alert-danger",role:"alert"},h={key:2,class:"alert alert-warning",role:"alert"},m={key:3,class:"alert alert-info",role:"alert"};function u(i,n,l,c,e,y){return t(),s("div",null,[e.text&&e.type=="success"?(t(),s("div",p,r(e.text),1)):o("",!0),e.text&&e.type=="error"?(t(),s("div",x,r(e.text),1)):o("",!0),e.text&&e.type=="warning"?(t(),s("div",h,r(e.text),1)):o("",!0),e.text&&e.type=="info"?(t(),s("div",m,r(e.text),1)):o("",!0)])}const g=_(a,[["render",u]]);export{g as A};
