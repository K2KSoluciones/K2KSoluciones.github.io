import{A as w,B as z}from"./BackendConnection.96bc0282.js";import{S as b}from"./SearchField.c1ff255b.js";import{E as k,I as B}from"./ImportButton.66ac1784.js";import{_ as p,o as c,c as u,d as i,L as S,r as l,t as N,j as D,v as C,e as r,h as d,a as h,F as E}from"./index.8f6c1ea1.js";import{F as m}from"./fields.09133127.js";const F={props:["models","center","zoom","location"],emits:["updateModels"],data(){return{map:null,places:{},maps:[{name:"GoogleHybrid",url:"http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",attribution:"\xA9Google",subdomains:["mt0","mt1","mt2","mt3"]},{name:"GoogleSatellital",url:"http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",attribution:"\xA9Google",subdomains:["mt0","mt1","mt2","mt3"]},{name:"GoogleTerrain",url:"http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",attribution:"\xA9Google",subdomains:["mt0","mt1","mt2","mt3"]},{name:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:"\xA9OpenStreetMap",subdomains:[]}],mapLayers:[],baseMaps:{},overlayMaps:{}}},created(){this.maps.forEach(o=>{const s=L.tileLayer(o.url,{attribution:o.attribution,subdomains:o.subdomains,maxZoom:20});this.mapLayers.push(s),this.baseMaps[o.name]=s})},watch:{models(){const o=L.icon({iconUrl:"https://img.icons8.com/emoji/48/null/red-triangle-pointed-up-emoji.png",iconSize:[16,16]});this.places={},this.models.length&&(this.map&&(this.map.off(),this.map.remove()),this.models.forEach(t=>{if(t.latitud&&t.longitud&&t.ident_id&&t.name&&t.region){const n="https://www.google.com/maps/@"+t.latitud+","+t.longitud+",3a,75y,110.04h,86.03t/data=!3m6!1e1!3m4!1sd8xSVBAW_z9HsvVe__YNww!2e0!7i16384!8i8192",e="https://www.google.com/maps/dir/"+this.location[0]+","+this.location[1]+"/"+t.latitud+","+t.longitud,a="("+t.ident_id+') <a href="'+n+'" target="_blank">'+t.name+"</a><br>Latitud: "+t.latitud+"<br>Longitud: "+t.longitud+'<br><a href="'+e+'" target="_blank">How to arrive there?</a>';this.places[t.region]||(this.places[t.region]=[]),this.places[t.region].push(L.marker([t.latitud,t.longitud],{icon:o}).bindPopup(a))}}));for(const t in this.places)this.places[t]=L.layerGroup(this.places[t]);const s=[...this.mapLayers];for(const t in this.places)s.push(this.places[t]);this.map=L.map("map",{center:this.center,zoom:this.zoom,layers:s});for(const t in this.places)this.overlayMaps[t]=this.places[t];L.control.layers(this.baseMaps,this.overlayMaps,{collapsed:!1}).addTo(this.map),this.map.on("moveend",t=>{const n=t.target.getCenter().toString().replace("LatLng(","").replace(")","").split(", "),e={zoom:t.target.getZoom(),latitude:n[0],longitude:n[1]};this.$emit("updateModels",e)})}}},P={class:"row mt-2"},V=i("div",{id:"map",class:"vh-80 p-1"},null,-1),A=[V];function G(o,s,t,n,e,a){return c(),u("div",P,A)}const I=p(F,[["render",G]]);const T={props:["token","user","hasPermission","updateToken"],data(){return{moduleName:"maps",title:m.maps.title,Model:m.maps.Model,fields:m.maps.fields,Lenguages:S,models:[],original:[],center:[],location:[],zoom:15,limit:100}},created(){this.token?this.user?this.hasPermission(this.moduleName,"access")||this.$router.push("/"):this.$router.push("/"):this.$router.push("/")},methods:{showMessage(o,s){this.$refs.AlertMessage.show(o,s)},searchData(o){this.models=o},exportData(o=0){o==1?this.$refs.ExportButton.exportFile(this.original,this.moduleName):this.$refs.ExportButton.exportFile(this.models,this.moduleName)},async getData(o={zoom:10,latitude:"4.6097100",longitude:"-74.0817500"}){this.zoom=o.zoom,this.center=[o.latitude,o.longitude],o.zoom=1e5/((100*this.zoom^2)+1),o.limit=this.limit,console.log(o);try{const s=await this.$refs.BackendConnection.getParams("lugares_radio",o);console.log(s),this.original=s.resultados.map(t=>new this.Model(t)),this.models=this.original}catch(s){console.log(s),this.showMessage(this.Lenguages[this.Lenguages.selected].maps.err_get,"error")}}},components:{AlertMessage:w,SearchField:b,ExportButton:k,ImportButton:B,MapController:I,BackendConnection:z},mounted(){this.hasPermission(this.moduleName,"access")?navigator.geolocation?navigator.geolocation.getCurrentPosition(o=>{this.center=this.location=[o.coords.latitude.toString(),o.coords.longitude.toString()];const s={zoom:this.zoom,latitude:this.center[0],longitude:this.center[1]};this.getData(s)}):this.getData():this.$router.push("/")}},U={class:"row pt-3 w-100"},j={class:"col"},H={id:"moduleTitle"},O={class:"col py-2"},Z=["selected"],W=["selected"],Y=["selected"],q=["selected"],J=["selected"],K=["selected"],Q={class:"btn-group"};function R(o,s,t,n,e,a){const g=l("SearchField"),_=l("ExportButton"),f=l("ImportButton"),y=l("AlertMessage"),v=l("MapController"),M=l("BackendConnection");return c(),u(E,null,[i("div",U,[i("div",j,[i("h1",H,N(e.title),1)]),i("div",O,[D(i("select",{"onUpdate:modelValue":s[0]||(s[0]=x=>e.limit=x),class:"rounded m-1 p-2"},[i("option",{value:"10",selected:e.limit==10},"10",8,Z),i("option",{value:"100",selected:e.limit==100},"100",8,W),i("option",{value:"200",selected:e.limit==200},"200",8,Y),i("option",{value:"500",selected:e.limit==500},"500",8,q),i("option",{value:"1000",selected:e.limit==1e3},"1000",8,J),i("option",{value:"100000",selected:e.limit>=101},"Todos",8,K)],512),[[C,e.limit]]),i("div",Q,[r(g,{original:e.original,onSearchData:a.searchData},null,8,["original","onSearchData"]),t.hasPermission(e.moduleName,"export")?(c(),d(_,{key:0,ref:"ExportButton",onExportData:a.exportData},null,8,["onExportData"])):h("",!0),t.hasPermission(e.moduleName,"import")?(c(),d(f,{key:1,moduleName:e.moduleName,onImportData:o.createOne},null,8,["moduleName","onImportData"])):h("",!0)])])]),r(y,{ref:"AlertMessage",class:"row pt-1"},null,512),r(v,{models:e.models,zoom:e.zoom,center:e.center,location:e.location,onUpdateModels:a.getData},null,8,["models","zoom","center","location","onUpdateModels"]),r(M,{token:t.token,user:t.user,moduleName:e.moduleName,ref:"BackendConnection",onShowMessage:a.showMessage},null,8,["token","user","moduleName","onShowMessage"])],64)}const st=p(T,[["render",R]]);export{st as default};