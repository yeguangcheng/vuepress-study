(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63e69edf"],{"05a1":function(e,t,a){"use strict";a("8039")},"14ac":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"search-template"},[a("el-form",{ref:"form",staticClass:"form clearfix",attrs:{model:e.value,"inline-message":!1,inline:!0}},[e._l(e.options,(function(t,l){return a("el-form-item",{key:l,attrs:{label:t.label+"：",prop:t.key,"label-width":t.labelWidth}},["input"===t.type?a("el-input",{attrs:{clearable:"",placeholder:"请输入"},model:{value:e.value[t.key],callback:function(a){e.$set(e.value,t.key,a)},expression:"value[item.key]"}}):"select"===t.type&&t.list?a("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.value[t.key],callback:function(a){e.$set(e.value,t.key,a)},expression:"value[item.key]"}},e._l(t.list,(function(e){return a("el-option",{key:e[t.list_value]||e.value,attrs:{label:e[t.list_key]||e.label,value:e[t.list_value]||e.value}})})),1):"date"===t.type?a("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":t.valueFormat||"timestamp"},model:{value:e.value[t.key],callback:function(a){e.$set(e.value,t.key,a)},expression:"value[item.key]"}}):"year"===t.type?a("el-date-picker",{attrs:{clearable:!1,editable:!1,type:"year",placeholder:"请选择","value-format":t.valueFormat||"yyyy"},model:{value:e.value[t.key],callback:function(a){e.$set(e.value,t.key,a)},expression:"value[item.key]"}}):e._e()],1)})),a("el-button",{attrs:{icon:"el-icon-search",type:"primary",disabled:e.getDisabled},on:{click:e.query}},[e._v("查 询")]),a("el-button",{attrs:{icon:"el-icon-refresh-right"},on:{click:e.reset}},[e._v("重 置")])],2)],1)},n=[],i=(a("159b"),{name:"searchTemplate",props:{options:{type:Array,required:!0,default:function(){return[]}},value:{type:Object},permission:{type:String,default:function(){return""}}},data:function(){return{listOptions:[],labelLength:"0px"}},computed:{getDisabled:function(){return""!==this.permission&&!this.$checkAuth(this.permission)}},methods:{query:function(){this.$emit("search",this.value)},reset:function(){var e=this;this.options.forEach((function(t){t.defaultValue&&e.value[t.key]?e.value[t.key]=t.defaultValue:e.value[t.key]=""})),this.$emit("input",this.value)}}}),r=i,s=(a("fe14"),a("2877")),o=Object(s["a"])(r,l,n,!1,null,null,null);t["a"]=o.exports},1799:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[5,10,20,30],"page-size":e.currentSize,layout:"total, sizes, prev, pager, next",total:400},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},n=[],i={name:"pagination",data:function(){return{currentPage:1,currentSize:10}},methods:{handleSizeChange:function(e){this.currentSize=e,this.$emit("change",{page:this.currentPage,size:this.currentSize})},handleCurrentChange:function(e){this.currentPage=e,this.$emit("change",{page:this.currentPage,size:this.currentSize})}}},r=i,s=(a("05a1"),a("2877")),o=Object(s["a"])(r,l,n,!1,null,"e6cd55ae",null);t["a"]=o.exports},"2e81":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"deviceList"}},[a("breadcrumb",{attrs:{data:e.breadList}}),a("div",{staticClass:"page-table"},[a("search-bar",{attrs:{options:e.searchOption},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}}),a("div",{staticClass:"other-btn"},[a("el-button",{attrs:{icon:"el-icon-plus",type:"primary"},on:{click:function(t){e.modalShow=!0}}},[e._v("添加设备")]),a("el-upload",{staticClass:"upload",attrs:{action:"https://jsonplaceholder.typicode.com/posts/",limit:1,"file-list":[]}},[a("el-button",{attrs:{icon:"el-icon-upload2"}},[e._v("批量导入")])],1),a("el-link",{attrs:{type:"primary"}},[e._v("模板下载")])],1),a("el-table",{staticStyle:{width:"100%"},attrs:{size:"medium","header-cell-style":{background:"#666",color:"#fff"},data:e.tableData,border:"",stripe:""}},[a("el-table-column",{attrs:{label:"序号",width:"80",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.$index+1)+" ")]}}])}),a("el-table-column",{attrs:{prop:"name",label:"设备名称",align:"center"}}),a("el-table-column",{attrs:{prop:"type",label:"设备类型",align:"center"}}),a("el-table-column",{attrs:{prop:"code",label:"设备编号",align:"center"}}),a("el-table-column",{attrs:{prop:"enterprise",label:"所属公司",align:"center"}}),a("el-table-column",{attrs:{prop:"station",label:"所属监测站",align:"center"}}),a("el-table-column",{attrs:{prop:"status",label:"在线状态",align:"center"}}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"medium"},on:{click:function(t){return e.routerTo("/deviceConfig")}}},[e._v("编辑")]),a("el-button",{attrs:{type:"text",size:"medium"},on:{click:function(t){return e.routerTo("/deviceLog")}}},[e._v("日志")]),a("el-button",{staticClass:"error",attrs:{type:"text",size:"medium"},on:{click:function(a){return e.deleteDevice(t.row.id)}}},[e._v("删除")])]}}])})],1),a("pagination")],1),a("modal",{attrs:{width:"500px",title:(e.currentId?"编辑":"添加")+"传感器"},on:{closed:e.addDeviceCancel,confirm:e.addDevice},model:{value:e.modalShow,callback:function(t){e.modalShow=t},expression:"modalShow"}},[a("el-form",{ref:"addForm",attrs:{rules:e.addRules,"label-suffix":":",model:e.addForm,"label-width":"150px","label-position":"right",inline:!0}},[a("el-form-item",{attrs:{label:"设备名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}})],1),a("el-form-item",{attrs:{label:"设备编号",prop:"code"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.addForm.code,callback:function(t){e.$set(e.addForm,"code",t)},expression:"addForm.code"}})],1),a("el-form-item",{attrs:{label:"所属企业",prop:"enterprise"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.addForm.enterprise,callback:function(t){e.$set(e.addForm,"enterprise",t)},expression:"addForm.enterprise"}},e._l([{label:"1",value:"1"}],(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1)],1)},n=[],i=a("2fbc"),r=a("14ac"),s=a("1799"),o=a("714b"),c={name:"deviceList",data:function(){return{searchValue:{enterprise:"",station:"",deviceType:"",deviceCode:""},searchOption:[{label:"企业名称",type:"select",key:"enterprise",list:[{label:"全部",value:""},{label:"企业1",value:"1"}]},{label:"监测站",type:"input",key:"station"},{label:"设备类型",type:"select",key:"deviceType",list:[{label:"全部",value:""},{label:"Eric700",value:"1"}]},{label:"设备编号",type:"input",key:"deviceCode"}],breadList:[{name:"设备管理"},{name:"设备列表"}],tableData:[{name:"设备1",type:"Eric700",code:"Eric0800210400000001",enterprise:"深圳测试",station:"线路测试站",status:1},{name:"设备2",type:"Eric700",code:"Eric0800210400000001",enterprise:"深圳测试",station:"线路测试站",status:1},{name:"设备3",type:"Eric700",code:"Eric0800210400000001",enterprise:"深圳测试",station:"线路测试站",status:0},{name:"设备4",type:"Eric700",code:"Eric0800210400000001",enterprise:"深圳测试",station:"线路测试站",status:0},{name:"设备5",type:"Eric800",code:"Eric0800210400000001",enterprise:"深圳测试",station:"线路测试站",status:1}],addRules:{code:this.$validate({required:!0}),enterprise:this.$validate({required:!0})},addForm:{name:"",code:"",enterprise:""},currentId:"",modalShow:!1}},components:{Breadcrumb:i["a"],Pagination:s["a"],SearchBar:r["a"],Modal:o["a"]},methods:{deleteDevice:function(e){var t=this;this.$confirm("确认删除该设备吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$message({type:"success",message:"删除成功!"})})).catch((function(){}))},addDevice:function(){var e=this;this.$refs.addForm.validate((function(t){t&&(e.$message({message:"保存成功",type:"success"}),e.modalShow=!1)}))},addDeviceCancel:function(){this.$refs.addForm.resetFields()},routerTo:function(e){this.$router.push(e)}}},u=c,d=a("2877"),p=Object(d["a"])(u,l,n,!1,null,null,null);t["default"]=p.exports},"2fbc":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"breadcrumb"},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},e._l(e.data,(function(t,l){return a("el-breadcrumb-item",{key:l,attrs:{to:{path:t.url}}},[e._v(e._s(t.name))])})),1)],1)},n=[],i={props:{data:{type:Array,default:function(){return[]}}},name:"breadcrumb",components:{}},r=i,s=(a("495a"),a("2877")),o=Object(s["a"])(r,l,n,!1,null,"1258a4ea",null);t["a"]=o.exports},"495a":function(e,t,a){"use strict";a("f380")},"714b":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Modal"},[a("el-dialog",{attrs:{title:e.title,visible:e.visible,"close-on-click-modal":!1,top:"25vh",width:e.width},on:{"update:visible":function(t){e.visible=t},close:e.closed,closed:e.closed}},[a("div",{staticClass:"modal-content"},[e._t("default")],2),a("span",{staticClass:"modal-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v(e._s(e.confirmText))]),a("el-button",{on:{click:e.cancel}},[e._v(e._s(e.cancelText))])],1)])],1)},n=[],i={name:"Modal",props:{value:{type:Boolean,default:function(){return!1}},title:{type:String,default:function(){return""}},width:{type:String,default:function(){return"500px"}},cancelText:{type:String,default:function(){return"取 消"}},confirmText:{type:String,default:function(){return"确 定"}}},data:function(){return{visible:!1}},watch:{value:function(e){this.visible=e},visible:function(e){e!==this.value&&this.$emit("input",e)}},methods:{cancel:function(){this.$emit("input",!1)},confirm:function(){this.$emit("confirm")},closed:function(){this.$emit("closed"),this.$emit("input",!1)}}},r=i,s=(a("7b06"),a("2877")),o=Object(s["a"])(r,l,n,!1,null,null,null);t["a"]=o.exports},7919:function(e,t,a){},"7b06":function(e,t,a){"use strict";a("7919")},8039:function(e,t,a){},"82bc":function(e,t,a){},f380:function(e,t,a){},fe14:function(e,t,a){"use strict";a("82bc")}}]);