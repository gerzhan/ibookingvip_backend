"use strict";angular.module("ngLocale",[],["$provide",function(a){function e(a){a+="";var e=a.indexOf(".");return-1==e?0:a.length-e-1}function r(a,r){var n=r;void 0===n&&(n=Math.min(e(a),3));var o=Math.pow(10,n),t=(a*o|0)%o;return{v:n,f:t}}var n={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["dopoludnia","odpoludnia"],DAY:["nedeДѕa","pondelok","utorok","streda","ЕЎtvrtok","piatok","sobota"],MONTH:["januГЎra","februГЎra","marca","aprГ­la","mГЎja","jГєna","jГєla","augusta","septembra","oktГіbra","novembra","decembra"],SHORTDAY:["ne","po","ut","st","ЕЎt","pi","so"],SHORTMONTH:["jan","feb","mar","apr","mГЎj","jГєn","jГєl","aug","sep","okt","nov","dec"],fullDate:"EEEE, d. MMMM y",longDate:"d. MMMM y",medium:"d. M. y H:mm:ss",mediumDate:"d. M. y",mediumTime:"H:mm:ss","short":"dd.MM.yy H:mm",shortDate:"dd.MM.yy",shortTime:"H:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"в‚¬",DECIMAL_SEP:",",GROUP_SEP:"В ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"В В¤",posPre:"",posSuf:"В В¤"}]},id:"sk",pluralCat:function(a,e){var o=0|a,t=r(a,e);return 1==o&&0==t.v?n.ONE:o>=2&&4>=o&&0==t.v?n.FEW:0!=t.v?n.MANY:n.OTHER}})}]);
