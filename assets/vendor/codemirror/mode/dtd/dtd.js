!function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],t):t(CodeMirror)}(function(t){"use strict";t.defineMode("dtd",function(t){function e(t,e){return a=e,t}function n(t,n){var a=t.next();if("<"!=a||!t.eat("!")){if("<"==a&&t.eat("?"))return n.tokenize=u("meta","?>"),e("meta",a);if("#"==a&&t.eatWhile(/[\w]/))return e("atom","tag");if("|"==a)return e("keyword","seperator");if(a.match(/[\(\)\[\]\-\.,\+\?>]/))return e(null,a);if(a.match(/[\[\]]/))return e("rule",a);if('"'==a||"'"==a)return n.tokenize=i(a),n.tokenize(t,n);if(t.eatWhile(/[a-zA-Z\?\+\d]/)){var o=t.current();return null!==o.substr(o.length-1,o.length).match(/\?|\+/)&&t.backUp(1),e("tag","tag")}return"%"==a||"*"==a?e("number","number"):(t.eatWhile(/[\w\\\-_%.{,]/),e(null,null))}return t.eatWhile(/[\-]/)?(n.tokenize=r,r(t,n)):t.eatWhile(/[\w]/)?e("keyword","doindent"):void 0}function r(t,r){for(var i,u=0;null!=(i=t.next());){if(u>=2&&">"==i){r.tokenize=n;break}u="-"==i?u+1:0}return e("comment","comment")}function i(t){return function(r,i){for(var u,a=!1;null!=(u=r.next());){if(u==t&&!a){i.tokenize=n;break}a=!a&&"\\"==u}return e("string","tag")}}function u(t,e){return function(r,i){for(;!r.eol();){if(r.match(e)){i.tokenize=n;break}r.next()}return t}}var a,o=t.indentUnit;return{startState:function(t){return{tokenize:n,baseIndent:t||0,stack:[]}},token:function(t,e){if(t.eatSpace())return null;var n=e.tokenize(t,e),r=e.stack[e.stack.length-1];return"["==t.current()||"doindent"===a||"["==a?e.stack.push("rule"):"endtag"===a?e.stack[e.stack.length-1]="endtag":"]"==t.current()||"]"==a||">"==a&&"rule"==r?e.stack.pop():"["==a&&e.stack.push("["),n},indent:function(t,e){var n=t.stack.length;return e.match(/\]\s+|\]/)?n-=1:">"===e.substr(e.length-1,e.length)&&("<"===e.substr(0,1)||"doindent"==a&&e.length>1||("doindent"==a?n--:">"==a&&e.length>1||"tag"==a&&">"!==e||("tag"==a&&"rule"==t.stack[t.stack.length-1]?n--:"tag"==a?n++:">"===e&&"rule"==t.stack[t.stack.length-1]&&">"===a?n--:">"===e&&"rule"==t.stack[t.stack.length-1]||("<"!==e.substr(0,1)&&">"===e.substr(0,1)?n-=1:">"===e||(n-=1)))),(null==a||"]"==a)&&n--),t.baseIndent+n*o},electricChars:"]>"}}),t.defineMIME("application/xml-dtd","dtd")});
