"use strict";angular.module("ngLocale",[],["$provide",function(e){function a(e){e+="";var a=e.indexOf(".");return-1==a?0:e.length-a-1}function r(e,r){var n=r;void 0===n&&(n=Math.min(a(e),3));var m=Math.pow(10,n),i=(e*m|0)%m;return{v:n,f:i}}var n={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["a.m.","p.m."],DAY:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],MONTH:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],SHORTDAY:["zo","ma","di","wo","do","vr","za"],SHORTMONTH:["jan.","feb.","mrt.","apr.","mei","jun.","jul.","aug.","sep.","okt.","nov.","dec."],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"dd-MM-yy HH:mm",shortDate:"dd-MM-yy",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"ANG",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"В¤В ",negSuf:"-",posPre:"В¤В ",posSuf:""}]},id:"nl-cw",pluralCat:function(e,a){var m=0|e,i=r(e,a);return 1==m&&0==i.v?n.ONE:n.OTHER}})}]);
