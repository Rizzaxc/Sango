(function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],d=0,h=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&h.push(n[r][0]),n[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(h.length)h.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},i=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"10bf":function(t,e,a){"use strict";a("4f5e")},"42c1":function(t,e,a){"use strict";a("ad90")},"4c74":function(t,e,a){},"4f5e":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("TheNavBar"),a("div",{staticClass:"columns is-centered"},[a("div",{staticClass:"column is-half"},[a("SearchBar"),this.results.length>0?a("SearchResult",{attrs:{data:this.results}}):t._e(),t.searchHistory.length>0?a("div",{staticClass:"search-history"},t._l(t.searchHistory,(function(t,e){return a("KanjiCard",{key:e,attrs:{id:"savedQueries",kanji:t,index:e,showFull:!1}})})),1):t._e(),t.showErrorAlert?a("ErrorAlert",{staticClass:"errorAlert",attrs:{errorMessage:t.errorMessage}}):t._e()],1)])],1)},i=[],r=(a("a434"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar is-success",attrs:{role:"navigation","aria-label":"main navigation"}},[t._m(0),a("div",{staticClass:"navbar-menu"},[t._m(1),a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"modal",attrs:{id:"about-modal"}},[a("div",{staticClass:"modal-background",on:{click:function(e){return t.closeModal()}}}),a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("Dictionary for Vietnamese learners of Japanese & English")]),a("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){return t.closeModal()}}})]),a("section",{staticClass:"modal-card-body"},[t._v(" This (mini) dictionary includes over 2000 Kanjis with readings in both Japanese and Vietnamese, along with the meanings in English. This is useful for Vietnamese learning the other two languages (or speakers of any combination of the three) since association is a lot quicker with Hán Việt, as sometimes the Onyomi readings very closely resemble the Vietnamese counterparts. ")])])]),a("a",{staticClass:"navbar-item",on:{click:function(e){return t.launchModal()}}},[a("strong",[t._v("About")])])])])])}),o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navbar-brand"},[s("figure",{staticClass:"image is-64x64"},[s("img",{attrs:{src:a("9b19")}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-start"},[a("a",{staticClass:"navbar-item",attrs:{href:"/"}},[a("strong",[t._v("Kanji")])])])}],c={name:"TheNavBar",props:{},methods:{launchModal:function(){document.getElementById("about-modal").classList.add("is-active")},closeModal:function(){document.getElementById("about-modal").classList.remove("is-active")}}},l=c,u=(a("10bf"),a("2877")),d=Object(u["a"])(l,r,o,!1,null,"496370c8",null),h=d.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"searchbar"},[t.isSearching?a("progress",{staticClass:"progress is-large is-info",attrs:{max:"100"}},[t._v("60%")]):a("div",{staticClass:"field has-addons"},[a("div",{staticClass:"control is-expanded"},[a("input",{staticClass:"input has-text-black",attrs:{id:"query-input",type:"text",placeholder:"Search for Kanjis using Writing, Onyomi, Kunyomi, Meaning or Han-Viet"},on:{input:function(e){return t.handleInput(e.target.value)},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.lookup()}}})]),a("div",{staticClass:"control"},[a("a",{staticClass:"button is-info",on:{click:function(e){return t.lookup()}}},[t._v(" Lookup ")])])])])},m=[],p=(a("4160"),a("ac1f"),a("1276"),a("159b"),a("96cf"),a("1da1")),v={name:"SearchBar",components:{},props:{},data:function(){return{query:{type:String,default:""},isSearching:!1}},methods:{handleInput:function(t){this.query=t},lookup:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){var s,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.isSearching=!0,s=a("bc3a").default,n="http://localhost:".concat(Object({NODE_ENV:"production",BASE_URL:"/"}).PORT,"/api/v1/search/"),i=encodeURI(n+t.query),document.getElementById("query-input").value=null,s.get(i).then((function(e){t.isSearching=!1;var a=e.data.result;a.forEach((function(t){t.Kunyomi=t.Kunyomi.split(","),t.Onyomi=t.Onyomi.split(","),t.Meaning=t.Meaning.split(","),t.AmHanViet=t.AmHanViet.split(",")})),t.$root.$emit("QueryResolved",a)})).catch((function(e){console.log(e),t.$root.$emit("FetchingError"),t.isSearching=!1}));case 6:case"end":return e.stop()}}),e)})))()}}},g=v,y=Object(u["a"])(g,f,m,!1,null,"47af94f1",null),b=y.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns"},[a("KanjiCard",{staticClass:"column is-three-quarters",attrs:{id:"result",kanji:t.currentKanji,showFull:!0}}),a("div",{staticClass:"button-group column has-text-centered"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column has-text-centered"},[a("p",{staticClass:"heading"},[t._v("Discard")]),a("span",{staticClass:"icon is-large"},[a("a",{on:{click:function(e){return t.deleteKanji()}}},[a("i",{staticClass:"fas fa-trash fa-2x"})])])]),a("div",{staticClass:"column has-text-centered"},[a("p",{staticClass:"heading"},[t._v("Save")]),a("span",{staticClass:"icon is-large"},[a("a",{on:{click:function(e){return t.saveKanji()}}},[a("i",{staticClass:"fas fa-bookmark fa-2x"})])])])]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column has-text-centered"},[a("p",{staticClass:"heading"},[t._v("Previous")]),a("span",{staticClass:"icon is-large"},[a("a",{on:{click:function(e){return t.previousKanji()}}},[a("i",{staticClass:"fas fa-chevron-circle-left fa-2x"})])])]),a("div",{staticClass:"column has-text-centered"},[a("p",{staticClass:"heading"},[t._v("Next")]),a("span",{staticClass:"icon is-large"},[a("a",{on:{click:function(e){return t.nextKanji()}}},[a("i",{staticClass:"fas fa-chevron-circle-right fa-2x"})])])])]),a("div",{staticClass:"page-count"},[a("p",{staticClass:"heading"},[t._v("Current Result")]),a("p",{staticClass:"title has-text-weight-bold"},[t._v(t._s(t.currentIndex+1)+"/"+t._s(this.data.length))])])])],1)},j=[],w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[!1===t.showFull?a("div",{staticClass:"modal",attrs:{id:"full-card "+this.kanji.writing}},[a("div",{staticClass:"modal-background",on:{click:function(e){return t.closeModal()}}}),a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("Detailed Kanji View")]),a("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){return t.closeModal()}}})]),a("section",{staticClass:"modal-card-body"},[a("KanjiCard",{attrs:{kanji:this.kanji,showFull:!0}})],1)])]):t._e(),!1===t.showFull?a("button",{staticClass:"delete",on:{click:function(e){return t.deleteKanji()}}}):t._e(),a("div",{staticClass:"card-content"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-one-quarter writing-container"},[a("a",{attrs:{id:"kanji-writing"},on:{click:function(e){return t.launchModal()}}},[t._v(" "+t._s(t.kanji.writing)+" ")])]),a("div",{staticClass:"column",attrs:{id:"kanji-info"}},[a("div",{staticClass:"han-viet"},[a("KanjiInfo",{attrs:{name:"Hán Việt",showFull:this.showFull,payload:t.kanji.hanViet}})],1),a("div",{staticClass:"meaning"},[a("KanjiInfo",{attrs:{name:"Meaning",showFull:this.showFull,payload:t.kanji.meaning}})],1),a("div",{staticClass:"onyomi"},[a("KanjiInfo",{attrs:{name:"Onyomi",showFull:this.showFull,payload:t.kanji.onyomi}})],1),a("div",{staticClass:"kunyomi"},[a("KanjiInfo",{attrs:{name:"Kunyomi",showFull:this.showFull,payload:t.kanji.kunyomi}})],1)])])])])},_=[],k=(a("a9e3"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tags"},[a("span",{staticClass:"tag is-large"},[t._v(t._s(t.name))]),t._l(t.managedPayload,(function(e,s){return a("span",{key:s,staticClass:"tag is-warning is-medium"},[t._v(" "+t._s(e)+" ")])}))],2)}),x=[],K=(a("fb6a"),{name:"KanjiInfo",props:{name:String,payload:Array,showFull:Boolean},computed:{managedPayload:function(){return this.payload.length>2&&!this.showFull?this.payload.slice(0,2):this.payload}}}),E=K,$=Object(u["a"])(E,k,x,!1,null,"fb669cbe",null),A=$.exports,F={name:"KanjiCard",components:{KanjiInfo:A},props:{kanji:{type:Object,required:!0,onyomi:Array,kunyomi:Array,meaning:Array,hanViet:Array,writing:String},showFull:{type:Boolean,required:!0},index:{type:Number,required:!1,default:-1}},methods:{launchModal:function(){!1===this.showFull&&document.getElementById("full-card "+this.kanji.writing).classList.add("is-active")},closeModal:function(){!1===this.showFull&&document.getElementById("full-card "+this.kanji.writing).classList.remove("is-active")},deleteKanji:function(){-1!==this.index&&this.$root.$emit("DeleteFromHistory",this.index)}}},O=F,I=(a("8078"),Object(u["a"])(O,w,_,!1,null,"282c0dd9",null)),M=I.exports,S={name:"SearchResult",beforeUpdate:function(){this.currentIndex>=this.totalKanjis&&(this.currentIndex=0)},components:{KanjiCard:M},props:{data:{type:Array,required:!0}},data:function(){return{currentIndex:0}},methods:{deleteKanji:function(){this.data.splice(this.currentIndex,1),this.previousKanji()},previousKanji:function(){this.currentIndex--,this.currentIndex<0&&(this.currentIndex=this.totalKanjis-1)},nextKanji:function(){this.currentIndex++,this.currentIndex%=this.totalKanjis},saveKanji:function(){var t=this.currentKanji;this.$root.$emit("AddToHistory",t),this.deleteKanji()}},computed:{totalKanjis:function(){return this.data.length},currentKanji:function(){var t={onyomi:this.data[this.currentIndex].Onyomi,kunyomi:this.data[this.currentIndex].Kunyomi,meaning:this.data[this.currentIndex].Meaning,hanViet:this.data[this.currentIndex].AmHanViet,writing:this.data[this.currentIndex].Writing};return t}}},H=S,T=Object(u["a"])(H,C,j,!1,null,"16b02254",null),R=T.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"alert"},[t._v(" "+t._s(t.errorMessage)+" ")])},B=[],q={name:"ErrorAlert",props:{errorMessage:{required:!0}}},P=q,N=(a("42c1"),Object(u["a"])(P,V,B,!1,null,"1603a89b",null)),D=N.exports,L={name:"App",created:function(){this.$root.$on("QueryResolved",this.updateResults),this.$root.$on("FetchingError",this.showFetchingErrorAlert),this.$root.$on("AddToHistory",this.addToSearchHistory),this.$root.$on("DeleteFromHistory",this.deleteFromSearchHistory),document.title="Sango - Trilingual Mini Dictionary"},beforeDestroy:function(){this.$root.$off("QueryResolved",this.updateResults),this.$root.$off("FetchingError",this.showFetchingErrorAlert),this.$root.$off("AddToHistory",this.addToSearchHistory),this.$root.$off("DeleteFromHistory",this.deleteFromSearchHistory)},data:function(){return{searchHistory:[],results:[],showErrorAlert:!1,errorMessage:""}},components:{TheNavBar:h,SearchBar:b,SearchResult:R,KanjiCard:M,ErrorAlert:D},methods:{showFetchingErrorAlert:function(){var t=this;this.showErrorAlert=!0,this.errorMessage="Error while fetching results!",setTimeout((function(){t.showErrorAlert=!1,t.errorMessage=""}),3e3)},showNoResultAlert:function(){var t=this;this.showErrorAlert=!0,this.errorMessage="No matching results found!",setTimeout((function(){t.showErrorAlert=!1,t.errorMessage=""}),3e3)},updateResults:function(t){0==t.length?this.showNoResultAlert():this.results=t},addToSearchHistory:function(t){this.searchHistory.unshift(t),this.searchHistory.length>6&&this.searchHistory.pop()},deleteFromSearchHistory:function(t){this.searchHistory.splice(t,1)}},computed:{}},J=L,Q=(a("bc6a"),Object(u["a"])(J,n,i,!1,null,"22d6e280",null)),U=Q.exports;a("9ff4"),a("7051");s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(U)}}).$mount("#app")},"7b56":function(t,e,a){},8078:function(t,e,a){"use strict";a("4c74")},"9b19":function(t,e,a){t.exports=a.p+"img/logo.aadfb4cf.svg"},"9ff4":function(t,e,a){},ad90:function(t,e,a){},bc6a:function(t,e,a){"use strict";a("7b56")}});
//# sourceMappingURL=app.97e1944e.js.map