(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{171:function(e,t,n){"use strict";var r=n(0),a=n.n(r),l=n(65);var i=(0,n(25).createHashHistory)();t.a=class extends r.Component{render(){return a.a.createElement("div",null,a.a.createElement(l.f,{mode:"light",icon:"#/Home"===window.location.hash?"":a.a.createElement(l.d,{type:"left"}),onLeftClick:"#/Home"===window.location.hash?()=>{}:()=>{i.go(-1)}},"\u524d\u7aef\u7b14\u8bb0"),this.props.children)}}},172:function(e,t,n){"use strict";n.d(t,"a",function(){return j}),n.d(t,"f",function(){return z}),n.d(t,"c",function(){return H}),n.d(t,"e",function(){return N}),n.d(t,"b",function(){return _}),n.d(t,"d",function(){return T});var r=n(179),a=n.n(r),l=n(180),i=n.n(l),c=n(181),s=n.n(c),o=n(182),u=n.n(o),m=n(183),p=n.n(m),d=n(184),f=n.n(d),h=n(185),E=n.n(h),b=n(186),g=n.n(b),x=n(176),k=n.n(x),v=n(187),y=n.n(v),C=n(0),S=n.n(C),w=n(232);n(173);function V(e,t){var n=g()(e);if(E.a){var r=E()(e);t&&(r=f()(r).call(r,function(t){return p()(e,t).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n,r=null!=arguments[t]?arguments[t]:{};if(t%2)u()(n=V(Object(r),!0)).call(n,function(t){y()(e,t,r[t])});else if(s.a)i()(e,s()(r));else{var l;u()(l=V(Object(r))).call(l,function(t){a()(e,t,p()(r,t))})}}return e}class j extends S.a.Component{render(){let e=this.props,t=e.route,n=e.title,r=e.containerStyle,a=e.titleStyle;return S.a.createElement("div",{className:"blockComponent",style:r},S.a.createElement(w.a,{to:t},S.a.createElement("p",{style:a},n)))}}class z extends S.a.Component{render(){return S.a.createElement("h3",{style:{fontSize:"24px",textAlign:"center",lineHeight:"36px",marginTop:"10px"}},this.props.title)}}class H extends S.a.Component{render(){return S.a.createElement("div",{className:"label"},S.a.createElement("p",null,S.a.createElement("i",{className:"Lborder"})," ",this.props.title))}}class N extends S.a.Component{render(){return S.a.createElement("section",{className:"paragraph",style:I({textIndent:"2em",margin:"10px 0",lineHeight:"26px"},this.props.style)},this.props.title)}}class _ extends S.a.Component{render(){return S.a.createElement("div",{className:"highlight",style:{color:"#ddd"}},S.a.createElement("pre",null,this.props.content))}}class T extends S.a.Component{render(){var e;return S.a.createElement("div",{className:"listItem"},S.a.createElement("ul",null,k()(e=this.props.list).call(e,(e,t)=>S.a.createElement("li",{key:t},e))))}}},173:function(e,t,n){},418:function(e,t,n){e.exports=n.p+"static/media/JS_sort_art11.2b06ab51.jpeg"},481:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(171),i=n(172);t.default=class extends a.a.Component{render(){return a.a.createElement(l.a,null,a.a.createElement("div",{style:{padding:"0 10px"}},a.a.createElement(i.f,{title:"\u6876\u6392\u5e8f\uff08Bucket Sort\uff09"}),a.a.createElement(i.e,{title:"\u6876\u6392\u5e8f\u662f\u8ba1\u6570\u6392\u5e8f\u7684\u5347\u7ea7\u7248\u3002\u5b83\u5229\u7528\u4e86\u51fd\u6570\u7684\u6620\u5c04\u5173\u7cfb\uff0c\u9ad8\u6548\u4e0e\u5426\u7684\u5173\u952e\u5c31\u5728\u4e8e\u8fd9\u4e2a\u6620\u5c04\u51fd\u6570\u7684\u786e\u5b9a\u3002\u6876\u6392\u5e8f (Bucket sort)\u7684\u5de5\u4f5c\u7684\u539f\u7406\uff1a\u5047\u8bbe\u8f93\u5165\u6570\u636e\u670d\u4ece\u5747\u5300\u5206\u5e03\uff0c\u5c06\u6570\u636e\u5206\u5230\u6709\u9650\u6570\u91cf\u7684\u6876\u91cc\uff0c\u6bcf\u4e2a\u6876\u518d\u5206\u522b\u6392\u5e8f\uff08\u6709\u53ef\u80fd\u518d\u4f7f\u7528\u522b\u7684\u6392\u5e8f\u7b97\u6cd5\u6216\u662f\u4ee5\u9012\u5f52\u65b9\u5f0f\u7ee7\u7eed\u4f7f\u7528\u6876\u6392\u5e8f\u8fdb\u884c\u6392\uff09\u3002"}),a.a.createElement(i.e,{style:{textIndent:0,fontWeight:700},title:"\u7b97\u6cd5\u63cf\u8ff0"}),a.a.createElement(i.e,{title:"\u8bbe\u7f6e\u4e00\u4e2a\u5b9a\u91cf\u7684\u6570\u7ec4\u5f53\u4f5c\u7a7a\u6876\uff1b"}),a.a.createElement(i.e,{title:"\u904d\u5386\u8f93\u5165\u6570\u636e\uff0c\u5e76\u4e14\u628a\u6570\u636e\u4e00\u4e2a\u4e00\u4e2a\u653e\u5230\u5bf9\u5e94\u7684\u6876\u91cc\u53bb\uff1b"}),a.a.createElement(i.e,{title:"\u5bf9\u6bcf\u4e2a\u4e0d\u662f\u7a7a\u7684\u6876\u8fdb\u884c\u6392\u5e8f\uff1b"}),a.a.createElement(i.e,{title:"\u4ece\u4e0d\u662f\u7a7a\u7684\u6876\u91cc\u628a\u6392\u597d\u5e8f\u7684\u6570\u636e\u62fc\u63a5\u8d77\u6765\u3002"}),a.a.createElement(i.e,{style:{textIndent:0,fontWeight:700},title:"\u52a8\u56fe\u6f14\u793a"}),a.a.createElement("img",{style:{width:"100%"},src:n(418),alt:"png"}),a.a.createElement(i.e,{style:{textIndent:0,fontWeight:700},title:"\u4ee3\u7801\u5b9e\u73b0"}),a.a.createElement(i.b,{content:"function bucketSort(arr, bucketSize) {\n    if (arr.length === 0) {\n        return arr;\n    }\n    var i;\n    var minValue = arr[0];\n    var maxValue = arr[0];\n    for (i = 1; i < arr.length; i++) {\n        if (arr[i] < minValue) {\n            minValue = arr[i]; // \u8f93\u5165\u6570\u636e\u7684\u6700\u5c0f\u503c\n        } else if (arr[i] > maxValue) {\n            maxValue = arr[i]; // \u8f93\u5165\u6570\u636e\u7684\u6700\u5927\u503c\n        }\n    }\n// \u6876\u7684\u521d\u59cb\u5316\n    var DEFAULT_BUCKET_SIZE = 5; // \u8bbe\u7f6e\u6876\u7684\u9ed8\u8ba4\u6570\u91cf\u4e3a5\n    bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;\n    var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;\n    var buckets = new Array(bucketCount);\n    for (i = 0; i < buckets.length; i++) {\n        buckets[i] = [];\n    }\n// \u5229\u7528\u6620\u5c04\u51fd\u6570\u5c06\u6570\u636e\u5206\u914d\u5230\u5404\u4e2a\u6876\u4e2d\n    for (i = 0; i < arr.length; i++) {\n        buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);\n    }\n    arr.length = 0;\n    for (i = 0; i < buckets.length; i++) {\n        insertionSort(buckets[i]); // \u5bf9\u6bcf\u4e2a\u6876\u8fdb\u884c\u6392\u5e8f\uff0c\u8fd9\u91cc\u4f7f\u7528\u4e86\u63d2\u5165\u6392\u5e8f\n        for (var j = 0; j < buckets[i].length; j++) {\n            arr.push(buckets[i][j]);\n        }\n    }\n    return arr;\n}\n"}),a.a.createElement(i.e,{style:{textIndent:0,fontWeight:700},title:"\u7b97\u6cd5\u5206\u6790"}),a.a.createElement(i.e,{title:"\u6876\u6392\u5e8f\u6700\u597d\u60c5\u51b5\u4e0b\u4f7f\u7528\u7ebf\u6027\u65f6\u95f4O(n)\uff0c\u6876\u6392\u5e8f\u7684\u65f6\u95f4\u590d\u6742\u5ea6\uff0c\u53d6\u51b3\u4e0e\u5bf9\u5404\u4e2a\u6876\u4e4b\u95f4\u6570\u636e\u8fdb\u884c\u6392\u5e8f\u7684\u65f6\u95f4\u590d\u6742\u5ea6\uff0c\u56e0\u4e3a\u5176\u5b83\u90e8\u5206\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u90fd\u4e3aO(n)\u3002\u5f88\u663e\u7136\uff0c\u6876\u5212\u5206\u7684\u8d8a\u5c0f\uff0c\u5404\u4e2a\u6876\u4e4b\u95f4\u7684\u6570\u636e\u8d8a\u5c11\uff0c\u6392\u5e8f\u6240\u7528\u7684\u65f6\u95f4\u4e5f\u4f1a\u8d8a\u5c11\u3002\u4f46\u76f8\u5e94\u7684\u7a7a\u95f4\u6d88\u8017\u5c31\u4f1a\u589e\u5927\u3002"})))}}}}]);