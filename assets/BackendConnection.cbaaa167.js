import{L as t,_ as c}from"./index.6c9000ad.js";const o={};o.users={title:t[t.selected].users.title,Model:class{constructor(e){this.id=e.id,this.code=e.code,this.user_name=e.user_name,this.email=e.email,this.password=e.password,this.online_=e.online_,this.state=e.state,this.activated_at=e.activated_at,this.last_connect=e.last_connect,this.updated_by=e.updated_by,this.created_by=e.created_by,this.updated_at=e.updated_at,this.created_at=e.created_at}},fields:[{name:"id",type:"view",placeholder:t[t.selected].users._id},{name:"code",type:"view",placeholder:t[t.selected].users.code},{name:"user_name",type:"text",placeholder:t[t.selected].users.username,required:!0,validation:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/},{name:"email",type:"text",placeholder:t[t.selected].users.email,required:!0,validation:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/},{name:"password",type:"password",placeholder:t[t.selected].users.password,required:!0},{name:"online_",type:"view",placeholder:t[t.selected].users.online_},{name:"state",type:"checkbox",placeholder:t[t.selected].users.enabled,format:"checkbox"},{name:"activated_at",type:"view",placeholder:t[t.selected].users.activatedAt,format:"datetime"},{name:"last_connect",type:"view",placeholder:t[t.selected].users.onlineAt,format:"datetime"},{name:"created_at",type:"view",placeholder:t[t.selected].users.createdAt,format:"datetime"},{name:"created_by",type:"view",placeholder:t[t.selected].users.createdBy},{name:"updated_at",type:"view",placeholder:t[t.selected].users.updatedAt,format:"datetime"},{name:"updated_by",type:"view",placeholder:t[t.selected].users.updatedBy}]};o.logs={title:t[t.selected].logs.title,Model:class{constructor(e){this.id=e.id,this.tabla=e.tabla,this.accion=e.accion,this.crea=e.crea,this.edit=e.edit,this.registro_anterior=e.registro_anterior,this.registro_posterior=e.registro_posterior,this.fecha_creacion=e.fecha_creacion,this.fecha_edit=e.fecha_edit}},fields:[{name:"id",type:"view",placeholder:t[t.selected].logs._id},{name:"tabla",type:"view",placeholder:t[t.selected].logs.table},{name:"accion",type:"view",placeholder:t[t.selected].logs.action},{name:"crea",type:"view",placeholder:t[t.selected].logs.creation},{name:"edit",type:"view",placeholder:t[t.selected].logs.edition},{name:"registro_anterior",type:"view",placeholder:t[t.selected].logs.previous},{name:"registro_posterior",type:"view",placeholder:t[t.selected].logs.posterior},{name:"fecha_creacion",type:"view",placeholder:t[t.selected].logs.createdAt},{name:"fecha_edit",type:"view",placeholder:t[t.selected].logs.updatedAt}]};o.humans={title:t[t.selected].humans.title,Model:class{constructor(e){this.id=e.id,this.foto=e.foto,this.identification=e.identification,this.pasaporte=e.pasaporte,this.nombre=e.nombre,this.email=e.email,this.phone=e.phone,this.cargo=e.cargo,this.tipo_contrato=e.tipo_contrato,this.tipo_empleado=e.tipo_empleado,this.contratista=e.contratista,this.fecha_ingreso=e.fecha_ingreso,this.fecha_egreso=e.fecha_egreso,this.lider=e.lider,this.perfil=e.perfil,this.zona=e.zona,this.pep=e.pep,this.AFP=e.AFP,this.EPS=e.EPS,this.ARL=e.ARL,this.observaciones=e.observaciones,this.createdAt=e.createdAt,this.createdBy=e.createdBy,this.updatedAt=e.updatedAt,this.updatedBy=e.updatedBy}},fields:[{name:"id",type:"view",placeholder:t[t.selected].humans._id},{name:"photo",type:"image",placeholder:t[t.selected].humans.photo},{name:"identification",type:"text",placeholder:t[t.selected].humans.identification,required:!0},{name:"pasaporte",type:"text",placeholder:t[t.selected].humans.passport},{name:"pep",type:"text",placeholder:t[t.selected].humans.pep},{name:"nombre",type:"text",placeholder:t[t.selected].humans.name,required:!0},{name:"email",type:"email",placeholder:t[t.selected].humans.cemail},{name:"phone",type:"phone",placeholder:t[t.selected].humans.ccell},{name:"cargo",type:"text",placeholder:t[t.selected].humans.position},{name:"tipo_contrato",type:"text",placeholder:t[t.selected].humans.ctype},{name:"tipo_empleado",type:"text",placeholder:t[t.selected].humans.etype},{name:"contratista",type:"text",placeholder:t[t.selected].humans.contractor},{name:"fecha_ingreso",type:"date",placeholder:t[t.selected].humans.since,format:"date"},{name:"fecha_egreso",type:"date",placeholder:t[t.selected].humans.ending,format:"date"},{name:"lider",type:"text",placeholder:t[t.selected].humans.leader},{name:"perfil",type:"text",placeholder:t[t.selected].humans.profile},{name:"zone",type:"text",placeholder:t[t.selected].humans.zone},{name:"AFP",type:"text",placeholder:t[t.selected].humans.afp},{name:"EPS",type:"text",placeholder:t[t.selected].humans.eps},{name:"ARL",type:"text",placeholder:t[t.selected].humans.arl},{name:"observaciones",type:"text",placeholder:t[t.selected].humans.observations},{name:"created_at",type:"view",placeholder:t[t.selected].users.createdAt,format:"datetime"},{name:"created_by",type:"view",placeholder:t[t.selected].users.createdBy},{name:"updated_at",type:"view",placeholder:t[t.selected].users.updatedAt,format:"datetime"},{name:"updated_by",type:"view",placeholder:t[t.selected].users.updatedBy}]};o.permissions={title:"Permisos",Model:class{constructor(e){this._id=e._id,this.username=e.username,this.name=e.name,this.lastname=e.lastname}},fields:[]};o.status={title:"Estados",Model:class{constructor(e){this._id=e._id,this.name=e.name,this.description=e.description,this.automatic=e.automatic,this.enabled=e.enabled,this.createdAt=e.createdAt,this.createdBy=e.createdBy,this.updatedAt=e.updatedAt,this.updatedBy=e.updatedBy}},fields:[{name:"_id",type:"view",placeholder:"Id"},{name:"name",type:"text",placeholder:"Nombre",required:!0,message:"El campo de nombre no tiene el formato requerido"},{name:"description",type:"text",placeholder:"Descripci\xF3n"},{name:"automatic",type:"checkbox",placeholder:"Por defecto",format:"checkbox"},{name:"enabled",type:"checkbox",placeholder:"Habilitado",format:"checkbox"},{name:"createdAt",type:"view",placeholder:"Creado",format:"datetime"},{name:"createdBy",type:"view",placeholder:"Creado por"},{name:"updatedAt",type:"view",placeholder:"Modificado",format:"datetime"},{name:"updatedBy",type:"view",placeholder:"Modificado por"}]};o.clusters={title:"Grupos",Model:class{constructor(e){this._id=e._id,this.name=e.name,this.description=e.description,this.users=e.users,this.enabled=e.enabled,this.createdAt=e.createdAt,this.createdBy=e.createdBy,this.updatedAt=e.updatedAt,this.updatedBy=e.updatedBy}},fields:[{name:"_id",type:"view",placeholder:"Id"},{name:"name",type:"text",placeholder:"Nombre",required:!0},{name:"description",type:"text",placeholder:"Descripci\xF3n"},{name:"enabled",type:"checkbox",placeholder:"Habilitado",format:"checkbox"},{name:"users",type:"multiple",placeholder:"Usuarios",target:0,format:"multiple"},{name:"createdAt",type:"view",placeholder:"Creado",format:"datetime"},{name:"createdBy",type:"view",placeholder:"Creado por"},{name:"updatedAt",type:"view",placeholder:"Modificado",format:"datetime"},{name:"updatedBy",type:"view",placeholder:"Modificado por"}]};o.costs={title:"Centros de costo",Model:class{constructor(e){this._id=e._id,this.name=e.name,this.code=e.code,this.enabled=e.enabled,this.createdAt=e.createdAt,this.createdBy=e.createdBy,this.updatedAt=e.updatedAt,this.updatedBy=e.updatedBy}},fields:[{name:"_id",type:"view",placeholder:"Id"},{name:"name",type:"text",placeholder:"Nombre",required:!0},{name:"code",type:"text",placeholder:"C\xF3digo"},{name:"enabled",type:"checkbox",placeholder:"Habilitado",format:"checkbox"},{name:"createdAt",type:"view",placeholder:"Creado",format:"datetime"},{name:"createdBy",type:"view",placeholder:"Creado por"},{name:"updatedAt",type:"view",placeholder:"Modificado",format:"datetime"},{name:"updatedBy",type:"view",placeholder:"Modificado por"}]};o.zones={title:"Zonas",Model:class{constructor(e){this._id=e._id,this.name=e.name,this.description=e.description,this.enabled=e.enabled,this.createdAt=e.createdAt,this.createdBy=e.createdBy,this.updatedAt=e.updatedAt,this.updatedBy=e.updatedBy}},fields:[{name:"_id",type:"view",placeholder:"Id"},{name:"name",type:"text",placeholder:"Nombre",required:!0},{name:"description",type:"text",placeholder:"Descripci\xF3n"},{name:"enabled",type:"checkbox",placeholder:"Habilitado",format:"checkbox"},{name:"createdAt",type:"view",placeholder:"Creado",format:"datetime"},{name:"createdBy",type:"view",placeholder:"Creado por"},{name:"updatedAt",type:"view",placeholder:"Modificado",format:"datetime"},{name:"updatedBy",type:"view",placeholder:"Modificado por"}]};o.places={title:"Lugares",Model:class{constructor(e){this._id=e._id,this.zone=e.zone,this.name=e.name,this.description=e.description,this.country=e.country,this.state=e.state,this.city=e.city,this.town=e.town,this.address=e.address,this.latitude=e.latitude,this.longitude=e.longitude,this.altitude=e.altitude,this.enabled=e.enabled,this.createdAt=e.createdAt,this.createdBy=e.createdBy,this.updatedAt=e.updatedAt,this.updatedBy=e.updatedBy}},fields:[{name:"_id",type:"view",placeholder:"Id"},{name:"zone",type:"combobox",placeholder:"Zona",target:0,format:"combobox"},{name:"name",type:"text",placeholder:"Nombre",required:!0,message:"El campo de nombre no tiene el formato requerido"},{name:"description",type:"text",placeholder:"Descripci\xF3n"},{name:"country",type:"text",placeholder:"Pa\xEDs"},{name:"state",type:"text",placeholder:"Departamento/Estado"},{name:"city",type:"text",placeholder:"Ciudad"},{name:"town",type:"text",placeholder:"Poblaci\xF3n"},{name:"address",type:"text",placeholder:"Direcci\xF3n"},{name:"latitude",type:"text",placeholder:"Latitud"},{name:"longitude",type:"text",placeholder:"Longitud"},{name:"altitude",type:"text",placeholder:"Altitud"},{name:"enabled",type:"checkbox",placeholder:"Habilitado",format:"checkbox"},{name:"createdAt",type:"view",placeholder:"Creado",format:"datetime"},{name:"createdBy",type:"view",placeholder:"Creado por"},{name:"updatedAt",type:"view",placeholder:"Modificado",format:"datetime"},{name:"updatedBy",type:"view",placeholder:"Modificado por"}]};o.clients={title:"Clientes",Model:class{constructor(e){this._id=e._id,this.name=e.name,this.description=e.description,this.enabled=e.enabled,this.createdAt=e.createdAt,this.createdBy=e.createdBy,this.updatedAt=e.updatedAt,this.updatedBy=e.updatedBy}},fields:[{name:"_id",type:"view",placeholder:"Id"},{name:"name",type:"text",placeholder:"Nombre",required:!0,message:"El campo de nombre no tiene el formato requerido"},{name:"description",type:"text",placeholder:"Descripci\xF3n"},{name:"enabled",type:"checkbox",placeholder:"Habilitado",format:"checkbox"},{name:"createdAt",type:"view",placeholder:"Creado",format:"datetime"},{name:"createdBy",type:"view",placeholder:"Creado por"},{name:"updatedAt",type:"view",placeholder:"Modificado",format:"datetime"},{name:"updatedBy",type:"view",placeholder:"Modificado por"}]};o.projects={title:"Proyectos",Model:class{constructor(e){this._id=e._id,this.client=e.client,this.name=e.name,this.description=e.description,this.enabled=e.enabled,this.createdAt=e.createdAt,this.createdBy=e.createdBy,this.updatedAt=e.updatedAt,this.updatedBy=e.updatedBy}},fields:[{name:"_id",type:"view",placeholder:"Id"},{name:"client",type:"combobox",placeholder:"Cliente",target:0,required:!0,format:"combobox"},{name:"name",type:"text",placeholder:"Nombre",required:!0},{name:"description",type:"text",placeholder:"Descripci\xF3n",required:!0},{name:"enabled",type:"checkbox",placeholder:"Habilitado",format:"checkbox"},{name:"createdAt",type:"view",placeholder:"Creado",format:"datetime"},{name:"createdBy",type:"view",placeholder:"Creado por"},{name:"updatedAt",type:"view",placeholder:"Modificado",format:"datetime"},{name:"updatedBy",type:"view",placeholder:"Modificado por"}]};o.subprojects={title:"Sub-Proyectos",Model:class{constructor(e){this._id=e._id,this.project=e.project,this.name=e.name,this.description=e.description,this.enabled=e.enabled,this.createdAt=e.createdAt,this.createdBy=e.createdBy,this.updatedAt=e.updatedAt,this.updatedBy=e.updatedBy}},fields:[{name:"_id",type:"view",placeholder:"Id"},{name:"project",type:"combobox",placeholder:"Proyecto",target:0,required:!0,format:"combobox"},{name:"name",type:"text",placeholder:"Nombre",required:!0},{name:"description",type:"text",placeholder:"Descripci\xF3n",required:!0},{name:"enabled",type:"checkbox",placeholder:"Habilitado",format:"checkbox"},{name:"createdAt",type:"view",placeholder:"Creado",format:"datetime"},{name:"createdBy",type:"view",placeholder:"Creado por"},{name:"updatedAt",type:"view",placeholder:"Modificado",format:"datetime"},{name:"updatedBy",type:"view",placeholder:"Modificado por"}]};o.jobs={title:"Implementaciones",Model:class{constructor(e){this._id=e._id,this.name=e.name,this.client=e.client,this.project=e.project,this.subproject=e.subproject,this.cost=e.cost,this.place=e.place,this.cluster=e.cluster,this.type=e.type,this.po=e.po,this.gr=e.gr,this.link=e.link,this.status=e.status,this.statusAt=e.statusAt,this.statusBy=e.statusBy,this.createdAt=e.createdAt,this.createdBy=e.createdBy,this.updatedAt=e.updatedAt,this.updatedBy=e.updatedBy}},fields:[{name:"_id",type:"view",placeholder:"Id"},{name:"name",type:"text",placeholder:"Id cliente",required:!0},{name:"client",type:"combobox",placeholder:"Cliente",target:1,required:!0,format:"combobox"},{name:"project",type:"combobox",placeholder:"Proyecto",target:2,format:"combobox"},{name:"subproject",type:"combobox",placeholder:"Sub-proyecto",target:3,format:"combobox"},{name:"cost",type:"combobox",placeholder:"Centro de costo",target:4,required:!0,format:"combobox"},{name:"place",type:"combobox",placeholder:"Sitio",target:5,required:!0,format:"combobox"},{name:"cluster",type:"combobox",placeholder:"Asignado",target:6,required:!0,format:"combobox"},{name:"type",type:"text",placeholder:"Tipo",required:!0},{name:"po",type:"text",placeholder:"PO"},{name:"gr",type:"text",placeholder:"GR"},{name:"link",type:"text",placeholder:"Documentos"},{name:"status",type:"status",placeholder:"Estado",target:0,required:!0,format:"status"},{name:"statusAt",type:"view",placeholder:"Cambio estado",format:"datetime"},{name:"statusBy",type:"view",placeholder:"Cambiado por"},{name:"createdAt",type:"view",placeholder:"Creado",format:"datetime"},{name:"createdBy",type:"view",placeholder:"Creado por"},{name:"updatedAt",type:"view",placeholder:"Modificado",format:"datetime"},{name:"updatedBy",type:"view",placeholder:"Modificado por"}]};o.budgets={title:"Presupuestos",Model:class{constructor(e){this._id=e._id,this.job=e.job,this.requester=e.requester,this.description=e.description,this.date=e.date,this.since=e.since,this.ending=e.ending,this.value=e.value||0,this.observations=e.observations,this.status=e.status,this.statusAt=e.statusAt,this.statusBy=e.statusBy,this.createdAt=e.createdAt,this.createdBy=e.createdBy,this.updatedAt=e.updatedAt,this.updatedBy=e.updatedBy}},fields:[{name:"_id",type:"view",placeholder:"Id"},{name:"job",type:"combobox",placeholder:"Implementaci\xF3n",target:1,required:!0,format:"combobox"},{name:"requester",type:"view",placeholder:"Requerido por"},{name:"description",type:"text",placeholder:"Descripci\xF3n"},{name:"date",type:"date",placeholder:"Solicitado el",format:"date"},{name:"since",type:"date",placeholder:"Desde",format:"date"},{name:"ending",type:"date",placeholder:"Hasta",format:"date"},{name:"value",type:"number",placeholder:"Valor"},{name:"observations",type:"text",placeholder:"Observaciones"},{name:"status",type:"status",placeholder:"Estado",target:0,required:!0,format:"status"},{name:"statusAt",type:"view",placeholder:"Cambio estado",format:"datetime"},{name:"statusBy",type:"view",placeholder:"Cambiado por"},{name:"createdAt",type:"view",placeholder:"Creado",format:"datetime"},{name:"createdBy",type:"view",placeholder:"Creado por"},{name:"updatedAt",type:"view",placeholder:"Modificado",format:"datetime"},{name:"updatedBy",type:"view",placeholder:"Modificado por"}]};o.legalizations={title:"Legalizaciones",Model:class{constructor(e){this._id=e._id,this.job=e.job,this.budget=e.budget,this.requester=e.requester,this.description=e.description,this.date=e.date,this.value=e.value,this.observations=e.observations,this.image=e.image,this.status=e.status,this.statusAt=e.statusAt,this.statusBy=e.statusBy,this.createdAt=e.createdAt,this.createdBy=e.createdBy,this.updatedAt=e.updatedAt,this.updatedBy=e.updatedBy}},fields:[{name:"_id",type:"view",placeholder:"Id"},{name:"job",type:"combobox",placeholder:"Implementaci\xF3n",target:1,required:!0,format:"combobox"},{name:"budget",type:"combobox",placeholder:"Presupuesto",target:2,required:!0,format:"combobox"},{name:"requester",type:"view",placeholder:"Requerido por"},{name:"description",type:"text",placeholder:"Descripci\xF3n"},{name:"date",type:"date",placeholder:"Solicitado el",format:"date"},{name:"value",type:"number",placeholder:"Valor"},{name:"observations",type:"text",placeholder:"Observaciones"},{name:"image",type:"text",placeholder:"Fotograf\xEDa"},{name:"status",type:"status",placeholder:"Estado",target:0,required:!0,format:"status"},{name:"statusAt",type:"view",placeholder:"Cambio estado",format:"datetime"},{name:"statusBy",type:"view",placeholder:"Cambiado por"},{name:"createdAt",type:"view",placeholder:"Creado",format:"datetime"},{name:"createdBy",type:"view",placeholder:"Creado por"},{name:"updatedAt",type:"view",placeholder:"Modificado",format:"datetime"},{name:"updatedBy",type:"view",placeholder:"Modificado por"}]};o.cellars={title:"Bodegas",Model:class{constructor(e){this._id=e._id,this.name=e.name,this.description=e.description,this.automatic=e.automatic,this.enabled=e.enabled,this.createdAt=e.createdAt,this.createdBy=e.createdBy,this.updatedAt=e.updatedAt,this.updatedBy=e.updatedBy}},fields:[{name:"_id",type:"view",placeholder:"Id"},{name:"name",type:"text",placeholder:"Nombre",required:!0},{name:"description",type:"text",placeholder:"Descripci\xF3n"},{name:"automatic",type:"checkbox",placeholder:"Por defecto",format:"checkbox"},{name:"enabled",type:"checkbox",placeholder:"Habilitado",format:"checkbox"},{name:"createdAt",type:"view",placeholder:"Creado",format:"datetime"},{name:"createdBy",type:"view",placeholder:"Creado por"},{name:"updatedAt",type:"view",placeholder:"Modificado",format:"datetime"},{name:"updatedBy",type:"view",placeholder:"Modificado por"}]};o.products={title:"Productos",Model:class{constructor(e){this._id=e._id,this.name=e.name,this.description=e.description,this.type=e.type,this.code=e.code,this.brand=e.brand,this.model=e.model,this.serie=e.serie,this.price=e.price,this.enabled=e.enabled,this.createdAt=e.createdAt,this.createdBy=e.createdBy,this.updatedAt=e.updatedAt,this.updatedBy=e.updatedBy}},fields:[{name:"_id",type:"view",placeholder:"Id"},{name:"name",type:"text",placeholder:"Nombre",required:!0},{name:"description",type:"text",placeholder:"Descripci\xF3n"},{name:"type",type:"text",placeholder:"Tipo"},{name:"code",type:"text",placeholder:"C\xF3digo"},{name:"price",type:"number",placeholder:"Precio de venta"},{name:"brand",type:"text",placeholder:"Marca"},{name:"model",type:"text",placeholder:"Modelo"},{name:"serie",type:"text",placeholder:"Serial"},{name:"enabled",type:"checkbox",placeholder:"Habilitado",format:"checkbox"},{name:"createdAt",type:"view",placeholder:"Creado",format:"datetime"},{name:"createdBy",type:"view",placeholder:"Creado por"},{name:"updatedAt",type:"view",placeholder:"Modificado",format:"datetime"},{name:"updatedBy",type:"view",placeholder:"Modificado por"}]};o.inventories={title:"Inventarios",Model:class{constructor(e){this._id=e._id,this.job=e.job,this.requester=e.requester,this.sender=e.sender,this.receiver=e.receiver,this.type=e.type,this.description=e.description,this.date=e.date,this.cellarOrigen=e.cellarOrigen,this.cellarDestination=e.cellarDestination,this.products=e.products,this.status=e.status,this.statusAt=e.statusAt,this.statusBy=e.statusBy,this.createdAt=e.createdAt,this.createdBy=e.createdBy,this.updatedAt=e.updatedAt,this.updatedBy=e.updatedBy}},fields:[{name:"_id",type:"view",placeholder:"Id"},{name:"job",type:"combobox",placeholder:"Implementaci\xF3n",target:2,required:!0,format:"combobox"},{name:"requester",type:"view",placeholder:"Requerido por"},{name:"sender",type:"combobox",placeholder:"Entregado por",target:4,format:"combobox"},{name:"receiver",type:"combobox",placeholder:"Recibido por",target:4,format:"combobox"},{name:"type",type:"text",placeholder:"Tipo"},{name:"description",type:"text",placeholder:"Descripci\xF3n"},{name:"date",type:"date",placeholder:"Solicitado el",format:"date"},{name:"cellarOrigen",type:"combobox",placeholder:"Bodega de origen",target:3,format:"combobox"},{name:"cellarDestination",type:"combobox",placeholder:"Bodega de destino",target:3,format:"combobox"},{name:"products",type:"multiple",placeholder:"Productos",target:1,format:"multiple"},{name:"status",type:"status",placeholder:"Estado",target:0,required:!0,format:"status"},{name:"statusAt",type:"view",placeholder:"Cambio estado",format:"datetime"},{name:"statusBy",type:"view",placeholder:"Cambiado por"},{name:"createdAt",type:"view",placeholder:"Creado",format:"datetime"},{name:"createdBy",type:"view",placeholder:"Creado por"},{name:"updatedAt",type:"view",placeholder:"Modificado",format:"datetime"},{name:"updatedBy",type:"view",placeholder:"Modificado por"}]};const p={props:["token","moduleName"],emits:["showMessage"],data(){return{moduleServer:"https://processmanager.k2ksoluciones.com/api/"}},methods:{async getAll(a){try{const e={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({METODO:a,token:this.token,pagina:0,cantidad:100})};return await(await fetch(this.moduleServer,e)).json()}catch(e){console.log(e),this.$emit("showMessage","No se pudo obtener los registros de la base de datos.","error")}},async getOne(a){try{const e={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({METODO:method_name,token:this.token,pagina:0,cantidad:100})};return await(await fetch(this.moduleServer+this.moduleName+"/"+a,e)).json()}catch(e){console.log(e),this.$emit("showMessage","No se pudo obtener el registro de la base de datos.","error")}},async createOne(a,e){try{const d={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({...e,METODO:a,token:this.token})};return await(await fetch(this.moduleServer,d)).json()}catch(d){console.log(d),this.$emit("showMessage","No se pudo crear el nuevo registro en la base de datos.","error")}},async updateOne(a,e){try{const d={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({...e,METODO:a,token:this.token})};return await(await fetch(this.moduleServer,d)).json()}catch(d){console.log(d),this.$emit("showMessage","No se pudo actualizar el registro en la base de datos.","error")}},async changeStatus(a,e){try{const d={method:"PUT",headers:{"Content-Type":"application/json","x-access-token":this.token},body:JSON.stringify(a)};return await(await fetch(this.moduleServer+this.moduleName+"/"+a._id+"/"+e,d)).json()}catch(d){console.log(d),this.$emit("showMessage","No se pudo cambiar el estado del registro en la base de datos.","error")}},async deleteOne(a,e,d){try{const r={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({...e,reason:d,METODO:a,token:this.token})};return await(await fetch(this.moduleServer,r)).json()}catch(r){console.log(r),this.$emit("showMessage","No se pudo eliminar el registro de la base de datos.","error")}}}};function l(a,e,d,r,i,s){return null}const O=c(p,[["render",l]]);export{O as B,o as F};
