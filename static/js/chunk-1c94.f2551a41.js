(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1c94"],{CcfZ:function(e,t,i){"use strict";var a=i("l8ru");i.n(a).a},JCNI:function(e,t,i){"use strict";i.d(t,"a",function(){return n}),i.d(t,"b",function(){return o});var a=i("t3Un");function n(e){return Object(a.a)({url:"/article/list",method:"get",params:e})}function o(e){return Object(a.a)({url:"/article/pv",method:"get",params:{pv:e}})}},QldC:function(e,t,i){"use strict";i.r(t);var a=i("P2sY"),n=i.n(a),o=i("JCNI"),s=i("ZySA"),l=i("7Qib"),r=i("Mz3J"),c=i("pjYA"),d=i.n(c);d.a.initialize("0b33e6a5efced6ba3cd345a1b1e82e84","0396365e6991fe6b1fb0f09d5447b92a");var p=[{key:"Cash",display_name:"Cash"},{key:"Visa Card",display_name:"Visa"},{key:"Master Card",display_name:"Master"},{key:"Union Pay",display_name:"Unionpay"},{key:"Transfer轉數",display_name:"Transfer轉數"},{key:"wxapp",display_name:"Wechat"},{key:"支票",display_name:"支票"},{key:"No pay",display_name:"NoPay"},{key:"其它",display_name:"其它"},{key:"withdraw",display_name:"withdraw"}],u=[{key:"0",display_name:"會員"},{key:"1",display_name:"黃金會員"},{key:"2",display_name:"鑽石會員"}],m=p.reduce(function(e,t){return e[t.key]=t.display_name,e},{}),f=u.reduce(function(e,t){return e[t.key]=t.display_name,e},{}),h={name:"MemberTable",components:{Pagination:r.a},directives:{waves:s.a},filters:{statusFilter:function(e){return{published:"success",draft:"info",deleted:"danger"}[e]},typeFilter:function(e){return m[e]},type3Filter:function(e){return f[e]}},data:function(){return{tableKey:0,list:null,total:0,listLoading:!0,listQuery:{page:1,limit:20,importance:void 0,clientPhone:void 0,phone:void 0,clientName:void 0,membertype:void 0,incomeExpense:void 0,quantity:void 0,orderPrice:void 0,orderPriceNow:void 0,orderPriceReceivable:void 0,cash:void 0,withdraw:void 0,discription:void 0,title:void 0,objectId:void 0,type:void 0,type2:void 0,type3:void 0,staffName:void 0,nickName:void 0,money:void 0,point:void 0,sort:"+id"},importanceOptions:[1,2,3],calendarTypeOptions:p,calendarTypeOptions2:u,sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],statusOptions:["published","draft","deleted"],showReviewer:!1,showCash:!0,showmasterCard:!1,showvisaCard:!1,showunionPay:!1,showtransfer:!1,showcheque:!1,temp:{id:void 0,importance:1,discription:"",timestamp:new Date,title:"",type2:"",type:"",type3:"",cash:"",clientName:"",membertype:"",clientPhone:"",phone:"",nickName:"",money:"",point:"",incomeExpense:"",quantity:"",orderPrice:"",orderPriceNow:"",orderPriceReceivable:"",withdraw:"",staffName:"",status:"published"},dialogFormVisible:!1,dialogFormVisible2:!1,dialogStatus:"",textMap:{update:"編輯會員信息",createIncome:"新增收入",createExpense:"新增支出"},dialogPvVisible:!1,pvData:[],rules:{type:[{required:!0,message:"請選擇支付方式",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"timestamp is required",trigger:"change"}],money:[{required:!0,message:"請輸入會員余額",trigger:"blur"}],clientName:[{required:!0,message:"請輸入顧客姓名",trigger:"blur"}],point:[{required:!0,message:"請輸入積分",trigger:"blur"}],staffName:[{required:!0,message:"請輸入操作人",trigger:"blur"}]},downloadLoading:!1}},created:function(){this.getData()},methods:{getList:function(){this.listLoading=!0;var e=this;if(this.listQuery.objectId||this.listQuery.nickName){var t=d.a.Object.extend("_User"),i=new d.a.Query(t);this.listQuery.objectId&&i.equalTo("objectId",this.listQuery.objectId),this.listQuery.nickName&&i.equalTo("nickName",this.listQuery.nickName),i.descending("createdAt"),i.limit(150),i.find({success:function(t){e.$notify({title:"成功",message:"共查询到 "+t.length+" 条记录",type:"success",duration:2e3}),console.log("results = ",t);for(var i=[],a=0;a<t.length;a++)i[a]=t[a].attributes,i[a].createdAt=t[a].createdAt,i[a].id=t[a].id;e.list=i,e.total=t.length,e.loading=!1,setTimeout(function(){e.listLoading=!1},1500)},error:function(t){alert("查询失败: ",t),e.loading=!1}})}else this.getData()},getData:function(){this.listLoading=!0;var e=this;this.loading=!0;var t=d.a.Object.extend("logBackend"),i=new d.a.Query(t);i.descending("createdAt"),i.limit(150),i.find({success:function(t){e.$notify({title:"成功",message:"共查询到 "+t.length+" 条记录",type:"success",duration:2e3}),console.log("results = ",t);for(var i=[],a=0;a<t.length;a++)i[a]=t[a].attributes,i[a].createdAt=t[a].createdAt,i[a].id=t[a].id;e.list=i,e.total=t.length,e.loading=!1,setTimeout(function(){e.listLoading=!1},1500)},error:function(t){alert("查询失败: ",t),e.loading=!1}})},handleFilter:function(){this.listQuery.page=1,this.getList()},handleModifyStatus:function(e,t){this.$message({message:"操作成功",type:"success"}),e.status=t},sortChange:function(e){var t=e.prop,i=e.order;"id"===t&&this.sortByID(i)},sortByID:function(e){this.listQuery.sort="ascending"===e?"+id":"-id",this.handleFilter()},resetTemp:function(){this.temp={id:void 0,importance:1,discription:"",timestamp:new Date,title:"",clientName:"",membertype:"",clientPhone:"",phone:"",nickName:"",money:"",point:"",incomeExpense:"",quantity:"",orderPrice:"",orderPriceNow:"",orderPriceReceivable:"",cash:"",withdraw:"",staffName:"",status:"published",type:"",type2:"",type3:""}},handleCreateIncome:function(){var e=this;this.resetTemp(),this.dialogStatus="createIncome",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},createIncomeData:function(){this.$refs.dataForm.validate(function(e){})},handleUpdate:function(e){var t=this;this.temp=n()({},e),this.temp.timestamp=new Date(this.temp.timestamp),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},updateMemberData:function(){var e=this,t=this;this.$refs.dataForm.validate(function(i){if(i){var a=n()({},e.temp);console.log("tempData = ",a),a.timestamp=+new Date(a.timestamp),d.a.Cloud.run("updateUser",{objectId:a.id,phone:a.phone,membertype:a.membertype,money:a.money,point:a.point,staffName:a.staffName},{success:function(e){console.log(e),t.getData(),t.$notify({title:"成功",message:"會員信息更新成功",type:"success",duration:2e3}),t.dialogFormVisible=!1},error:function(e){console.log(e),t.$notify({title:"失敗",message:"會員信息更新失敗，請聯系管理員大帥哥",type:"error",duration:2e3})}})}})},handleDelete:function(e){this.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3});var t=this.list.indexOf(e);this.list.splice(t,1)},handleFetchPv:function(e){var t=this;Object(o.b)(e).then(function(e){t.pvData=e.data.pvData,t.dialogPvVisible=!0})},handleDownload:function(){var e=this;this.downloadLoading=!0,Promise.all([i.e("chunk-0d49"),i.e("chunk-ffd4")]).then(i.bind(null,"S/jZ")).then(function(t){var i=e.formatJson(["createdAt","nickName","membertype","money","point","phone","staffName","importance","status"],e.list);t.export_json_to_excel({header:["createdAt","nickName","membertype","money","point","phone","staffName","importance","status"],data:i,filename:"table-list"}),e.downloadLoading=!1})},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return"timestamp"===e?Object(l.e)(t[e]):t[e]})})},getRecipt:function(){var e=Date.parse(new Date);e/=1e3;var t=new Date(1e3*e),i=t.getFullYear(),a=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,n=t.getDate()<10?"0"+t.getDate():t.getDate(),o=t.getHours(),s=t.getMinutes(),l=i.toString().slice(2,4)+a+n+o+s;return console.log("当前时间：",l),l}}},y=(i("CcfZ"),i("KHd+")),b=Object(y.a)(h,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("el-tag",[e._v("會員修改日志")]),e._v(" "),i("el-alert",{staticStyle:{width:"600px",display:"inline-block","vertical-align":"middle","margin-left":"30px"},attrs:{closable:!1,title:"此處看到的記錄爲每一次修改會員信息時留下，主要用于核對金額、積分以及會員等級",type:"success"}}),e._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%","margin-top":"15px"},attrs:{data:e.list,border:"",fit:"",stripe:"","highlight-current-row":""},on:{"sort-change":e.sortChange}},[i("el-table-column",{attrs:{label:e.$t("table.logId"),prop:"id",sortable:"",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.id))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.$t("table.logAt"),width:"180px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(e._f("parseTime")(t.row.createdAt,"{y}-{m}-{d} {h}:{i}")))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.$t("table.infonickName"),sortable:"",width:"150px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.nickName))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.$t("table.staffName"),width:"150px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.staffName))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.$t("table.info"),width:"500px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.info))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.$t("table.info2"),"min-width":"500px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.info2))])]}}])})],1),e._v(" "),i("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.page,limit:e.listQuery.limit},on:{"update:page":function(t){e.$set(e.listQuery,"page",t)},"update:limit":function(t){e.$set(e.listQuery,"limit",t)},pagination:e.getData}}),e._v(" "),i("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"150px"}},[i("el-form-item",{attrs:{label:e.$t("table.objectId"),prop:"id"}},[i("el-input",{attrs:{disabled:""},model:{value:e.temp.id,callback:function(t){e.$set(e.temp,"id",t)},expression:"temp.id"}})],1),e._v(" "),i("el-form-item",{attrs:{label:e.$t("table.nickName"),prop:"nickName"}},[i("el-input",{attrs:{disabled:""},model:{value:e.temp.nickName,callback:function(t){e.$set(e.temp,"nickName",t)},expression:"temp.nickName"}})],1),e._v(" "),i("el-form-item",{attrs:{label:e.$t("table.clientPhone"),prop:"phone"}},[i("el-input",{model:{value:e.temp.phone,callback:function(t){e.$set(e.temp,"phone",t)},expression:"temp.phone"}})],1),e._v(" "),i("el-form-item",{attrs:{label:e.$t("table.membertype"),prop:"membertype"}},[i("el-select",{staticClass:"filter-item",staticStyle:{width:"250px"},attrs:{placeholder:e.$t("table.membertype")},model:{value:e.temp.membertype,callback:function(t){e.$set(e.temp,"membertype",t)},expression:"temp.membertype"}},e._l(e.calendarTypeOptions2,function(e){return i("el-option",{key:e.key,attrs:{label:e.display_name+"("+e.key+")",value:e.key}})}))],1),e._v(" "),i("el-form-item",{attrs:{label:e.$t("table.money"),prop:"money"}},[i("el-input",{model:{value:e.temp.money,callback:function(t){e.$set(e.temp,"money",t)},expression:"temp.money"}})],1),e._v(" "),i("el-form-item",{attrs:{label:e.$t("table.point"),prop:"point"}},[i("el-input",{model:{value:e.temp.point,callback:function(t){e.$set(e.temp,"point",t)},expression:"temp.point"}})],1),e._v(" "),i("el-form-item",{attrs:{label:e.$t("table.staffName"),prop:"staffName"}},[i("el-input",{model:{value:e.temp.staffName,callback:function(t){e.$set(e.temp,"staffName",t)},expression:"temp.staffName"}})],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(e._s(e.$t("table.cancel")))]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(t){"createIncome"===e.dialogStatus?e.createIncomeData():e.updateMemberData()}}},[e._v(e._s(e.$t("table.confirm")))])],1)],1),e._v(" "),i("el-dialog",{attrs:{visible:e.dialogPvVisible,title:"Reading statistics"},on:{"update:visible":function(t){e.dialogPvVisible=t}}},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:e.pvData,border:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{prop:"key",label:"Channel"}}),e._v(" "),i("el-table-column",{attrs:{prop:"pv",label:"Pv"}})],1),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogPvVisible=!1}}},[e._v(e._s(e.$t("table.confirm")))])],1)],1)],1)},[],!1,null,"3ad6a55f",null);b.options.__file="inlineEditTable.vue";t.default=b.exports},Y5bG:function(e,t,i){"use strict";i.d(t,"a",function(){return n}),Math.easeInOutQuad=function(e,t,i,a){return(e/=a/2)<1?i/2*e*e+t:-i/2*(--e*(e-2)-1)+t};var a=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)};function n(e,t,i){var n=document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop,o=e-n,s=0;t=void 0===t?500:t;!function e(){s+=20,function(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}(Math.easeInOutQuad(s,n,o,t)),s<t?a(e):i&&"function"==typeof i&&i()}()}},ZySA:function(e,t,i){"use strict";var a=i("P2sY"),n=i.n(a),o=(i("jUE0"),{bind:function(e,t){e.addEventListener("click",function(i){var a=n()({},t.value),o=n()({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},a),s=o.ele;if(s){s.style.position="relative",s.style.overflow="hidden";var l=s.getBoundingClientRect(),r=s.querySelector(".waves-ripple");switch(r?r.className="waves-ripple":((r=document.createElement("span")).className="waves-ripple",r.style.height=r.style.width=Math.max(l.width,l.height)+"px",s.appendChild(r)),o.type){case"center":r.style.top=l.height/2-r.offsetHeight/2+"px",r.style.left=l.width/2-r.offsetWidth/2+"px";break;default:r.style.top=(i.pageY-l.top-r.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",r.style.left=(i.pageX-l.left-r.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return r.style.backgroundColor=o.color,r.className="waves-ripple z-active",!1}},!1)}}),s=function(e){e.directive("waves",o)};window.Vue&&(window.waves=o,Vue.use(s)),o.install=s;t.a=o},jUE0:function(e,t,i){},l8ru:function(e,t,i){}}]);