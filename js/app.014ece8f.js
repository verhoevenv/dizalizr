(function(t){function e(e){for(var a,i,o=e[0],u=e[1],c=e[2],f=0,l=[];f<o.length;f++)i=o[f],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&l.push(n[i][0]),n[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);d&&d(e);while(l.length)l.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],a=!0,o=1;o<r.length;o++){var u=r[o];0!==n[u]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},n={app:0},s=[];function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dizalizr/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=u;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},"0613":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("9ab4"),n=a.__importDefault(r("2b0e")),s=a.__importDefault(r("2f62")),i=r("0b20");n.default.use(s.default),e.default=new s.default.Store({state:{dice:new Array,observations:new Array},mutations:{DieAdded:function(t,e){t.dice.push(e)},ObservationCommitted:function(t){t.observations.push({timestamp:new Date,value:new i.RolledDice(t.dice).probs.lower}),t.dice=[]}},getters:{rolledDice:function(t){return new i.RolledDice(t.dice)}},actions:{},modules:{}})},"0b20":function(t,e,r){"use strict";var a=r("970b");Object.defineProperty(e,"__esModule",{value:!0});var n=r("f960"),s=r("9cdd"),i=function t(e){a(this,t),this.dice=e;var r=e.length;this.dice=e,this.expectedDist=new n.ScalarMultipleDistribution(new n.UniformDistribution(6),r),this.sum=s.sum(this.dice),this.probs=this.expectedDist.probsFor(this.sum)};e.RolledDice=i},"0d4d":function(t,e,r){t.exports=r.p+"img/die-5.c29f68f9.svg"},"243c":function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return n}));var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Hello world!")]),a("a",{on:{click:function(e){return t.addDie(1)}}},[a("img",{attrs:{src:r("c241")}})]),a("a",{on:{click:function(e){return t.addDie(2)}}},[a("img",{attrs:{src:r("d551")}})]),a("a",{on:{click:function(e){return t.addDie(3)}}},[a("img",{attrs:{src:r("2fbb")}})]),a("a",{on:{click:function(e){return t.addDie(4)}}},[a("img",{attrs:{src:r("da89")}})]),a("a",{on:{click:function(e){return t.addDie(5)}}},[a("img",{attrs:{src:r("0d4d")}})]),a("a",{on:{click:function(e){return t.addDie(6)}}},[a("img",{attrs:{src:r("8674")}})]),a("p",[a("span",[t._v("For "+t._s(t.allDice)+" = "+t._s(t.sum)+" ("+t._s(t.diceExpr)+"), roll this or higher : "+t._s(t.prob))])]),a("button",{on:{click:t.addObservation}},[t._v("Commit")]),a("div",{staticStyle:{display:"grid","grid-template-columns":"1fr 1fr"}},[a("DistributionChart",{attrs:{dice:t.rolledDice}}),a("ProbabilityChart",{attrs:{dice:t.rolledDice}}),a("div",{staticStyle:{"grid-column-start":"1","grid-column-end":"3"}},[a("TimeChart",{attrs:{observations:t.observations}})],1)],1)])},n=[]},"2fbb":function(t,e,r){t.exports=r.p+"img/die-3.6c74b43a.svg"},"34d7":function(t,e,r){"use strict";r.r(e);var a=r("67d7"),n=r.n(a);for(var s in a)"default"!==s&&function(t){r.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"3dfd":function(t,e,r){"use strict";r.r(e);var a=r("8ead"),n=r("6f68");for(var s in n)"default"!==s&&function(t){r.d(e,t,(function(){return n[t]}))}(s);r("5c0b");var i=r("2877"),o=Object(i["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=o.exports},"446f":function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return n}));var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("canvas",{attrs:{id:"probs-plot"}})])}]},4678:function(t,e,r){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=s(t);return r(e)}function s(t){if(!r.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=s,t.exports=n,n.id="4678"},"5c0b":function(t,e,r){"use strict";var a=r("9c0c"),n=r.n(a);n.a},"5d8e":function(t,e,r){"use strict";r.r(e);var a=r("446f"),n=r("34d7");for(var s in n)"default"!==s&&function(t){r.d(e,t,(function(){return n[t]}))}(s);var i=r("2877"),o=Object(i["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=o.exports},6574:function(t,e,r){"use strict";r.r(e);var a=r("6ffc"),n=r.n(a);for(var s in a)"default"!==s&&function(t){r.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"67d7":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("9ab4"),n=a.__importDefault(r("2b0e")),s=a.__importDefault(r("30ef"));e.default=n.default.extend({name:"ProbabilityChart",data:function(){return{probChart:null}},props:{dice:{type:Object,required:!0}},methods:{createChart:function(t,e,r,a){var n=document.getElementById(t);return new s.default(n,{type:e,data:r,options:a})}},mounted:function(){this.probChart=this.createChart("probs-plot","horizontalBar",this.probChartData,{scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0}]}})},watch:{probChartData:function(){this.probChart.data.datasets[0].data=this.probChartData.datasets[0].data,this.probChart.data.datasets[1].data=this.probChartData.datasets[1].data,this.probChart.data.datasets[2].data=this.probChartData.datasets[2].data,this.probChart.update()}},computed:{probChartData:function(){var t=this.$store.getters.rolledDice,e=t.probs;return{labels:["a"],datasets:[{label:"lower",backgroundColor:"rgba(0, 0, 0, 0.1)",data:[e.lower]},{label:"same",backgroundColor:"green",data:[e.same]},{label:"higher",backgroundColor:"rgba(0, 0, 0, 0.1)",data:[e.higher]}]}}}})},"6f68":function(t,e,r){"use strict";r.r(e);var a=r("78c7"),n=r.n(a);for(var s in a)"default"!==s&&function(t){r.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"6ffc":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("9ab4"),n=a.__importDefault(r("2b0e")),s=a.__importDefault(r("ec25")),i=a.__importDefault(r("5d8e")),o=a.__importDefault(r("88a3"));e.default=n.default.extend({name:"DiceObservation",methods:{addDie:function(t){this.$store.commit("DieAdded",t)},addObservation:function(){this.$store.commit("ObservationCommitted")}},computed:{rolledDice:function(){return this.$store.getters.rolledDice},prob:function(){if(0===this.$store.state.dice.length)return NaN;var t=this.$store.getters.rolledDice;return t.probs.same+t.probs.higher},diceExpr:function(){return"".concat(this.$store.state.dice.length,"d6")},allDice:function(){return this.$store.state.dice},sum:function(){return this.$store.getters.rolledDice.sum},observations:function(){return this.$store.state.observations}},components:{DistributionChart:s.default,ProbabilityChart:i.default,TimeChart:o.default}})},"78c7":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("9ab4"),n=a.__importDefault(r("2b0e")),s=a.__importDefault(r("d999"));e.default=n.default.extend({name:"App",components:{DiceObservation:s.default}})},8674:function(t,e,r){t.exports=r.p+"img/die-6.a2caba3c.svg"},"88a3":function(t,e,r){"use strict";r.r(e);var a=r("a732"),n=r("f49b");for(var s in n)"default"!==s&&function(t){r.d(e,t,(function(){return n[t]}))}(s);var i=r("2877"),o=Object(i["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=o.exports},"8ead":function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return n}));var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("DiceObservation")],1)},n=[]},"9c0c":function(t,e,r){},"9cdd":function(t,e,r){"use strict";r("99af"),r("d81d"),r("13d5");var a=r("6374");function n(t){return t.reduce((function(t,e){return t.map((function(t){return e.map((function(e){return t.concat([e])}))})).reduce((function(t,e){return t.concat(e)}),new Array)}),new Array(new Array))}function s(t){var e,r=0,n=a(t);try{for(n.s();!(e=n.n()).done;){var s=e.value;r+=s}}catch(i){n.e(i)}finally{n.f()}return r}Object.defineProperty(e,"__esModule",{value:!0}),e.cartesianProduct=n,e.sum=s},a732:function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return n}));var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("canvas",{attrs:{id:"time-plot"}})])}]},b056:function(t,e,r){"use strict";r("d81d"),Object.defineProperty(e,"__esModule",{value:!0});var a=r("9ab4"),n=a.__importDefault(r("2b0e")),s=a.__importDefault(r("30ef"));e.default=n.default.extend({name:"TimeChart",data:function(){return{timeChart:null}},props:{observations:{type:Array,required:!0}},methods:{createChart:function(t,e,r,a){var n=document.getElementById(t);return new s.default(n,{type:e,data:r,options:a})}},mounted:function(){this.timeChart=this.createChart("time-plot","line",this.timeChartData,{scales:{xAxes:[{type:"time"}]}})},watch:{timeChartData:function(){this.timeChart.data=this.timeChartData,this.timeChart.update()}},computed:{timeChartData:function(){var t=this.observations.map((function(t){var e=t.timestamp,r=t.value;return{x:e,y:r}}));return{datasets:[{label:"lower",data:t,cubicInterpolationMode:"monotone",lineTension:0}]}}}})},c241:function(t,e,r){t.exports=r.p+"img/die-1.e5fdef95.svg"},c451:function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return n}));var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("canvas",{attrs:{id:"dist-plot"}})])}]},cd49:function(t,e,r){"use strict";r("e260"),r("e6cf"),r("cca6"),r("a79d"),Object.defineProperty(e,"__esModule",{value:!0});var a=r("9ab4"),n=a.__importDefault(r("2b0e")),s=a.__importDefault(r("3dfd")),i=a.__importDefault(r("0613"));n.default.config.productionTip=!1,new n.default({store:i.default,render:function(t){return t(s.default)}}).$mount("#app")},d551:function(t,e,r){t.exports=r.p+"img/die-2.4bda950a.svg"},d999:function(t,e,r){"use strict";r.r(e);var a=r("243c"),n=r("6574");for(var s in n)"default"!==s&&function(t){r.d(e,t,(function(){return n[t]}))}(s);var i=r("2877"),o=Object(i["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=o.exports},da89:function(t,e,r){t.exports=r.p+"img/die-4.882c7309.svg"},ec25:function(t,e,r){"use strict";r.r(e);var a=r("c451"),n=r("fa9d");for(var s in n)"default"!==s&&function(t){r.d(e,t,(function(){return n[t]}))}(s);var i=r("2877"),o=Object(i["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=o.exports},f49b:function(t,e,r){"use strict";r.r(e);var a=r("b056"),n=r.n(a);for(var s in a)"default"!==s&&function(t){r.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},f960:function(t,e,r){"use strict";r("99af"),r("4160"),r("a630"),r("d81d"),r("13d5"),r("fb6a"),r("4ec9"),r("d3b7"),r("6062"),r("3ca3"),r("159b"),r("ddb0");var a=r("480f"),n=r("5bc3"),s=r("448a"),i=r("970b"),o=r("278c"),u=r("6374");Object.defineProperty(e,"__esModule",{value:!0});var c=r("9ab4"),d=r("9cdd"),f=c.__importDefault(r("b233"));function l(t,e){var r=0,a=0,n=0;return t.forEach((function(t,s){s<e?r+=t:s===e?a+=t:n+=t})),{lower:r,same:a,higher:n}}function b(t){var e,r=u(t.probs.entries());try{for(r.s();!(e=r.n()).done;){var a=o(e.value,2),n=a[0],s=a[1];s<0&&console.warn("negative probability found: ".concat(n," => ").concat(s))}}catch(i){r.e(i)}finally{r.f()}Math.abs(d.sum(t.probs.values())-1)>1e-10&&console.warn("sum of probabilities should be about 1 but was ".concat(d.sum(t.probs.values())),t)}var h=function t(e){var r=this;i(this,t),this.probs=e,this.probsFor=function(t){return l(r.probs,t)},b(this)};function p(){for(var t=new Set,e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];for(var n=0,s=r;n<s.length;n++){var i,o=s[n],c=u(o.probs.keys());try{for(c.s();!(i=c.n()).done;){var d=i.value;t.add(d)}}catch(f){c.e(f)}finally{c.f()}}return t}function v(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];var a=d.sum(e.map((function(t){return f.default(t.probs.keys()).reduce((function(t,e){return t<e?t:e}))}))),n=d.sum(e.map((function(t){return f.default(t.probs.keys()).reduce((function(t,e){return t>e?t:e}))})));return s(Array(1+n-a).keys()).map((function(t){return a+t}))}function m(t,e){var r,a=p(t,e),n=0,s=u(a);try{for(s.s();!(r=s.n()).done;){var i=r.value,o=t.probs.get(i)||0,c=e.probs.get(i)||0;n+=Math.abs(o-c)}}catch(d){s.e(d)}finally{s.f()}return n}function j(t,e){var r,a=p(t,e),n=v(t,e),s=new Map,i=u(n);try{for(i.s();!(r=i.n()).done;){var o,c=r.value,d=0,f=u(a);try{for(f.s();!(o=f.n()).done;){var l=o.value;d+=(t.probs.get(l)||0)*(e.probs.get(c-l)||0)}}catch(b){f.e(b)}finally{f.f()}s.set(c,d)}}catch(b){i.e(b)}finally{i.f()}return new h(s)}e.FreeformDistribution=h,e.compare=m;var y=function(){function t(e){i(this,t),this.n=e,this.probs=new Map;for(var r=1;r<=e;r++)this.probs.set(r,1/e);b(this)}return n(t,[{key:"probsFor",value:function(t){return{lower:(t-1)/this.n,same:1/this.n,higher:(this.n-t)/this.n}}}]),t}();e.UniformDistribution=y;var _=function t(){var e=this;i(this,t),this.probsFor=function(t){return l(e.probs,t)},this.probs=new Map,this.probs.set(0,1),b(this)};e.NullDistribution=_;var g=function t(e){var r=this;i(this,t),this.bases=e,this.probsFor=function(t){return l(r.probs,t)},this.bases=e,this.probs=new Map;var a,n=this.bases.map((function(t){return Array.from(t.probs.keys())})),s=u(d.cartesianProduct(n));try{for(s.s();!(a=s.n()).done;){for(var o=a.value,c=d.sum(o),f=1,h=0;h<e.length;h++)f*=e[h].probsFor(o[h]).same;var p=this.probs.get(c)||0;this.probs.set(c,p+f)}}catch(v){s.e(v)}finally{s.f()}b(this)};e.SlowSumDistribution=g;var D=function t(e){var r=this;i(this,t),this.bases=e,this.probsFor=function(t){return l(r.probs,t)};var n,s=a(e),o=s[0],c=s.slice(1),d=o||new _,f=u(c);try{for(f.s();!(n=f.n()).done;){var h=n.value;d=j(d,h)}}catch(p){f.e(p)}finally{f.f()}this.probs=d.probs,b(this)};e.SumDistribution=D;var w=function t(e,r){var a=this;i(this,t),this.base=e,this.times=r,this.probsFor=function(t){return l(a.probs,t)};var n=1,s=r,o=e,u=new _;while(n<=r)s%(2*n)!==0&&(u=j(u,o),s-=n),o=j(o,o),n*=2;this.probs=u.probs,b(this)};e.ScalarMultipleDistribution=w},fa9d:function(t,e,r){"use strict";r.r(e);var a=r("fdde"),n=r.n(a);for(var s in a)"default"!==s&&function(t){r.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},fdde:function(t,e,r){"use strict";r("cb29"),r("a630"),r("c975"),r("d3b7"),r("3ca3"),r("ddb0"),Object.defineProperty(e,"__esModule",{value:!0});var a=r("9ab4"),n=a.__importDefault(r("2b0e")),s=a.__importDefault(r("30ef"));e.default=n.default.extend({name:"DistributionChart",data:function(){return{distChart:null}},props:{dice:{type:Object,required:!0}},methods:{createChart:function(t,e,r,a){var n=document.getElementById(t);return new s.default(n,{type:e,data:r,options:a})}},mounted:function(){this.distChart=this.createChart("dist-plot","bar",this.distChartData,{})},watch:{distChartData:function(){this.distChart.data.labels=this.distChartData.datasets[0].labels,this.distChart.data.datasets[0].data=this.distChartData.datasets[0].data;var t=new Array(this.distChartData.datasets[0].data.length);t.fill("rgba(0, 0, 0, 0.1)");var e=this.distChartData.datasets[0].labels.indexOf(this.dice.sum);t[e]="green",this.distChart.data.datasets[0].backgroundColor=t,this.distChart.update()}},computed:{distChartData:function(){var t=this.dice,e=t.expectedDist.probs;return{datasets:[{labels:Array.from(e.keys()),data:Array.from(e.values())}]}}}})}});
//# sourceMappingURL=app.014ece8f.js.map