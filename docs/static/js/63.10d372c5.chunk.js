(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{171:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(65),o=(0,n(25).createHashHistory)();t.a=class extends a.Component{render(){return r.a.createElement("div",null,r.a.createElement(l.f,{mode:"light",icon:"#/Home"===window.location.hash?"":r.a.createElement(l.d,{type:"left"}),onLeftClick:"#/Home"===window.location.hash?()=>{}:()=>{o.go(-1)}},"\u524d\u7aef\u7b14\u8bb0"),this.props.children)}}},172:function(e,t,n){"use strict";n.d(t,"a",function(){return S}),n.d(t,"g",function(){return C}),n.d(t,"c",function(){return H}),n.d(t,"e",function(){return L}),n.d(t,"b",function(){return V}),n.d(t,"d",function(){return N}),n.d(t,"f",function(){return A});var a=n(178),r=n.n(a),l=n(179),o=n.n(l),c=n(180),i=n.n(c),u=n(181),m=n.n(u),s=n(182),p=n.n(s),d=n(183),E=n.n(d),f=n(184),b=n.n(f),v=n(185),y=n.n(v),g=n(174),h=n.n(g),x=n(186),w=n.n(x),j=n(0),P=n.n(j),k=n(232);n(173);function I(e,t){var n=y()(e);if(b.a){var a=b()(e);t&&(a=E()(a).call(a,function(t){return p()(e,t).enumerable})),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n,a=null!=arguments[t]?arguments[t]:{};if(t%2)m()(n=I(Object(a),!0)).call(n,function(t){w()(e,t,a[t])});else if(i.a)o()(e,i()(a));else{var l;m()(l=I(Object(a))).call(l,function(t){r()(e,t,p()(a,t))})}}return e}class S extends P.a.Component{render(){var e=this.props,t=e.route,n=e.title,a=e.containerStyle,r=e.titleStyle;return P.a.createElement("div",{className:"blockComponent",style:a},P.a.createElement(k.a,{to:t},P.a.createElement("p",{style:r},n)))}}class C extends P.a.Component{render(){return P.a.createElement("h3",{style:{fontSize:"24px",textAlign:"center",lineHeight:"36px",marginTop:"10px"}},this.props.title)}}class H extends P.a.Component{render(){return P.a.createElement("div",{className:"label"},P.a.createElement("p",null,P.a.createElement("i",{className:"Lborder"})," ",this.props.title))}}class L extends P.a.Component{render(){return P.a.createElement("section",{className:"paragraph",style:O({textIndent:"2em",margin:"10px 0",lineHeight:"26px"},this.props.style)},this.props.title)}}class V extends P.a.Component{render(){return P.a.createElement("div",{className:"highlight",style:{color:"#ddd"}},P.a.createElement("pre",null,this.props.content))}}class N extends P.a.Component{render(){var e;return P.a.createElement("div",{className:"listItem"},P.a.createElement("ul",null,h()(e=this.props.list).call(e,(e,t)=>P.a.createElement("li",{key:t},e))))}}class A extends P.a.Component{render(){var e=this.props,t=e.header,n=e.data;return P.a.createElement("div",{className:"renderTable"},P.a.createElement("table",null,P.a.createElement("thead",null,P.a.createElement("tr",null,h()(t).call(t,(e,t)=>P.a.createElement("th",{key:t},e)))),P.a.createElement("tbody",null,h()(n).call(n,(e,t)=>P.a.createElement("tr",{key:t},h()(e).call(e,(e,t)=>P.a.createElement("td",{key:t},e)))))))}}},173:function(e,t,n){},446:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(171),o=n(172);t.default=class extends r.a.Component{render(){return r.a.createElement(l.a,null,r.a.createElement("div",{style:{padding:"0 10px"}},r.a.createElement(o.g,{title:"ES6 \u7cfb\u5217\u4e4b defineProperty \u4e0e proxy"}),r.a.createElement(o.c,{title:"\u524d\u8a00"}),r.a.createElement(o.e,{title:"\u6211\u4eec\u6216\u591a\u6216\u5c11\u90fd\u542c\u8fc7\u201c\u6570\u636e\u7ed1\u5b9a\u201d\u8fd9\u4e2a\u8bcd\uff0c\u201c\u6570\u636e\u7ed1\u5b9a\u201d\u7684\u5173\u952e\u5728\u4e8e\u76d1\u542c\u6570\u636e\u7684\u53d8\u5316\uff0c\u53ef\u662f\u5bf9\u4e8e\u8fd9\u6837\u4e00\u4e2a\u5bf9\u8c61\uff1avar obj = {value: 1}\uff0c\u6211\u4eec\u8be5\u600e\u4e48\u77e5\u9053 obj \u53d1\u751f\u4e86\u6539\u53d8\u5462\uff1f"}),r.a.createElement(o.c,{title:"definePropety"}),r.a.createElement(o.e,{title:"ES5 \u63d0\u4f9b\u4e86 Object.defineProperty \u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u53ef\u4ee5\u5728\u4e00\u4e2a\u5bf9\u8c61\u4e0a\u5b9a\u4e49\u4e00\u4e2a\u65b0\u5c5e\u6027\uff0c\u6216\u8005\u4fee\u6539\u4e00\u4e2a\u5bf9\u8c61\u7684\u73b0\u6709\u5c5e\u6027\uff0c\u5e76\u8fd4\u56de\u8fd9\u4e2a\u5bf9\u8c61\u3002"}),r.a.createElement(o.e,{style:{textIndext:0,fontWeight:700},title:"\u8bed\u6cd5"}),r.a.createElement(o.e,{style:{background:"#eee"},title:"Object.defineProperty(obj, prop, descriptor)"}),r.a.createElement(o.e,{style:{textIndext:0,fontWeight:700},title:"\u53c2\u6570"}),r.a.createElement(o.b,{content:"obj: \u8981\u5728\u5176\u4e0a\u5b9a\u4e49\u5c5e\u6027\u7684\u5bf9\u8c61\u3002\n\nprop:  \u8981\u5b9a\u4e49\u6216\u4fee\u6539\u7684\u5c5e\u6027\u7684\u540d\u79f0\u3002\n\ndescriptor: \u5c06\u88ab\u5b9a\u4e49\u6216\u4fee\u6539\u7684\u5c5e\u6027\u7684\u63cf\u8ff0\u7b26\u3002\n"}),r.a.createElement(o.e,{title:"\u4e3e\u4e2a\u4f8b\u5b50\uff1a"}),r.a.createElement(o.b,{content:'var obj = {};\nObject.defineProperty(obj, "num", {\n    value : 1,\n    writable : true,\n    enumerable : true,\n    configurable : true\n});\n//  \u5bf9\u8c61 obj \u62e5\u6709\u5c5e\u6027 num\uff0c\u503c\u4e3a 1\n'}),r.a.createElement(o.e,{title:"\u867d\u7136\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u6dfb\u52a0\u5c5e\u6027\u548c\u503c\uff0c\u4f46\u662f\u4f7f\u7528\u8fd9\u79cd\u65b9\u5f0f\uff0c\u6211\u4eec\u80fd\u8fdb\u884c\u66f4\u591a\u7684\u914d\u7f6e\u3002"}),r.a.createElement(o.e,{title:"\u51fd\u6570\u7684\u7b2c\u4e09\u4e2a\u53c2\u6570 descriptor \u6240\u8868\u793a\u7684\u5c5e\u6027\u63cf\u8ff0\u7b26\u6709\u4e24\u79cd\u5f62\u5f0f\uff1a\u6570\u636e\u63cf\u8ff0\u7b26\u548c\u5b58\u53d6\u63cf\u8ff0\u7b26\u3002"}),r.a.createElement(o.e,{title:"\u4e24\u8005\u5747\u5177\u6709\u4ee5\u4e0b\u4e24\u79cd\u952e\u503c\uff1a"}),r.a.createElement(o.e,{style:{textIndext:0,fontWeight:700},title:"configurable"}),r.a.createElement(o.e,{title:"\u5f53\u4e14\u4ec5\u5f53\u8be5\u5c5e\u6027\u7684 configurable \u4e3a true \u65f6\uff0c\u8be5\u5c5e\u6027\u63cf\u8ff0\u7b26\u624d\u80fd\u591f\u88ab\u6539\u53d8\uff0c\u4e5f\u80fd\u591f\u88ab\u5220\u9664\u3002\u9ed8\u8ba4\u4e3a false\u3002"}),r.a.createElement(o.e,{style:{textIndext:0,fontWeight:700},title:"enumerable"}),r.a.createElement(o.e,{title:"\u5f53\u4e14\u4ec5\u5f53\u8be5\u5c5e\u6027\u7684 enumerable \u4e3a true \u65f6\uff0c\u8be5\u5c5e\u6027\u624d\u80fd\u591f\u51fa\u73b0\u5728\u5bf9\u8c61\u7684\u679a\u4e3e\u5c5e\u6027\u4e2d\u3002\u9ed8\u8ba4\u4e3a false\u3002"}),r.a.createElement(o.e,{title:"\u6570\u636e\u63cf\u8ff0\u7b26\u540c\u65f6\u5177\u6709\u4ee5\u4e0b\u53ef\u9009\u952e\u503c\uff1a"}),r.a.createElement(o.e,{style:{textIndext:0,fontWeight:700},title:"value"}),r.a.createElement(o.e,{title:"\u8be5\u5c5e\u6027\u5bf9\u5e94\u7684\u503c\u3002\u53ef\u4ee5\u662f\u4efb\u4f55\u6709\u6548\u7684 JavaScript \u503c\uff08\u6570\u503c\uff0c\u5bf9\u8c61\uff0c\u51fd\u6570\u7b49\uff09\u3002\u9ed8\u8ba4\u4e3a undefined\u3002"}),r.a.createElement(o.e,{style:{textIndext:0,fontWeight:700},title:"writable"}),r.a.createElement(o.e,{title:"\u5f53\u4e14\u4ec5\u5f53\u8be5\u5c5e\u6027\u7684 writable \u4e3a true \u65f6\uff0c\u8be5\u5c5e\u6027\u624d\u80fd\u88ab\u8d4b\u503c\u8fd0\u7b97\u7b26\u6539\u53d8\u3002\u9ed8\u8ba4\u4e3a false\u3002"}),r.a.createElement(o.e,{title:"\u5b58\u53d6\u63cf\u8ff0\u7b26\u540c\u65f6\u5177\u6709\u4ee5\u4e0b\u53ef\u9009\u952e\u503c\uff1a"}),r.a.createElement(o.e,{style:{textIndext:0,fontWeight:700},title:"get"}),r.a.createElement(o.e,{title:"\u4e00\u4e2a\u7ed9\u5c5e\u6027\u63d0\u4f9b getter \u7684\u65b9\u6cd5\uff0c\u5982\u679c\u6ca1\u6709 getter \u5219\u4e3a undefined\u3002\u8be5\u65b9\u6cd5\u8fd4\u56de\u503c\u88ab\u7528\u4f5c\u5c5e\u6027\u503c\u3002\u9ed8\u8ba4\u4e3a undefined\u3002"}),r.a.createElement(o.e,{style:{textIndext:0,fontWeight:700},title:"set"}),r.a.createElement(o.e,{title:"\u4e00\u4e2a\u7ed9\u5c5e\u6027\u63d0\u4f9b setter \u7684\u65b9\u6cd5\uff0c\u5982\u679c\u6ca1\u6709 setter \u5219\u4e3a undefined\u3002\u8be5\u65b9\u6cd5\u5c06\u63a5\u53d7\u552f\u4e00\u53c2\u6570\uff0c\u5e76\u5c06\u8be5\u53c2\u6570\u7684\u65b0\u503c\u5206\u914d\u7ed9\u8be5\u5c5e\u6027\u3002\u9ed8\u8ba4\u4e3a undefined\u3002"}),r.a.createElement(o.e,{title:"\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff1a"}),r.a.createElement(o.e,{title:"**\u5c5e\u6027\u63cf\u8ff0\u7b26\u5fc5\u987b\u662f\u6570\u636e\u63cf\u8ff0\u7b26\u6216\u8005\u5b58\u53d6\u63cf\u8ff0\u7b26\u4e24\u79cd\u5f62\u5f0f\u4e4b\u4e00\uff0c\u4e0d\u80fd\u540c\u65f6\u662f\u4e24\u8005\u3002**\u8fd9\u5c31\u610f\u5473\u7740\u4f60\u53ef\u4ee5\uff1a"}),r.a.createElement(o.b,{content:'Object.defineProperty({}, "num", {\n    value: 1,\n    writable: true,\n    enumerable: true,\n    configurable: true\n});\n'}),r.a.createElement(o.e,{title:"\u4e5f\u53ef\u4ee5\uff1a"}),r.a.createElement(o.b,{content:'var value = 1;\nObject.defineProperty({}, "num", {\n    get : function(){\n      return value;\n    },\n    set : function(newValue){\n      value = newValue;\n    },\n    enumerable : true,\n    configurable : true\n});\n'}),r.a.createElement(o.e,{title:"\u4f46\u662f\u4e0d\u53ef\u4ee5\uff1a"}),r.a.createElement(o.b,{content:'// \u62a5\u9519\nObject.defineProperty({}, "num", {\n    value: 1,\n    get: function() {\n        return 1;\n    }\n});\n'}),r.a.createElement(o.e,{title:"\u6b64\u5916\uff0c\u6240\u6709\u7684\u5c5e\u6027\u63cf\u8ff0\u7b26\u90fd\u662f\u975e\u5fc5\u987b\u7684\uff0c\u4f46\u662f descriptor \u8fd9\u4e2a\u5b57\u6bb5\u662f\u5fc5\u987b\u7684\uff0c\u5982\u679c\u4e0d\u8fdb\u884c\u4efb\u4f55\u914d\u7f6e\uff0c\u4f60\u53ef\u4ee5\u8fd9\u6837\uff1a"}),r.a.createElement(o.b,{content:'var obj = Object.defineProperty({}, "num", {});\nconsole.log(obj.num); // undefined\n'}),r.a.createElement(o.c,{title:"Setters \u548c Getters"}),r.a.createElement(o.e,{title:"\u4e4b\u6240\u4ee5\u8bb2\u5230 defineProperty\uff0c\u662f\u56e0\u4e3a\u6211\u4eec\u8981\u4f7f\u7528\u5b58\u53d6\u63cf\u8ff0\u7b26\u4e2d\u7684 get \u548c set\uff0c\u8fd9\u4e24\u4e2a\u65b9\u6cd5\u53c8\u88ab\u79f0\u4e3a getter \u548c setter\u3002\u7531 getter \u548c setter \u5b9a\u4e49\u7684\u5c5e\u6027\u79f0\u505a\u201d\u5b58\u53d6\u5668\u5c5e\u6027\u201c\u3002"}),r.a.createElement(o.e,{title:"\u5f53\u7a0b\u5e8f\u67e5\u8be2\u5b58\u53d6\u5668\u5c5e\u6027\u7684\u503c\u65f6\uff0cJavaScript \u8c03\u7528 getter\u65b9\u6cd5\u3002\u8fd9\u4e2a\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u5c31\u662f\u5c5e\u6027\u5b58\u53d6\u8868\u8fbe\u5f0f\u7684\u503c\u3002\u5f53\u7a0b\u5e8f\u8bbe\u7f6e\u4e00\u4e2a\u5b58\u53d6\u5668\u5c5e\u6027\u7684\u503c\u65f6\uff0cJavaScript \u8c03\u7528 setter \u65b9\u6cd5\uff0c\u5c06\u8d4b\u503c\u8868\u8fbe\u5f0f\u53f3\u4fa7\u7684\u503c\u5f53\u505a\u53c2\u6570\u4f20\u5165 setter\u3002\u4ece\u67d0\u79cd\u610f\u4e49\u4e0a\u8bb2\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u8d1f\u8d23\u201c\u8bbe\u7f6e\u201d\u5c5e\u6027\u503c\u3002\u53ef\u4ee5\u5ffd\u7565 setter \u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u3002"}),r.a.createElement(o.e,{title:"\u4e3e\u4e2a\u4f8b\u5b50\uff1a"}),r.a.createElement(o.b,{content:"var obj = {}, value = null;\nObject.defineProperty(obj, \"num\", {\n    get: function(){\n        console.log('\u6267\u884c\u4e86 get \u64cd\u4f5c')\n        return value;\n    },\n    set: function(newValue) {\n        console.log('\u6267\u884c\u4e86 set \u64cd\u4f5c')\n        value = newValue;\n    }\n})\n\nobj.num = 1 // \u6267\u884c\u4e86 set \u64cd\u4f5c\n\nconsole.log(obj.num); // \u6267\u884c\u4e86 get \u64cd\u4f5c // 1\n"}),r.a.createElement(o.e,{title:"\u4e3e\u4e2a\u4f8b\u5b50\uff1a"}),r.a.createElement(o.b,{content:"function Archiver() {\n    var value = null;\n    // archive n. \u6863\u6848\n    var archive = [];\n\n    Object.defineProperty(this, 'num', {\n        get: function() {\n            console.log('\u6267\u884c\u4e86 get \u64cd\u4f5c')\n            return value;\n        },\n        set: function(value) {\n            console.log('\u6267\u884c\u4e86 set \u64cd\u4f5c')\n            value = value;\n            archive.push({ val: value });\n        }\n    });\n\n    this.getArchive = function() { return archive; };\n}\n\nvar arc = new Archiver();\narc.num; // \u6267\u884c\u4e86 get \u64cd\u4f5c\narc.num = 11; // \u6267\u884c\u4e86 set \u64cd\u4f5c\narc.num = 13; // \u6267\u884c\u4e86 set \u64cd\u4f5c\nconsole.log(arc.getArchive()); // [{ val: 11 }, { val: 13 }]\n"}),r.a.createElement(o.c,{title:"watch API"}),r.a.createElement(o.e,{title:"\u65e2\u7136\u53ef\u4ee5\u76d1\u63a7\u6570\u636e\u7684\u6539\u53d8\uff0c\u90a3\u6211\u53ef\u4ee5\u8fd9\u6837\u8bbe\u60f3\uff0c\u5373\u5f53\u6570\u636e\u6539\u53d8\u7684\u65f6\u5019\uff0c\u81ea\u52a8\u8fdb\u884c\u6e32\u67d3\u5de5\u4f5c\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff1a"}),r.a.createElement(o.e,{title:"HTML \u4e2d\u6709\u4e2a span \u6807\u7b7e\u548c button \u6807\u7b7e"}),r.a.createElement(o.b,{content:'<span id="container">1</span>\n<button id="button">\u70b9\u51fb\u52a0 1</button>\n'}),r.a.createElement(o.e,{title:"\u5f53\u70b9\u51fb\u6309\u94ae\u7684\u65f6\u5019\uff0cspan \u6807\u7b7e\u91cc\u7684\u503c\u52a0 1\u3002"}),r.a.createElement(o.e,{title:"\u4f20\u7edf\u7684\u505a\u6cd5\u662f\uff1a"}),r.a.createElement(o.b,{content:'document.getElementById(\'button\').addEventListener("click", function(){\n    var container = document.getElementById("container");\n    container.innerHTML = Number(container.innerHTML) + 1;\n});\n'}),r.a.createElement(o.e,{title:"\u5982\u679c\u4f7f\u7528\u4e86 defineProperty\uff1a"}),r.a.createElement(o.b,{content:"var obj = {\n    value: 1\n}\n\n// \u50a8\u5b58 obj.value \u7684\u503c\nvar value = 1;\n\nObject.defineProperty(obj, \"value\", {\n    get: function() {\n        return value;\n    },\n    set: function(newValue) {\n        value = newValue;\n        document.getElementById('container').innerHTML = newValue;\n    }\n});\n\ndocument.getElementById('button').addEventListener(\"click\", function() {\n    obj.value += 1;\n});\n"}),r.a.createElement(o.e,{title:"\u4ee3\u7801\u770b\u4f3c\u589e\u591a\u4e86\uff0c\u4f46\u662f\u5f53\u6211\u4eec\u9700\u8981\u6539\u53d8 span \u6807\u7b7e\u91cc\u7684\u503c\u7684\u65f6\u5019\uff0c\u76f4\u63a5\u4fee\u6539 obj.value \u7684\u503c\u5c31\u53ef\u4ee5\u4e86\u3002"}),r.a.createElement(o.e,{title:"\u7136\u800c\uff0c\u73b0\u5728\u7684\u5199\u6cd5\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u5355\u72ec\u58f0\u660e\u4e00\u4e2a\u53d8\u91cf\u5b58\u50a8 obj.value \u7684\u503c\uff0c\u56e0\u4e3a\u5982\u679c\u4f60\u5728 set \u4e2d\u76f4\u63a5 obj.value = newValue \u5c31\u4f1a\u9677\u5165\u65e0\u9650\u7684\u5faa\u73af\u4e2d\u3002\u6b64\u5916\uff0c\u6211\u4eec\u53ef\u80fd\u9700\u8981\u76d1\u63a7\u5f88\u591a\u5c5e\u6027\u503c\u7684\u6539\u53d8\uff0c\u8981\u662f\u4e00\u4e2a\u4e00\u4e2a\u5199\uff0c\u4e5f\u5f88\u7d2f\u5450\uff0c\u6240\u4ee5\u6211\u4eec\u7b80\u5355\u5199\u4e2a watch \u51fd\u6570\u3002\u4f7f\u7528\u6548\u679c\u5982\u4e0b\uff1a"}),r.a.createElement(o.b,{content:"var obj = {\n    value: 1\n}\n\nwatch(obj, \"value\", function(newvalue){\n    document.getElementById('container').innerHTML = newvalue;\n})\n\ndocument.getElementById('button').addEventListener(\"click\", function(){\n    obj.value += 1\n});\n"}),r.a.createElement(o.e,{title:"\u6211\u4eec\u6765\u5199\u4e0b\u8fd9\u4e2a watch \u51fd\u6570\uff1a"}),r.a.createElement(o.b,{content:"(function(){\n    var root = this;\n    function watch(obj, name, func){\n        var value = obj[name];\n\n        Object.defineProperty(obj, name, {\n            get: function() {\n                return value;\n            },\n            set: function(newValue) {\n                value = newValue;\n                func(value)\n            }\n        });\n\n        if (value) obj[name] = value\n    }\n\n    this.watch = watch;\n})()\n"}),r.a.createElement(o.e,{title:"\u73b0\u5728\u6211\u4eec\u5df2\u7ecf\u53ef\u4ee5\u76d1\u63a7\u5bf9\u8c61\u5c5e\u6027\u503c\u7684\u6539\u53d8\uff0c\u5e76\u4e14\u53ef\u4ee5\u6839\u636e\u5c5e\u6027\u503c\u7684\u6539\u53d8\uff0c\u6dfb\u52a0\u56de\u8c03\u51fd\u6570\uff0c\u68d2\u68d2\u54d2~"}),r.a.createElement(o.c,{title:"proxy"}),r.a.createElement(o.e,{title:"\u4f7f\u7528 defineProperty \u53ea\u80fd\u91cd\u5b9a\u4e49\u5c5e\u6027\u7684\u8bfb\u53d6\uff08get\uff09\u548c\u8bbe\u7f6e\uff08set\uff09\u884c\u4e3a\uff0c\u5230\u4e86 ES6\uff0c\u63d0\u4f9b\u4e86 Proxy\uff0c\u53ef\u4ee5\u91cd\u5b9a\u4e49\u66f4\u591a\u7684\u884c\u4e3a\uff0c\u6bd4\u5982 in\u3001delete\u3001\u51fd\u6570\u8c03\u7528\u7b49\u66f4\u591a\u884c\u4e3a\u3002"}),r.a.createElement(o.e,{title:"Proxy \u8fd9\u4e2a\u8bcd\u7684\u539f\u610f\u662f\u4ee3\u7406\uff0c\u7528\u5728\u8fd9\u91cc\u8868\u793a\u7531\u5b83\u6765\u201c\u4ee3\u7406\u201d\u67d0\u4e9b\u64cd\u4f5c\uff0cES6 \u539f\u751f\u63d0\u4f9b Proxy \u6784\u9020\u51fd\u6570\uff0c\u7528\u6765\u751f\u6210 Proxy \u5b9e\u4f8b\u3002\u6211\u4eec\u6765\u770b\u770b\u5b83\u7684\u8bed\u6cd5\uff1a"}),r.a.createElement(o.b,{content:"var proxy = new Proxy(target, handler);\n"}),r.a.createElement(o.e,{title:"proxy \u5bf9\u8c61\u7684\u6240\u6709\u7528\u6cd5\uff0c\u90fd\u662f\u4e0a\u9762\u8fd9\u79cd\u5f62\u5f0f\uff0c\u4e0d\u540c\u7684\u53ea\u662fhandler\u53c2\u6570\u7684\u5199\u6cd5\u3002\u5176\u4e2d\uff0cnew Proxy()\u8868\u793a\u751f\u6210\u4e00\u4e2aProxy\u5b9e\u4f8b\uff0ctarget\u53c2\u6570\u8868\u793a\u6240\u8981\u62e6\u622a\u7684\u76ee\u6807\u5bf9\u8c61\uff0chandler\u53c2\u6570\u4e5f\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u7528\u6765\u5b9a\u5236\u62e6\u622a\u884c\u4e3a\u3002"}),r.a.createElement(o.b,{content:"var proxy = new Proxy({}, {\n    get: function(obj, prop) {\n        console.log('\u8bbe\u7f6e get \u64cd\u4f5c')\n        return obj[prop];\n    },\n    set: function(obj, prop, value) {\n        console.log('\u8bbe\u7f6e set \u64cd\u4f5c')\n        obj[prop] = value;\n    }\n});\n\nproxy.time = 35; // \u8bbe\u7f6e set \u64cd\u4f5c\n\nconsole.log(proxy.time); // \u8bbe\u7f6e get \u64cd\u4f5c // 35\n"}),r.a.createElement(o.e,{title:"\u9664\u4e86 get \u548c set \u4e4b\u5916\uff0cproxy \u53ef\u4ee5\u62e6\u622a\u591a\u8fbe 13 \u79cd\u64cd\u4f5c\uff0c\u6bd4\u5982 has(target, propKey)\uff0c\u53ef\u4ee5\u62e6\u622a propKey in proxy \u7684\u64cd\u4f5c\uff0c\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\u3002"}),r.a.createElement(o.b,{content:"// \u4f7f\u7528 has \u65b9\u6cd5\u9690\u85cf\u67d0\u4e9b\u5c5e\u6027\uff0c\u4e0d\u88ab in \u8fd0\u7b97\u7b26\u53d1\u73b0\nvar handler = {\n  has (target, key) {\n    if (key[0] === '_') {\n      return false;\n    }\n    return key in target;\n  }\n};\nvar target = { _prop: 'foo', prop: 'foo' };\nvar proxy = new Proxy(target, handler);\nconsole.log('_prop' in proxy); // false\n"}),r.a.createElement(o.e,{title:"\u53c8\u6bd4\u5982\u8bf4 apply \u65b9\u6cd5\u62e6\u622a\u51fd\u6570\u7684\u8c03\u7528\u3001call \u548c apply \u64cd\u4f5c\u3002"}),r.a.createElement(o.e,{title:"apply \u65b9\u6cd5\u53ef\u4ee5\u63a5\u53d7\u4e09\u4e2a\u53c2\u6570\uff0c\u5206\u522b\u662f\u76ee\u6807\u5bf9\u8c61\u3001\u76ee\u6807\u5bf9\u8c61\u7684\u4e0a\u4e0b\u6587\u5bf9\u8c61\uff08this\uff09\u548c\u76ee\u6807\u5bf9\u8c61\u7684\u53c2\u6570\u6570\u7ec4\uff0c\u4e0d\u8fc7\u8fd9\u91cc\u6211\u4eec\u7b80\u5355\u6f14\u793a\u4e00\u4e0b\uff1a"}),r.a.createElement(o.b,{content:"var target = function () { return 'I am the target'; };\nvar handler = {\n  apply: function () {\n    return 'I am the proxy';\n  }\n};\n\nvar p = new Proxy(target, handler);\n\np();\n// \"I am the proxy\"\n"}),r.a.createElement(o.e,{title:"\u53c8\u6bd4\u5982\u8bf4 ownKeys \u65b9\u6cd5\u53ef\u4ee5\u62e6\u622a\u5bf9\u8c61\u81ea\u8eab\u5c5e\u6027\u7684\u8bfb\u53d6\u64cd\u4f5c\u3002\u5177\u4f53\u6765\u8bf4\uff0c\u62e6\u622a\u4ee5\u4e0b\u64cd\u4f5c\uff1a"}),r.a.createElement(o.d,{list:["Object.getOwnPropertyNames()","Object.getOwnPropertySymbols()","Object.keys()"]}),r.a.createElement(o.e,{title:"\u4e0b\u9762\u7684\u4f8b\u5b50\u662f\u62e6\u622a\u7b2c\u4e00\u4e2a\u5b57\u7b26\u4e3a\u4e0b\u5212\u7ebf\u7684\u5c5e\u6027\u540d\uff0c\u4e0d\u8ba9\u5b83\u88ab for of \u904d\u5386\u5230\u3002"}),r.a.createElement(o.b,{content:"let target = {\n    _bar: 'foo',\n    _prop: 'bar',\n    prop: 'baz'\n  };\n  \n  let handler = {\n    ownKeys (target) {\n      return Reflect.ownKeys(target).filter(key => key[0] !== '_');\n    }\n  };\n  \n  let proxy = new Proxy(target, handler);\n  for (let key of Object.keys(proxy)) {\n    console.log(target[key]);\n  }\n  // \"baz\"\n"}),r.a.createElement(o.e,{title:"\u66f4\u591a\u7684\u62e6\u622a\u884c\u4e3a\u53ef\u4ee5\u67e5\u770b\u962e\u4e00\u5cf0\u8001\u5e08\u7684 \u300aECMAScript 6 \u5165\u95e8\u300b"}),r.a.createElement(o.e,{title:"\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0cproxy \u7684\u6700\u5927\u95ee\u9898\u5728\u4e8e\u6d4f\u89c8\u5668\u652f\u6301\u5ea6\u4e0d\u591f\uff0c\u800c\u4e14\u5f88\u591a\u6548\u679c\u65e0\u6cd5\u4f7f\u7528 poilyfill \u6765\u5f25\u8865\u3002"}),r.a.createElement(o.c,{title:"watch API \u4f18\u5316"}),r.a.createElement(o.e,{title:"\u6211\u4eec\u4f7f\u7528 proxy \u518d\u6765\u5199\u4e00\u4e0b watch \u51fd\u6570\u3002\u4f7f\u7528\u6548\u679c\u5982\u4e0b\uff1a"}),r.a.createElement(o.b,{content:"(function() {\n    var root = this;\n\n    function watch(target, func) {\n\n        var proxy = new Proxy(target, {\n            get: function(target, prop) {\n                return target[prop];\n            },\n            set: function(target, prop, value) {\n                target[prop] = value;\n                func(prop, value);\n            }\n        });\n\n        return proxy;\n    }\n\n    this.watch = watch;\n})()\n\nvar obj = {\n    value: 1\n}\n\nvar newObj = watch(obj, function(key, newvalue) {\n    if (key == 'value') document.getElementById('container').innerHTML = newvalue;\n})\n\ndocument.getElementById('button').addEventListener(\"click\", function() {\n    newObj.value += 1\n});\n"}),r.a.createElement(o.e,{title:"\u6211\u4eec\u4e5f\u53ef\u4ee5\u53d1\u73b0\uff0c\u4f7f\u7528 defineProperty \u548c proxy \u7684\u533a\u522b\uff0c\u5f53\u4f7f\u7528 defineProperty\uff0c\u6211\u4eec\u4fee\u6539\u539f\u6765\u7684 obj \u5bf9\u8c61\u5c31\u53ef\u4ee5\u89e6\u53d1\u62e6\u622a\uff0c\u800c\u4f7f\u7528 proxy\uff0c\u5c31\u5fc5\u987b\u4fee\u6539\u4ee3\u7406\u5bf9\u8c61\uff0c\u5373 Proxy \u7684\u5b9e\u4f8b\u624d\u53ef\u4ee5\u89e6\u53d1\u62e6\u622a\u3002"})))}}}}]);