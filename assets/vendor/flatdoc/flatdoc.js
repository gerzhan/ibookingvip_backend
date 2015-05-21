!function(t){function e(e){var n="iframe,pre,code";return t(e).find(":not("+n+")").andSelf().contents().filter(function(){return 3==this.nodeType&&0===t(this).closest(n).length})}function n(t){return t=t.replace(/(^|[\-\u2014\s(\["])'/g,"$1вЂ�"),t=t.replace(/'/g,"вЂ™"),t=t.replace(/(^|[\-\u2014\/\[(\u2018\s])"/g,"$1вЂњ"),t=t.replace(/"/g,"вЂќ"),t=t.replace(/\.\.\./g,"вЂ¦"),t=t.replace(/--/g,"вЂ”")}function s(t){return"string"!=typeof t?"":t.toLowerCase().match(/[a-z0-9]+/g).join("-")}var r,i=this,l=i.Flatdoc={};l.run=function(e){t(function(){new l.runner(e).run()})},l.file=function(e){return function(n){t.get(e).fail(function(t){n(t,null)}).done(function(t){n(null,t)})}},l.github=function(e,n){var s;return s=n?"https://api.github.com/repos/"+e+"/contents/"+n:"https://api.github.com/repos/"+e+"/readme",function(e){t.get(s).fail(function(t){e(t,null)}).done(function(t){var n=i.Base64.decode(t.content);e(null,n)})}},l.bitbucket=function(e,n,s){n||(n="readme.md"),s||(s="default");var r="https://bitbucket.org/api/1.0/repositories/"+e+"/src/"+s+"/"+n;return function(e){t.ajax({url:r,dataType:"jsonp",error:function(t,e,n){alert(n)},success:function(t){var n=t.data;e(null,n)}})}};var o=l.parser={};o.parse=function(e,n){r=i.marked,o.setMarkedOptions(n);var s=t("<div>"+r(e)),l=s.find("h1").eq(0),h=l.text();a.mangle(s);var u=a.getMenu(s);return{title:h,content:s,menu:u}},o.setMarkedOptions=function(t){r.setOptions({highlight:function(e,n){return n?t(e,n):e}})};var a=l.transformer={};a.mangle=function(t){this.addIDs(t),this.buttonize(t),this.smartquotes(t)},a.addIDs=function(e){var n=["","",""];e.find("h1, h2, h3").each(function(){var e=t(this),r=parseInt(this.nodeName[1]),i=e.text(),l=s(i);r>1&&(l=n[r-2]+"-"+l),n.length=r-1,n=n.concat([l,l]),e.attr("id",l)})},a.getMenu=function(e){function n(t){r.length=t+1;var e=r[t];if(!e){var i=t>1?n(t-1):s;e={items:[],level:t},r=r.concat([e,e]),i.items.push(e)}return e}var s={items:[],id:"",level:0},r=[s];return e.find("h1, h2, h3").each(function(){var e=t(this),s=+this.nodeName.substr(1),i=n(s-1),l={section:e.text(),items:[],level:s,id:e.attr("id")};i.items.push(l),r[s]=l}),s},a.buttonize=function(e){e.find("a").each(function(){var e=t(this),n=e.text().match(/^(.*) >$/);n&&e.text(n[1]).addClass("button")})},a.smartquotes=function(t){for(var s=e(t),r=s.length,i=0;r>i;i++){var l=s[i];l.nodeValue=n(l.nodeValue)}};var h=l.highlighters={};h.js=h.javascript=function(t){return t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/("[^\"]*?")/g,'<span class="string">$1</span>').replace(/('[^\']*?')/g,'<span class="string">$1</span>').replace(/\/\/(.*)/gm,'<span class="comment">//$1</span>').replace(/\/\*(.*)\*\//gm,'<span class="comment">/*$1*/</span>').replace(/(\d+\.\d+)/gm,'<span class="number">$1</span>').replace(/(\d+)/gm,'<span class="number">$1</span>').replace(/\bnew *(\w+)/gm,'<span class="keyword">new</span> <span class="init">$1</span>').replace(/\b(function|new|throw|return|var|if|else)\b/gm,'<span class="keyword">$1</span>')},h.html=function(t){return t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/("[^\"]*?")/g,'<span class="string">$1</span>').replace(/('[^\']*?')/g,'<span class="string">$1</span>').replace(/&lt;!--(.*)--&gt;/g,'<span class="comment">&lt;!--$1--&gt;</span>').replace(/&lt;([^!][^\s&]*)/g,'&lt;<span class="keyword">$1</span>')},h.generic=function(t){return t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/("[^\"]*?")/g,'<span class="string">$1</span>').replace(/('[^\']*?')/g,'<span class="string">$1</span>').replace(/(\/\/|#)(.*)/gm,'<span class="comment">$1$2</span>').replace(/(\d+\.\d+)/gm,'<span class="number">$1</span>').replace(/(\d+)/gm,'<span class="number">$1</span>')};var u=l.menuView=function(e){function n(e,s){var r=e.id||"root",i=t("<li>").attr("id",r+"-item").addClass("level-"+e.level).appendTo(s);if(e.section){t("<a>").html(e.section).attr("id",r+"-link").attr("href","#"+e.id).addClass("level-"+e.level).appendTo(i)}if(e.items.length>0){var l=t("<ul>").addClass("level-"+(e.level+1)).attr("id",r+"-list").appendTo(i);e.items.forEach(function(t){n(t,l)})}}var s=t("<ul>");return n(e,s),s},c=l.runner=function(t){this.initialize(t)};c.prototype.root='[role~="flatdoc"]',c.prototype.menu='[role~="flatdoc-menu"]',c.prototype.title='[role~="flatdoc-title"]',c.prototype.content='[role~="flatdoc-content"]',c.prototype.initialize=function(e){t.extend(this,e)},c.prototype.highlight=function(t,e){var n=l.highlighters[e]||l.highlighters.generic;return n(t)},c.prototype.run=function(){var e=this;t(e.root).trigger("flatdoc:loading"),e.fetcher(function(n,s){if(n)return void console.error("[Flatdoc] fetching Markdown data failed.",n);var r=l.parser.parse(s,e.highlight);e.applyData(r,e),t(e.root).trigger("flatdoc:ready")})},c.prototype.applyData=function(t){var e=this;e.el("title").html(t.title),e.el("content").html(t.content.find(">*")),e.el("menu").html(u(t.menu))},c.prototype.el=function(e){return t(this[e],this.root)}}(jQuery),function(){function t(t){this.tokens=[],this.tokens.links={},this.options=t||o.defaults,this.rules=a.normal,this.options.gfm&&(this.rules=this.options.tables?a.tables:a.gfm)}function e(t,e){if(this.options=e||o.defaults,this.links=t,this.rules=h.normal,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.rules=this.options.breaks?h.breaks:h.gfm:this.options.pedantic&&(this.rules=h.pedantic)}function n(t){this.tokens=[],this.token=null,this.options=t||o.defaults}function s(t,e){return t.replace(e?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function r(t,e){return t=t.source,e=e||"",function n(s,r){return s?(r=r.source||r,r=r.replace(/(^|[^\[])\^/g,"$1"),t=t.replace(s,r),n):new RegExp(t,e)}}function i(){}function l(t){for(var e,n,s=1;s<arguments.length;s++){e=arguments[s];for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t}function o(e,r,i){if(i||"function"==typeof r){i||(i=r,r=null),r&&(r=l({},o.defaults,r));var a=t.lex(a,r),h=r.highlight,u=0,c=a.length,p=0;if(!h||h.length<3)return i(null,n.parse(a,r));for(var g=function(){delete r.highlight;var t=n.parse(a,r);return r.highlight=h,i(null,t)};c>p;p++)!function(t){return"code"===t.type?(u++,h(t.text,t.lang,function(e,n){return null==n||n===t.text?--u||g():(t.text=n,t.escaped=!0,void(--u||g()))})):void 0}(a[p])}else try{return r&&(r=l({},o.defaults,r)),n.parse(t.lex(e,r),r)}catch(f){if(f.message+="\nPlease report this to https://github.com/chjj/marked.",(r||o.defaults).silent)return"<p>An error occured:</p><pre>"+s(f.message+"",!0)+"</pre>";throw f}}var a={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:i,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:i,lheading:/^([^\n]+)\n *(=|-){3,} *\n*/,blockquote:/^( *>[^\n]+(\n[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment|closed|closing) *(?:\n{2,}|\s*$)/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:i,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};a.bullet=/(?:[*+-]|\d+\.)/,a.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,a.item=r(a.item,"gm")(/bull/g,a.bullet)(),a.list=r(a.list)(/bull/g,a.bullet)("hr",/\n+(?=(?: *[-*_]){3,} *(?:\n+|$))/)(),a._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|@)\\b",a.html=r(a.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,a._tag)(),a.paragraph=r(a.paragraph)("hr",a.hr)("heading",a.heading)("lheading",a.lheading)("blockquote",a.blockquote)("tag","<"+a._tag)("def",a.def)(),a.normal=l({},a),a.gfm=l({},a.normal,{fences:/^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,paragraph:/^/}),a.gfm.paragraph=r(a.paragraph)("(?!","(?!"+a.gfm.fences.source.replace("\\1","\\2")+"|")(),a.tables=l({},a.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),t.rules=a,t.lex=function(e,n){var s=new t(n);return s.lex(e)},t.prototype.lex=function(t){return t=t.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(t,!0)},t.prototype.token=function(t,e){for(var n,s,r,i,l,o,h,u,c,t=t.replace(/^ +$/gm,"");t;)if((r=this.rules.newline.exec(t))&&(t=t.substring(r[0].length),r[0].length>1&&this.tokens.push({type:"space"})),r=this.rules.code.exec(t))t=t.substring(r[0].length),r=r[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?r:r.replace(/\n+$/,"")});else if(r=this.rules.fences.exec(t))t=t.substring(r[0].length),this.tokens.push({type:"code",lang:r[2],text:r[3]});else if(r=this.rules.heading.exec(t))t=t.substring(r[0].length),this.tokens.push({type:"heading",depth:r[1].length,text:r[2]});else if(e&&(r=this.rules.nptable.exec(t))){for(t=t.substring(r[0].length),o={type:"table",header:r[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:r[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:r[3].replace(/\n$/,"").split("\n")},u=0;u<o.align.length;u++)o.align[u]=/^ *-+: *$/.test(o.align[u])?"right":/^ *:-+: *$/.test(o.align[u])?"center":/^ *:-+ *$/.test(o.align[u])?"left":null;for(u=0;u<o.cells.length;u++)o.cells[u]=o.cells[u].split(/ *\| */);this.tokens.push(o)}else if(r=this.rules.lheading.exec(t))t=t.substring(r[0].length),this.tokens.push({type:"heading",depth:"="===r[2]?1:2,text:r[1]});else if(r=this.rules.hr.exec(t))t=t.substring(r[0].length),this.tokens.push({type:"hr"});else if(r=this.rules.blockquote.exec(t))t=t.substring(r[0].length),this.tokens.push({type:"blockquote_start"}),r=r[0].replace(/^ *> ?/gm,""),this.token(r,e),this.tokens.push({type:"blockquote_end"});else if(r=this.rules.list.exec(t)){for(t=t.substring(r[0].length),i=r[2],this.tokens.push({type:"list_start",ordered:i.length>1}),r=r[0].match(this.rules.item),n=!1,c=r.length,u=0;c>u;u++)o=r[u],h=o.length,o=o.replace(/^ *([*+-]|\d+\.) +/,""),~o.indexOf("\n ")&&(h-=o.length,o=this.options.pedantic?o.replace(/^ {1,4}/gm,""):o.replace(new RegExp("^ {1,"+h+"}","gm"),"")),this.options.smartLists&&u!==c-1&&(l=a.bullet.exec(r[u+1])[0],i===l||i.length>1&&l.length>1||(t=r.slice(u+1).join("\n")+t,u=c-1)),s=n||/\n\n(?!\s*$)/.test(o),u!==c-1&&(n="\n"===o[o.length-1],s||(s=n)),this.tokens.push({type:s?"loose_item_start":"list_item_start"}),this.token(o,!1),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(r=this.rules.html.exec(t))t=t.substring(r[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:"pre"===r[1]||"script"===r[1],text:r[0]});else if(e&&(r=this.rules.def.exec(t)))t=t.substring(r[0].length),this.tokens.links[r[1].toLowerCase()]={href:r[2],title:r[3]};else if(e&&(r=this.rules.table.exec(t))){for(t=t.substring(r[0].length),o={type:"table",header:r[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:r[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:r[3].replace(/(?: *\| *)?\n$/,"").split("\n")},u=0;u<o.align.length;u++)o.align[u]=/^ *-+: *$/.test(o.align[u])?"right":/^ *:-+: *$/.test(o.align[u])?"center":/^ *:-+ *$/.test(o.align[u])?"left":null;for(u=0;u<o.cells.length;u++)o.cells[u]=o.cells[u].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(o)}else if(e&&(r=this.rules.paragraph.exec(t)))t=t.substring(r[0].length),this.tokens.push({type:"paragraph",text:"\n"===r[1][r[1].length-1]?r[1].slice(0,-1):r[1]});else if(r=this.rules.text.exec(t))t=t.substring(r[0].length),this.tokens.push({type:"text",text:r[0]});else if(t)throw new Error("Infinite loop on byte: "+t.charCodeAt(0));return this.tokens};var h={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:i,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:i,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};h._inside=/(?:\[[^\]]*\]|[^\]]|\](?=[^\[]*\]))*/,h._href=/\s*<?([^\s]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,h.link=r(h.link)("inside",h._inside)("href",h._href)(),h.reflink=r(h.reflink)("inside",h._inside)(),h.normal=l({},h),h.pedantic=l({},h.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),h.gfm=l({},h.normal,{escape:r(h.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:r(h.text)("]|","~]|")("|","|https?://|")()}),h.breaks=l({},h.gfm,{br:r(h.br)("{2,}","*")(),text:r(h.gfm.text)("{2,}","*")()}),e.rules=h,e.output=function(t,n,s){var r=new e(n,s);return r.output(t)},e.prototype.output=function(t){for(var e,n,r,i,l="";t;)if(i=this.rules.escape.exec(t))t=t.substring(i[0].length),l+=i[1];else if(i=this.rules.autolink.exec(t))t=t.substring(i[0].length),"@"===i[2]?(n=this.mangle(":"===i[1][6]?i[1].substring(7):i[1]),r=this.mangle("mailto:")+n):(n=s(i[1]),r=n),l+='<a href="'+r+'">'+n+"</a>";else if(i=this.rules.url.exec(t))t=t.substring(i[0].length),n=s(i[1]),r=n,l+='<a href="'+r+'">'+n+"</a>";else if(i=this.rules.tag.exec(t))t=t.substring(i[0].length),l+=this.options.sanitize?s(i[0]):i[0];else if(i=this.rules.link.exec(t))t=t.substring(i[0].length),l+=this.outputLink(i,{href:i[2],title:i[3]});else if((i=this.rules.reflink.exec(t))||(i=this.rules.nolink.exec(t))){if(t=t.substring(i[0].length),e=(i[2]||i[1]).replace(/\s+/g," "),e=this.links[e.toLowerCase()],!e||!e.href){l+=i[0][0],t=i[0].substring(1)+t;continue}l+=this.outputLink(i,e)}else if(i=this.rules.strong.exec(t))t=t.substring(i[0].length),l+="<strong>"+this.output(i[2]||i[1])+"</strong>";else if(i=this.rules.em.exec(t))t=t.substring(i[0].length),l+="<em>"+this.output(i[2]||i[1])+"</em>";else if(i=this.rules.code.exec(t))t=t.substring(i[0].length),l+="<code>"+s(i[2],!0)+"</code>";else if(i=this.rules.br.exec(t))t=t.substring(i[0].length),l+="<br>";else if(i=this.rules.del.exec(t))t=t.substring(i[0].length),l+="<del>"+this.output(i[1])+"</del>";else if(i=this.rules.text.exec(t))t=t.substring(i[0].length),l+=s(i[0]);else if(t)throw new Error("Infinite loop on byte: "+t.charCodeAt(0));return l},e.prototype.outputLink=function(t,e){return"!"!==t[0][0]?'<a href="'+s(e.href)+'"'+(e.title?' title="'+s(e.title)+'"':"")+">"+this.output(t[1])+"</a>":'<img src="'+s(e.href)+'" alt="'+s(t[1])+'"'+(e.title?' title="'+s(e.title)+'"':"")+">"},e.prototype.smartypants=function(t){return this.options.smartypants?t.replace(/--/g,"вЂ”").replace(/'([^']*)'/g,"вЂ�$1вЂ™").replace(/"([^"]*)"/g,"вЂњ$1вЂќ").replace(/\.{3}/g,"вЂ¦"):t},e.prototype.mangle=function(t){for(var e,n="",s=t.length,r=0;s>r;r++)e=t.charCodeAt(r),Math.random()>.5&&(e="x"+e.toString(16)),n+="&#"+e+";";return n},n.parse=function(t,e){var s=new n(e);return s.parse(t)},n.prototype.parse=function(t){this.inline=new e(t.links,this.options),this.tokens=t.reverse();for(var n="";this.next();)n+=this.tok();return n},n.prototype.next=function(){return this.token=this.tokens.pop()},n.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},n.prototype.parseText=function(){for(var t=this.token.text;"text"===this.peek().type;)t+="\n"+this.next().text;return this.inline.output(t)},n.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return"<hr>\n";case"heading":return"<h"+this.token.depth+">"+this.inline.output(this.token.text)+"</h"+this.token.depth+">\n";case"code":if(this.options.highlight){var t=this.options.highlight(this.token.text,this.token.lang);null!=t&&t!==this.token.text&&(this.token.escaped=!0,this.token.text=t)}return this.token.escaped||(this.token.text=s(this.token.text,!0)),"<pre><code"+(this.token.lang?' class="'+this.options.langPrefix+this.token.lang+'"':"")+">"+this.token.text+"</code></pre>\n";case"table":var e,n,r,i,l,o="";for(o+="<thead>\n<tr>\n",n=0;n<this.token.header.length;n++)e=this.inline.output(this.token.header[n]),o+=this.token.align[n]?'<th align="'+this.token.align[n]+'">'+e+"</th>\n":"<th>"+e+"</th>\n";for(o+="</tr>\n</thead>\n",o+="<tbody>\n",n=0;n<this.token.cells.length;n++){for(r=this.token.cells[n],o+="<tr>\n",l=0;l<r.length;l++)i=this.inline.output(r[l]),o+=this.token.align[l]?'<td align="'+this.token.align[l]+'">'+i+"</td>\n":"<td>"+i+"</td>\n";o+="</tr>\n"}return o+="</tbody>\n","<table>\n"+o+"</table>\n";case"blockquote_start":for(var o="";"blockquote_end"!==this.next().type;)o+=this.tok();return"<blockquote>\n"+o+"</blockquote>\n";case"list_start":for(var a=this.token.ordered?"ol":"ul",o="";"list_end"!==this.next().type;)o+=this.tok();return"<"+a+">\n"+o+"</"+a+">\n";case"list_item_start":for(var o="";"list_item_end"!==this.next().type;)o+="text"===this.token.type?this.parseText():this.tok();return"<li>"+o+"</li>\n";case"loose_item_start":for(var o="";"list_item_end"!==this.next().type;)o+=this.tok();return"<li>"+o+"</li>\n";case"html":return this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text);case"paragraph":return"<p>"+this.inline.output(this.token.text)+"</p>\n";case"text":return"<p>"+this.parseText()+"</p>\n"}},i.exec=i,o.options=o.setOptions=function(t){return l(o.defaults,t),o},o.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-"},o.Parser=n,o.parser=n.parse,o.Lexer=t,o.lexer=t.lex,o.InlineLexer=e,o.inlineLexer=e.output,o.parse=o,"object"==typeof exports?module.exports=o:"function"==typeof define&&define.amd?define(function(){return o}):this.marked=o}.call(function(){return this||("undefined"!=typeof window?window:global)}()),function(t){"use strict";if(!t.Base64){var e,n="2.1.2";"undefined"!=typeof module&&module.exports&&(e=require("buffer").Buffer);var s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=function(t){for(var e={},n=0,s=t.length;s>n;n++)e[t.charAt(n)]=n;return e}(s),i=String.fromCharCode,l=function(t){if(t.length<2){var e=t.charCodeAt(0);return 128>e?t:2048>e?i(192|e>>>6)+i(128|63&e):i(224|e>>>12&15)+i(128|e>>>6&63)+i(128|63&e)}var e=65536+1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320);return i(240|e>>>18&7)+i(128|e>>>12&63)+i(128|e>>>6&63)+i(128|63&e)},o=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,a=function(t){return t.replace(o,l)},h=function(t){var e=[0,2,1][t.length%3],n=t.charCodeAt(0)<<16|(t.length>1?t.charCodeAt(1):0)<<8|(t.length>2?t.charCodeAt(2):0),r=[s.charAt(n>>>18),s.charAt(n>>>12&63),e>=2?"=":s.charAt(n>>>6&63),e>=1?"=":s.charAt(63&n)];return r.join("")},u=t.btoa||function(t){return t.replace(/[\s\S]{1,3}/g,h)},c=e?function(t){return new e(t).toString("base64")}:function(t){return u(a(t))},p=function(t,e){return e?c(t).replace(/[+\/]/g,function(t){return"+"==t?"-":"_"}).replace(/=/g,""):c(t)},g=function(t){return p(t,!0)},f=new RegExp(["[ГЂ-Гџ][ВЂ-Вї]","[Г -ГЇ][ВЂ-Вї]{2}","[Г°-Г·][ВЂ-Вї]{3}"].join("|"),"g"),d=function(t){switch(t.length){case 4:var e=(7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3),n=e-65536;return i((n>>>10)+55296)+i((1023&n)+56320);case 3:return i((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return i((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},m=function(t){return t.replace(f,d)},b=function(t){var e=t.length,n=e%4,s=(e>0?r[t.charAt(0)]<<18:0)|(e>1?r[t.charAt(1)]<<12:0)|(e>2?r[t.charAt(2)]<<6:0)|(e>3?r[t.charAt(3)]:0),l=[i(s>>>16),i(s>>>8&255),i(255&s)];return l.length-=[0,0,2,1][n],l.join("")},k=t.atob||function(t){return t.replace(/[\s\S]{1,4}/g,b)},x=e?function(t){return new e(t,"base64").toString()}:function(t){return m(k(t))},y=function(t){return x(t.replace(/[-_]/g,function(t){return"-"==t?"+":"/"}).replace(/[^A-Za-z0-9\+\/]/g,""))};if(t.Base64={VERSION:n,atob:k,btoa:u,fromBase64:y,toBase64:p,utob:a,encode:p,encodeURI:g,btou:m,decode:y},"function"==typeof Object.defineProperty){var v=function(t){return{value:t,enumerable:!1,writable:!0,configurable:!0}};t.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",v(function(){return y(this)})),Object.defineProperty(String.prototype,"toBase64",v(function(t){return p(this,t)})),Object.defineProperty(String.prototype,"toBase64URI",v(function(){return p(this,!0)}))}}}}(this);
