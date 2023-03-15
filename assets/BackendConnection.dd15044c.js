import{_ as d,o as a,c as i,t as c,a as l}from"./index.36d29975.js";const p={data(){return{text:"",type:"",time:0}},methods:{show(r,t="info",o=5e3){this.text=r,this.type=t,this.time=new Date().getTime()+o,setInterval(()=>{new Date().getTime()-this.time>=0&&(this.text="")},100)}}},h={key:0,class:"alert alert-success",role:"alert"},u={key:1,class:"alert alert-danger",role:"alert"},g={key:2,class:"alert alert-warning",role:"alert"},m={key:3,class:"alert alert-info",role:"alert"};function y(r,t,o,s,e,n){return a(),i("div",null,[e.text&&e.type=="success"?(a(),i("div",h,c(e.text),1)):l("",!0),e.text&&e.type=="error"?(a(),i("div",u,c(e.text),1)):l("",!0),e.text&&e.type=="warning"?(a(),i("div",g,c(e.text),1)):l("",!0),e.text&&e.type=="info"?(a(),i("div",m,c(e.text),1)):l("",!0)])}const S=d(p,[["render",y]]),f={props:["token","moduleName"],emits:["showMessage"],data(){return{moduleServer:"https://processmanager.k2ksoluciones.com/api/"}},methods:{async login(r){try{const t={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(r)},s=await(await fetch(this.moduleServer,t)).json();return console.log(s),s}catch(t){console.log(t),this.$emit("showMessage","No se pudo obtener los registros de la base de datos.","error")}},async getAll(r){try{const t={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({METODO:r,token:this.token,pagina:0,cantidad:100})},s=await(await fetch(this.moduleServer,t)).json();if(console.log(s),s.codigoResultado==-99)this.$router.push("/logout");else if(s.codigoResultado==-95){const e=await this.getAll("mis_permisos");console.log("Get permissions because -95 received",e)}return s}catch(t){console.log(t),this.$emit("showMessage","No se pudo obtener los registros de la base de datos.","error")}},async getAllAuxiliar(r,t){try{const o={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({METODO:r,token:this.token,pagina:0,cantidad:100,...t})},e=await(await fetch(this.moduleServer,o)).json();if(console.log(e),e.codigoResultado==-99)this.$router.push("/logout");else if(e.codigoResultado==-95){const n=await this.getAll("mis_permisos");console.log(n)}return e}catch(o){console.log(o),this.$emit("showMessage","No se pudo obtener los registros de la base de datos.","error")}},async getParams(r,t){try{const o={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({METODO:r,token:this.token,pagina:0,cantidad:t.limit,latitud:t.latitude,longitud:t.longitude,radio:t.zoom})},e=await(await fetch(this.moduleServer,o)).json();return console.log(e),e.codigoResultado==-99&&this.$router.push("/logout"),e}catch(o){console.log(o),this.$emit("showMessage","No se pudo obtener los registros de la base de datos.","error")}},async getOne(r){try{const t={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({METODO:method_name,token:this.token,pagina:0,cantidad:100})},s=await(await fetch(this.moduleServer+this.moduleName+"/"+r,t)).json();return console.log(s),s.codigoResultado==-99&&this.$router.push("/logout"),s}catch(t){console.log(t),this.$emit("showMessage","No se pudo obtener el registro de la base de datos.","error")}},async createOne(r,t){try{const o={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({...t,METODO:r,token:this.token})};console.log(t,o);const e=await(await fetch(this.moduleServer,o)).json();return console.log(e),e.codigoResultado==-99&&this.$router.push("/logout"),e}catch(o){console.log(o),this.$emit("showMessage","No se pudo crear el nuevo registro en la base de datos.","error")}},async updateOne(r,t){try{const o={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({...t,METODO:r,token:this.token})};console.log(o);const e=await(await fetch(this.moduleServer,o)).json();return console.log(e),e.codigoResultado==-99&&this.$router.push("/logout"),e}catch(o){console.log(o),this.$emit("showMessage","No se pudo actualizar el registro en la base de datos.","error")}},async deleteOne(r,t,o){try{const s={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({...t,reason:o,METODO:r,token:this.token})},n=await(await fetch(this.moduleServer,s)).json();return console.log(n),n.codigoResultado==-99&&this.$router.push("/logout"),n}catch(s){console.log(s),this.$emit("showMessage","No se pudo eliminar el registro de la base de datos.","error")}},async uploadFile(r,t){try{const o=new FormData;o.append("archivo_imp",t),o.append("METODO",r),o.append("token",this.token);const s={method:"POST",headers:{Accept:"application/json"},body:o},n=await(await fetch(this.moduleServer,s)).json();return console.log(n),n.codigoResultado==-99&&this.$router.push("/logout"),n}catch(o){console.log(o),this.$emit("showMessage","No se pudo crear el nuevo registro en la base de datos.","error")}}}};function O(r,t,o,s,e,n){return null}const T=d(f,[["render",O]]);export{S as A,T as B};
