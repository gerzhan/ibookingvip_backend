"use strict";angular.module("ngLocale",[],["$provide",function(n){function a(n){n+="";var a=n.indexOf(".");return-1==a?0:n.length-a-1}function i(n,i){var m=i;void 0===m&&(m=Math.min(a(n),3));var e=Math.pow(10,m),r=(n*e|0)%e;return{v:m,f:r}}var m={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};n.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["sЙ”ndi","lundi","mardi","mЙ›rkЙ›rЙ›di","yedi","vaЕ‹dЙ›rЙ›di","mЙ”nЙ” sЙ”ndi"],MONTH:["pamba","wanja","mbiyЙ” mЙ›ndoЕ‹gЙ”","NyЙ”lЙ”mbЙ”Е‹gЙ”","MЙ”nЙ” Е‹gbanja","NyaЕ‹gwЙ› Е‹gbanja","kuЕ‹gwЙ›","fЙ›","njapi","nyukul","11","Й“ulЙ“usЙ›"],SHORTDAY:["sЙ”ndi","lundi","mardi","mЙ›rkЙ›rЙ›di","yedi","vaЕ‹dЙ›rЙ›di","mЙ”nЙ” sЙ”ndi"],SHORTMONTH:["pamba","wanja","mbiyЙ” mЙ›ndoЕ‹gЙ”","NyЙ”lЙ”mbЙ”Е‹gЙ”","MЙ”nЙ” Е‹gbanja","NyaЕ‹gwЙ› Е‹gbanja","kuЕ‹gwЙ›","fЙ›","njapi","nyukul","11","Й“ulЙ“usЙ›"],fullDate:"EEEE dd MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"dd/MM y HH:mm",shortDate:"dd/MM y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"FCFA",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"В¤В -",negSuf:"",posPre:"В¤В ",posSuf:""}]},id:"kkj-cm",pluralCat:function(n,a){var e=0|n,r=i(n,a);return 1==e&&0==r.v?m.ONE:m.OTHER}})}]);
