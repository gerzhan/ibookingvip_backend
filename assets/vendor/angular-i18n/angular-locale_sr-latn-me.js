"use strict";angular.module("ngLocale",[],["$provide",function(e){function a(e){e+="";var a=e.indexOf(".");return-1==a?0:e.length-a-1}function r(e,r){var n=r;void 0===n&&(n=Math.min(a(e),3));var t=Math.pow(10,n),o=(e*t|0)%t;return{v:n,f:o}}var n={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["pre podne","po podne"],DAY:["nedelja","ponedeljak","utorak","sreda","ДЌetvrtak","petak","subota"],MONTH:["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar"],SHORTDAY:["ned","pon","uto","sre","ДЌet","pet","sub"],SHORTMONTH:["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"],fullDate:"EEEE, dd. MMMM y.",longDate:"dd. MMMM y.",medium:"dd.MM.y. HH.mm.ss",mediumDate:"dd.MM.y.",mediumTime:"HH.mm.ss","short":"d.M.yy. HH.mm",shortDate:"d.M.yy.",shortTime:"HH.mm"},NUMBER_FORMATS:{CURRENCY_SYM:"в‚¬",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"В В¤",posPre:"",posSuf:"В В¤"}]},id:"sr-latn-me",pluralCat:function(e,a){var t=0|e,o=r(e,a);return 0==o.v&&t%10==1&&t%100!=11||o.f%10==1&&o.f%100!=11?n.ONE:0==o.v&&t%10>=2&&4>=t%10&&(12>t%100||t%100>14)||o.f%10>=2&&o.f%10<=4&&(o.f%100<12||o.f%100>14)?n.FEW:n.OTHER}})}]);
