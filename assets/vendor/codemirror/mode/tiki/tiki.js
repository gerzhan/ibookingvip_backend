!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict";e.defineMode("tiki",function(e){function t(e,t,n){return function(i,o){for(;!i.eol();){if(i.match(t)){o.tokenize=r;break}i.next()}return n&&(o.tokenize=n),e}}function n(e){return function(t,n){for(;!t.eol();)t.next();return n.tokenize=r,e}}function r(e,o){function a(t){return o.tokenize=t,t(e,o)}var u=e.sol(),c=e.next();switch(c){case"{":e.eat("/"),e.eatSpace();for(var f,s="";f=e.eat(/[^\s\u00a0=\"\'\/?(}]/);)s+=f;return o.tokenize=i,"tag";case"_":if(e.eat("_"))return a(t("strong","__",r));break;case"'":if(e.eat("'"))return a(t("em","''",r));break;case"(":if(e.eat("("))return a(t("variable-2","))",r));break;case"[":return a(t("variable-3","]",r));case"|":if(e.eat("|"))return a(t("comment","||"));break;case"-":if(e.eat("="))return a(t("header string","=-",r));if(e.eat("-"))return a(t("error tw-deleted","--",r));break;case"=":if(e.match("=="))return a(t("tw-underline","===",r));break;case":":if(e.eat(":"))return a(t("comment","::"));break;case"^":return a(t("tw-box","^"));case"~":if(e.match("np~"))return a(t("meta","~/np~"))}if(u)switch(c){case"!":return a(e.match("!!!!!")?n("header string"):e.match("!!!!")?n("header string"):e.match("!!!")?n("header string"):e.match("!!")?n("header string"):n("header string"));case"*":case"#":case"+":return a(n("tw-listitem bracket"))}return null}function i(e,t){var n=e.next(),i=e.peek();return"}"==n?(t.tokenize=r,"tag"):"("==n||")"==n?"bracket":"="==n?(b="equals",">"==i&&(n=e.next(),i=e.peek()),/[\'\"]/.test(i)||(t.tokenize=a()),"operator"):/[\'\"]/.test(n)?(t.tokenize=o(n),t.tokenize(e,t)):(e.eatWhile(/[^\s\u00a0=\"\'\/?]/),"keyword")}function o(e){return function(t,n){for(;!t.eol();)if(t.next()==e){n.tokenize=i;break}return"string"}}function a(){return function(e,t){for(;!e.eol();){var n=e.next(),r=e.peek();if(" "==n||","==n||/[ )}]/.test(r)){t.tokenize=i;break}}return"string"}}function u(){for(var e=arguments.length-1;e>=0;e--)h.cc.push(arguments[e])}function c(){return u.apply(null,arguments),!0}function f(e,t){var n=h.context&&h.context.noIndent;h.context={prev:h.context,pluginName:e,indent:h.indented,startOfLine:t,noIndent:n}}function s(){h.context&&(h.context=h.context.prev)}function l(e){if("openPlugin"==e)return h.pluginName=x,c(g,d(h.startOfLine));if("closePlugin"==e){var t=!1;return h.context?(t=h.context.pluginName!=x,s()):t=!0,t&&(v="error"),c(k(t))}return"string"==e?(h.context&&"!cdata"==h.context.name||f("!cdata"),h.tokenize==r&&s(),c()):c()}function d(e){return function(t){return"selfclosePlugin"==t||"endPlugin"==t?c():"endPlugin"==t?(f(h.pluginName,e),c()):c()}}function k(e){return function(t){return e&&(v="error"),"endPlugin"==t?c():u()}}function g(e){return"keyword"==e?(v="attribute",c(g)):"equals"==e?c(m,g):u()}function m(e){return"keyword"==e?(v="string",c()):"string"==e?c(p):u()}function p(e){return"string"==e?c(p):u()}var x,b,h,v,z=e.indentUnit;return{startState:function(){return{tokenize:r,cc:[],indented:0,startOfLine:!0,pluginName:null,context:null}},token:function(e,t){if(e.sol()&&(t.startOfLine=!0,t.indented=e.indentation()),e.eatSpace())return null;v=b=x=null;var n=t.tokenize(e,t);if((n||b)&&"comment"!=n)for(h=t;;){var r=t.cc.pop()||l;if(r(b||n))break}return t.startOfLine=!1,v||n},indent:function(e,t){var n=e.context;if(n&&n.noIndent)return 0;for(n&&/^{\//.test(t)&&(n=n.prev);n&&!n.startOfLine;)n=n.prev;return n?n.indent+z:0},electricChars:"/"}}),e.defineMIME("text/tiki","tiki")});
