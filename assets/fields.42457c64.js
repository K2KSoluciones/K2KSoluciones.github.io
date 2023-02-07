import{L as t}from"./index.17f9246e.js";const a={};a.users={title:t[t.selected].users.title,Model:class{constructor(e){this.id=e.id,this.code=e.code,this.user_name=e.user_name,this.email=e.email,this.password=e.password,this.online_=e.online_,this.state=e.state,this.activated_at=e.activated_at,this.last_connect=e.last_connect,this.updated_by=e.updated_by,this.created_by=e.created_by,this.updated_at=e.updated_at,this.created_at=e.created_at}},fields:[{name:"id",type:"view",placeholder:t[t.selected].users._id},{name:"code",type:"view",placeholder:t[t.selected].users.code},{name:"user_name",type:"text",placeholder:t[t.selected].users.username,required:!0,validation:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/},{name:"email",type:"text",placeholder:t[t.selected].users.email,required:!0,validation:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/},{name:"password",type:"password",placeholder:t[t.selected].users.password,required:!0},{name:"online_",type:"view",placeholder:t[t.selected].users.online_},{name:"state",type:"checkbox",placeholder:t[t.selected].users.enabled,format:"checkbox"},{name:"activated_at",type:"view",placeholder:t[t.selected].users.activatedAt,format:"datetime"},{name:"last_connect",type:"view",placeholder:t[t.selected].users.onlineAt,format:"datetime"},{name:"created_at",type:"view",placeholder:t[t.selected].users.createdAt,format:"datetime"},{name:"created_by",type:"view",placeholder:t[t.selected].users.createdBy},{name:"updated_at",type:"view",placeholder:t[t.selected].users.updatedAt,format:"datetime"},{name:"updated_by",type:"view",placeholder:t[t.selected].users.updatedBy}]};a.logs={title:t[t.selected].logs.title,Model:class{constructor(e){this.id=e.id,this.tabla=e.tabla,this.accion=e.accion,this.crea=e.crea,this.edit=e.edit,this.registro_anterior=e.registro_anterior,this.registro_posterior=e.registro_posterior,this.fecha_creacion=e.fecha_creacion,this.fecha_edit=e.fecha_edit}},fields:[{name:"id",type:"view",placeholder:t[t.selected].logs._id},{name:"tabla",type:"view",placeholder:t[t.selected].logs.table},{name:"accion",type:"view",placeholder:t[t.selected].logs.action},{name:"crea",type:"view",placeholder:t[t.selected].logs.creation},{name:"edit",type:"view",placeholder:t[t.selected].logs.edition},{name:"registro_anterior",type:"view",placeholder:t[t.selected].logs.previous},{name:"registro_posterior",type:"view",placeholder:t[t.selected].logs.posterior},{name:"fecha_creacion",type:"view",placeholder:t[t.selected].logs.createdAt},{name:"fecha_edit",type:"view",placeholder:t[t.selected].logs.updatedAt}]};a.humans={title:t[t.selected].humans.title,Model:class{constructor(e){this.id=e.id,this.foto=e.foto,this.identification=e.identification,this.pasaporte=e.pasaporte,this.nombre=e.nombre,this.email=e.email,this.phone=e.phone,this.cargo=e.cargo,this.tipo_contrato=e.tipo_contrato,this.tipo_empleado=e.tipo_empleado,this.contratista=e.contratista,this.fecha_ingreso=e.fecha_ingreso,this.fecha_egreso=e.fecha_egreso,this.lider=e.lider,this.perfil=e.perfil,this.zona=e.zona,this.pep=e.pep,this.AFP=e.AFP,this.EPS=e.EPS,this.ARL=e.ARL,this.observaciones=e.observaciones,this.createdAt=e.createdAt,this.createdBy=e.createdBy,this.updatedAt=e.updatedAt,this.updatedBy=e.updatedBy}},fields:[{name:"id",type:"view",placeholder:t[t.selected].humans._id},{name:"photo",type:"image",placeholder:t[t.selected].humans.photo},{name:"identification",type:"text",placeholder:t[t.selected].humans.identification,required:!0},{name:"pasaporte",type:"text",placeholder:t[t.selected].humans.passport},{name:"pep",type:"text",placeholder:t[t.selected].humans.pep},{name:"nombre",type:"text",placeholder:t[t.selected].humans.name,required:!0},{name:"email",type:"email",placeholder:t[t.selected].humans.cemail},{name:"phone",type:"phone",placeholder:t[t.selected].humans.ccell},{name:"cargo",type:"text",placeholder:t[t.selected].humans.position},{name:"tipo_contrato",type:"text",placeholder:t[t.selected].humans.ctype},{name:"tipo_empleado",type:"text",placeholder:t[t.selected].humans.etype},{name:"contratista",type:"text",placeholder:t[t.selected].humans.contractor},{name:"fecha_ingreso",type:"date",placeholder:t[t.selected].humans.since,format:"date"},{name:"fecha_egreso",type:"date",placeholder:t[t.selected].humans.ending,format:"date"},{name:"lider",type:"text",placeholder:t[t.selected].humans.leader},{name:"perfil",type:"text",placeholder:t[t.selected].humans.profile},{name:"zone",type:"text",placeholder:t[t.selected].humans.zone},{name:"AFP",type:"text",placeholder:t[t.selected].humans.afp},{name:"EPS",type:"text",placeholder:t[t.selected].humans.eps},{name:"ARL",type:"text",placeholder:t[t.selected].humans.arl},{name:"observaciones",type:"text",placeholder:t[t.selected].humans.observations},{name:"created_at",type:"view",placeholder:t[t.selected].users.createdAt,format:"datetime"},{name:"created_by",type:"view",placeholder:t[t.selected].users.createdBy},{name:"updated_at",type:"view",placeholder:t[t.selected].users.updatedAt,format:"datetime"},{name:"updated_by",type:"view",placeholder:t[t.selected].users.updatedBy}]};a.places={title:t[t.selected].places.title,Model:class{constructor(e){this.WKT=e.WKT,this.altura_estructura=e.altura_estructura,this.anillo_RF=e.anillo_RF,this.carga_estructura=e.carga_estructura,this.centro_poblado=e.centro_poblado,this.contrato_celebrado=e.contrato_celebrado,this.created_at=e.created_at,this.created_by=e.created_by,this.dane_cp=e.dane_cp,this.dane_municipio=e.dane_municipio,this.departamento=e.departamento,this.detalle_estructura=e.detalle_estructura,this.equipo_rf=e.equipo_rf,this.estructura=e.estructura,this.fecha_carga_estructura=e.fecha_carga_estructura,this.foco_servicio=e.foco_servicio,this.id=e.id,this.ident_id=e.ident_id,this.latitud=e.latitud,this.localidad_CRC=e.localidad_CRC,this.longitud=e.longitud,this.market_rf=e.market_rf,this.municipio=e.municipio,this.name=e.name,this.objetivo_cobertura=e.objetivo_cobertura,this.origen_SD=e.origen_SD,this.propietario_estructura=e.propietario_estructura,this.region=e.region,this.sitio=e.sitio,this.techs=e.techs,this.ubicacion=e.ubicacion,this.ubicacion_tecnica=e.ubicacion_tecnica,this.updated_at=e.updated_at,this.updated_by=e.updated_by,this.visibility=e.visibility,this.zona=e.zona}},fields:[{name:"ident_id",type:"view",placeholder:t[t.selected].places._id},{name:"id",type:"text",placeholder:t[t.selected].places.id},{name:"name",type:"text",placeholder:t[t.selected].places.name},{name:"region",type:"text",placeholder:t[t.selected].places.region},{name:"zona",type:"text",placeholder:t[t.selected].places.zona},{name:"departamento",type:"text",placeholder:t[t.selected].places.departamento},{name:"municipio",type:"text",placeholder:t[t.selected].places.municipio},{name:"dane_municipio",type:"text",placeholder:t[t.selected].places.dane_municipio},{name:"centro_poblado",type:"text",placeholder:t[t.selected].places.centro_poblado},{name:"dane_cp",type:"text",placeholder:t[t.selected].places.dane_cp},{name:"ubicacion",type:"text",placeholder:t[t.selected].places.ubicacion},{name:"ubicacion_tecnica",type:"text",placeholder:t[t.selected].places.ubicacion_tecnica},{name:"objetivo_cobertura",type:"text",placeholder:t[t.selected].places.objetivo_cobertura},{name:"foco_servicio",type:"text",placeholder:t[t.selected].places.foco_servicio},{name:"localidad_CRC",type:"text",placeholder:t[t.selected].places.localidad_CRC},{name:"latitud",type:"text",placeholder:t[t.selected].places.latitud},{name:"longitud",type:"text",placeholder:t[t.selected].places.longitud},{name:"WKT",type:"text",placeholder:t[t.selected].places.WKT},{name:"estructura",type:"text",placeholder:t[t.selected].places.estructura},{name:"fecha_carga_estructura",type:"text",placeholder:t[t.selected].places.fecha_carga_estructura},{name:"carga_estructura",type:"text",placeholder:t[t.selected].places.carga_estructura},{name:"propietario_estructura",type:"text",placeholder:t[t.selected].places.propietario_estructura},{name:"altura_estructura",type:"text",placeholder:t[t.selected].places.altura_estructura},{name:"detalle_estructura",type:"text",placeholder:t[t.selected].places.detalle_estructura},{name:"equipo_rf",type:"text",placeholder:t[t.selected].places.equipo_rf},{name:"anillo_RF",type:"text",placeholder:t[t.selected].places.anillo_RF},{name:"market_rf",type:"text",placeholder:t[t.selected].places.market_rf},{name:"origen_SD",type:"text",placeholder:t[t.selected].places.origen_SD},{name:"sitio",type:"text",placeholder:t[t.selected].places.sitio},{name:"techs",type:"text",placeholder:t[t.selected].places.techs},{name:"visibility",type:"text",placeholder:t[t.selected].places.visibility},{name:"contrato_celebrado",type:"text",placeholder:t[t.selected].places.contrato_celebrado},{name:"created_at",type:"view",placeholder:t[t.selected].places.created_at,format:"datetime"},{name:"created_by",type:"view",placeholder:t[t.selected].places.created_by},{name:"updated_at",type:"view",placeholder:t[t.selected].places.updated_at,format:"datetime"},{name:"updated_by",type:"view",placeholder:t[t.selected].places.updated_by}]};a.maps={title:t[t.selected].maps.title,Model:class{constructor(e){this.id=e.id,this.ident_id=e.ident_id,this.latitud=e.latitud,this.longitud=e.longitud,this.name=e.name,this.region=e.region}},fields:[]};a.checkins={title:t[t.selected].checkins.title,Model:class{constructor(e){this.id=e.id,this.ident_id=e.ident_id,this.estado=e.estado,this.fecha_inicial=e.fecha_inicial,this.integrantes=e.integrantes,this.latitud=e.latitud,this.longitud=e.longitud,this.registro1=e.registro1}},fields:[{name:"id",type:"view",placeholder:t[t.selected].checkins._id},{name:"ident_id",type:"text",placeholder:t[t.selected].checkins.identi_id},{name:"estado",type:"text",placeholder:t[t.selected].checkins.status},{name:"fecha_inicial",type:"date",placeholder:t[t.selected].checkins.date,format:"date"},{name:"integrantes",type:"text",placeholder:t[t.selected].checkins.people},{name:"latitud",type:"text",placeholder:t[t.selected].checkins.latitude},{name:"longitud",type:"text",placeholder:t[t.selected].checkins.longitude},{name:"registro1",type:"text",placeholder:t[t.selected].checkins.register},{name:"created_at",type:"view",placeholder:t[t.selected].checkins.created_at,format:"datetime"},{name:"created_by",type:"view",placeholder:t[t.selected].checkins.created_by},{name:"updated_at",type:"view",placeholder:t[t.selected].checkins.updated_at,format:"datetime"},{name:"updated_by",type:"view",placeholder:t[t.selected].checkins.updated_by}]};a.profiles={title:t[t.selected].profiles.title,Model:class{constructor(e){this.id=e.id,this.profile=e.profile,this.charge=e.charge,this.read_=e.read_,this.create_=e.create_,this.update_=e.update_,this.delete_=e.delete_,this.created_at=e.created_at,this.created_by=e.created_by,this.updated_at=e.updated_at,this.updated_by=e.updated_by}},fields:[{name:"id",type:"view",placeholder:t[t.selected].profiles._id},{name:"profile",type:"text",placeholder:t[t.selected].profiles.profile},{name:"charge",type:"text",placeholder:t[t.selected].profiles.charge},{name:"read_",type:"text",placeholder:t[t.selected].profiles.read_},{name:"create_",type:"text",placeholder:t[t.selected].profiles.create_},{name:"update_",type:"text",placeholder:t[t.selected].profiles.update_},{name:"delete_",type:"text",placeholder:t[t.selected].profiles.delete_},{name:"created_at",type:"view",placeholder:t[t.selected].checkins.created_at,format:"datetime"},{name:"created_by",type:"view",placeholder:t[t.selected].checkins.created_by},{name:"updated_at",type:"view",placeholder:t[t.selected].checkins.updated_at,format:"datetime"},{name:"updated_by",type:"view",placeholder:t[t.selected].checkins.updated_by}]};a.permissions={title:"Permisos",Model:class{constructor(e){this._id=e._id,this.username=e.username,this.name=e.name,this.lastname=e.lastname}},fields:[]};a.status={title:"Estados",Model:class{constructor(e){this._id=e._id,this.name=e.name,this.description=e.description,this.automatic=e.automatic,this.enabled=e.enabled,this.createdAt=e.createdAt,this.createdBy=e.createdBy,this.updatedAt=e.updatedAt,this.updatedBy=e.updatedBy}},fields:[{name:"_id",type:"view",placeholder:"Id"},{name:"name",type:"text",placeholder:"Nombre",required:!0,message:"El campo de nombre no tiene el formato requerido"},{name:"description",type:"text",placeholder:"Descripci\xF3n"},{name:"automatic",type:"checkbox",placeholder:"Por defecto",format:"checkbox"},{name:"enabled",type:"checkbox",placeholder:"Habilitado",format:"checkbox"},{name:"createdAt",type:"view",placeholder:"Creado",format:"datetime"},{name:"createdBy",type:"view",placeholder:"Creado por"},{name:"updatedAt",type:"view",placeholder:"Modificado",format:"datetime"},{name:"updatedBy",type:"view",placeholder:"Modificado por"}]};a.clusters={title:"Grupos",Model:class{constructor(e){this._id=e._id,this.name=e.name,this.description=e.description,this.users=e.users,this.enabled=e.enabled,this.createdAt=e.createdAt,this.createdBy=e.createdBy,this.updatedAt=e.updatedAt,this.updatedBy=e.updatedBy}},fields:[{name:"_id",type:"view",placeholder:"Id"},{name:"name",type:"text",placeholder:"Nombre",required:!0},{name:"description",type:"text",placeholder:"Descripci\xF3n"},{name:"enabled",type:"checkbox",placeholder:"Habilitado",format:"checkbox"},{name:"users",type:"multiple",placeholder:"Usuarios",target:0,format:"multiple"},{name:"createdAt",type:"view",placeholder:"Creado",format:"datetime"},{name:"createdBy",type:"view",placeholder:"Creado por"},{name:"updatedAt",type:"view",placeholder:"Modificado",format:"datetime"},{name:"updatedBy",type:"view",placeholder:"Modificado por"}]};a.costs={title:"Centros de costo",Model:class{constructor(e){this._id=e._id,this.name=e.name,this.code=e.code,this.enabled=e.enabled,this.createdAt=e.createdAt,this.createdBy=e.createdBy,this.updatedAt=e.updatedAt,this.updatedBy=e.updatedBy}},fields:[{name:"_id",type:"view",placeholder:"Id"},{name:"name",type:"text",placeholder:"Nombre",required:!0},{name:"code",type:"text",placeholder:"C\xF3digo"},{name:"enabled",type:"checkbox",placeholder:"Habilitado",format:"checkbox"},{name:"createdAt",type:"view",placeholder:"Creado",format:"datetime"},{name:"createdBy",type:"view",placeholder:"Creado por"},{name:"updatedAt",type:"view",placeholder:"Modificado",format:"datetime"},{name:"updatedBy",type:"view",placeholder:"Modificado por"}]};a.zones={title:"Zonas",Model:class{constructor(e){this._id=e._id,this.name=e.name,this.description=e.description,this.enabled=e.enabled,this.createdAt=e.createdAt,this.createdBy=e.createdBy,this.updatedAt=e.updatedAt,this.updatedBy=e.updatedBy}},fields:[{name:"_id",type:"view",placeholder:"Id"},{name:"name",type:"text",placeholder:"Nombre",required:!0},{name:"description",type:"text",placeholder:"Descripci\xF3n"},{name:"enabled",type:"checkbox",placeholder:"Habilitado",format:"checkbox"},{name:"createdAt",type:"view",placeholder:"Creado",format:"datetime"},{name:"createdBy",type:"view",placeholder:"Creado por"},{name:"updatedAt",type:"view",placeholder:"Modificado",format:"datetime"},{name:"updatedBy",type:"view",placeholder:"Modificado por"}]};a.clients={title:"Clientes",Model:class{constructor(e){this._id=e._id,this.name=e.name,this.description=e.description,this.enabled=e.enabled,this.createdAt=e.createdAt,this.createdBy=e.createdBy,this.updatedAt=e.updatedAt,this.updatedBy=e.updatedBy}},fields:[{name:"_id",type:"view",placeholder:"Id"},{name:"name",type:"text",placeholder:"Nombre",required:!0,message:"El campo de nombre no tiene el formato requerido"},{name:"description",type:"text",placeholder:"Descripci\xF3n"},{name:"enabled",type:"checkbox",placeholder:"Habilitado",format:"checkbox"},{name:"createdAt",type:"view",placeholder:"Creado",format:"datetime"},{name:"createdBy",type:"view",placeholder:"Creado por"},{name:"updatedAt",type:"view",placeholder:"Modificado",format:"datetime"},{name:"updatedBy",type:"view",placeholder:"Modificado por"}]};a.projects={title:"Proyectos",Model:class{constructor(e){this._id=e._id,this.client=e.client,this.name=e.name,this.description=e.description,this.enabled=e.enabled,this.createdAt=e.createdAt,this.createdBy=e.createdBy,this.updatedAt=e.updatedAt,this.updatedBy=e.updatedBy}},fields:[{name:"_id",type:"view",placeholder:"Id"},{name:"client",type:"combobox",placeholder:"Cliente",target:0,required:!0,format:"combobox"},{name:"name",type:"text",placeholder:"Nombre",required:!0},{name:"description",type:"text",placeholder:"Descripci\xF3n",required:!0},{name:"enabled",type:"checkbox",placeholder:"Habilitado",format:"checkbox"},{name:"createdAt",type:"view",placeholder:"Creado",format:"datetime"},{name:"createdBy",type:"view",placeholder:"Creado por"},{name:"updatedAt",type:"view",placeholder:"Modificado",format:"datetime"},{name:"updatedBy",type:"view",placeholder:"Modificado por"}]};a.subprojects={title:"Sub-Proyectos",Model:class{constructor(e){this._id=e._id,this.project=e.project,this.name=e.name,this.description=e.description,this.enabled=e.enabled,this.createdAt=e.createdAt,this.createdBy=e.createdBy,this.updatedAt=e.updatedAt,this.updatedBy=e.updatedBy}},fields:[{name:"_id",type:"view",placeholder:"Id"},{name:"project",type:"combobox",placeholder:"Proyecto",target:0,required:!0,format:"combobox"},{name:"name",type:"text",placeholder:"Nombre",required:!0},{name:"description",type:"text",placeholder:"Descripci\xF3n",required:!0},{name:"enabled",type:"checkbox",placeholder:"Habilitado",format:"checkbox"},{name:"createdAt",type:"view",placeholder:"Creado",format:"datetime"},{name:"createdBy",type:"view",placeholder:"Creado por"},{name:"updatedAt",type:"view",placeholder:"Modificado",format:"datetime"},{name:"updatedBy",type:"view",placeholder:"Modificado por"}]};a.jobs={title:"Implementaciones",Model:class{constructor(e){this._id=e._id,this.name=e.name,this.client=e.client,this.project=e.project,this.subproject=e.subproject,this.cost=e.cost,this.place=e.place,this.cluster=e.cluster,this.type=e.type,this.po=e.po,this.gr=e.gr,this.link=e.link,this.status=e.status,this.statusAt=e.statusAt,this.statusBy=e.statusBy,this.createdAt=e.createdAt,this.createdBy=e.createdBy,this.updatedAt=e.updatedAt,this.updatedBy=e.updatedBy}},fields:[{name:"_id",type:"view",placeholder:"Id"},{name:"name",type:"text",placeholder:"Id cliente",required:!0},{name:"client",type:"combobox",placeholder:"Cliente",target:1,required:!0,format:"combobox"},{name:"project",type:"combobox",placeholder:"Proyecto",target:2,format:"combobox"},{name:"subproject",type:"combobox",placeholder:"Sub-proyecto",target:3,format:"combobox"},{name:"cost",type:"combobox",placeholder:"Centro de costo",target:4,required:!0,format:"combobox"},{name:"place",type:"combobox",placeholder:"Sitio",target:5,required:!0,format:"combobox"},{name:"cluster",type:"combobox",placeholder:"Asignado",target:6,required:!0,format:"combobox"},{name:"type",type:"text",placeholder:"Tipo",required:!0},{name:"po",type:"text",placeholder:"PO"},{name:"gr",type:"text",placeholder:"GR"},{name:"link",type:"text",placeholder:"Documentos"},{name:"status",type:"status",placeholder:"Estado",target:0,required:!0,format:"status"},{name:"statusAt",type:"view",placeholder:"Cambio estado",format:"datetime"},{name:"statusBy",type:"view",placeholder:"Cambiado por"},{name:"createdAt",type:"view",placeholder:"Creado",format:"datetime"},{name:"createdBy",type:"view",placeholder:"Creado por"},{name:"updatedAt",type:"view",placeholder:"Modificado",format:"datetime"},{name:"updatedBy",type:"view",placeholder:"Modificado por"}]};a.budgets={title:"Presupuestos",Model:class{constructor(e){this._id=e._id,this.job=e.job,this.requester=e.requester,this.description=e.description,this.date=e.date,this.since=e.since,this.ending=e.ending,this.value=e.value||0,this.observations=e.observations,this.status=e.status,this.statusAt=e.statusAt,this.statusBy=e.statusBy,this.createdAt=e.createdAt,this.createdBy=e.createdBy,this.updatedAt=e.updatedAt,this.updatedBy=e.updatedBy}},fields:[{name:"_id",type:"view",placeholder:"Id"},{name:"job",type:"combobox",placeholder:"Implementaci\xF3n",target:1,required:!0,format:"combobox"},{name:"requester",type:"view",placeholder:"Requerido por"},{name:"description",type:"text",placeholder:"Descripci\xF3n"},{name:"date",type:"date",placeholder:"Solicitado el",format:"date"},{name:"since",type:"date",placeholder:"Desde",format:"date"},{name:"ending",type:"date",placeholder:"Hasta",format:"date"},{name:"value",type:"number",placeholder:"Valor"},{name:"observations",type:"text",placeholder:"Observaciones"},{name:"status",type:"status",placeholder:"Estado",target:0,required:!0,format:"status"},{name:"statusAt",type:"view",placeholder:"Cambio estado",format:"datetime"},{name:"statusBy",type:"view",placeholder:"Cambiado por"},{name:"createdAt",type:"view",placeholder:"Creado",format:"datetime"},{name:"createdBy",type:"view",placeholder:"Creado por"},{name:"updatedAt",type:"view",placeholder:"Modificado",format:"datetime"},{name:"updatedBy",type:"view",placeholder:"Modificado por"}]};a.legalizations={title:"Legalizaciones",Model:class{constructor(e){this._id=e._id,this.job=e.job,this.budget=e.budget,this.requester=e.requester,this.description=e.description,this.date=e.date,this.value=e.value,this.observations=e.observations,this.image=e.image,this.status=e.status,this.statusAt=e.statusAt,this.statusBy=e.statusBy,this.createdAt=e.createdAt,this.createdBy=e.createdBy,this.updatedAt=e.updatedAt,this.updatedBy=e.updatedBy}},fields:[{name:"_id",type:"view",placeholder:"Id"},{name:"job",type:"combobox",placeholder:"Implementaci\xF3n",target:1,required:!0,format:"combobox"},{name:"budget",type:"combobox",placeholder:"Presupuesto",target:2,required:!0,format:"combobox"},{name:"requester",type:"view",placeholder:"Requerido por"},{name:"description",type:"text",placeholder:"Descripci\xF3n"},{name:"date",type:"date",placeholder:"Solicitado el",format:"date"},{name:"value",type:"number",placeholder:"Valor"},{name:"observations",type:"text",placeholder:"Observaciones"},{name:"image",type:"text",placeholder:"Fotograf\xEDa"},{name:"status",type:"status",placeholder:"Estado",target:0,required:!0,format:"status"},{name:"statusAt",type:"view",placeholder:"Cambio estado",format:"datetime"},{name:"statusBy",type:"view",placeholder:"Cambiado por"},{name:"createdAt",type:"view",placeholder:"Creado",format:"datetime"},{name:"createdBy",type:"view",placeholder:"Creado por"},{name:"updatedAt",type:"view",placeholder:"Modificado",format:"datetime"},{name:"updatedBy",type:"view",placeholder:"Modificado por"}]};a.cellars={title:"Bodegas",Model:class{constructor(e){this._id=e._id,this.name=e.name,this.description=e.description,this.automatic=e.automatic,this.enabled=e.enabled,this.createdAt=e.createdAt,this.createdBy=e.createdBy,this.updatedAt=e.updatedAt,this.updatedBy=e.updatedBy}},fields:[{name:"_id",type:"view",placeholder:"Id"},{name:"name",type:"text",placeholder:"Nombre",required:!0},{name:"description",type:"text",placeholder:"Descripci\xF3n"},{name:"automatic",type:"checkbox",placeholder:"Por defecto",format:"checkbox"},{name:"enabled",type:"checkbox",placeholder:"Habilitado",format:"checkbox"},{name:"createdAt",type:"view",placeholder:"Creado",format:"datetime"},{name:"createdBy",type:"view",placeholder:"Creado por"},{name:"updatedAt",type:"view",placeholder:"Modificado",format:"datetime"},{name:"updatedBy",type:"view",placeholder:"Modificado por"}]};a.products={title:"Productos",Model:class{constructor(e){this._id=e._id,this.name=e.name,this.description=e.description,this.type=e.type,this.code=e.code,this.brand=e.brand,this.model=e.model,this.serie=e.serie,this.price=e.price,this.enabled=e.enabled,this.createdAt=e.createdAt,this.createdBy=e.createdBy,this.updatedAt=e.updatedAt,this.updatedBy=e.updatedBy}},fields:[{name:"_id",type:"view",placeholder:"Id"},{name:"name",type:"text",placeholder:"Nombre",required:!0},{name:"description",type:"text",placeholder:"Descripci\xF3n"},{name:"type",type:"text",placeholder:"Tipo"},{name:"code",type:"text",placeholder:"C\xF3digo"},{name:"price",type:"number",placeholder:"Precio de venta"},{name:"brand",type:"text",placeholder:"Marca"},{name:"model",type:"text",placeholder:"Modelo"},{name:"serie",type:"text",placeholder:"Serial"},{name:"enabled",type:"checkbox",placeholder:"Habilitado",format:"checkbox"},{name:"createdAt",type:"view",placeholder:"Creado",format:"datetime"},{name:"createdBy",type:"view",placeholder:"Creado por"},{name:"updatedAt",type:"view",placeholder:"Modificado",format:"datetime"},{name:"updatedBy",type:"view",placeholder:"Modificado por"}]};a.inventories={title:"Inventarios",Model:class{constructor(e){this._id=e._id,this.job=e.job,this.requester=e.requester,this.sender=e.sender,this.receiver=e.receiver,this.type=e.type,this.description=e.description,this.date=e.date,this.cellarOrigen=e.cellarOrigen,this.cellarDestination=e.cellarDestination,this.products=e.products,this.status=e.status,this.statusAt=e.statusAt,this.statusBy=e.statusBy,this.createdAt=e.createdAt,this.createdBy=e.createdBy,this.updatedAt=e.updatedAt,this.updatedBy=e.updatedBy}},fields:[{name:"_id",type:"view",placeholder:"Id"},{name:"job",type:"combobox",placeholder:"Implementaci\xF3n",target:2,required:!0,format:"combobox"},{name:"requester",type:"view",placeholder:"Requerido por"},{name:"sender",type:"combobox",placeholder:"Entregado por",target:4,format:"combobox"},{name:"receiver",type:"combobox",placeholder:"Recibido por",target:4,format:"combobox"},{name:"type",type:"text",placeholder:"Tipo"},{name:"description",type:"text",placeholder:"Descripci\xF3n"},{name:"date",type:"date",placeholder:"Solicitado el",format:"date"},{name:"cellarOrigen",type:"combobox",placeholder:"Bodega de origen",target:3,format:"combobox"},{name:"cellarDestination",type:"combobox",placeholder:"Bodega de destino",target:3,format:"combobox"},{name:"products",type:"multiple",placeholder:"Productos",target:1,format:"multiple"},{name:"status",type:"status",placeholder:"Estado",target:0,required:!0,format:"status"},{name:"statusAt",type:"view",placeholder:"Cambio estado",format:"datetime"},{name:"statusBy",type:"view",placeholder:"Cambiado por"},{name:"createdAt",type:"view",placeholder:"Creado",format:"datetime"},{name:"createdBy",type:"view",placeholder:"Creado por"},{name:"updatedAt",type:"view",placeholder:"Modificado",format:"datetime"},{name:"updatedBy",type:"view",placeholder:"Modificado por"}]};export{a as F};
