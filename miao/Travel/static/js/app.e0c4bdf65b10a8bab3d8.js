webpackJsonp([1],{"1qCU":function(t,e){},"2skJ":function(t,e){},"90CE":function(t,e){},"9n10":function(t,e){},"BU3+":function(t,e){},ImOq:function(t,e){},KRQO:function(t,e){},LRwc:function(t,e){},M6Sr:function(t,e){},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=n.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",{attrs:{exclude:"Detail"}},[e("router-view")],1)],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},n,!1,function(t){i("ImOq")},null,null).exports,r=i("/ocq"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("router-link",{attrs:{to:"/city"}},[e("div",{staticClass:"header-right"},[this._v("\n      "+this._s(this.$store.state.city)+"\n      "),e("span",{staticClass:"iconfont arrow-icon"},[this._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-left"},[e("div",{staticClass:"iconfont back-icon"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-input"},[e("span",{staticClass:"iconfont"},[this._v("")]),this._v("\n    输入城市/景点/游玩主题\n  ")])}]};var c=i("VU/8")({name:"HomeHeader"},o,!1,function(t){i("U107")},"data-v-25fb43da",null).exports,l={name:"HomeSwiper",props:{list:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0,autoplay:5e3}}},computed:{showSwiper:function(){return this.list.length}}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[this.showSwiper?e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.list,function(t){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var u=i("VU/8")(l,d,!1,function(t){i("1qCU")},"data-v-2316c66a",null).exports,h={name:"HomeIcons",data:function(){return{swiperOption:{autoplay:!1}}},props:{list:Array},computed:{pages:function(){var t=[];return this.list.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[i("swiper",{attrs:{options:t.swiperOption}},t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("img",{staticClass:"icon-img-content",attrs:{src:e.imgUrl}})]),t._v(" "),i("p",{staticClass:"icon-desc"},[t._v(t._s(e.desc))])])}))}))],1)},staticRenderFns:[]};var v=i("VU/8")(h,p,!1,function(t){i("SYe+")},"data-v-1527e8e0",null).exports,f={name:"Recommend",props:{list:Array}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("热销推荐")]),t._v(" "),i("ul",t._l(t.list,function(e){return i("router-link",{key:e.id,staticClass:"item border-bottom",attrs:{tag:"li",to:"/detail/"+e.id}},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl}}),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))]),t._v(" "),i("button",{staticClass:"item-button"},[t._v("查看详情")])])])}))])},staticRenderFns:[]};var _=i("VU/8")(f,m,!1,function(t){i("u2Zc")},"data-v-ed97bf4e",null).exports,C={name:"HomeWeekend",props:{list:Array}},y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("周末去哪儿")]),t._v(" "),i("ul",t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"item border-bottom"},[i("div",{staticClass:"item-img-wrapper"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))])])])}))])},staticRenderFns:[]};var w=i("VU/8")(C,y,!1,function(t){i("ar91")},"data-v-3f8b1720",null).exports,g=i("mtWM"),b=i.n(g),k={name:"Home",data:function(){return{lastCity:"",swiperList:[],iconList:[],recommendList:[],weekendList:[]}},components:{HomeHeader:c,HomeSwiper:u,HomeIcons:v,HomeRecommend:_,HomeWeekend:w},methods:{getHomeInfo:function(){b.a.get("static/mock/index.json").then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.swiperList=e.swiperList,this.iconList=e.iconList,this.recommendList=e.recommendList,this.weekendList=e.weekendList}}},mounted:function(){this.lastCity=this.city,this.getHomeInfo()},activated:function(){this.lastCity!==this.city&&(this.lastCity=this.city,this.getHomeInfo())}},$={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("home-header"),t._v(" "),i("home-swiper",{attrs:{list:t.swiperList}}),t._v(" "),i("home-icons",{attrs:{list:t.iconList}}),t._v(" "),i("home-recommend",{attrs:{list:t.recommendList}}),t._v(" "),i("home-weekend",{attrs:{list:t.weekendList}})],1)},staticRenderFns:[]};var x=i("VU/8")(k,$,!1,function(t){i("ffbe")},"data-v-2d96ad12",null).exports,S={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._v("\n  城市选择\n  "),e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont header-back"},[this._v("")])])],1)},staticRenderFns:[]};var I=i("VU/8")({name:"CityHeader"},S,!1,function(t){i("LRwc")},"data-v-3810d707",null).exports,U=i("Dd8w"),E=i.n(U),L=i("GQaK"),T=i("NYxO"),F={name:"CitySearch",props:{cities:Object},data:function(){return{keyword:"",timer:null,list:[]}},computed:{noData:function(){return!this.list.length}},methods:E()({handleCityClick:function(t){this.changeCity(t),this.$router.push("/")}},Object(T.b)(["changeCity"])),watch:{keyword:function(){var t=this;this.timer&&clearTimeout(this.timer),this.keyword?this.timer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){(i.spell.indexOf(t.keyword)>-1||i.name.indexOf(t.keyword)>-1)&&e.push(i)});t.list=e},100):this.list=[]}},mounted:function(){this.scroll=new L.a(this.$refs.search)}},O={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{type:"text",placeholder:"输入城市名或拼音"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],ref:"search",staticClass:"search-content"},[i("ul",[t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"search-item border-bottom",on:{click:function(i){t.handleCityClick(e.name)}}},[t._v(t._s(e.name))])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.noData,expression:"noData"}],staticClass:"search-item border-bottom"},[t._v("没有找到匹配数据")])],2)])])},staticRenderFns:[]};var R=i("VU/8")(F,O,!1,function(t){i("i1Ul")},"data-v-c4e7cba4",null).exports,H={name:"CityList",props:{hotCities:Array,cities:Object,letter:String},computed:E()({},Object(T.c)({currentCity:"city"})),watch:{letter:function(){if(this.letter){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t)}}},methods:E()({handleCityClick:function(t){this.changeCity(t),this.$router.push("/")}},Object(T.b)(["changeCity"])),mounted:function(){this.scroll=new L.a(this.$refs.wrapper)}},N={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",[i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("当前城市")]),t._v(" "),i("div",{staticClass:"button-list"},[i("div",{staticClass:"button-wrapper"},[i("div",{staticClass:"button"},[t._v(t._s(this.currentCity))])])])]),t._v(" "),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("热门城市")]),t._v(" "),i("div",{staticClass:"button-list"},t._l(t.hotCities,function(e){return i("div",{key:e.id,staticClass:"button-wrapper",on:{click:function(i){t.handleCityClick(e.name)}}},[i("div",{staticClass:"button"},[t._v(t._s(e.name))])])}))]),t._v(" "),t._l(t.cities,function(e,s){return i("div",{key:s,ref:s,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v(t._s(s))]),t._v(" "),i("ul",{staticClass:"item-list"},t._l(e,function(e){return i("li",{key:e.id,staticClass:"item border-bottom",on:{click:function(i){t.handleCityClick(e.name)}}},[t._v(t._s(e.name))])}))])})],2)])},staticRenderFns:[]};var V=i("VU/8")(H,N,!1,function(t){i("BU3+")},"data-v-43ae11b0",null).exports,D={name:"CityAlphabet",props:{cities:Object},computed:{letters:function(){var t=[];for(var e in this.cities)t.push(e);return t}},data:function(){return{isMove:!1,startY:0,timer:null}},updated:function(){this.startY=this.$refs.A[0].offsetTop},methods:{handleLetterClick:function(t){this.$emit("change",t.target.innerText)},handleTouchStart:function(){this.isMove=!0},handleTouchMove:function(t){var e=this;this.isMove&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var i=t.touches[0].clientY-74,s=Math.floor((i-e.startY)/20);s>=0&&s<e.letters.length&&e.$emit("change",e.letters[s])},16))},handleTouchEnd:function(){this.isMove=!1}}},A={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"list"},t._l(t.letters,function(e){return i("li",{key:e,ref:e,refInFor:!0,staticClass:"item",on:{touchstart:function(e){return e.preventDefault(),t.handleTouchStart(e)},touchmove:t.handleTouchMove,touchend:t.handleTouchEnd,click:t.handleLetterClick}},[t._v(t._s(e)+"\n  ")])}))},staticRenderFns:[]};var G={name:"City",components:{CityHeader:I,CitySearch:R,CityList:V,CityAlphabet:i("VU/8")(D,A,!1,function(t){i("KRQO")},"data-v-6a9791b8",null).exports},data:function(){return{hotCities:[],cities:{},letter:""}},methods:{getCityInfo:function(){b.a.get("api/city.json").then(this.handleGetCityInfoSucc)},handleGetCityInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.hotCities=e.hotCities,this.cities=e.cities}},handleLetterChange:function(t){this.letter=t}},mounted:function(){this.getCityInfo()}},j={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("city-header"),t._v(" "),i("city-search",{attrs:{cities:t.cities}}),t._v(" "),i("city-list",{attrs:{cities:t.cities,hotCities:t.hotCities,letter:t.letter}}),t._v(" "),i("city-alphabet",{attrs:{cities:t.cities},on:{change:t.handleLetterChange}})],1)},staticRenderFns:[]};var M=i("VU/8")(G,j,!1,function(t){i("sYu+")},"data-v-bb599ec4",null).exports,Y={name:"CommonGallay",props:{gallaryImgs:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",paginationType:"fraction",observeParents:!0,observer:!0}}},methods:{handleGallayClick:function(){this.$emit("close")}}},B={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"gallary",on:{click:this.handleGallayClick}},[e("div",{staticClass:"gallary-wrapper"},[e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.gallaryImgs,function(t,i){return e("swiper-slide",{key:i},[e("img",{staticClass:"gallary-img",attrs:{src:t}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]};var P=i("VU/8")(Y,B,!1,function(t){i("2skJ")},"data-v-9dfd0dc4",null).exports,q={render:function(){var t=this.$createElement;return(this._self._c||t)("transition",[this._t("default")],2)},staticRenderFns:[]};var J=i("VU/8")({name:"FadeAnimation"},q,!1,function(t){i("QcoU")},"data-v-66bdc405",null).exports,Q={name:"DetailBanner",props:{sightName:String,bannerImg:String,gallaryImgs:Array},data:function(){return{showGallary:!1}},methods:{handleBannerClick:function(){this.showGallary=!0},handleGallaryClose:function(){this.showGallary=!1}},components:{CommonGallay:P,FadeAnimation:J}},z={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"banner-warpper",on:{click:t.handleBannerClick}},[i("img",{staticClass:"image",attrs:{src:t.bannerImg}}),t._v(" "),i("div",{staticClass:"banner-info"},[i("p",{staticClass:"title"},[t._v(t._s(this.sightName))]),t._v(" "),i("div",{staticClass:"number"},[i("span",{staticClass:"iconfont banner-icon"},[t._v("")]),t._v("\n        "+t._s(this.gallaryImgs.length)+"\n      ")])])]),t._v(" "),i("fade-animation",[i("common-gallay",{directives:[{name:"show",rawName:"v-show",value:t.showGallary,expression:"showGallary"}],attrs:{gallaryImgs:t.gallaryImgs},on:{close:t.handleGallaryClose}})],1)],1)},staticRenderFns:[]};var W=i("VU/8")(Q,z,!1,function(t){i("90CE")},"data-v-6515871c",null).exports,K={name:"DetailHeader",data:function(){return{showTop:!1,OpacityStyle:{opacity:0}}},methods:{handleScoll:function(){var t=document.documentElement.scrollTop;if(t>15){var e=t/2/80;e=e>1?1:e,this.OpacityStyle={opacity:e},this.showTop=!0}else this.showTop=!1}},mounted:function(){window.addEventListener("scroll",this.handleScoll)},destroyed:function(){window.removeEventListener("scroll",this.handleScoll)}},Z={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("router-link",{directives:[{name:"show",rawName:"v-show",value:!t.showTop,expression:"!showTop"}],staticClass:"header-back",attrs:{tag:"div",to:"/"}},[i("span",{staticClass:"iconfont back-icon"},[t._v("")])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showTop,expression:"showTop"}],staticClass:"header-top",style:t.OpacityStyle,attrs:{tag:"div",to:"/"}},[i("router-link",{staticClass:"iconfont top-back-icon",attrs:{tag:"div",to:"/"}},[t._v("")]),t._v(" "),i("p",{staticClass:"top-title"},[t._v("北京野生动物园")])],1)],1)},staticRenderFns:[]};var X=i("VU/8")(K,Z,!1,function(t){i("u9Jb")},"data-v-2c100e36",null).exports,tt={name:"DetailList",props:{list:Array}},et={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list"},t._l(t.list,function(e,s){return i("div",{key:s,staticClass:"list-wrapper border-bottom"},[i("span",{staticClass:"ticket"}),t._v(" "),i("div",{staticClass:"list-item"},[t._v(t._s(e.title))]),t._v(" "),e.children?i("div",[i("detail-list",{attrs:{list:e.children}})],1):t._e()])}))},staticRenderFns:[]};var it={name:"Detail",components:{DetailBanner:W,DetailHeader:X,DetailList:i("VU/8")(tt,et,!1,function(t){i("YP9F")},"data-v-b614df2e",null).exports},data:function(){return{sightName:"",bannerImg:"",gallaryImgs:[],list:[]}},methods:{getDetailInfo:function(){b.a.get("/api/detail"+this.$route.params.id+".json").then(this.handleGetDataSucc)},handleGetDataSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.sightName=e.sightName,this.bannerImg=e.bannerImg,this.gallaryImgs=e.gallaryImgs,this.list=e.categoryList}}},mounted:function(){this.getDetailInfo()}},st={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("detail-banner",{attrs:{sightName:this.sightName,bannerImg:this.bannerImg,gallaryImgs:this.gallaryImgs}}),this._v(" "),e("detail-header"),this._v(" "),e("div",{staticClass:"container"},[e("detail-list",{attrs:{list:this.list}})],1)],1)},staticRenderFns:[]};var nt=i("VU/8")(it,st,!1,function(t){i("t6Ye")},"data-v-96211aac",null).exports;s.a.use(r.a);var at=new r.a({routes:[{path:"/",name:"Home",component:x},{path:"/city",name:"City",component:M},{path:"/detail/:id",name:"Detail",component:nt}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),rt=i("v5o6"),ot=i.n(rt),ct=i("F3EI"),lt=i.n(ct),dt="北京";try{localStorage.city&&(dt=localStorage.city)}catch(t){}var ut={city:dt},ht={changeCity:function(t,e){t.city=e;try{localStorage.city=e}catch(t){}}};s.a.use(T.a);var pt=new T.a.Store({state:ut,mutations:ht});i("j1ja"),i("9n10"),i("M6Sr"),i("TzC8"),i("v2ns");s.a.config.productionTip=!1,ot.a.attach(document.body),s.a.use(lt.a),new s.a({el:"#app",router:at,store:pt,components:{App:a},template:"<App/>"})},QcoU:function(t,e){},"SYe+":function(t,e){},TzC8:function(t,e){},U107:function(t,e){},YP9F:function(t,e){},ar91:function(t,e){},ffbe:function(t,e){},i1Ul:function(t,e){},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("gsqX"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(n,a,!1,null,null,null);e.default=r.exports},"sYu+":function(t,e){},t6Ye:function(t,e){},u2Zc:function(t,e){},u9Jb:function(t,e){},v2ns:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e0c4bdf65b10a8bab3d8.js.map