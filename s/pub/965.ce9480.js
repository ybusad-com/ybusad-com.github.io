"use strict";(self.webpackChunksplendor_pc=self.webpackChunksplendor_pc||[]).push([[965],{88075:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.postSaveGallery=t.postEditRelated=t.postEdit=t.getDetail=t.postCreateThingItem=void 0;var r=i(n(6974));t.postCreateThingItem=function(e){return(0,r.default)("POST","/baike/thing/edit/postCreateThingItem.json",e)},t.getDetail=function(e){return(0,r.default)("GET","/baike/thing/edit/getDetail.json",e)},t.postEdit=function(e){return(0,r.default)("POST","/baike/thing/edit/postEdit.json",e)},t.postEditRelated=function(e){return(0,r.default)("POST","/baike/thing/edit/postEditRelated.json",e)},t.postSaveGallery=function(e){return(0,r.default)("POST","/baike/thing/edit/postSaveGallery.json",e)}},36003:(e,t,n)=>{t.t=void 0;var i=n(56656);t.t=function(){var e=(0,i.useFormErrors)(),t=e.errors,n=e.wrapperValidate;return{errors:t,validateName:n("name")((function(e){if(""===e.trim())throw"请填写物品名称"})),validateDescription:n("description")((function(e){if(""===e.trim())throw"请填写物品简介"})),validateTypeName:n("typeName")((function(e){if(""===e.trim())throw"请填写物品类别"})),validateActivePeriod:n("activePeriod")((function(e){if(""===e.trim())throw"请填写活跃时期描述"}))}}},50730:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var i=n(66252),r=n(2262),a=n(81181),l=n(12861),u=n(42119),o=n(18037),c=n(56656),d=n(56400),s=n(73159),m=n(36003),f=n(88006),p=n(88075);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const g=(0,i.aZ)({name:"BasicStep",setup:function(e){var t=(0,u.useRoute)(),n=(0,r.reactive)({isLoading:!1,isBusy:!1,isEdit:!1}),o=(0,r.reactive)({indexID:0,name:"",englishName:"",avatarKey:"",description:"",property:"私有物品",typeName:"",summaryDescription:"",activePeriodText:"",viewGroup:-1,isPublic:!0});(0,i.bv)((function(){+t.params.id&&(n.isLoading=!0,(0,p.getDetail)({indexID:+t.params.id}).then((function(e){n.isEdit=!0,o.indexID=e.indexID,o.name=e.name,o.englishName=e.englishName,o.avatarKey=e.avatarKey,o.description=e.description,o.typeName=e.typeName,o.property=e.property,o.summaryDescription=e.summaryDescription,o.activePeriodText=e.activePeriodText,o.viewGroup=e.viewGroup,o.isPublic=e.isPublic})).catch((function(e){o.indexID=0,a.Notify.error(e)})).finally((function(){n.isLoading=!1})))}));var y=(0,m.t)(),h=y.errors,g=y.validateName,W=y.validateDescription,b=y.validateTypeName,I=y.validateActivePeriod,k=function(){if(g(o.name),W(o.description),b(o.typeName),I(o.activePeriodText),h.size>0)(0,c.scrollToError)();else{var e={name:o.name,englishName:o.englishName,avatarKey:o.avatarKey,description:o.description,summaryDescription:o.summaryDescription,typeName:o.typeName,property:o.property,activePeriodText:o.activePeriodText,viewGroup:o.viewGroup,isPublic:o.isPublic};if(n.isEdit){var t=v(v({},e),{},{indexID:o.indexID});return n.isBusy=!0,void(0,p.postEdit)(t).then((function(){window.scrollTo({top:0,behavior:"smooth"}),l.router.push({name:l.RouteName.BAIKE_THING_EDIT_POSITION,params:{id:o.indexID}})})).catch((function(e){a.Notify.error(e)})).finally((function(){n.isBusy=!1}))}n.isBusy=!0,(0,p.postCreateThingItem)(e).then((function(e){l.router.push({name:l.RouteName.BAIKE_THING_EDIT_POSITION,params:{id:e.indexID}})})).catch((function(e){a.Notify.error(e)})).finally((function(){n.isBusy=!1}))}};return function(){return(0,i.Wm)(a.Loading,{show:n.isLoading},{default:function(){return[(0,i.Wm)("div",{class:"basicStep--fiwGU"},[(0,i.Wm)(s.Z,{label:"物品名称：",errorDesc:h.get("name")},{default:function(){return[(0,i.Wm)(a.Input,{modelValue:o.name,"onUpdate:modelValue":function(e){return o.name=e},placeholder:"64 个字符之内(*)",maxlength:64,onValidate:g,block:!0},null)]}}),(0,i.Wm)(s.Z,{label:"百科头像："},{default:function(){return[(0,i.Wm)(d.Z,{tokenType:"baike",avatarSize:{width:540,height:405},avatarKey:o.avatarKey,onSuccess:function(e){o.avatarKey=e.key}},null)]}}),(0,i.Wm)(s.Z,{label:"英文名："},{default:function(){return[(0,i.Wm)(a.Input,{modelValue:o.englishName,"onUpdate:modelValue":function(e){return o.englishName=e},placeholder:"64 个字符之内",maxlength:64,block:!0},null)]}}),(0,i.Wm)(s.Z,{label:"物品简介：",errorDesc:h.get("description")},{default:function(){return[(0,i.Wm)(a.Textarea,{modelValue:o.description,"onUpdate:modelValue":function(e){return o.description=e},placeholder:"展示在百科页头的物品简介，1000字之内(*)",maxlength:1e3,height:"100px",block:!0,resize:"vertical",onValidate:W},null)]}}),(0,i.Wm)(s.Z,{label:"物品简介摘要："},{default:function(){return[(0,i.Wm)(a.Textarea,{modelValue:o.summaryDescription,"onUpdate:modelValue":function(e){return o.summaryDescription=e},placeholder:"展示在搜索结果的物品简介摘要，240字之内",maxlength:240,block:!0,resize:"none"},null)]}}),(0,i.Wm)(s.Z,{label:"物品类别：",errorDesc:h.get("typeName")},{default:function(){return[(0,i.Wm)(a.Input,{modelValue:o.typeName,"onUpdate:modelValue":function(e){return o.typeName=e},placeholder:"物品类别(*)",maxlength:30,onValidate:b,block:!0},null)]}}),(0,i.Wm)(s.Z,{label:"物品属性："},{default:function(){return[(0,i.Wm)(a.Select,{modelValue:o.property,"onUpdate:modelValue":function(e){return o.property=e},placeholder:"物品属性",data:["私有物品","公有物品","虚拟物品","其他"].map((function(e){return{text:e,value:e}}))},null)]}}),(0,i.Wm)(s.Z,{label:"活跃时期描述：",errorDesc:h.get("activePeriod")},{default:function(){return[(0,i.Wm)(a.Input,{modelValue:o.activePeriodText,"onUpdate:modelValue":function(e){return o.activePeriodText=e},placeholder:"如：大学时期、高中时期等(*)",maxlength:32,onValidate:I,block:!0},null)]}}),(0,i.Wm)(s.Z,{label:"浏览权限："},{default:function(){return[(0,i.Wm)(f.Z,{modelValue:o.viewGroup,"onUpdate:modelValue":function(e){return o.viewGroup=e}},null)]}}),(0,i.Wm)(s.Z,{label:"公开该词条：",row:!0},{default:function(){return[(0,i.Wm)(a.Switch,{modelValue:o.isPublic,"onUpdate:modelValue":function(e){return o.isPublic=e}},null)]}}),(0,i.Wm)(s.Z,null,{default:function(){return[(0,i.Wm)("div",{class:"submit--of-Zc"},[n.isEdit&&(0,i.Wm)(a.Button,{style:{marginRight:"8px"},onClick:function(){l.router.push({name:l.RouteName.BAIKE_THING_EDIT_POSITION,params:{id:+t.params.id}})}},{default:function(){return[(0,i.Uk)("跳过")]}}),(0,i.Wm)(a.Button,{type:"info",icon:"send",onClick:k,loading:n.isBusy},{default:function(){return[n.isEdit?"提交修改":"提交创建"]}})])]}})])]}})}}});var W=n(82298),b=n(39465),I=n(56132);const k=(0,i.aZ)({name:"PositionStep",setup:function(){var e=(0,u.useRoute)(),t=(0,r.ref)(),n=(0,r.reactive)({loading:!1,detail:null});return(0,i.m0)((function(){n.loading=!0;var t=+e.params.id;t&&(0,p.getDetail)({indexID:t}).then((function(e){n.detail=e})).catch((function(e){a.Notify.error(e)})).finally((function(){n.loading=!1}))})),function(){return(0,i.Wm)(a.Loading,{show:n.loading},{default:function(){return[(0,i.Wm)("div",{class:"positionStep--u7vS5"},[(0,i.Wm)(s.Z,null,{default:function(){return[(0,i.Wm)("div",{class:"title--yS9d+"},[(0,i.Uk)("百科物品："),n.detail?n.detail.name:"-"])]}}),(0,i.Wm)(s.Z,{label:"关联入口链接："},{default:function(){return[(0,i.Wm)(b.Z,{ref:t,indexID:+e.params.id},null)]}}),(0,i.Wm)(s.Z,{label:"关联关键词："},{default:function(){return[(0,i.Wm)(W.Z,{indexID:+e.params.id,defaultAutoDetect:!1},null)]}}),(0,i.Wm)(s.Z,{label:"关联文章："},{default:function(){return[(0,i.Wm)(I.Z,{indexID:+e.params.id},null)]}}),(0,i.Wm)(s.Z,null,{default:function(){return[(0,i.Wm)("div",{class:"submit--ziN0+"},[(0,i.Wm)(a.Button,{style:{marginRight:"8px"},onClick:function(){l.router.push({name:l.RouteName.BAIKE_THING_EDIT_BASIC,params:{id:+e.params.id}})}},{default:function(){return[(0,i.Uk)("上一步")]}}),(0,i.Wm)(a.Button,{style:{marginRight:"8px"},onClick:function(){l.router.push({name:l.RouteName.BAIKE_THING_EDIT_RELATED,params:{id:+e.params.id}})}},{default:function(){return[(0,i.Uk)("下一步")]}})])]}})])]}})}}});var D=n(9881),N=n(76759);const T=(0,i.aZ)({name:"RelatedStep",setup:function(e){var t=(0,u.useRoute)(),n=(0,r.reactive)({loading:!1,detail:null,relation:[],related:[],isBusy:!1});(0,i.m0)((function(){n.loading=!0;var e=+t.params.id;e&&(0,p.getDetail)({indexID:e,step:3}).then((function(e){n.detail=e,n.relation=n.detail.relation||[],n.related=n.detail.related||[]})).catch((function(e){a.Notify.error(e)})).finally((function(){n.loading=!1}))}));var o=function(){if(n.relation.length>0&&n.relation.some((function(e){return!e.relation||""===e.relation.trim()})))return a.Notify.info("关系未填写完整"),Promise.reject();var e=n.relation.map((function(e){return{indexID:e.indexID,relation:e.relation}})),i=n.related.map((function(e){return e.indexID})),r=+t.params.id;return n.isBusy=!0,(0,p.postEditRelated)({indexID:r,relations:e,relatedIds:i}).then((function(){a.Notify.success("保存成功"),l.router.push({name:l.RouteName.BAIKE_THING_EDIT_GALLERY,params:{id:r}})})).catch((function(e){return a.Notify.error(e),Promise.reject()})).finally((function(){n.isBusy=!1}))};return function(){return(0,i.Wm)(a.Loading,{style:{height:"100%"},show:n.loading},{default:function(){return[(0,i.Wm)("div",{class:"relatedStep--GJyvM"},[(0,i.Wm)("div",null,[(0,i.Wm)(s.Z,null,{default:function(){return[(0,i.Wm)("div",{class:"title--klodO"},[(0,i.Uk)("百科物品："),n.detail?n.detail.name:"-"])]}}),(0,i.Wm)(s.Z,{label:"关联百科："},{default:function(){return[(0,i.Wm)(N.Z,{data:n.relation,"onUpdate:data":function(e){return n.relation=e}},null)]}}),(0,i.Wm)(s.Z,{label:"相关百科条目："},{default:function(){return[(0,i.Wm)(D.Z,{data:n.related,"onUpdate:data":function(e){return n.related=e}},null)]}})]),(0,i.Wm)("div",{class:"submit--z+iMq"},[(0,i.Wm)(a.Button,{onClick:function(){l.router.push({name:l.RouteName.BAIKE_THING_EDIT_POSITION,params:{id:+t.params.id}})},style:{marginRight:"8px"}},{default:function(){return[(0,i.Uk)("上一步")]}}),(0,i.Wm)(a.Button,{onClick:function(){l.router.push({name:l.RouteName.BAIKE_THING_EDIT_GALLERY,params:{id:+t.params.id}})},style:{marginRight:"8px"}},{default:function(){return[(0,i.Uk)("跳过")]}}),(0,i.Wm)(a.Button,{type:"primary",onClick:o,loading:n.isBusy},{default:function(){return[(0,i.Uk)("保存并下一步")]}})])])]}})}}});var E=n(82287),S=n(62224);const x={galleryStep:"galleryStep--dseez",title:"title--p6bN5",submit:"submit--7QMOD"},P=(0,i.aZ)({name:"GalleryStep",setup:function(e){var t=(0,u.useRoute)(),n=(0,r.reactive)({loading:!1,detail:null,isBusy:!1}),c=(0,o.useCurrentUser)(),d=(0,r.reactive)({gallery:[]});(0,i.m0)((function(){n.loading=!0;var e=+t.params.id;e&&(0,p.getDetail)({indexID:e}).then((function(e){n.detail=e,d.gallery=e.gallery.list})).catch((function(e){a.Notify.error(e)})).finally((function(){n.loading=!1}))}));var m=[{title:"照片",width:60,render:function(e){return(0,i.Wm)(a.Popover,null,{default:function(){return[(0,i.Wm)("a",null,[(0,i.Uk)("查看")])]},content:function(){return(0,i.Wm)("div",{class:x.galleryThumb,onClick:function(){a.Preview.image((0,o.fullfillImage)(e.key,"imageslim"),{renderTip:e.description?function(){return e.description}:void 0})}},[(0,i.Wm)("img",{src:(0,o.fullfillImage)(e.key,"imageView2/2/w/360"),width:"180"},null)])}})}},{title:"描述",render:function(e){return e.isEdit?(0,i.Wm)(a.Input,{modelValue:e.description,"onUpdate:modelValue":function(t){return e.description=t},size:"small",block:!0},null):e.description||"-"}},{title:"上传者",width:100,render:function(e){return(0,i.Wm)(E.Z,{userName:e.authorName,userCode:e.authorCode},null)}},{title:"上传时间",width:180,name:"createTime"},{title:"操作",width:120,render:function(e,t){var n=t.row;return e.isEdit?(0,i.Wm)(a.Button,{type:"info",size:"small",onClick:function(){e.isEdit=!1}},{default:function(){return[(0,i.Uk)("OK")]}}):(0,i.Wm)(i.HY,null,[(0,i.Wm)("a",{onClick:function(){e.isEdit=!0}},[(0,i.Uk)("编辑描述")]),(0,i.Wm)("a",{style:{marginLeft:"8px"},onClick:function(){d.gallery.splice(n,1)}},[(0,i.Uk)("删除")])])}}],f=function(){d.gallery.forEach((function(e){e.isEdit=!1}));var e={indexID:+t.params.id,list:d.gallery.map((function(e){return{key:e.key,fileSize:e.fileSize,description:e.description}}))};n.isBusy=!0,(0,p.postSaveGallery)(e).then((function(e){var t=e.url;a.Notify.success("保存成功"),l.router.push(t)})).catch((function(e){a.Notify.error(e)})).finally((function(){n.isBusy=!1}))};return function(){return(0,i.Wm)(a.Loading,{show:n.loading},{default:function(){return[(0,i.Wm)("div",{class:x.galleryStep},[(0,i.Wm)(s.Z,null,{default:function(){return[(0,i.Wm)("div",{class:x.title},[(0,i.Uk)("百科物品："),n.detail?n.detail.name:"-"])]}}),(0,i.Wm)(s.Z,null,{default:function(){return[(0,i.Wm)(S.Z,{tokenType:"baike-gallery",tip:"请选择 JPG 格式，大小不超过 12M",onUploaded:function(e){e.forEach((function(e){var t,n,i,r;e.uploadResult&&d.gallery.push({id:0,key:e.uploadResult.key,authorName:null!==(t=null===(n=c.value)||void 0===n?void 0:n.name)&&void 0!==t?t:"",authorCode:null!==(i=null===(r=c.value)||void 0===r?void 0:r.code)&&void 0!==i?i:"",description:e.description,createTime:(0,o.makeDateTimeStr)(),fileSize:e.size})}))}},null),(0,i.Wm)(a.Table,{columns:m,data:d.gallery,bordered:!0},null)]}}),(0,i.Wm)("div",{class:x.submit},[(0,i.Wm)(a.Button,{onClick:function(){l.router.push({name:l.RouteName.BAIKE_THING_EDIT_RELATED,params:{id:+t.params.id}})},style:{marginRight:"8px"}},{default:function(){return[(0,i.Uk)("上一步")]}}),(0,i.Wm)(a.Button,{type:"primary",icon:"ok",loading:n.isBusy,onClick:f},{default:function(){return[(0,i.Uk)("保存并查看百科")]}})])])]}})}}}),w=(0,i.aZ)({name:"BaikeThingCreate",setup:function(){var e=(0,u.useRoute)(),t=!!+e.params.id;(0,o.setPageTitle)(t?"编辑物品词条":"新建物品词条");var n=(0,r.reactive)({baikeID:0,currentStep:(0,i.Fl)((function(){return l.router.currentRoute.value.meta.step||0}))});return function(){return(0,i.Wm)("div",{class:["s-container","container--6Uqpb"]},[(0,i.Wm)("aside",{class:"steps---AKDY"},[(0,i.Wm)(a.Steps,{current:n.currentStep,direction:"vertical"},{default:function(){return[(0,i.Wm)(a.Step,{title:"第一步",description:"填写基本信息"},null),(0,i.Wm)(a.Step,{title:"第二步",description:"关联有关信息"},null),(0,i.Wm)(a.Step,{title:"第三步",description:"关联其他百科"},null),(0,i.Wm)(a.Step,{title:"第四步",description:"上传相关照片"},null)]}})]),(0,i.Wm)("main",{class:"main--FLqiJ"},[0===n.currentStep&&(0,i.Wm)(g,null,null),1===n.currentStep&&(0,i.Wm)(k,null,null),2===n.currentStep&&(0,i.Wm)(T,null,null),3===n.currentStep&&(0,i.Wm)(P,null,null)]),(0,i.Wm)("aside",{class:"aside--Fyei5"},[(0,i.Wm)("h2",null,[t?"编辑物品词条":"新建物品词条"]),(0,i.Wm)("p",null,[(0,i.Uk)("物品百科，含有公共物品和私有物品在内。也包括虚拟形象之类。")]),e.params.id&&(0,i.Wm)("div",null,[(0,i.Wm)(a.Button,{icon:"view",href:"/v2/baike/go?id=".concat(e.params.id),target:"_blank",rel:"opener"},{default:function(){return[(0,i.Uk)("查看百科页")]}})])])])}}})}}]);
//# sourceMappingURL=965.ce9480.js.map