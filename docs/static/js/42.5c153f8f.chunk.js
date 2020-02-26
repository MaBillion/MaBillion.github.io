(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{272:function(e,t,n){e.exports=n.p+"static/media/JS_sort_art10.3c7ddb59.gif"},327:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(119),i=n(120);function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,f(t).apply(this,arguments))}var r,c,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,o.a.Component),r=t,(c=[{key:"render",value:function(){return o.a.createElement(a.a,null,o.a.createElement("div",{style:{padding:"0 10px"}},o.a.createElement(i.f,{title:"\u8ba1\u6570\u6392\u5e8f\uff08Counting Sort\uff09"}),o.a.createElement(i.e,{title:"\u8ba1\u6570\u6392\u5e8f\u4e0d\u662f\u57fa\u4e8e\u6bd4\u8f83\u7684\u6392\u5e8f\u7b97\u6cd5\uff0c\u5176\u6838\u5fc3\u5728\u4e8e\u5c06\u8f93\u5165\u7684\u6570\u636e\u503c\u8f6c\u5316\u4e3a\u952e\u5b58\u50a8\u5728\u989d\u5916\u5f00\u8f9f\u7684\u6570\u7ec4\u7a7a\u95f4\u4e2d\u3002 \u4f5c\u4e3a\u4e00\u79cd\u7ebf\u6027\u65f6\u95f4\u590d\u6742\u5ea6\u7684\u6392\u5e8f\uff0c\u8ba1\u6570\u6392\u5e8f\u8981\u6c42\u8f93\u5165\u7684\u6570\u636e\u5fc5\u987b\u662f\u6709\u786e\u5b9a\u8303\u56f4\u7684\u6574\u6570\u3002"}),o.a.createElement(i.e,{style:{textIndent:0,fontWeight:700},title:"\u7b97\u6cd5\u63cf\u8ff0"}),o.a.createElement(i.e,{title:"\u627e\u51fa\u5f85\u6392\u5e8f\u7684\u6570\u7ec4\u4e2d\u6700\u5927\u548c\u6700\u5c0f\u7684\u5143\u7d20\uff1b"}),o.a.createElement(i.e,{title:"\u7edf\u8ba1\u6570\u7ec4\u4e2d\u6bcf\u4e2a\u503c\u4e3ai\u7684\u5143\u7d20\u51fa\u73b0\u7684\u6b21\u6570\uff0c\u5b58\u5165\u6570\u7ec4C\u7684\u7b2ci\u9879\uff1b"}),o.a.createElement(i.e,{title:"\u5bf9\u6240\u6709\u7684\u8ba1\u6570\u7d2f\u52a0\uff08\u4eceC\u4e2d\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\u5f00\u59cb\uff0c\u6bcf\u4e00\u9879\u548c\u524d\u4e00\u9879\u76f8\u52a0\uff09\uff1b"}),o.a.createElement(i.e,{title:"\u53cd\u5411\u586b\u5145\u76ee\u6807\u6570\u7ec4\uff1a\u5c06\u6bcf\u4e2a\u5143\u7d20i\u653e\u5728\u65b0\u6570\u7ec4\u7684\u7b2cC(i)\u9879\uff0c\u6bcf\u653e\u4e00\u4e2a\u5143\u7d20\u5c31\u5c06C(i)\u51cf\u53bb1\u3002"}),o.a.createElement(i.e,{style:{textIndent:0,fontWeight:700},title:"\u52a8\u56fe\u6f14\u793a"}),o.a.createElement("img",{style:{width:"100%"},src:n(272),alt:"png"}),o.a.createElement(i.e,{style:{textIndent:0,fontWeight:700},title:"\u4ee3\u7801\u5b9e\u73b0"}),o.a.createElement(i.b,{content:"function countingSort(arr, maxValue) {\n    var bucket = new Array(maxValue + 1),\n        sortedIndex = 0;\n    arrLen = arr.length,\n        bucketLen = maxValue + 1;\n    for (var i = 0; i < arrLen; i++) {\n        if (!bucket[arr[i]]) {\n            bucket[arr[i]] = 0;\n        }\n        bucket[arr[i]]++;\n    }\n    for (var j = 0; j < bucketLen; j++) {\n        while (bucket[j] > 0) {\n            arr[sortedIndex++] = j;\n            bucket[j]--;\n        }\n    }\n    return arr;\n}\n"}),o.a.createElement(i.e,{style:{textIndent:0,fontWeight:700},title:"\u7b97\u6cd5\u5206\u6790"}),o.a.createElement(i.e,{title:"\u8ba1\u6570\u6392\u5e8f\u662f\u4e00\u4e2a\u7a33\u5b9a\u7684\u6392\u5e8f\u7b97\u6cd5\u3002\u5f53\u8f93\u5165\u7684\u5143\u7d20\u662f n \u4e2a 0\u5230 k \u4e4b\u95f4\u7684\u6574\u6570\u65f6\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u662fO(n+k)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6\u4e5f\u662fO(n+k)\uff0c\u5176\u6392\u5e8f\u901f\u5ea6\u5feb\u4e8e\u4efb\u4f55\u6bd4\u8f83\u6392\u5e8f\u7b97\u6cd5\u3002\u5f53k\u4e0d\u662f\u5f88\u5927\u5e76\u4e14\u5e8f\u5217\u6bd4\u8f83\u96c6\u4e2d\u65f6\uff0c\u8ba1\u6570\u6392\u5e8f\u662f\u4e00\u4e2a\u5f88\u6709\u6548\u7684\u6392\u5e8f\u7b97\u6cd5\u3002"})))}}])&&l(r.prototype,c),s&&l(r,s),t}();t.default=s}}]);