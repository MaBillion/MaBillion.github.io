(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{30:function(e,t,n){"use strict";n(33);var r=n(34),o=n.n(r),a=(n(35),n(36)),i=n.n(a),c=n(0),l=n.n(c),u=(0,n(4).createHashHistory)();function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,y(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,c["Component"]),n=t,(r=[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(o.a,{mode:"light",icon:"#/Home"===window.location.hash?"":l.a.createElement(i.a,{type:"left"}),onLeftClick:"#/Home"===window.location.hash?function(){}:function(){u.go(-1)}},"\u524d\u7aef\u7b14\u8bb0"),this.props.children)}}])&&s(n.prototype,r),a&&s(n,a),t}();t.a=b},31:function(e,t,n){"use strict";n.d(t,"a",function(){return E}),n.d(t,"f",function(){return d}),n.d(t,"c",function(){return v}),n.d(t,"e",function(){return g}),n.d(t,"b",function(){return O}),n.d(t,"d",function(){return S});var r=n(0),o=n.n(r),a=n(37);n(32);function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach(function(t){u(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function y(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(e){function t(){return f(this,t),y(this,m(t).apply(this,arguments))}return b(t,o.a.Component),p(t,[{key:"render",value:function(){var e=this.props,t=e.route,n=e.title,r=e.containerStyle,i=e.titleStyle;return o.a.createElement("div",{className:"blockComponent",style:r},o.a.createElement(a.a,{to:t},o.a.createElement("p",{style:i},n)))}}]),t}(),d=function(e){function t(){return f(this,t),y(this,m(t).apply(this,arguments))}return b(t,o.a.Component),p(t,[{key:"render",value:function(){return o.a.createElement("h3",{style:{fontSize:"24px",textAlign:"center",lineHeight:"36px",marginTop:"10px"}},this.props.title)}}]),t}(),v=function(e){function t(){return f(this,t),y(this,m(t).apply(this,arguments))}return b(t,o.a.Component),p(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"label"},o.a.createElement("p",null,o.a.createElement("i",{className:"Lborder"})," ",this.props.title))}}]),t}(),g=function(e){function t(){return f(this,t),y(this,m(t).apply(this,arguments))}return b(t,o.a.Component),p(t,[{key:"render",value:function(){return o.a.createElement("section",{className:"paragraph",style:l({textIndent:"2em",margin:"10px 0",lineHeight:"26px"},this.props.style)},this.props.title)}}]),t}(),O=function(e){function t(){return f(this,t),y(this,m(t).apply(this,arguments))}return b(t,o.a.Component),p(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"highlight",style:{color:"#ddd"}},o.a.createElement("pre",null,this.props.content))}}]),t}(),S=function(e){function t(){return f(this,t),y(this,m(t).apply(this,arguments))}return b(t,o.a.Component),p(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"listItem"},o.a.createElement("ul",null,this.props.list.map(function(e,t){return o.a.createElement("li",{key:t},e)})))}}]),t}()},32:function(e,t,n){},323:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(30),i=n(31);function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,f(t).apply(this,arguments))}var n,r,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){return o.a.createElement(a.a,null,o.a.createElement("div",{style:{padding:"0 10px"}},o.a.createElement(i.f,{title:"\u6df1\u5165\u7406\u89e3javascript\u4f5c\u7528\u57df\u7cfb\u5217\u7b2c\u4e00\u7bc7\u2014\u2014\u5185\u90e8\u539f\u7406"}),o.a.createElement(i.e,{title:"javascript\u62e5\u6709\u4e00\u5957\u8bbe\u8ba1\u826f\u597d\u7684\u89c4\u5219\u6765\u5b58\u50a8\u53d8\u91cf\uff0c\u5e76\u4e14\u4e4b\u540e\u53ef\u4ee5\u65b9\u4fbf\u5730\u627e\u5230\u8fd9\u4e9b\u53d8\u91cf\uff0c\u8fd9\u5957\u89c4\u5219\u88ab\u79f0\u4e3a\u4f5c\u7528\u57df\u3002\u4f5c\u7528\u57df\u8c8c\u4f3c\u7b80\u5355\uff0c\u5b9e\u5219\u590d\u6742\uff0c\u7531\u4e8e\u4f5c\u7528\u57df\u4e0ethis\u673a\u5236\u975e\u5e38\u5bb9\u6613\u6df7\u6dc6\uff0c\u4f7f\u5f97\u7406\u89e3\u4f5c\u7528\u57df\u7684\u539f\u7406\u66f4\u4e3a\u91cd\u8981\u3002\u672c\u6587\u662f\u6df1\u5165\u7406\u89e3javascript\u4f5c\u7528\u57df\u7cfb\u5217\u7684\u7b2c\u4e00\u7bc7\u2014\u2014\u5185\u90e8\u539f\u7406"}),o.a.createElement(i.e,{title:"\u5185\u90e8\u539f\u7406\u5206\u6210\u7f16\u8bd1\u3001\u6267\u884c\u3001\u67e5\u8be2\u3001\u5d4c\u5957\u548c\u5f02\u5e38\u4e94\u4e2a\u90e8\u5206\u8fdb\u884c\u4ecb\u7ecd\uff0c\u6700\u540e\u4ee5\u4e00\u4e2a\u5b9e\u4f8b\u8fc7\u7a0b\u5bf9\u539f\u7406\u8fdb\u884c\u5b8c\u6574\u8bf4\u660e"}),o.a.createElement(i.c,{title:"\u7f16\u8bd1"}),o.a.createElement(i.e,{title:"\u4ee5var a = 2;\u4e3a\u4f8b\uff0c\u8bf4\u660ejavascript\u7684\u5185\u90e8\u7f16\u8bd1\u8fc7\u7a0b\uff0c\u4e3b\u8981\u5305\u62ec\u4ee5\u4e0b\u4e09\u6b65\uff1a"}),o.a.createElement(i.e,{style:{textIndent:"0"},title:"\u30101\u3011\u5206\u8bcd(tokenizing)"}),o.a.createElement(i.e,{title:"\u628a\u7531\u5b57\u7b26\u7ec4\u6210\u7684\u5b57\u7b26\u4e32\u5206\u89e3\u6210\u6709\u610f\u4e49\u7684\u4ee3\u7801\u5757\uff0c\u8fd9\u4e9b\u4ee3\u7801\u5757\u88ab\u79f0\u4e3a\u8bcd\u6cd5\u5355\u5143(token)"}),o.a.createElement(i.e,{title:"var a = 2;\u88ab\u5206\u89e3\u6210\u4e3a\u4e0b\u9762\u8fd9\u4e9b\u8bcd\u6cd5\u5355\u5143\uff1avar\u3001a\u3001=\u30012\u3001;\u3002\u8fd9\u4e9b\u8bcd\u6cd5\u5355\u5143\u7ec4\u6210\u4e86\u4e00\u4e2a\u8bcd\u6cd5\u5355\u5143\u6d41\u6570\u7ec4"}),o.a.createElement(i.b,{content:'// \u8bcd\u6cd5\u5206\u6790\u540e\u7684\u7ed3\u679c\n[\n  "var" : "keyword",\n  "a" : "identifier",\n  "="   : "assignment",\n  "2"  : "integer",\n  ";"   : "eos" (end of statement)\n]'}),o.a.createElement(i.e,{style:{textIndent:"0"},title:"\u30102\u3011\u89e3\u6790(parsing)"}),o.a.createElement(i.e,{title:"\u628a\u8bcd\u6cd5\u5355\u5143\u6d41\u6570\u7ec4\u8f6c\u6362\u6210\u4e00\u4e2a\u7531\u5143\u7d20\u9010\u7ea7\u5d4c\u5957\u6240\u7ec4\u6210\u7684\u4ee3\u8868\u7a0b\u5e8f\u8bed\u6cd5\u7ed3\u6784\u7684\u6811\uff0c\u8fd9\u4e2a\u6811\u88ab\u79f0\u4e3a\u201c\u62bd\u8c61\u8bed\u6cd5\u6811\u201d (Abstract Syntax Tree, AST)"}),o.a.createElement(i.e,{title:"var a = 2;\u7684\u62bd\u8c61\u8bed\u6cd5\u6811\u4e2d\u6709\u4e00\u4e2a\u53ebVariableDeclaration\u7684\u9876\u7ea7\u8282\u70b9\uff0c\u63a5\u4e0b\u6765\u662f\u4e00\u4e2a\u53ebIdentifier(\u5b83\u7684\u503c\u662fa)\u7684\u5b50\u8282\u70b9\uff0c\u4ee5\u53ca\u4e00\u4e2a\u53ebAssignmentExpression\u7684\u5b50\u8282\u70b9\uff0c\u4e14\u8be5\u8282\u70b9\u6709\u4e00\u4e2a\u53ebNumericliteral(\u5b83\u7684\u503c\u662f2)\u7684\u5b50\u8282\u70b9"}),o.a.createElement(i.b,{content:'{\n    operation: "=",\n    left: {\n      keyword: "var",\n      right: "a"\n    }\n    right: "2"\n}'}),o.a.createElement(i.e,{style:{textIndent:"0"},title:"\u30103\u3011\u4ee3\u7801\u751f\u6210"}),o.a.createElement(i.e,{title:"\u5c06AST\u8f6c\u6362\u4e3a\u53ef\u6267\u884c\u4ee3\u7801\u7684\u8fc7\u7a0b\u88ab\u79f0\u4e3a\u4ee3\u7801\u751f\u6210"}),o.a.createElement(i.e,{title:"var a=2;\u7684\u62bd\u8c61\u8bed\u6cd5\u6811\u8f6c\u4e3a\u4e00\u7ec4\u673a\u5668\u6307\u4ee4\uff0c\u7528\u6765\u521b\u5efa\u4e00\u4e2a\u53eb\u4f5ca\u7684\u53d8\u91cf(\u5305\u62ec\u5206\u914d\u5185\u5b58\u7b49)\uff0c\u5e76\u5c06\u503c2\u50a8\u5b58\u5728a\u4e2d"}),o.a.createElement(i.e,{title:"\u5b9e\u9645\u4e0a\uff0cjavascript\u5f15\u64ce\u7684\u7f16\u8bd1\u8fc7\u7a0b\u8981\u590d\u6742\u5f97\u591a\uff0c\u5305\u62ec\u5927\u91cf\u4f18\u5316\u64cd\u4f5c\uff0c\u4e0a\u9762\u7684\u4e09\u4e2a\u6b65\u9aa4\u662f\u7f16\u8bd1\u8fc7\u7a0b\u7684\u57fa\u672c\u6982\u8ff0"}),o.a.createElement(i.e,{title:"\u4efb\u4f55\u4ee3\u7801\u7247\u6bb5\u5728\u6267\u884c\u524d\u90fd\u8981\u8fdb\u884c\u7f16\u8bd1\uff0c\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\u7f16\u8bd1\u53d1\u751f\u5728\u4ee3\u7801\u6267\u884c\u524d\u7684\u51e0\u5fae\u79d2\u3002javascript\u7f16\u8bd1\u5668\u9996\u5148\u4f1a\u5bf9var a=2;\u8fd9\u6bb5\u7a0b\u5e8f\u8fdb\u884c\u7f16\u8bd1\uff0c\u7136\u540e\u505a\u597d\u6267\u884c\u5b83\u7684\u51c6\u5907\uff0c\u5e76\u4e14\u901a\u5e38\u9a6c\u4e0a\u5c31\u4f1a\u6267\u884c\u5b83"}),o.a.createElement(i.c,{title:"\u6267\u884c"}),o.a.createElement(i.e,{title:"\u7b80\u800c\u8a00\u4e4b\uff0c\u7f16\u8bd1\u8fc7\u7a0b\u5c31\u662f\u7f16\u8bd1\u5668\u628a\u7a0b\u5e8f\u5206\u89e3\u6210\u8bcd\u6cd5\u5355\u5143(token)\uff0c\u7136\u540e\u628a\u8bcd\u6cd5\u5355\u5143\u89e3\u6790\u6210\u8bed\u6cd5\u6811(AST)\uff0c\u518d\u628a\u8bed\u6cd5\u6811\u53d8\u6210\u673a\u5668\u6307\u4ee4\u7b49\u5f85\u6267\u884c\u7684\u8fc7\u7a0b"}),o.a.createElement(i.e,{title:"\u5b9e\u9645\u4e0a\uff0c\u4ee3\u7801\u8fdb\u884c\u7f16\u8bd1\uff0c\u8fd8\u8981\u6267\u884c\u3002\u4e0b\u9762\u4ecd\u7136\u4ee5var a = 2;\u4e3a\u4f8b\uff0c\u6df1\u5165\u8bf4\u660e\u7f16\u8bd1\u548c\u6267\u884c\u8fc7\u7a0b"}),o.a.createElement(i.e,{style:{textIndent:"0"},title:"\u30101\u3011\u7f16\u8bd1"}),o.a.createElement(i.e,{title:"1\u3001\u7f16\u8bd1\u5668\u67e5\u627e\u4f5c\u7528\u57df\u662f\u5426\u5df2\u7ecf\u6709\u4e00\u4e2a\u540d\u79f0\u4e3aa\u7684\u53d8\u91cf\u5b58\u5728\u4e8e\u540c\u4e00\u4e2a\u4f5c\u7528\u57df\u7684\u96c6\u5408\u4e2d\u3002\u5982\u679c\u662f\uff0c\u7f16\u8bd1\u5668\u4f1a\u5ffd\u7565\u8be5\u58f0\u660e\uff0c\u7ee7\u7eed\u8fdb\u884c\u7f16\u8bd1\uff1b\u5426\u5219\u5b83\u4f1a\u8981\u6c42\u4f5c\u7528\u57df\u5728\u5f53\u524d\u4f5c\u7528\u57df\u7684\u96c6\u5408\u4e2d\u58f0\u660e\u4e00\u4e2a\u65b0\u7684\u53d8\u91cf\uff0c\u5e76\u547d\u540d\u4e3aa"}),o.a.createElement(i.e,{title:"2\u3001\u7f16\u8bd1\u5668\u5c06var a = 2;\u8fd9\u4e2a\u4ee3\u7801\u7247\u6bb5\u7f16\u8bd1\u6210\u7528\u4e8e\u6267\u884c\u7684\u673a\u5668\u6307\u4ee4"}),o.a.createElement(i.e,{title:"\u6ce8\u610f\uff1a\u4f9d\u636e\u7f16\u8bd1\u5668\u7684\u7f16\u8bd1\u539f\u7406\uff0cjavascript\u4e2d\u7684\u91cd\u590d\u58f0\u660e\u662f\u5408\u6cd5\u7684"}),o.a.createElement(i.b,{content:"//test\u5728\u4f5c\u7528\u57df\u4e2d\u9996\u6b21\u51fa\u73b0\uff0c\u6240\u4ee5\u58f0\u660e\u65b0\u53d8\u91cf\uff0c\u5e76\u5c0620\u8d4b\u503c\u7ed9test\nvar test = 20;\n//test\u5728\u4f5c\u7528\u57df\u4e2d\u5df2\u7ecf\u5b58\u5728\uff0c\u76f4\u63a5\u4f7f\u7528\uff0c\u5c0620\u7684\u8d4b\u503c\u66ff\u6362\u621030\nvar test = 30;"}),o.a.createElement(i.e,{style:{textIndent:"0"},title:"\u30102\u3011\u6267\u884c"}),o.a.createElement(i.e,{title:"1\u3001\u5f15\u64ce\u8fd0\u884c\u65f6\u4f1a\u9996\u5148\u67e5\u8be2\u4f5c\u7528\u57df\uff0c\u5728\u5f53\u524d\u7684\u4f5c\u7528\u57df\u96c6\u5408\u4e2d\u662f\u5426\u5b58\u5728\u4e00\u4e2a\u53eb\u4f5ca\u7684\u53d8\u91cf\u3002\u5982\u679c\u662f\uff0c\u5f15\u64ce\u5c31\u4f1a\u4f7f\u7528\u8fd9\u4e2a\u53d8\u91cf\uff1b\u5982\u679c\u5426\uff0c\u5f15\u64ce\u4f1a\u7ee7\u7eed\u67e5\u627e\u8be5\u53d8\u91cf"}),o.a.createElement(i.e,{title:"2\u3001\u5982\u679c\u5f15\u64ce\u6700\u7ec8\u627e\u5230\u4e86\u53d8\u91cfa\uff0c\u5c31\u4f1a\u5c062\u8d4b\u503c\u7ed9\u5b83\u3002\u5426\u5219\u5f15\u64ce\u4f1a\u629b\u51fa\u4e00\u4e2a\u5f02\u5e38"}),o.a.createElement(i.c,{title:"\u67e5\u8be2"}),o.a.createElement(i.e,{title:"\u5728\u5f15\u64ce\u6267\u884c\u7684\u7b2c\u4e00\u6b65\u64cd\u4f5c\u4e2d\uff0c\u5bf9\u53d8\u91cfa\u8fdb\u884c\u4e86\u67e5\u8be2\uff0c\u8fd9\u79cd\u67e5\u8be2\u53eb\u505aLHS\u67e5\u8be2\u3002\u5b9e\u9645\u4e0a\uff0c\u5f15\u64ce\u67e5\u8be2\u5171\u5206\u4e3a\u4e24\u79cd\uff1aLHS\u67e5\u8be2\u548cRHS\u67e5\u8be2 "}),o.a.createElement(i.e,{title:"\u4ece\u5b57\u9762\u610f\u601d\u53bb\u7406\u89e3\uff0c\u5f53\u53d8\u91cf\u51fa\u73b0\u5728\u8d4b\u503c\u64cd\u4f5c\u7684\u5de6\u4fa7\u65f6\u8fdb\u884cLHS\u67e5\u8be2\uff0c\u51fa\u73b0\u5728\u53f3\u4fa7\u65f6\u8fdb\u884cRHS\u67e5\u8be2"}),o.a.createElement(i.e,{title:"\u66f4\u51c6\u786e\u5730\u8bb2\uff0cRHS\u67e5\u8be2\u4e0e\u7b80\u5355\u5730\u67e5\u627e\u67d0\u4e2a\u53d8\u91cf\u7684\u503c\u6ca1\u4ec0\u4e48\u533a\u522b\uff0c\u800cLHS\u67e5\u8be2\u5219\u662f\u8bd5\u56fe\u627e\u5230\u53d8\u91cf\u7684\u5bb9\u5668\u672c\u8eab\uff0c\u4ece\u800c\u53ef\u4ee5\u5bf9\u5176\u8d4b\u503c"}),o.a.createElement(i.b,{content:"function foo(a){\n    console.log(a);//2\n}\nfoo( 2 );"}),o.a.createElement(i.e,{title:"\u8fd9\u6bb5\u4ee3\u7801\u4e2d\uff0c\u603b\u5171\u5305\u62ec4\u4e2a\u67e5\u8be2\uff0c\u5206\u522b\u662f\uff1a"}),o.a.createElement(i.e,{title:"1\u3001foo(...)\u5bf9foo\u8fdb\u884c\u4e86RHS\u5f15\u7528"}),o.a.createElement(i.e,{title:"2\u3001\u51fd\u6570\u4f20\u53c2a = 2\u5bf9a\u8fdb\u884c\u4e86LHS\u5f15\u7528"}),o.a.createElement(i.e,{title:"3\u3001console.log(...)\u5bf9console\u5bf9\u8c61\u8fdb\u884c\u4e86RHS\u5f15\u7528\uff0c\u5e76\u68c0\u67e5\u5176\u662f\u5426\u6709\u4e00\u4e2alog\u7684\u65b9\u6cd5"}),o.a.createElement(i.e,{title:"4\u3001console.log(a)\u5bf9a\u8fdb\u884c\u4e86RHS\u5f15\u7528\uff0c\u5e76\u628a\u5f97\u5230\u7684\u503c\u4f20\u7ed9\u4e86console.log(...)"}),o.a.createElement(i.c,{title:"\u5d4c\u5957"}),o.a.createElement(i.e,{title:"\u5728\u5f53\u524d\u4f5c\u7528\u57df\u4e2d\u65e0\u6cd5\u627e\u5230\u67d0\u4e2a\u53d8\u91cf\u65f6\uff0c\u5f15\u64ce\u5c31\u4f1a\u5728\u5916\u5c42\u5d4c\u5957\u7684\u4f5c\u7528\u57df\u4e2d\u7ee7\u7eed\u67e5\u627e\uff0c\u76f4\u5230\u627e\u5230\u8be5\u53d8\u91cf\uff0c\u6216\u62b5\u8fbe\u6700\u5916\u5c42\u7684\u4f5c\u7528\u57df\uff08\u4e5f\u5c31\u662f\u5168\u5c40\u4f5c\u7528\u57df\uff09\u4e3a\u6b62"}),o.a.createElement(i.b,{content:"function foo(a){\n    console.log( a + b ) ;\n}\nvar b = 2;\nfoo(2);// 4"}),o.a.createElement(i.e,{title:"\u5728\u4ee3\u7801\u7247\u6bb5\u4e2d\uff0c\u4f5c\u7528\u57dffoo()\u51fd\u6570\u5d4c\u5957\u5728\u5168\u5c40\u4f5c\u7528\u57df\u4e2d\u3002\u5f15\u64ce\u9996\u5148\u5728foo()\u51fd\u6570\u7684\u4f5c\u7528\u57df\u4e2d\u67e5\u627e\u53d8\u91cfb\uff0c\u5e76\u5c1d\u8bd5\u5bf9\u5176\u8fdb\u884cRHS\u5f15\u7528\uff0c\u6ca1\u6709\u627e\u5230\uff1b\u63a5\u7740\uff0c\u5f15\u64ce\u5728\u5168\u5c40\u4f5c\u7528\u57df\u4e2d\u67e5\u627eb\uff0c\u6210\u529f\u627e\u5230\u540e\uff0c\u5bf9\u5176\u8fdb\u884cRHS\u5f15\u7528\uff0c\u5c062\u8d4b\u503c\u7ed9b"}),o.a.createElement(i.c,{title:"\u5f02\u5e38"}),o.a.createElement(i.e,{title:"\u4e3a\u4ec0\u4e48\u533a\u5206LHS\u548cRHS\u662f\u4e00\u4ef6\u91cd\u8981\u7684\u4e8b\u60c5\uff1f\u56e0\u4e3a\u5728\u53d8\u91cf\u8fd8\u6ca1\u6709\u58f0\u660e\uff08\u5728\u4efb\u4f55\u4f5c\u7528\u57df\u4e2d\u90fd\u65e0\u6cd5\u627e\u5230\u53d8\u91cf\uff09\u7684\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e24\u79cd\u67e5\u8be2\u7684\u884c\u4e3a\u4e0d\u4e00\u6837"}),o.a.createElement(i.e,{style:{textIndent:"0"},title:"RHS"}),o.a.createElement(i.e,{style:{textIndent:"0"},title:"\u30101\u3011\u5982\u679cRHS\u67e5\u8be2\u5931\u8d25\uff0c\u5f15\u64ce\u4f1a\u629b\u51faReferenceError(\u5f15\u7528\u9519\u8bef)\u5f02\u5e38"}),o.a.createElement(i.b,{content:"//\u5bf9b\u8fdb\u884cRHS\u67e5\u8be2\u65f6\uff0c\u65e0\u6cd5\u627e\u5230\u8be5\u53d8\u91cf\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u8fd9\u662f\u4e00\u4e2a\u201c\u672a\u58f0\u660e\u201d\u7684\u53d8\u91cf\nfunction foo(a){\n    a = b;  \n}\nfoo();//ReferenceError: b is not defined"}),o.a.createElement(i.e,{style:{textIndent:"0"},title:"\u30102\u3011\u5982\u679cRHS\u67e5\u8be2\u627e\u5230\u4e86\u4e00\u4e2a\u53d8\u91cf\uff0c\u4f46\u5c1d\u8bd5\u5bf9\u53d8\u91cf\u7684\u503c\u8fdb\u884c\u4e0d\u5408\u7406\u64cd\u4f5c\uff0c\u6bd4\u5982\u5bf9\u4e00\u4e2a\u975e\u51fd\u6570\u7c7b\u578b\u503c\u8fdb\u884c\u51fd\u6570\u8c03\u7528\uff0c\u6216\u8005\u5f15\u7528null\u6216undefined\u4e2d\u7684\u5c5e\u6027\uff0c\u5f15\u64ce\u4f1a\u629b\u51fa\u53e6\u5916\u4e00\u79cd\u7c7b\u578b\u5f02\u5e38\uff1aTypeError(\u7c7b\u578b\u9519\u8bef)\u5f02\u5e38"}),o.a.createElement(i.b,{content:"function foo(){\n    var b = 0;\n    b();\n}\nfoo();//TypeError: b is not a function"}),o.a.createElement(i.e,{style:{textIndent:"0"},title:"LHS"}),o.a.createElement(i.e,{style:{textIndent:"0"},title:"\u30101\u3011\u5f53\u5f15\u64ce\u6267\u884cLHS\u67e5\u8be2\u65f6\uff0c\u5982\u679c\u65e0\u6cd5\u627e\u5230\u53d8\u91cf\uff0c\u5168\u5c40\u4f5c\u7528\u57df\u4f1a\u521b\u5efa\u4e00\u4e2a\u5177\u6709\u8be5\u540d\u79f0\u7684\u53d8\u91cf\uff0c\u5e76\u5c06\u5176\u8fd4\u8fd8\u7ed9\u5f15\u64ce"}),o.a.createElement(i.b,{content:"function foo(){\n    a = 1;  \n}\nfoo();\nconsole.log(a);//1"}),o.a.createElement(i.e,{style:{textIndent:"0"},title:"\u30102\u3011\u5982\u679c\u5728\u4e25\u683c\u6a21\u5f0f\u4e2dLHS\u67e5\u8be2\u5931\u8d25\u65f6\uff0c\u5e76\u4e0d\u4f1a\u521b\u5efa\u5e76\u8fd4\u56de\u4e00\u4e2a\u5168\u5c40\u53d8\u91cf\uff0c\u5f15\u64ce\u4f1a\u629b\u51fa\u540cRHS\u67e5\u8be2\u5931\u8d25\u65f6\u7c7b\u4f3c\u7684ReferenceError\u5f02\u5e38"}),o.a.createElement(i.b,{content:"function foo(){\n    'use strict';\n    a = 1;  \n}\nfoo();\nconsole.log(a);//ReferenceError: a is not defined"}),o.a.createElement(i.c,{title:"\u539f\u7406"}),o.a.createElement(i.b,{content:"function foo(a){\n    console.log(a);\n}\nfoo(2);"}),o.a.createElement(i.e,{title:"\u4ee5\u4e0a\u9762\u8fd9\u4e2a\u4ee3\u7801\u7247\u6bb5\u6765\u8bf4\u660e\u4f5c\u7528\u57df\u7684\u5185\u90e8\u539f\u7406\uff0c\u5206\u4e3a\u4ee5\u4e0b\u51e0\u6b65\uff1a"}),o.a.createElement(i.e,{style:{textIndent:"0"},title:"\u30101\u3011\u5f15\u64ce\u9700\u8981\u4e3afoo(...)\u51fd\u6570\u8fdb\u884cRHS\u5f15\u7528\uff0c\u5728\u5168\u5c40\u4f5c\u7528\u57df\u4e2d\u67e5\u627efoo\u3002\u6210\u529f\u627e\u5230\u5e76\u6267\u884c"}),o.a.createElement(i.e,{style:{textIndent:"0"},title:"\u30102\u3011\u5f15\u64ce\u9700\u8981\u8fdb\u884cfoo\u51fd\u6570\u7684\u4f20\u53c2a=2\uff0c\u4e3aa\u8fdb\u884cLHS\u5f15\u7528\uff0c\u5728foo\u51fd\u6570\u4f5c\u7528\u57df\u4e2d\u67e5\u627ea\u3002\u6210\u529f\u627e\u5230\uff0c\u5e76\u628a2\u8d4b\u503c\u7ed9a"}),o.a.createElement(i.e,{style:{textIndent:"0"},title:"\u30103\u3011\u5f15\u64ce\u9700\u8981\u6267\u884cconsole.log(...)\uff0c\u4e3aconsole\u5bf9\u8c61\u8fdb\u884cRHS\u5f15\u7528\uff0c\u5728foo\u51fd\u6570\u4f5c\u7528\u57df\u4e2d\u67e5\u627econsole\u5bf9\u8c61\u3002\u7531\u4e8econsole\u662f\u4e2a\u5185\u7f6e\u5bf9\u8c61\uff0c\u88ab\u6210\u529f\u627e\u5230"}),o.a.createElement(i.e,{style:{textIndent:"0"},title:"\u30104\u3011\u5f15\u64ce\u5728console\u5bf9\u8c61\u4e2d\u67e5\u627elog(...)\u65b9\u6cd5\uff0c\u6210\u529f\u627e\u5230"}),o.a.createElement(i.e,{style:{textIndent:"0"},title:"\u30105\u3011\u5f15\u64ce\u9700\u8981\u6267\u884cconsole.log(a)\uff0c\u5bf9a\u8fdb\u884cRHS\u5f15\u7528\uff0c\u5728foo\u51fd\u6570\u4f5c\u7528\u57df\u4e2d\u67e5\u627ea\uff0c\u6210\u529f\u627e\u5230\u5e76\u6267\u884c"}),o.a.createElement(i.e,{style:{textIndent:"0"},title:"\u30106\u3011\u4e8e\u662f\uff0c\u5f15\u64ce\u628aa\u7684\u503c\uff0c\u4e5f\u5c31\u662f2\u4f20\u5230console.log(...)\u4e2d"}),o.a.createElement(i.e,{style:{textIndent:"0"},title:"\u30107\u3011\u6700\u7ec8\uff0c\u63a7\u5236\u53f0\u8f93\u51fa2"})))}}])&&l(n.prototype,r),c&&l(n,c),t}();t.default=p},37:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n.n(a),c=n(3),l=n.n(c),u=n(4),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var p=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},y=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=s(this,e.call.apply(e,[this].concat(a))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!p(e)){e.preventDefault();var t=r.context.router.history,n=r.props,o=n.replace,a=n.to;o?t.replace(a):t.push(a)}},s(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["replace","to","innerRef"]);l()(this.context.router,"You should not use <Link> outside a <Router>"),l()(void 0!==t,'You must specify the "to" property');var a=this.context.router.history,i="string"===typeof t?Object(u.createLocation)(t,null,null,a.location):t,c=a.createHref(i);return o.a.createElement("a",f({},r,{onClick:this.handleClick,href:c,ref:n}))},t}(o.a.Component);y.propTypes={onClick:i.a.func,target:i.a.string,replace:i.a.bool,to:i.a.oneOfType([i.a.string,i.a.object]).isRequired,innerRef:i.a.oneOfType([i.a.string,i.a.func])},y.defaultProps={replace:!1},y.contextTypes={router:i.a.shape({history:i.a.shape({push:i.a.func.isRequired,replace:i.a.func.isRequired,createHref:i.a.func.isRequired}).isRequired}).isRequired},t.a=y}}]);