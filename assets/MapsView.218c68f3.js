import{A as k}from"./AlertMessage.0e4dbf5a.js";import{S as b}from"./SearchField.5dd64902.js";import{E as z,I as v}from"./ImportButton.07ffbb6d.js";import{_ as h,o as c,c as d,b as n,L as B,r as i,t as N,d as l,g as p,a as u,F as w}from"./index.129a2ee6.js";import{F as m,B as D}from"./BackendConnection.f89ed05b.js";const S={props:["models","center","zoom"],emits:["updateModels"],data(){return{map:null,places:{},maps:[{name:"GoogleHybrid",url:"http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",attribution:"\xA9Google",subdomains:["mt0","mt1","mt2","mt3"]},{name:"GoogleSatellital",url:"http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",attribution:"\xA9Google",subdomains:["mt0","mt1","mt2","mt3"]},{name:"GoogleTerrain",url:"http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",attribution:"\xA9Google",subdomains:["mt0","mt1","mt2","mt3"]},{name:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:"\xA9OpenStreetMap",subdomains:[]}],mapLayers:[],baseMaps:{},overlayMaps:{}}},created(){this.maps.forEach(e=>{const o=L.tileLayer(e.url,{attribution:e.attribution,subdomains:e.subdomains,maxZoom:20});this.mapLayers.push(o),this.baseMaps[e.name]=o})},watch:{models(){const e=L.icon({iconUrl:"https://img.icons8.com/fluency/16/null/place-marker.png",iconSize:[16,16]});if(this.places={},this.models.length>0){this.map&&(this.map.off(),this.map.remove()),this.models.forEach(t=>{if(t.latitud&&t.longitud){const r="("+t.identi_id+') <a href="#">'+t.name+"</a><br>Latitud: "+t.latitud+"<br>Longitud: "+t.longitud;this.places[t.region]||(this.places[t.region]=[]),this.places[t.region].push(L.marker([t.latitud,t.longitud],{icon:e}).bindPopup(r))}});for(const t in this.places)this.places[t]=L.layerGroup(this.places[t]);const o=[...this.mapLayers];for(const t in this.places)o.push(this.places[t]);this.map=L.map("map",{center:this.center,zoom:this.zoom,layers:o});for(const t in this.places)this.overlayMaps[t]=this.places[t];L.control.layers(this.baseMaps,this.overlayMaps,{collapsed:!1}).addTo(this.map),this.map.on("moveend",t=>{const r=1e6/((50*t.target.getZoom()^2)+1e3*t.target.getZoom()+1)-20,s=t.target.getCenter().toString().replace("LatLng(","").replace(")","").split(", "),a={zoom:r,latitude:s[0],longitude:s[1]};this.$emit("updateModels",a)})}}}},C={class:"row mt-2"},E=n("div",{id:"map",class:"vh-80 p-1"},null,-1),F=[E];function P(e,o,t,r,s,a){return c(),d("div",C,F)}const G=h(S,[["render",P]]);const I={props:["token","user","hasPermission","updateToken"],data(){return{moduleName:"maps",title:m.maps.title,Model:m.maps.Model,fields:m.maps.fields,Lenguages:B,models:[],original:[],center:[],zoom:13}},created(){this.token?this.user?this.hasPermission(this.moduleName,"access")||this.$router.push("/"):this.$router.push("/"):this.$router.push("/")},methods:{showMessage(e,o){this.$refs.AlertMessage.show(e,o)},searchData(e){this.models=e},exportData(e=0){e==1?this.$refs.ExportButton.exportFile(this.original,this.moduleName):this.$refs.ExportButton.exportFile(this.models,this.moduleName)},async getData(e={zoom:10,latitude:4.60971,longitude:-74.08175}){this.zoom=e.zoom,this.center=[e.latitude,e.longitude];try{const o=await this.$refs.BackendConnection.getParams("lugares_radio",e);this.original=o.resultados.map(t=>new this.Model(t)),this.models=this.original,this.updateToken({token:o.user.token,user:o.user})}catch(o){console.log(o),this.showMessage(this.Lenguages[this.Lenguages.selected].maps.err_get,"error")}}},components:{AlertMessage:k,SearchField:b,ExportButton:z,ImportButton:v,MapController:G,BackendConnection:D},mounted(){this.hasPermission(this.moduleName,"access")?navigator.geolocation?navigator.geolocation.getCurrentPosition(e=>{this.center=[e.coords.latitude,e.coords.longitude];const o={zoom:this.zoom,latitude:this.center[0],longitude:this.center[1]};this.getData(o)}):this.getData():this.$router.push("/")}},A={class:"row pt-3 w-100"},T={class:"col"},V={id:"moduleTitle"},$={class:"col py-2"},O={class:"btn-group"};function U(e,o,t,r,s,a){const g=i("SearchField"),_=i("ExportButton"),f=i("ImportButton"),y=i("AlertMessage"),M=i("MapController"),x=i("BackendConnection");return c(),d(w,null,[n("div",A,[n("div",T,[n("h1",V,N(s.title),1)]),n("div",$,[n("div",O,[l(g,{original:s.original,onSearchData:a.searchData},null,8,["original","onSearchData"]),t.hasPermission(s.moduleName,"export")?(c(),p(_,{key:0,ref:"ExportButton",onExportData:a.exportData},null,8,["onExportData"])):u("",!0),t.hasPermission(s.moduleName,"import")?(c(),p(f,{key:1,moduleName:s.moduleName,onImportData:e.createOne},null,8,["moduleName","onImportData"])):u("",!0)])])]),l(y,{ref:"AlertMessage",class:"row pt-1"},null,512),l(M,{models:s.models,zoom:s.zoom,center:s.center,onUpdateModels:a.getData},null,8,["models","zoom","center","onUpdateModels"]),l(x,{token:t.token,user:t.user,moduleName:s.moduleName,ref:"BackendConnection",onShowMessage:a.showMessage},null,8,["token","user","moduleName","onShowMessage"])],64)}const K=h(I,[["render",U]]);export{K as default};
