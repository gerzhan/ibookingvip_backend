"use strict";angular.module("ngLocale",[],["$provide",function(e){function n(e){e+="";var n=e.indexOf(".");return-1==n?0:e.length-n-1}function r(e,r){var a=r;void 0===a&&(a=Math.min(n(e),3));var i=Math.pow(10,a),o=(e*i|0)%i;return{v:a,f:o}}var a={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["snein","moandei","tiisdei","woansdei","tongersdei","freed","sneon"],MONTH:["jannewaris","febrewaris","maart","april","maaie","juny","july","augustus","septimber","oktober","novimber","desimber"],SHORTDAY:["si","mo","ti","wo","to","fr","so"],SHORTMONTH:["jan.","feb.","mrt.","apr.","mai","jun.","jul.","aug.","sep.","okt.","nov.","des."],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"dd-MM-yy HH:mm",shortDate:"dd-MM-yy",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"в‚¬",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"В¤В ",negSuf:"-",posPre:"В¤В ",posSuf:""}]},id:"fy-nl",pluralCat:function(e,n){var i=0|e,o=r(e,n);return 1==i&&0==o.v?a.ONE:a.OTHER}})}]);
