(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{269:function(e,t,n){e.exports=n.p+"static/media/JS_sort_art7.cdda3f11.gif"},324:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(119),l=n(120);function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,c(t).apply(this,arguments))}var r,a,p;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,o.a.Component),r=t,(a=[{key:"render",value:function(){return o.a.createElement(i.a,null,o.a.createElement("div",{style:{padding:"0 10px"}},o.a.createElement(l.f,{title:"\u5f52\u5e76\u6392\u5e8f\uff08Merge Sort\uff09"}),o.a.createElement(l.e,{title:"\u5f52\u5e76\u6392\u5e8f\u662f\u5efa\u7acb\u5728\u5f52\u5e76\u64cd\u4f5c\u4e0a\u7684\u4e00\u79cd\u6709\u6548\u7684\u6392\u5e8f\u7b97\u6cd5\u3002\u8be5\u7b97\u6cd5\u662f\u91c7\u7528\u5206\u6cbb\u6cd5\uff08Divide and Conquer\uff09\u7684\u4e00\u4e2a\u975e\u5e38\u5178\u578b\u7684\u5e94\u7528\u3002\u5c06\u5df2\u6709\u5e8f\u7684\u5b50\u5e8f\u5217\u5408\u5e76\uff0c\u5f97\u5230\u5b8c\u5168\u6709\u5e8f\u7684\u5e8f\u5217\uff1b\u5373\u5148\u4f7f\u6bcf\u4e2a\u5b50\u5e8f\u5217\u6709\u5e8f\uff0c\u518d\u4f7f\u5b50\u5e8f\u5217\u6bb5\u95f4\u6709\u5e8f\u3002\u82e5\u5c06\u4e24\u4e2a\u6709\u5e8f\u8868\u5408\u5e76\u6210\u4e00\u4e2a\u6709\u5e8f\u8868\uff0c\u79f0\u4e3a2-\u8def\u5f52\u5e76\u3002"}),o.a.createElement(l.e,{style:{textIndent:0,fontWeight:700},title:"\u7b97\u6cd5\u63cf\u8ff0"}),o.a.createElement(l.e,{title:"\u628a\u957f\u5ea6\u4e3an\u7684\u8f93\u5165\u5e8f\u5217\u5206\u6210\u4e24\u4e2a\u957f\u5ea6\u4e3an/2\u7684\u5b50\u5e8f\u5217\uff1b"}),o.a.createElement(l.e,{title:"\u5bf9\u8fd9\u4e24\u4e2a\u5b50\u5e8f\u5217\u5206\u522b\u91c7\u7528\u5f52\u5e76\u6392\u5e8f\uff1b"}),o.a.createElement(l.e,{title:"\u5c06\u4e24\u4e2a\u6392\u5e8f\u597d\u7684\u5b50\u5e8f\u5217\u5408\u5e76\u6210\u4e00\u4e2a\u6700\u7ec8\u7684\u6392\u5e8f\u5e8f\u5217\u3002"}),o.a.createElement(l.e,{style:{textIndent:0,fontWeight:700},title:"\u52a8\u56fe\u6f14\u793a"}),o.a.createElement("img",{style:{width:"100%"},src:n(269),alt:"png"}),o.a.createElement(l.e,{style:{textIndent:0,fontWeight:700},title:"\u4ee3\u7801\u5b9e\u73b0"}),o.a.createElement(l.b,{content:"function mergeSort(arr) { // \u91c7\u7528\u81ea\u4e0a\u800c\u4e0b\u7684\u9012\u5f52\u65b9\u6cd5\n    var len = arr.length;\n    if (len < 2) {\n        return arr;\n    }\n    var middle = Math.floor(len / 2),\n        left = arr.slice(0, middle),\n        right = arr.slice(middle);\n    return merge(mergeSort(left), mergeSort(right));\n}\nfunction merge(left, right) {\n    var result = [];\n    while (left.length > 0 && right.length > 0) {\n        if (left[0] <= right[0]) {\n            result.push(left.shift());\n        } else {\n            result.push(right.shift());\n        }\n    }\n    while (left.length)\n        result.push(left.shift());\n    while (right.length)\n        result.push(right.shift());\n    return result;\n}\n"}),o.a.createElement(l.e,{style:{textIndent:0,fontWeight:700},title:"\u7b97\u6cd5\u5206\u6790"}),o.a.createElement(l.e,{title:"\u5f52\u5e76\u6392\u5e8f\u662f\u4e00\u79cd\u7a33\u5b9a\u7684\u6392\u5e8f\u65b9\u6cd5\u3002\u548c\u9009\u62e9\u6392\u5e8f\u4e00\u6837\uff0c\u5f52\u5e76\u6392\u5e8f\u7684\u6027\u80fd\u4e0d\u53d7\u8f93\u5165\u6570\u636e\u7684\u5f71\u54cd\uff0c\u4f46\u8868\u73b0\u6bd4\u9009\u62e9\u6392\u5e8f\u597d\u7684\u591a\uff0c\u56e0\u4e3a\u59cb\u7ec8\u90fd\u662fO(nlogn\uff09\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u3002\u4ee3\u4ef7\u662f\u9700\u8981\u989d\u5916\u7684\u5185\u5b58\u7a7a\u95f4\u3002"})))}}])&&u(r.prototype,a),p&&u(r,p),t}();t.default=p}}]);