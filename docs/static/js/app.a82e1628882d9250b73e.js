webpackJsonp([3],{"1Buh":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJMAAADIBAMAAAAegs4SAAAAG1BMVEXMzMyWlpaqqqq3t7fFxcW+vr6cnJyxsbGjo6NbLGcjAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABCklEQVRoge3SPUvDUBTG8adp0ma80WQXB10TKm3HBlQ6Viqdi7bW0SKIo1u/tucE+gFu1v5/cCB54B7OfZEAAAAAAAAAAAAAXLogZeFYFOEc3B00/qi7ipNYi1FYT+bbc/A+/WpmpbyiDH2aX6vnlcZlVkmD1XB70r28oqTroGxvrW7t55DfSK3tt9RUXpG9gvKHoNR30zQLj8a7UhsLNvGt5laJzaPRVRcdX4Nay9roVunOlg1WPk7lyXKf9p0qK4qi7s6l/fTgbaHeZ/X4VC781PXzYrP5Vk92C6fuJiJbeR388zr/s8fwPambWSWvPq1SX5Zs/V219vD7vXYAAAAAAAAAAADgEv0DEsEeYMV8KvkAAAAASUVORK5CYII="},"9M+g":function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={};n.d(o,"perPage",function(){return A}),n.d(o,"commonSort",function(){return g}),n.d(o,"keyword",function(){return _}),n.d(o,"commonKind",function(){return S}),n.d(o,"cateId",function(){return C});var i={};n.d(i,"saveSortToState",function(){return D}),n.d(i,"saveKindToState",function(){return I}),n.d(i,"saveCateToState",function(){return R});var a=n("7+uW"),r=n("Dd8w"),c=n.n(r),s=n("NYxO"),l=[{name:"Foot",id:5048},{name:"Leg",id:4008},{name:"Waiter",id:6942},{name:"Teacher",id:1016},{name:"Socks",id:3006},{name:"OL",id:1001},{name:"Nurse",id:1013},{name:"Face",id:5023},{name:"Mouth",id:5009},{name:"Swim",id:3008},{name:"Chihan",id:4004},{name:"Mishu",id:1023},{name:"Flight",id:1007}];var d={name:"Category",data:function(){return{list:[]}},methods:{clickItem:function(t){this.$emit("clickCategory",t)}},mounted:function(){this.list=l}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"category-contaier ml-4 mr-4"},t._l(t.list,function(e){return n("div",{key:e.id,staticClass:"category-item",on:{click:function(n){return t.clickItem(e)}}},[n("span",{staticClass:"category-name"},[t._v(t._s(e.name))])])}),0)},staticRenderFns:[]};var m=n("VU/8")(d,u,!1,function(t){n("m+8e")},"data-v-80f6e99c",null).exports,h={name:"CommonHeader",data:function(){return{showCategory:!0,showCollapse:!1,currentSort:"日期",currentKind:"Video",currentCate:"",keyword:""}},methods:c()({},Object(s.b)(["saveSortToState","saveKindToState","saveCateToState"]),Object(s.d)({setKeyword:"SET_KEYWORD"}),{submitKeyword:function(){this.keyword.length&&this.setKeyword(this.keyword),this.showCollapse=!1},clickCateItem:function(t){this.currentCate=t.name,this.saveCateToState(t.id),this.$refs.cateModal.hide(),this.showCollapse=!1},clickVideoa:function(){this.currentKind="Video",this.saveKindToState("videoa"),this.showCollapse=!1},clickVideoc:function(){this.currentKind="newactor",this.saveKindToState("videoc"),this.showCollapse=!1},clickAdult:function(){this.currentKind="adult",this.saveKindToState("nikkatsu"),this.showCollapse=!1},clickComic:function(){this.currentKind="comic",this.saveKindToState("anime"),this.showCollapse=!1},clickDate:function(){this.currentSort="日期",this.saveSortToState("date"),this.showCollapse=!1},clickRank:function(){this.currentSort="人气",this.saveSortToState("rank"),this.showCollapse=!1},clickPrice:function(){this.currentSort="价格",this.saveSortToState("price"),this.showCollapse=!1},clickReview:function(){this.currentSort="评价",this.saveSortToState("review"),this.showCollapse=!1}}),watch:{$route:function(){"Detail"===this.$route.name||"Category"===this.$route.name?this.showCategory=!1:this.showCategory=!0},currentSort:function(){this.$router.push({path:"/"})}},components:{Category:m},computed:c()({},Object(s.c)(["commonSort","commonKind","cateId"])),mounted:function(){switch(this.commonSort){case"date":this.currentSort="日期";break;case"rank":this.currentSort="人气";break;case"price":this.currentSort="价格";break;case"review":this.currentSort="评价"}switch(this.commonKind){case"videoa":this.currentKind="Video";break;case"videoc":this.currentKind="newactor";break;case"nikkatsu":this.currentKind="adult";break;case"anime":this.currentKind="comic"}if(this.cateId){var t=(e=this.cateId,l.filter(function(t){return t.id===e}));this.currentCate=t[0].name}else this.currentCate="分类";var e}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-navbar",{staticStyle:{"box-shadow":"0 3px 10px #DDDEE0"},attrs:{toggleable:"lg",type:"light",variant:"light",fixed:"top"}},[n("b-navbar-brand",{staticClass:"ml-lg-4",attrs:{href:"/Privs"}},[t._v("Privs")]),t._v(" "),n("b-navbar-toggle",{staticStyle:{border:"none",outline:"none"},attrs:{target:"nav-collapse"}}),t._v(" "),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""},model:{value:t.showCollapse,callback:function(e){t.showCollapse=e},expression:"showCollapse"}},[t.showCategory?n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-form",[n("b-form-input",{attrs:{size:"sm",placeholder:"记得加空格..."},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitKeyword(e)}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),t._v(" "),n("button",{staticClass:"btn btn-danger btn-sm ml-lg-2 ml-md-2 mt-2 mt-lg-0 mt-md-0",attrs:{type:"button"},on:{click:t.submitKeyword}},[t._v("\n            搜索\n          ")])],1),t._v(" "),t.showCategory?n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-lg",modifiers:{"modal-lg":!0}}],staticClass:"ml-lg-3 mt-2 mt-lg-1",staticStyle:{height:"32px"},attrs:{variant:"warning",size:"sm"}},[t._v("\n          "+t._s(this.currentCate)+"\n        ")]):t._e(),t._v(" "),n("b-modal",{ref:"cateModal",attrs:{id:"modal-lg",size:"lg",title:"分类","ok-only":"",centered:"","ok-title":"关闭"}},[n("category",{on:{clickCategory:t.clickCateItem}})],1),t._v(" "),t.showCategory?n("b-nav-item-dropdown",{staticClass:"ml-lg-3",attrs:{right:""}},[n("template",{slot:"button-content"},[t._v("\n            "+t._s(this.currentKind)+"\n          ")]),t._v(" "),n("b-dropdown-item",{attrs:{disabled:""}},[t._v("请选择")]),t._v(" "),n("b-dropdown-item",{on:{click:t.clickVideoa}},[t._v("Video")]),t._v(" "),n("b-dropdown-item",{on:{click:t.clickVideoc}},[t._v("newactor")]),t._v(" "),n("b-dropdown-item",{on:{click:t.clickAdult}},[t._v("adult")]),t._v(" "),n("b-dropdown-item",{on:{click:t.clickComic}},[t._v("comic")])],2):t._e(),t._v(" "),t.showCategory?n("b-nav-item-dropdown",{staticClass:"ml-lg-3",attrs:{right:""}},[n("template",{slot:"button-content"},[t._v("\n            "+t._s(this.currentSort)+"\n          ")]),t._v(" "),n("b-dropdown-item",{attrs:{disabled:""}},[t._v("请选择")]),t._v(" "),n("b-dropdown-item",{on:{click:t.clickDate}},[t._v("日期")]),t._v(" "),n("b-dropdown-item",{on:{click:t.clickRank}},[t._v("人气")]),t._v(" "),n("b-dropdown-item",{on:{click:t.clickPrice}},[t._v("价格")]),t._v(" "),n("b-dropdown-item",{on:{click:t.clickReview}},[t._v("评价")])],2):t._e()],1):t._e()],1)],1)],1)},staticRenderFns:[]},p={name:"App",components:{CommonHeader:n("VU/8")(h,v,!1,null,null,null).exports}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("common-header"),this._v(" "),e("keep-alive",{attrs:{exclude:"Detail"}},[e("router-view")],1)],1)},staticRenderFns:[]},b=n("VU/8")(p,f,!1,null,null,null).exports,k=n("/ocq");a.default.use(k.a);var w=new k.a({routes:[{path:"/",name:"Home",component:function(){return n.e(0).then(n.bind(null,"wXUp"))}},{path:"/:page",name:"HomePage",component:function(){return n.e(0).then(n.bind(null,"wXUp"))}},{path:"/detail/:id",name:"Detail",component:function(){return n.e(1).then(n.bind(null,"G9XZ"))}}]}),A=(n("sax8"),function(t){return t.perPage}),g=function(t){return t.commonSort},_=function(t){return t.keyword},S=function(t){return t.commonKind},C=function(t){return t.cateId},y=n("bFR2"),K="_currentSort_",T="_currentKind_",E="_currentCate_";var V,D=function(t,e){(0,t.commit)("SET_SORT",function(t){return y.a.set(K,t),t}(e))},I=function(t,e){(0,t.commit)("SET_KIND",function(t){return y.a.set(T,t),t}(e))},R=function(t,e){(0,t.commit)("SET_CATE_ID",function(t){return y.a.set(E,t),t}(e))},x=n("bOdI"),P=n.n(x),O=(V={},P()(V,"SET_PER_PAGE",function(t,e){t.perPage=e}),P()(V,"SET_SORT",function(t,e){t.commonSort=e}),P()(V,"SET_KEYWORD",function(t,e){t.keyword=e}),P()(V,"SET_KIND",function(t,e){t.commonKind=e}),P()(V,"SET_CATE_ID",function(t,e){t.cateId=e}),V),X={perPage:30,commonSort:y.a.get(K,"date"),keyword:"",commonKind:y.a.get(T),cateId:y.a.get(E)};a.default.use(s.a);var B=new s.a.Store({state:X,actions:i,mutations:O,getters:o,strict:!1,plugins:[]}),M=n("v5o6"),W=n.n(M),N=n("e6fC"),F=n.n(N),U=n("cTzj"),q=n.n(U);n("Jmt5"),n("9M+g"),n("TzC8");a.default.config.productionTip=!1,a.default.use(F.a),W.a.attach(document.body),a.default.use(q.a,{loading:n("1Buh")}),new a.default({el:"#app",router:w,store:B,components:{App:b},template:"<App/>"})},TzC8:function(t,e){},"m+8e":function(t,e){}},["NHnr"]);