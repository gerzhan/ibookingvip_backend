"use strict";angular.module("ngLocale",[],["$provide",function(e){function o(e){e+="";var o=e.indexOf(".");return-1==o?0:e.length-o-1}function r(e,r){var a=r;void 0===a&&(a=Math.min(o(e),3));var n=Math.pow(10,a),m=(e*n|0)%n;return{v:a,f:m}}var a={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["domenica","lunedГ¬","martedГ¬","mercoledГ¬","giovedГ¬","venerdГ¬","sabato"],MONTH:["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"],SHORTDAY:["dom","lun","mar","mer","gio","ven","sab"],SHORTMONTH:["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"dd MMM y HH:mm:ss",mediumDate:"dd MMM y",mediumTime:"HH:mm:ss","short":"dd/MM/yy HH:mm",shortDate:"dd/MM/yy",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"в‚¬",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"В В¤",posPre:"",posSuf:"В В¤"}]},id:"it-it",pluralCat:function(e,o){var n=0|e,m=r(e,o);return 1==n&&0==m.v?a.ONE:a.OTHER}})}]);
