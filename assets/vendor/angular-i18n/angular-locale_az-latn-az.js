"use strict";angular.module("ngLocale",[],["$provide",function(a){var e={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["bazar","bazar ertЙ™si","Г§Й™rЕџЙ™nbЙ™ axЕџamД±","Г§Й™rЕџЙ™nbЙ™","cГјmЙ™ axЕџamД±","cГјmЙ™","ЕџЙ™nbЙ™"],MONTH:["yanvar","fevral","mart","aprel","may","iyun","iyul","avqust","sentyabr","oktyabr","noyabr","dekabr"],SHORTDAY:["B.","B.E.","Г‡.A.","Г‡.","C.A.","C.","Ећ."],SHORTMONTH:["yan","fev","mar","apr","may","iyn","iyl","avq","sen","okt","noy","dek"],fullDate:"d MMMM y, EEEE",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"dd.MM.yy HH:mm",shortDate:"dd.MM.yy",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"man.",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"В¤В -",negSuf:"",posPre:"В¤В ",posSuf:""}]},id:"az-latn-az",pluralCat:function(a,r){return 1==a?e.ONE:e.OTHER}})}]);
