(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{171:function(e,t,n){"use strict";var r=n(0),a=n.n(r),l=n(65);var i=(0,n(25).createHashHistory)();t.a=class extends r.Component{render(){return a.a.createElement("div",null,a.a.createElement(l.f,{mode:"light",icon:"#/Home"===window.location.hash?"":a.a.createElement(l.d,{type:"left"}),onLeftClick:"#/Home"===window.location.hash?()=>{}:()=>{i.go(-1)}},"\u524d\u7aef\u7b14\u8bb0"),this.props.children)}}},172:function(e,t,n){"use strict";n.d(t,"a",function(){return L}),n.d(t,"f",function(){return N}),n.d(t,"c",function(){return S}),n.d(t,"e",function(){return O}),n.d(t,"b",function(){return W}),n.d(t,"d",function(){return J});var r=n(179),a=n.n(r),l=n(180),i=n.n(l),c=n(181),s=n.n(c),o=n(182),u=n.n(o),m=n(183),d=n.n(m),p=n(184),f=n.n(p),h=n(185),E=n.n(h),x=n(186),g=n.n(x),b=n(176),v=n.n(b),y=n(187),k=n.n(y),C=n(0),w=n.n(C),j=n(232);n(173);function I(e,t){var n=g()(e);if(E.a){var r=E()(e);t&&(r=f()(r).call(r,function(t){return d()(e,t).enumerable})),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n,r=null!=arguments[t]?arguments[t]:{};if(t%2)u()(n=I(Object(r),!0)).call(n,function(t){k()(e,t,r[t])});else if(s.a)i()(e,s()(r));else{var l;u()(l=I(Object(r))).call(l,function(t){a()(e,t,d()(r,t))})}}return e}class L extends w.a.Component{render(){let e=this.props,t=e.route,n=e.title,r=e.containerStyle,a=e.titleStyle;return w.a.createElement("div",{className:"blockComponent",style:r},w.a.createElement(j.a,{to:t},w.a.createElement("p",{style:a},n)))}}class N extends w.a.Component{render(){return w.a.createElement("h3",{style:{fontSize:"24px",textAlign:"center",lineHeight:"36px",marginTop:"10px"}},this.props.title)}}class S extends w.a.Component{render(){return w.a.createElement("div",{className:"label"},w.a.createElement("p",null,w.a.createElement("i",{className:"Lborder"})," ",this.props.title))}}class O extends w.a.Component{render(){return w.a.createElement("section",{className:"paragraph",style:H({textIndent:"2em",margin:"10px 0",lineHeight:"26px"},this.props.style)},this.props.title)}}class W extends w.a.Component{render(){return w.a.createElement("div",{className:"highlight",style:{color:"#ddd"}},w.a.createElement("pre",null,this.props.content))}}class J extends w.a.Component{render(){var e;return w.a.createElement("div",{className:"listItem"},w.a.createElement("ul",null,v()(e=this.props.list).call(e,(e,t)=>w.a.createElement("li",{key:t},e))))}}},173:function(e,t,n){},417:function(e,t,n){e.exports=n.p+"static/media/JS_sort_art10.3c7ddb59.gif"},480:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(171),i=n(172);t.default=class extends a.a.Component{render(){return a.a.createElement(l.a,null,a.a.createElement("div",{style:{padding:"0 10px"}},a.a.createElement(i.f,{title:"\u8ba1\u6570\u6392\u5e8f\uff08Counting Sort\uff09"}),a.a.createElement(i.e,{title:"\u8ba1\u6570\u6392\u5e8f\u4e0d\u662f\u57fa\u4e8e\u6bd4\u8f83\u7684\u6392\u5e8f\u7b97\u6cd5\uff0c\u5176\u6838\u5fc3\u5728\u4e8e\u5c06\u8f93\u5165\u7684\u6570\u636e\u503c\u8f6c\u5316\u4e3a\u952e\u5b58\u50a8\u5728\u989d\u5916\u5f00\u8f9f\u7684\u6570\u7ec4\u7a7a\u95f4\u4e2d\u3002 \u4f5c\u4e3a\u4e00\u79cd\u7ebf\u6027\u65f6\u95f4\u590d\u6742\u5ea6\u7684\u6392\u5e8f\uff0c\u8ba1\u6570\u6392\u5e8f\u8981\u6c42\u8f93\u5165\u7684\u6570\u636e\u5fc5\u987b\u662f\u6709\u786e\u5b9a\u8303\u56f4\u7684\u6574\u6570\u3002"}),a.a.createElement(i.e,{style:{textIndent:0,fontWeight:700},title:"\u7b97\u6cd5\u63cf\u8ff0"}),a.a.createElement(i.e,{title:"\u627e\u51fa\u5f85\u6392\u5e8f\u7684\u6570\u7ec4\u4e2d\u6700\u5927\u548c\u6700\u5c0f\u7684\u5143\u7d20\uff1b"}),a.a.createElement(i.e,{title:"\u7edf\u8ba1\u6570\u7ec4\u4e2d\u6bcf\u4e2a\u503c\u4e3ai\u7684\u5143\u7d20\u51fa\u73b0\u7684\u6b21\u6570\uff0c\u5b58\u5165\u6570\u7ec4C\u7684\u7b2ci\u9879\uff1b"}),a.a.createElement(i.e,{title:"\u5bf9\u6240\u6709\u7684\u8ba1\u6570\u7d2f\u52a0\uff08\u4eceC\u4e2d\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\u5f00\u59cb\uff0c\u6bcf\u4e00\u9879\u548c\u524d\u4e00\u9879\u76f8\u52a0\uff09\uff1b"}),a.a.createElement(i.e,{title:"\u53cd\u5411\u586b\u5145\u76ee\u6807\u6570\u7ec4\uff1a\u5c06\u6bcf\u4e2a\u5143\u7d20i\u653e\u5728\u65b0\u6570\u7ec4\u7684\u7b2cC(i)\u9879\uff0c\u6bcf\u653e\u4e00\u4e2a\u5143\u7d20\u5c31\u5c06C(i)\u51cf\u53bb1\u3002"}),a.a.createElement(i.e,{style:{textIndent:0,fontWeight:700},title:"\u52a8\u56fe\u6f14\u793a"}),a.a.createElement("img",{style:{width:"100%"},src:n(417),alt:"png"}),a.a.createElement(i.e,{style:{textIndent:0,fontWeight:700},title:"\u4ee3\u7801\u5b9e\u73b0"}),a.a.createElement(i.b,{content:"function countingSort(arr, maxValue) {\n    var bucket = new Array(maxValue + 1),\n        sortedIndex = 0;\n    arrLen = arr.length,\n        bucketLen = maxValue + 1;\n    for (var i = 0; i < arrLen; i++) {\n        if (!bucket[arr[i]]) {\n            bucket[arr[i]] = 0;\n        }\n        bucket[arr[i]]++;\n    }\n    for (var j = 0; j < bucketLen; j++) {\n        while (bucket[j] > 0) {\n            arr[sortedIndex++] = j;\n            bucket[j]--;\n        }\n    }\n    return arr;\n}\n"}),a.a.createElement(i.e,{style:{textIndent:0,fontWeight:700},title:"\u7b97\u6cd5\u5206\u6790"}),a.a.createElement(i.e,{title:"\u8ba1\u6570\u6392\u5e8f\u662f\u4e00\u4e2a\u7a33\u5b9a\u7684\u6392\u5e8f\u7b97\u6cd5\u3002\u5f53\u8f93\u5165\u7684\u5143\u7d20\u662f n \u4e2a 0\u5230 k \u4e4b\u95f4\u7684\u6574\u6570\u65f6\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u662fO(n+k)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6\u4e5f\u662fO(n+k)\uff0c\u5176\u6392\u5e8f\u901f\u5ea6\u5feb\u4e8e\u4efb\u4f55\u6bd4\u8f83\u6392\u5e8f\u7b97\u6cd5\u3002\u5f53k\u4e0d\u662f\u5f88\u5927\u5e76\u4e14\u5e8f\u5217\u6bd4\u8f83\u96c6\u4e2d\u65f6\uff0c\u8ba1\u6570\u6392\u5e8f\u662f\u4e00\u4e2a\u5f88\u6709\u6548\u7684\u6392\u5e8f\u7b97\u6cd5\u3002"})))}}}}]);