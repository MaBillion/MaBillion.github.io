(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{171:function(e,t,n){"use strict";var r=n(0),l=n.n(r),a=n(65),i=(0,n(25).createHashHistory)();t.a=class extends r.Component{render(){return l.a.createElement("div",null,l.a.createElement(a.f,{mode:"light",icon:"#/Home"===window.location.hash?"":l.a.createElement(a.d,{type:"left"}),onLeftClick:"#/Home"===window.location.hash?()=>{}:()=>{i.go(-1)}},"\u524d\u7aef\u7b14\u8bb0"),this.props.children)}}},172:function(e,t,n){"use strict";n.d(t,"a",function(){return W}),n.d(t,"f",function(){return S}),n.d(t,"c",function(){return k}),n.d(t,"e",function(){return q}),n.d(t,"b",function(){return D}),n.d(t,"d",function(){return F});var r=n(178),l=n.n(r),a=n(179),i=n.n(a),o=n(180),c=n.n(o),s=n(181),m=n.n(s),u=n(182),f=n.n(u),d=n(183),E=n.n(d),h=n(184),g=n.n(h),p=n(185),y=n.n(p),v=n(176),b=n.n(v),x=n(186),P=n.n(x),w=n(0),A=n.n(w),I=n(232);n(173);function C(e,t){var n=y()(e);if(g.a){var r=g()(e);t&&(r=E()(r).call(r,function(t){return f()(e,t).enumerable})),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n,r=null!=arguments[t]?arguments[t]:{};if(t%2)m()(n=C(Object(r),!0)).call(n,function(t){P()(e,t,r[t])});else if(c.a)i()(e,c()(r));else{var a;m()(a=C(Object(r))).call(a,function(t){l()(e,t,f()(r,t))})}}return e}class W extends A.a.Component{render(){var e=this.props,t=e.route,n=e.title,r=e.containerStyle,l=e.titleStyle;return A.a.createElement("div",{className:"blockComponent",style:r},A.a.createElement(I.a,{to:t},A.a.createElement("p",{style:l},n)))}}class S extends A.a.Component{render(){return A.a.createElement("h3",{style:{fontSize:"24px",textAlign:"center",lineHeight:"36px",marginTop:"10px"}},this.props.title)}}class k extends A.a.Component{render(){return A.a.createElement("div",{className:"label"},A.a.createElement("p",null,A.a.createElement("i",{className:"Lborder"})," ",this.props.title))}}class q extends A.a.Component{render(){return A.a.createElement("section",{className:"paragraph",style:j({textIndent:"2em",margin:"10px 0",lineHeight:"26px"},this.props.style)},this.props.title)}}class D extends A.a.Component{render(){return A.a.createElement("div",{className:"highlight",style:{color:"#ddd"}},A.a.createElement("pre",null,this.props.content))}}class F extends A.a.Component{render(){var e;return A.a.createElement("div",{className:"listItem"},A.a.createElement("ul",null,b()(e=this.props.list).call(e,(e,t)=>A.a.createElement("li",{key:t},e))))}}},173:function(e,t,n){},445:function(e,t,n){"use strict";n.r(t);var r=n(0),l=n.n(r),a=n(171),i=n(172);t.default=class extends l.a.Component{render(){return l.a.createElement(a.a,null,l.a.createElement("div",{style:{padding:"0 10px"}},l.a.createElement(i.f,{title:"\u6211\u4eec\u6765\u804a\u804a Promise"}),l.a.createElement(i.c,{title:"\u56de\u8c03"}),l.a.createElement(i.e,{title:"\u8bf4\u8d77 Promise\uff0c\u6211\u4eec\u4e00\u822c\u90fd\u4f1a\u4ece\u56de\u8c03\u6216\u8005\u56de\u8c03\u5730\u72f1\u8bf4\u8d77\uff0c\u90a3\u4e48\u4f7f\u7528\u56de\u8c03\u5230\u5e95\u4f1a\u5bfc\u81f4\u54ea\u4e9b\u4e0d\u597d\u7684\u5730\u65b9\u5462\uff1f"}),l.a.createElement(i.e,{style:{fontWeight:700,textIndent:0},title:"1. \u56de\u8c03\u5d4c\u5957"}),l.a.createElement(i.e,{title:"\u4f7f\u7528\u56de\u8c03\uff0c\u6211\u4eec\u5f88\u6709\u53ef\u80fd\u4f1a\u5c06\u4e1a\u52a1\u4ee3\u7801\u5199\u6210\u5982\u4e0b\u8fd9\u79cd\u5f62\u5f0f\uff1a"}),l.a.createElement(i.b,{content:"doA( function(){\n    doB();\n\n    doC( function(){\n        doD();\n    } )\n\n    doE();\n} );\n\ndoF();\n"}),l.a.createElement(i.e,{title:"\u5f53\u7136\u8fd9\u662f\u4e00\u79cd\u7b80\u5316\u7684\u5f62\u5f0f\uff0c\u7ecf\u8fc7\u4e00\u756a\u7b80\u5355\u7684\u601d\u8003\uff0c\u6211\u4eec\u53ef\u4ee5\u5224\u65ad\u51fa\u6267\u884c\u7684\u987a\u5e8f\u4e3a\uff1a"}),l.a.createElement(i.b,{content:"doA()\ndoF()\ndoB()\ndoC()\ndoE()\ndoD()\n"}),l.a.createElement(i.e,{title:"\u7136\u800c\u5728\u5b9e\u9645\u7684\u9879\u76ee\u4e2d\uff0c\u4ee3\u7801\u4f1a\u66f4\u52a0\u6742\u4e71\uff0c\u4e3a\u4e86\u6392\u67e5\u95ee\u9898\uff0c\u6211\u4eec\u9700\u8981\u7ed5\u8fc7\u5f88\u591a\u788d\u773c\u7684\u5185\u5bb9\uff0c\u4e0d\u65ad\u7684\u5728\u51fd\u6570\u95f4\u8fdb\u884c\u8df3\u8f6c\uff0c\u4f7f\u5f97\u6392\u67e5\u95ee\u9898\u7684\u96be\u5ea6\u4e5f\u5728\u6210\u500d\u589e\u52a0\u3002"}),l.a.createElement(i.e,{title:"\u5f53\u7136\u4e4b\u6240\u4ee5\u5bfc\u81f4\u8fd9\u4e2a\u95ee\u9898\uff0c\u5176\u5b9e\u662f\u56e0\u4e3a\u8fd9\u79cd\u5d4c\u5957\u7684\u4e66\u5199\u65b9\u5f0f\u8ddf\u4eba\u7ebf\u6027\u7684\u601d\u8003\u65b9\u5f0f\u76f8\u8fdd\u548c\uff0c\u4ee5\u81f3\u4e8e\u6211\u4eec\u8981\u591a\u82b1\u4e00\u4e9b\u7cbe\u529b\u53bb\u601d\u8003\u771f\u6b63\u7684\u6267\u884c\u987a\u5e8f\uff0c\u5d4c\u5957\u548c\u7f29\u8fdb\u53ea\u662f\u8fd9\u4e2a\u601d\u8003\u8fc7\u7a0b\u4e2d\u8f6c\u79fb\u6ce8\u610f\u529b\u7684\u7ec6\u679d\u672b\u8282\u800c\u5df2\u3002"}),l.a.createElement(i.e,{title:"\u5f53\u7136\u4e86\uff0c\u4e0e\u4eba\u7ebf\u6027\u7684\u601d\u8003\u65b9\u5f0f\u76f8\u8fdd\u548c\uff0c\u8fd8\u4e0d\u662f\u6700\u7cdf\u7cd5\u7684\uff0c\u5b9e\u9645\u4e0a\uff0c\u6211\u4eec\u8fd8\u4f1a\u5728\u4ee3\u7801\u4e2d\u52a0\u5165\u5404\u79cd\u5404\u6837\u7684\u903b\u8f91\u5224\u65ad\uff0c\u5c31\u6bd4\u5982\u5728\u4e0a\u9762\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0cdoD() \u5fc5\u987b\u5728 doC() \u5b8c\u6210\u540e\u624d\u80fd\u5b8c\u6210\uff0c\u4e07\u4e00 doC() \u6267\u884c\u5931\u8d25\u4e86\u5462\uff1f\u6211\u4eec\u662f\u8981\u91cd\u8bd5 doC() \u5417\uff1f\u8fd8\u662f\u76f4\u63a5\u8f6c\u5230\u5176\u4ed6\u9519\u8bef\u5904\u7406\u51fd\u6570\u4e2d\uff1f\u5f53\u6211\u4eec\u5c06\u8fd9\u4e9b\u5224\u65ad\u90fd\u52a0\u5165\u5230\u8fd9\u4e2a\u6d41\u7a0b\u4e2d\uff0c\u5f88\u5feb\u4ee3\u7801\u5c31\u4f1a\u53d8\u5f97\u975e\u5e38\u590d\u6742\uff0c\u4ee5\u81f3\u4e8e\u65e0\u6cd5\u7ef4\u62a4\u548c\u66f4\u65b0\u3002"}),l.a.createElement(i.e,{style:{fontWeight:700,textIndent:0},title:"2. \u63a7\u5236\u53cd\u8f6c"}),l.a.createElement(i.e,{title:"\u6b63\u5e38\u4e66\u5199\u4ee3\u7801\u7684\u65f6\u5019\uff0c\u6211\u4eec\u7406\u6240\u5f53\u7136\u53ef\u4ee5\u63a7\u5236\u81ea\u5df1\u7684\u4ee3\u7801\uff0c\u7136\u800c\u5f53\u6211\u4eec\u4f7f\u7528\u56de\u8c03\u7684\u65f6\u5019\uff0c\u8fd9\u4e2a\u56de\u8c03\u51fd\u6570\u662f\u5426\u80fd\u63a5\u7740\u6267\u884c\uff0c\u5176\u5b9e\u53d6\u51b3\u4e8e\u4f7f\u7528\u56de\u8c03\u7684\u90a3\u4e2a API\uff0c\u5c31\u6bd4\u5982\uff1a"}),l.a.createElement(i.b,{content:"// \u56de\u8c03\u51fd\u6570\u662f\u5426\u88ab\u6267\u884c\u53d6\u51b3\u4e8e buy \u6a21\u5757\nimport {buy} from './buy.js';\n\nbuy(itemData, function(res) {\n    console.log(res)\n});\n"}),l.a.createElement(i.e,{title:"\u5bf9\u4e8e\u6211\u4eec\u7ecf\u5e38\u4f1a\u4f7f\u7528\u7684 fetch \u8fd9\u79cd API\uff0c\u4e00\u822c\u662f\u6ca1\u6709\u4ec0\u4e48\u95ee\u9898\u7684\uff0c\u4f46\u662f\u5982\u679c\u6211\u4eec\u4f7f\u7528\u7684\u662f\u7b2c\u4e09\u65b9\u7684 API \u5462\uff1f"}),l.a.createElement(i.e,{title:"\u5f53\u4f60\u8c03\u7528\u4e86\u7b2c\u4e09\u65b9\u7684 API\uff0c\u5bf9\u65b9\u662f\u5426\u4f1a\u56e0\u4e3a\u67d0\u4e2a\u9519\u8bef\u5bfc\u81f4\u4f60\u4f20\u5165\u7684\u56de\u8c03\u51fd\u6570\u6267\u884c\u4e86\u591a\u6b21\u5462\uff1f"}),l.a.createElement(i.e,{title:"\u4e3a\u4e86\u907f\u514d\u51fa\u73b0\u8fd9\u6837\u7684\u95ee\u9898\uff0c\u4f60\u53ef\u4ee5\u5728\u81ea\u5df1\u7684\u56de\u8c03\u51fd\u6570\u4e2d\u52a0\u5165\u5224\u65ad\uff0c\u53ef\u662f\u4e07\u4e00\u53c8\u56e0\u4e3a\u67d0\u4e2a\u9519\u8bef\u8fd9\u4e2a\u56de\u8c03\u51fd\u6570\u6ca1\u6709\u6267\u884c\u5462\uff1f \u4e07\u4e00\u8fd9\u4e2a\u56de\u8c03\u51fd\u6570\u6709\u65f6\u540c\u6b65\u6267\u884c\u6709\u65f6\u5f02\u6b65\u6267\u884c\u5462\uff1f"}),l.a.createElement(i.e,{title:"\u6211\u4eec\u603b\u7ed3\u4e00\u4e0b\u8fd9\u4e9b\u60c5\u51b5\uff1a"}),l.a.createElement(i.d,{list:["\u56de\u8c03\u51fd\u6570\u6267\u884c\u591a\u6b21","\u56de\u8c03\u51fd\u6570\u6ca1\u6709\u6267\u884c","\u56de\u8c03\u51fd\u6570\u6709\u65f6\u540c\u6b65\u6267\u884c\u6709\u65f6\u5f02\u6b65\u6267\u884c"]}),l.a.createElement(i.e,{title:"\u5bf9\u4e8e\u8fd9\u4e9b\u60c5\u51b5\uff0c\u4f60\u53ef\u80fd\u90fd\u8981\u5728\u56de\u8c03\u51fd\u6570\u4e2d\u505a\u4e9b\u5904\u7406\uff0c\u5e76\u4e14\u6bcf\u6b21\u6267\u884c\u56de\u8c03\u51fd\u6570\u7684\u65f6\u5019\u90fd\u8981\u505a\u4e9b\u5904\u7406\uff0c\u8fd9\u5c31\u5e26\u6765\u4e86\u5f88\u591a\u91cd\u590d\u7684\u4ee3\u7801\u3002"}),l.a.createElement(i.c,{title:"\u56de\u8c03\u5730\u72f1"}),l.a.createElement(i.e,{title:"\u6211\u4eec\u5148\u770b\u4e00\u4e2a\u7b80\u5355\u7684\u56de\u8c03\u5730\u72f1\u7684\u793a\u4f8b\u3002"}),l.a.createElement(i.e,{title:"\u73b0\u5728\u8981\u627e\u51fa\u4e00\u4e2a\u76ee\u5f55\u4e2d\u6700\u5927\u7684\u6587\u4ef6\uff0c\u5904\u7406\u6b65\u9aa4\u5e94\u8be5\u662f\uff1a"}),l.a.createElement(i.d,{list:["\u7528 fs.readdir \u83b7\u53d6\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6\u5217\u8868\uff1b","\u5faa\u73af\u904d\u5386\u6587\u4ef6\uff0c\u4f7f\u7528 fs.stat \u83b7\u53d6\u6587\u4ef6\u4fe1\u606f","\u6bd4\u8f83\u627e\u51fa\u6700\u5927\u6587\u4ef6\uff1b","\u4ee5\u6700\u5927\u6587\u4ef6\u7684\u6587\u4ef6\u540d\u4e3a\u53c2\u6570\u8c03\u7528\u56de\u8c03\u3002"]}),l.a.createElement(i.e,{title:"\u4ee3\u7801\u4e3a\uff1a"}),l.a.createElement(i.b,{content:"var fs = require('fs');\nvar path = require('path');\n\nfunction findLargest(dir, cb) {\n    // \u8bfb\u53d6\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u6587\u4ef6\n    fs.readdir(dir, function(er, files) {\n        if (er) return cb(er);\n\n        var counter = files.length;\n        var errored = false;\n        var stats = [];\n\n        files.forEach(function(file, index) {\n            // \u8bfb\u53d6\u6587\u4ef6\u4fe1\u606f\n            fs.stat(path.join(dir, file), function(er, stat) {\n\n                if (errored) return;\n\n                if (er) {\n                    errored = true;\n                    return cb(er);\n                }\n\n                stats[index] = stat;\n\n                // \u4e8b\u5148\u7b97\u597d\u6709\u591a\u5c11\u4e2a\u6587\u4ef6\uff0c\u8bfb\u5b8c 1 \u4e2a\u6587\u4ef6\u4fe1\u606f\uff0c\u8ba1\u6570\u51cf 1\uff0c\u5f53\u4e3a 0 \u65f6\uff0c\u8bf4\u660e\u8bfb\u53d6\u5b8c\u6bd5\uff0c\u6b64\u65f6\u6267\u884c\u6700\u7ec8\u7684\u6bd4\u8f83\u64cd\u4f5c\n                if (--counter == 0) {\n\n                    var largest = stats\n                        .filter(function(stat) { return stat.isFile() })\n                        .reduce(function(prev, next) {\n                            if (prev.size > next.size) return prev\n                            return next\n                        })\n\n                    cb(null, files[stats.indexOf(largest)])\n                }\n            })\n        })\n    })\n}\n"}),l.a.createElement(i.e,{title:"\u4f7f\u7528\u65b9\u5f0f\u4e3a\uff1a"}),l.a.createElement(i.b,{content:"// \u67e5\u627e\u5f53\u524d\u76ee\u5f55\u6700\u5927\u7684\u6587\u4ef6\nfindLargest('./', function(er, filename) {\n    if (er) return console.error(er)\n    console.log('largest file was:', filename)\n});\n"}),l.a.createElement(i.e,{title:"\u4f60\u53ef\u4ee5\u5c06\u4ee5\u4e0a\u4ee3\u7801\u590d\u5236\u5230\u4e00\u4e2a\u6bd4\u5982 index.js \u6587\u4ef6\uff0c\u7136\u540e\u6267\u884c node index.js \u5c31\u53ef\u4ee5\u6253\u5370\u51fa\u6700\u5927\u7684\u6587\u4ef6\u7684\u540d\u79f0\u3002"}),l.a.createElement(i.e,{title:"\u770b\u5b8c\u8fd9\u4e2a\u4f8b\u5b50\uff0c\u6211\u4eec\u518d\u6765\u804a\u804a\u56de\u8c03\u5730\u72f1\u7684\u5176\u4ed6\u95ee\u9898\uff1a"}),l.a.createElement(i.e,{style:{fontWeight:700,textIndent:0},title:"1.\u96be\u4ee5\u590d\u7528"}),l.a.createElement(i.e,{title:"\u56de\u8c03\u7684\u987a\u5e8f\u786e\u5b9a\u4e0b\u6765\u4e4b\u540e\uff0c\u60f3\u5bf9\u5176\u4e2d\u7684\u67d0\u4e9b\u73af\u8282\u8fdb\u884c\u590d\u7528\u4e5f\u5f88\u56f0\u96be\uff0c\u7275\u4e00\u53d1\u800c\u52a8\u5168\u8eab\u3002"}),l.a.createElement(i.e,{title:"\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u5982\u679c\u4f60\u60f3\u5bf9 fs.stat \u8bfb\u53d6\u6587\u4ef6\u4fe1\u606f\u8fd9\u6bb5\u4ee3\u7801\u590d\u7528\uff0c\u56e0\u4e3a\u56de\u8c03\u4e2d\u5f15\u7528\u4e86\u5916\u5c42\u7684\u53d8\u91cf\uff0c\u63d0\u53d6\u51fa\u6765\u540e\u8fd8\u9700\u8981\u5bf9\u5916\u5c42\u7684\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\u3002"}),l.a.createElement(i.e,{style:{fontWeight:700,textIndent:0},title:"2.\u5806\u6808\u4fe1\u606f\u88ab\u65ad\u5f00"}),l.a.createElement(i.e,{title:"\u6211\u4eec\u77e5\u9053\uff0cJavaScript \u5f15\u64ce\u7ef4\u62a4\u4e86\u4e00\u4e2a\u6267\u884c\u4e0a\u4e0b\u6587\u6808\uff0c\u5f53\u51fd\u6570\u6267\u884c\u7684\u65f6\u5019\uff0c\u4f1a\u521b\u5efa\u8be5\u51fd\u6570\u7684\u6267\u884c\u4e0a\u4e0b\u6587\u538b\u5165\u6808\u4e2d\uff0c\u5f53\u51fd\u6570\u6267\u884c\u5b8c\u6bd5\u540e\uff0c\u4f1a\u5c06\u8be5\u6267\u884c\u4e0a\u4e0b\u6587\u51fa\u6808\u3002"}),l.a.createElement(i.e,{title:"\u5982\u679c A \u51fd\u6570\u4e2d\u8c03\u7528\u4e86 B \u51fd\u6570\uff0cJavaScript \u4f1a\u5148\u5c06 A \u51fd\u6570\u7684\u6267\u884c\u4e0a\u4e0b\u6587\u538b\u5165\u6808\u4e2d\uff0c\u518d\u5c06 B \u51fd\u6570\u7684\u6267\u884c\u4e0a\u4e0b\u6587\u538b\u5165\u6808\u4e2d\uff0c\u5f53 B \u51fd\u6570\u6267\u884c\u5b8c\u6bd5\uff0c\u5c06 B \u51fd\u6570\u6267\u884c\u4e0a\u4e0b\u6587\u51fa\u6808\uff0c\u5f53 A \u51fd\u6570\u6267\u884c\u5b8c\u6bd5\u540e\uff0c\u5c06 A \u51fd\u6570\u6267\u884c\u4e0a\u4e0b\u6587\u51fa\u6808\u3002"}),l.a.createElement(i.e,{title:"\u8fd9\u6837\u7684\u597d\u5904\u5728\u4e8e\uff0c\u6211\u4eec\u5982\u679c\u4e2d\u65ad\u4ee3\u7801\u6267\u884c\uff0c\u53ef\u4ee5\u68c0\u7d22\u5b8c\u6574\u7684\u5806\u6808\u4fe1\u606f\uff0c\u4ece\u4e2d\u83b7\u53d6\u4efb\u4f55\u6211\u4eec\u60f3\u83b7\u53d6\u7684\u4fe1\u606f\u3002"}),l.a.createElement(i.e,{title:"\u53ef\u662f\u5f02\u6b65\u56de\u8c03\u51fd\u6570\u5e76\u975e\u5982\u6b64\uff0c\u6bd4\u5982\u6267\u884c fs.readdir \u7684\u65f6\u5019\uff0c\u5176\u5b9e\u662f\u5c06\u56de\u8c03\u51fd\u6570\u52a0\u5165\u4efb\u52a1\u961f\u5217\u4e2d\uff0c\u4ee3\u7801\u7ee7\u7eed\u6267\u884c\uff0c\u76f4\u81f3\u4e3b\u7ebf\u7a0b\u5b8c\u6210\u540e\uff0c\u624d\u4f1a\u4ece\u4efb\u52a1\u961f\u5217\u4e2d\u9009\u62e9\u5df2\u7ecf\u5b8c\u6210\u7684\u4efb\u52a1\uff0c\u5e76\u5c06\u5176\u52a0\u5165\u6808\u4e2d\uff0c\u6b64\u65f6\u6808\u4e2d\u53ea\u6709\u8fd9\u4e00\u4e2a\u6267\u884c\u4e0a\u4e0b\u6587\uff0c\u5982\u679c\u56de\u8c03\u62a5\u9519\uff0c\u4e5f\u65e0\u6cd5\u83b7\u53d6\u8c03\u7528\u8be5\u5f02\u6b65\u64cd\u4f5c\u65f6\u7684\u6808\u4e2d\u7684\u4fe1\u606f\uff0c\u4e0d\u5bb9\u6613\u5224\u5b9a\u54ea\u91cc\u51fa\u73b0\u4e86\u9519\u8bef\u3002"}),l.a.createElement(i.e,{title:"\u6b64\u5916\uff0c\u56e0\u4e3a\u662f\u5f02\u6b65\u7684\u7f18\u6545\uff0c\u4f7f\u7528 try catch \u8bed\u53e5\u4e5f\u65e0\u6cd5\u76f4\u63a5\u6355\u83b7\u9519\u8bef\u3002"}),l.a.createElement(i.e,{title:"(\u4e0d\u8fc7 Promise \u5e76\u6ca1\u6709\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898)"}),l.a.createElement(i.e,{style:{fontWeight:700,textIndent:0},title:"3.\u501f\u52a9\u5916\u5c42\u53d8\u91cf"}),l.a.createElement(i.e,{title:"\u5f53\u591a\u4e2a\u5f02\u6b65\u8ba1\u7b97\u540c\u65f6\u8fdb\u884c\uff0c\u6bd4\u5982\u8fd9\u91cc\u904d\u5386\u8bfb\u53d6\u6587\u4ef6\u4fe1\u606f\uff0c\u7531\u4e8e\u65e0\u6cd5\u9884\u671f\u5b8c\u6210\u987a\u5e8f\uff0c\u5fc5\u987b\u501f\u52a9\u5916\u5c42\u4f5c\u7528\u57df\u7684\u53d8\u91cf\uff0c\u6bd4\u5982\u8fd9\u91cc\u7684 count\u3001errored\u3001stats \u7b49\uff0c\u4e0d\u4ec5\u5199\u8d77\u6765\u9ebb\u70e6\uff0c\u800c\u4e14\u5982\u679c\u4f60\u5ffd\u7565\u4e86\u6587\u4ef6\u8bfb\u53d6\u9519\u8bef\u65f6\u7684\u60c5\u51b5\uff0c\u4e0d\u8bb0\u5f55\u9519\u8bef\u72b6\u6001\uff0c\u5c31\u4f1a\u63a5\u7740\u8bfb\u53d6\u5176\u4ed6\u6587\u4ef6\uff0c\u9020\u6210\u65e0\u8c13\u7684\u6d6a\u8d39\u3002\u6b64\u5916\u5916\u5c42\u7684\u53d8\u91cf\uff0c\u4e5f\u53ef\u80fd\u88ab\u5176\u5b83\u540c\u4e00\u4f5c\u7528\u57df\u7684\u51fd\u6570\u8bbf\u95ee\u5e76\u4e14\u4fee\u6539\uff0c\u5bb9\u6613\u9020\u6210\u8bef\u64cd\u4f5c\u3002"}),l.a.createElement(i.e,{title:"\u4e4b\u6240\u4ee5\u5355\u72ec\u8bb2\u8bb2\u56de\u8c03\u5730\u72f1\uff0c\u5176\u5b9e\u662f\u60f3\u8bf4\u5d4c\u5957\u548c\u7f29\u8fdb\u53ea\u662f\u56de\u8c03\u5730\u72f1\u7684\u4e00\u4e2a\u6897\u800c\u5df2\uff0c\u5b83\u5bfc\u81f4\u7684\u95ee\u9898\u8fdc\u975e\u5d4c\u5957\u5bfc\u81f4\u7684\u53ef\u8bfb\u6027\u964d\u4f4e\u800c\u5df2\u3002"}),l.a.createElement(i.c,{title:"\u56de\u8c03\u5730\u72f1"}),l.a.createElement(i.e,{title:"Promise \u4f7f\u5f97\u4ee5\u4e0a\u7edd\u5927\u90e8\u5206\u7684\u95ee\u9898\u90fd\u5f97\u5230\u4e86\u89e3\u51b3\u3002"}),l.a.createElement(i.e,{style:{fontWeight:700,textIndent:0},title:"1. \u5d4c\u5957\u95ee\u9898"}),l.a.createElement(i.e,{title:"\u4e3e\u4e2a\u4f8b\u5b50\uff1a"}),l.a.createElement(i.b,{content:"request(url, function(err, res, body) {\n    if (err) handleError(err);\n    fs.writeFile('1.txt', body, function(err) {\n        request(url2, function(err, res, body) {\n            if (err) handleError(err)\n        })\n    })\n});\n"}),l.a.createElement(i.e,{title:"\u4f7f\u7528 Promise \u540e\uff1a"}),l.a.createElement(i.b,{content:"request(url)\n.then(function(result) {\n    return writeFileAsynv('1.txt', result)\n})\n.then(function(result) {\n    return request(url2)\n})\n.catch(function(e){\n    handleError(e)\n});\n"}),l.a.createElement(i.e,{title:"\u800c\u5bf9\u4e8e\u8bfb\u53d6\u6700\u5927\u6587\u4ef6\u7684\u90a3\u4e2a\u4f8b\u5b50\uff0c\u6211\u4eec\u4f7f\u7528 promise \u53ef\u4ee5\u7b80\u5316\u4e3a\uff1a"}),l.a.createElement(i.b,{content:"var fs = require('fs');\nvar path = require('path');\n\nvar readDir = function(dir) {\n    return new Promise(function(resolve, reject) {\n        fs.readdir(dir, function(err, files) {\n            if (err) reject(err);\n            resolve(files)\n        })\n    })\n}\n\nvar stat = function(path) {\n    return new Promise(function(resolve, reject) {\n        fs.stat(path, function(err, stat) {\n            if (err) reject(err)\n            resolve(stat)\n        })\n    })\n}\n\nfunction findLargest(dir) {\n    return readDir(dir)\n        .then(function(files) {\n            let promises = files.map(file => stat(path.join(dir, file)))\n            return Promise.all(promises).then(function(stats) {\n                return { stats, files }\n            })\n        })\n        .then(data => {\n\n            let largest = data.stats\n                .filter(function(stat) { return stat.isFile() })\n                .reduce((prev, next) => {\n                    if (prev.size > next.size) return prev\n                    return next\n                })\n\n            return data.files[data.stats.indexOf(largest)]\n        })\n\n}\n"}),l.a.createElement(i.e,{style:{fontWeight:700,textIndent:0},title:"2. \u63a7\u5236\u53cd\u8f6c\u518d\u53cd\u8f6c"}),l.a.createElement(i.e,{title:"\u524d\u9762\u6211\u4eec\u8bb2\u5230\u4f7f\u7528\u7b2c\u4e09\u65b9\u56de\u8c03 API \u7684\u65f6\u5019\uff0c\u53ef\u80fd\u4f1a\u9047\u5230\u5982\u4e0b\u95ee\u9898\uff1a"}),l.a.createElement(i.d,{list:["\u56de\u8c03\u51fd\u6570\u6267\u884c\u591a\u6b21","\u56de\u8c03\u51fd\u6570\u6ca1\u6709\u6267\u884c","\u56de\u8c03\u51fd\u6570\u6709\u65f6\u540c\u6b65\u6267\u884c\u6709\u65f6\u5f02\u6b65\u6267\u884c"]}),l.a.createElement(i.e,{title:"\u5bf9\u4e8e\u7b2c\u4e00\u4e2a\u95ee\u9898\uff0cPromise \u53ea\u80fd resolve \u4e00\u6b21\uff0c\u5269\u4e0b\u7684\u8c03\u7528\u90fd\u4f1a\u88ab\u5ffd\u7565\u3002"}),l.a.createElement(i.e,{title:"\u5bf9\u4e8e\u7b2c\u4e8c\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 Promise.race \u51fd\u6570\u6765\u89e3\u51b3\uff1a"}),l.a.createElement(i.b,{content:'function timeoutPromise(delay) {\n    return new Promise( function(resolve,reject){\n        setTimeout( function(){\n            reject( "Timeout!" );\n        }, delay );\n    } );\n}\n\nPromise.race( [\n    foo(),\n    timeoutPromise( 3000 )\n] )\n.then(function(){}, function(err){});\n'}),l.a.createElement(i.e,{title:"\u5bf9\u4e8e\u7b2c\u4e09\u4e2a\u95ee\u9898\uff0c\u4e3a\u4ec0\u4e48\u6709\u7684\u65f6\u5019\u4f1a\u540c\u6b65\u6267\u884c\u6709\u7684\u65f6\u5019\u56de\u5f02\u6b65\u6267\u884c\u5462\uff1f"}),l.a.createElement(i.e,{title:"\u6211\u4eec\u6765\u770b\u4e2a\u4f8b\u5b50\uff1a"}),l.a.createElement(i.b,{content:"var cache = {...};\nfunction downloadFile(url) {\n      if(cache.has(url)) {\n            // \u5982\u679c\u5b58\u5728cache\uff0c\u8fd9\u91cc\u4e3a\u540c\u6b65\u8c03\u7528\n           return Promise.resolve(cache.get(url));\n      }\n     return fetch(url).then(file => cache.set(url, file)); // \u8fd9\u91cc\u4e3a\u5f02\u6b65\u8c03\u7528\n}\nconsole.log('1');\ngetValue.then(() => console.log('2'));\nconsole.log('3');\n"}),l.a.createElement(i.e,{title:"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6709 cahce \u7684\u60c5\u51b5\u4e0b\uff0c\u6253\u5370\u7ed3\u679c\u4e3a 1 2 3\uff0c\u5728\u6ca1\u6709 cache \u7684\u65f6\u5019\uff0c\u6253\u5370\u7ed3\u679c\u4e3a 1 3 2\u3002"}),l.a.createElement(i.e,{title:"\u7136\u800c\u5982\u679c\u5c06\u8fd9\u79cd\u540c\u6b65\u548c\u5f02\u6b65\u6df7\u7528\u7684\u4ee3\u7801\u4f5c\u4e3a\u5185\u90e8\u5b9e\u73b0\uff0c\u53ea\u66b4\u9732\u63a5\u53e3\u7ed9\u5916\u90e8\u8c03\u7528\uff0c\u8c03\u7528\u65b9\u7531\u4e8e\u65e0\u6cd5\u5224\u65ad\u662f\u5230\u5e95\u662f\u5f02\u6b65\u8fd8\u662f\u540c\u6b65\u72b6\u6001\uff0c\u5f71\u54cd\u7a0b\u5e8f\u7684\u53ef\u7ef4\u62a4\u6027\u548c\u53ef\u6d4b\u8bd5\u6027\u3002"}),l.a.createElement(i.e,{title:"\u7b80\u5355\u6765\u8bf4\u5c31\u662f\u540c\u6b65\u548c\u5f02\u6b65\u5171\u5b58\u7684\u60c5\u51b5\u65e0\u6cd5\u4fdd\u8bc1\u7a0b\u5e8f\u903b\u8f91\u7684\u4e00\u81f4\u6027\u3002"}),l.a.createElement(i.e,{title:"\u7136\u800c Promise \u89e3\u51b3\u4e86\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u6765\u770b\u4e2a\u4f8b\u5b50\uff1a"}),l.a.createElement(i.b,{content:"var promise = new Promise(function (resolve){\n    resolve();\n    console.log(1);\n});\npromise.then(function(){\n    console.log(2);\n});\nconsole.log(3);\n\n// 1 3 2\n"}),l.a.createElement(i.e,{title:"\u5373\u4f7f promise \u5bf9\u8c61\u7acb\u523b\u8fdb\u5165 resolved \u72b6\u6001\uff0c\u5373\u540c\u6b65\u8c03\u7528 resolve \u51fd\u6570\uff0cthen \u51fd\u6570\u4e2d\u6307\u5b9a\u7684\u65b9\u6cd5\u4f9d\u7136\u662f\u5f02\u6b65\u8fdb\u884c\u7684\u3002"}),l.a.createElement(i.e,{title:"PromiseA+ \u89c4\u8303\u4e5f\u6709\u660e\u786e\u7684\u89c4\u5b9a\uff1a"}),l.a.createElement(i.e,{style:{background:"#eee"},title:"\u5b9e\u8df5\u4e2d\u8981\u786e\u4fdd onFulfilled \u548c onRejected \u65b9\u6cd5\u5f02\u6b65\u6267\u884c\uff0c\u4e14\u5e94\u8be5\u5728 then \u65b9\u6cd5\u88ab\u8c03\u7528\u7684\u90a3\u4e00\u8f6e\u4e8b\u4ef6\u5faa\u73af\u4e4b\u540e\u7684\u65b0\u6267\u884c\u6808\u4e2d\u6267\u884c\u3002"}),l.a.createElement(i.c,{title:"Promise \u53cd\u6a21\u5f0f"}),l.a.createElement(i.e,{style:{fontWeight:700,textIndent:0},title:"1.Promise \u5d4c\u5957"}),l.a.createElement(i.b,{content:"// bad\nloadSomething().then(function(something) {\n    loadAnotherthing().then(function(another) {\n        DoSomethingOnThem(something, another);\n    });\n});\n"}),l.a.createElement(i.b,{content:"// good\nPromise.all([loadSomething(), loadAnotherthing()])\n.then(function ([something, another]) {\n    DoSomethingOnThem(...[something, another]);\n});\n"}),l.a.createElement(i.e,{style:{fontWeight:700,textIndent:0},title:"2.\u65ad\u5f00\u7684 Promise \u94fe"}),l.a.createElement(i.b,{content:"// bad\nfunction anAsyncCall() {\n    var promise = doSomethingAsync();\n    promise.then(function() {\n        somethingComplicated();\n    });\n\n    return promise;\n}\n"}),l.a.createElement(i.b,{content:"// good\nfunction anAsyncCall() {\n    var promise = doSomethingAsync();\n    return promise.then(function() {\n        somethingComplicated()\n    });\n}\n"}),l.a.createElement(i.e,{style:{fontWeight:700,textIndent:0},title:"3.\u6df7\u4e71\u7684\u96c6\u5408"}),l.a.createElement(i.b,{content:"// bad\nfunction workMyCollection(arr) {\n    var resultArr = [];\n    function _recursive(idx) {\n        if (idx >= resultArr.length) return resultArr;\n\n        return doSomethingAsync(arr[idx]).then(function(res) {\n            resultArr.push(res);\n            return _recursive(idx + 1);\n        });\n    }\n\n    return _recursive(0);\n}\n"}),l.a.createElement(i.e,{title:"\u4f60\u53ef\u4ee5\u5199\u6210\uff1a"}),l.a.createElement(i.b,{content:"function workMyCollection(arr) {\n    return Promise.all(arr.map(function(item) {\n        return doSomethingAsync(item);\n    }));\n}\n"}),l.a.createElement(i.e,{title:"\u5982\u679c\u4f60\u975e\u8981\u4ee5\u961f\u5217\u7684\u5f62\u5f0f\u6267\u884c\uff0c\u4f60\u53ef\u4ee5\u5199\u6210\uff1a"}),l.a.createElement(i.b,{content:"function workMyCollection(arr) {\n    return arr.reduce(function(promise, item) {\n        return promise.then(function(result) {\n            return doSomethingAsyncWithResult(item, result);\n        });\n    }, Promise.resolve());\n}\n"}),l.a.createElement(i.e,{style:{fontWeight:700,textIndent:0},title:"4.catch"}),l.a.createElement(i.b,{content:"// bad\nsomethingAync.then(function() {\n    return somethingElseAsync();\n}, function(err) {\n    handleMyError(err);\n});\n"}),l.a.createElement(i.e,{title:"\u5982\u679c somethingElseAsync \u629b\u51fa\u9519\u8bef\uff0c\u662f\u65e0\u6cd5\u88ab\u6355\u83b7\u7684\u3002\u4f60\u53ef\u4ee5\u5199\u6210\uff1a"}),l.a.createElement(i.b,{content:"// good\nsomethingAsync\n.then(function() {\n    return somethingElseAsync()\n})\n.then(null, function(err) {\n    handleMyError(err);\n});\n"}),l.a.createElement(i.b,{content:"// good\nsomethingAsync()\n.then(function() {\n    return somethingElseAsync();\n})\n.catch(function(err) {\n    handleMyError(err);\n});\n"}),l.a.createElement(i.c,{title:"\u7ea2\u7eff\u706f\u95ee\u9898"}),l.a.createElement(i.e,{title:"\u9898\u76ee\uff1a\u7ea2\u706f\u4e09\u79d2\u4eae\u4e00\u6b21\uff0c\u7eff\u706f\u4e00\u79d2\u4eae\u4e00\u6b21\uff0c\u9ec4\u706f2\u79d2\u4eae\u4e00\u6b21\uff1b\u5982\u4f55\u8ba9\u4e09\u4e2a\u706f\u4e0d\u65ad\u4ea4\u66ff\u91cd\u590d\u4eae\u706f\uff1f\uff08\u7528 Promse \u5b9e\u73b0\uff09"}),l.a.createElement(i.e,{title:"\u4e09\u4e2a\u4eae\u706f\u51fd\u6570\u5df2\u7ecf\u5b58\u5728\uff1a"}),l.a.createElement(i.b,{content:"function red(){\n    console.log('red');\n}\nfunction green(){\n    console.log('green');\n}\nfunction yellow(){\n    console.log('yellow');\n}\n"}),l.a.createElement(i.e,{title:"\u5229\u7528 then \u548c\u9012\u5f52\u5b9e\u73b0\uff1a"}),l.a.createElement(i.b,{content:"function red(){\n    console.log('red');\n}\nfunction green(){\n    console.log('green');\n}\nfunction yellow(){\n    console.log('yellow');\n}\n\nvar light = function(timmer, cb){\n    return new Promise(function(resolve, reject) {\n        setTimeout(function() {\n            cb();\n            resolve();\n        }, timmer);\n    });\n};\n\nvar step = function() {\n    Promise.resolve().then(function(){\n        return light(3000, red);\n    }).then(function(){\n        return light(2000, green);\n    }).then(function(){\n        return light(1000, yellow);\n    }).then(function(){\n        step();\n    });\n}\n\nstep();\n"}),l.a.createElement(i.c,{title:"promisify"}),l.a.createElement(i.e,{title:"\u6709\u7684\u65f6\u5019\uff0c\u6211\u4eec\u9700\u8981\u5c06 callback \u8bed\u6cd5\u7684 API \u6539\u9020\u6210 Promise \u8bed\u6cd5\uff0c\u4e3a\u6b64\u6211\u4eec\u9700\u8981\u4e00\u4e2a promisify \u7684\u65b9\u6cd5\u3002"}),l.a.createElement(i.e,{title:"\u56e0\u4e3a callback \u8bed\u6cd5\u4f20\u53c2\u6bd4\u8f83\u660e\u786e\uff0c\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u4f20\u5165\u56de\u8c03\u51fd\u6570\uff0c\u56de\u8c03\u51fd\u6570\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a\u9519\u8bef\u4fe1\u606f\uff0c\u5982\u679c\u6ca1\u6709\u9519\u8bef\uff0c\u5c31\u662f null\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u5199\u51fa\u4e00\u4e2a\u7b80\u5355\u7684 promisify \u65b9\u6cd5\uff1a"}),l.a.createElement(i.b,{content:"function promisify(original) {\n    return function (...args) {\n        return new Promise((resolve, reject) => {\n            args.push(function callback(err, ...values) {\n                if (err) {\n                    return reject(err);\n                }\n                return resolve(...values)\n            });\n            original.call(this, ...args);\n        });\n    };\n}\n"}),l.a.createElement(i.c,{title:"promisify"}),l.a.createElement(i.e,{style:{fontWeight:700,textIndent:0},title:"1. \u9519\u8bef\u88ab\u5403\u6389"}),l.a.createElement(i.e,{title:"\u9996\u5148\u6211\u4eec\u8981\u7406\u89e3\uff0c\u4ec0\u4e48\u662f\u9519\u8bef\u88ab\u5403\u6389\uff0c\u662f\u6307\u9519\u8bef\u4fe1\u606f\u4e0d\u88ab\u6253\u5370\u5417\uff1f"}),l.a.createElement(i.e,{title:"\u5e76\u4e0d\u662f\uff0c\u4e3e\u4e2a\u4f8b\u5b50\uff1a"}),l.a.createElement(i.b,{content:"throw new Error('error');\nconsole.log(233333);\n"}),l.a.createElement(i.e,{title:"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u56e0\u4e3a throw error \u7684\u7f18\u6545\uff0c\u4ee3\u7801\u88ab\u963b\u65ad\u6267\u884c\uff0c\u5e76\u4e0d\u4f1a\u6253\u5370 233333\uff0c\u518d\u4e3e\u4e2a\u4f8b\u5b50\uff1a"}),l.a.createElement(i.b,{content:"const promise = new Promise(null);\nconsole.log(233333);\n"}),l.a.createElement(i.e,{title:"\u4ee5\u4e0a\u4ee3\u7801\u4f9d\u7136\u4f1a\u88ab\u963b\u65ad\u6267\u884c\uff0c\u8fd9\u662f\u56e0\u4e3a\u5982\u679c\u901a\u8fc7\u65e0\u6548\u7684\u65b9\u5f0f\u4f7f\u7528 Promise\uff0c\u5e76\u4e14\u51fa\u73b0\u4e86\u4e00\u4e2a\u9519\u8bef\u963b\u788d\u4e86\u6b63\u5e38 Promise \u7684\u6784\u9020\uff0c\u7ed3\u679c\u4f1a\u5f97\u5230\u4e00\u4e2a\u7acb\u523b\u8dd1\u51fa\u7684\u5f02\u5e38\uff0c\u800c\u4e0d\u662f\u4e00\u4e2a\u88ab\u62d2\u7edd\u7684 Promise\u3002"}),l.a.createElement(i.e,{title:"\u7136\u800c\u518d\u4e3e\u4e2a\u4f8b\u5b50\uff1a"}),l.a.createElement(i.b,{content:"let promise = new Promise(() => {\n    throw new Error('error')\n});\nconsole.log(2333333);\n"}),l.a.createElement(i.e,{title:"\u8fd9\u6b21\u4f1a\u6b63\u5e38\u7684\u6253\u5370 233333\uff0c\u8bf4\u660e Promise \u5185\u90e8\u7684\u9519\u8bef\u4e0d\u4f1a\u5f71\u54cd\u5230 Promise \u5916\u90e8\u7684\u4ee3\u7801\uff0c\u800c\u8fd9\u79cd\u60c5\u51b5\u6211\u4eec\u5c31\u901a\u5e38\u79f0\u4e3a \u201c\u5403\u6389\u9519\u8bef\u201d\u3002"}),l.a.createElement(i.e,{title:"\u5176\u5b9e\u8fd9\u5e76\u4e0d\u662f Promise \u72ec\u6709\u7684\u5c40\u9650\u6027\uff0ctry..catch \u4e5f\u662f\u8fd9\u6837\uff0c\u540c\u6837\u4f1a\u6355\u83b7\u4e00\u4e2a\u5f02\u5e38\u5e76\u7b80\u5355\u7684\u5403\u6389\u9519\u8bef\u3002"}),l.a.createElement(i.e,{title:"\u800c\u6b63\u662f\u56e0\u4e3a\u9519\u8bef\u88ab\u5403\u6389\uff0cPromise \u94fe\u4e2d\u7684\u9519\u8bef\u5f88\u5bb9\u6613\u88ab\u5ffd\u7565\u6389\uff0c\u8fd9\u4e5f\u662f\u4e3a\u4ec0\u4e48\u4f1a\u4e00\u822c\u63a8\u8350\u5728 Promise \u94fe\u7684\u6700\u540e\u6dfb\u52a0\u4e00\u4e2a catch \u51fd\u6570\uff0c\u56e0\u4e3a\u5bf9\u4e8e\u4e00\u4e2a\u6ca1\u6709\u9519\u8bef\u5904\u7406\u51fd\u6570\u7684 Promise \u94fe\uff0c\u4efb\u4f55\u9519\u8bef\u90fd\u4f1a\u5728\u94fe\u4e2d\u88ab\u4f20\u64ad\u4e0b\u53bb\uff0c\u76f4\u5230\u4f60\u6ce8\u518c\u4e86\u9519\u8bef\u5904\u7406\u51fd\u6570\u3002"}),l.a.createElement(i.e,{style:{fontWeight:700,textIndent:0},title:"2. \u5355\u4e00\u503c"}),l.a.createElement(i.e,{title:"Promise \u53ea\u80fd\u6709\u4e00\u4e2a\u5b8c\u6210\u503c\u6216\u4e00\u4e2a\u62d2\u7edd\u539f\u56e0\uff0c\u7136\u800c\u5728\u771f\u5b9e\u4f7f\u7528\u7684\u65f6\u5019\uff0c\u5f80\u5f80\u9700\u8981\u4f20\u9012\u591a\u4e2a\u503c\uff0c\u4e00\u822c\u505a\u6cd5\u90fd\u662f\u6784\u9020\u4e00\u4e2a\u5bf9\u8c61\u6216\u6570\u7ec4\uff0c\u7136\u540e\u518d\u4f20\u9012\uff0cthen \u4e2d\u83b7\u5f97\u8fd9\u4e2a\u503c\u540e\uff0c\u53c8\u4f1a\u8fdb\u884c\u53d6\u503c\u8d4b\u503c\u7684\u64cd\u4f5c\uff0c\u6bcf\u6b21\u5c01\u88c5\u548c\u89e3\u5c01\u90fd\u65e0\u7591\u8ba9\u4ee3\u7801\u53d8\u5f97\u7b28\u91cd\u3002"}),l.a.createElement(i.e,{title:"\u8bf4\u771f\u7684\uff0c\u5e76\u6ca1\u6709\u4ec0\u4e48\u597d\u7684\u65b9\u6cd5\uff0c\u5efa\u8bae\u662f\u4f7f\u7528 ES6 \u7684\u89e3\u6784\u8d4b\u503c\uff1a"}),l.a.createElement(i.b,{content:"Promise.all([Promise.resolve(1), Promise.resolve(2)])\n.then(([x, y]) => {\n    console.log(x, y);\n});\n"}),l.a.createElement(i.e,{style:{fontWeight:700,textIndent:0},title:"3. \u65e0\u6cd5\u53d6\u6d88"}),l.a.createElement(i.e,{title:"Promise \u4e00\u65e6\u65b0\u5efa\u5b83\u5c31\u4f1a\u7acb\u5373\u6267\u884c\uff0c\u65e0\u6cd5\u4e2d\u9014\u53d6\u6d88\u3002"}),l.a.createElement(i.e,{style:{fontWeight:700,textIndent:0},title:"4. \u65e0\u6cd5\u5f97\u77e5 pending \u72b6\u6001"}),l.a.createElement(i.e,{title:"\u5f53\u5904\u4e8e pending \u72b6\u6001\u65f6\uff0c\u65e0\u6cd5\u5f97\u77e5\u76ee\u524d\u8fdb\u5c55\u5230\u54ea\u4e00\u4e2a\u9636\u6bb5\uff08\u521a\u521a\u5f00\u59cb\u8fd8\u662f\u5373\u5c06\u5b8c\u6210\uff09\u3002"})))}}}}]);