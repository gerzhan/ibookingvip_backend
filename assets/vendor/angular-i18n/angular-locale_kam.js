"use strict";angular.module("ngLocale",[],["$provide",function(a){function n(a){a+="";var n=a.indexOf(".");return-1==n?0:a.length-n-1}function M(a,M){var e=M;void 0===e&&(e=Math.min(n(a),3));var t=Math.pow(10,e),i=(a*t|0)%t;return{v:e,f:i}}var e={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["ДЁyakwakya","ДЁyawД©oo"],DAY:["Wa kyumwa","Wa kwambД©lД©lya","Wa kelД©","Wa katatЕ©","Wa kana","Wa katano","Wa thanthatЕ©"],MONTH:["Mwai wa mbee","Mwai wa kelД©","Mwai wa katatЕ©","Mwai wa kana","Mwai wa katano","Mwai wa thanthatЕ©","Mwai wa muonza","Mwai wa nyaanya","Mwai wa kenda","Mwai wa Д©kumi","Mwai wa Д©kumi na Д©mwe","Mwai wa Д©kumi na ilД©"],SHORTDAY:["Wky","Wkw","Wkl","WtЕ©","Wkn","Wtn","Wth"],SHORTMONTH:["Mbe","Kel","KtЕ©","Kan","Ktn","Tha","Moo","Nya","Knd","ДЁku","ДЁkm","ДЁkl"],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"Ksh",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"В¤-",negSuf:"",posPre:"В¤",posSuf:""}]},id:"kam",pluralCat:function(a,n){var t=0|a,i=M(a,n);return 1==t&&0==i.v?e.ONE:e.OTHER}})}]);
