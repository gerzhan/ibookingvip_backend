"use strict";angular.module("ngLocale",[],["$provide",function(e){function n(e){e+="";var n=e.indexOf(".");return-1==n?0:e.length-n-1}function r(e,r){var M=r;void 0===M&&(M=Math.min(n(e),3));var t=Math.pow(10,M),m=(e*t|0)%t;return{v:M,f:m}}var M={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["moies","nomГ«ttes"],DAY:["Sonndeg","MГ©indeg","DГ«nschdeg","MГ«ttwoch","Donneschdeg","Freideg","Samschdeg"],MONTH:["Januar","Februar","MГ¤erz","AbrГ«ll","Mee","Juni","Juli","August","September","Oktober","November","Dezember"],SHORTDAY:["Son.","MГ©i.","DГ«n.","MГ«t.","Don.","Fre.","Sam."],SHORTMONTH:["Jan.","Feb.","MГ¤e.","Abr.","Mee","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],fullDate:"EEEE, d. MMMM y",longDate:"d. MMMM y",medium:"d. MMM y HH:mm:ss",mediumDate:"d. MMM y",mediumTime:"HH:mm:ss","short":"dd.MM.yy HH:mm",shortDate:"dd.MM.yy",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"в‚¬",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"В В¤",posPre:"",posSuf:"В В¤"}]},id:"lb-lu",pluralCat:function(e,n){var t=0|e,m=r(e,n);return 1==t&&0==m.v?M.ONE:M.OTHER}})}]);
