"use strict";angular.module("ngLocale",[],["$provide",function(e){function a(e){e+="";var a=e.indexOf(".");return-1==a?0:e.length-a-1}function o(e,o){var n=o;void 0===n&&(n=Math.min(a(e),3));var r=Math.pow(10,n),M=(e*r|0)%r;return{v:n,f:M}}var n={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["Tesiran","Teipa"],DAY:["Mderot ee are","Mderot ee kuni","Mderot ee ongвЂ™wan","Mderot ee inet","Mderot ee ile","Mderot ee sapa","Mderot ee kwe"],MONTH:["Lapa le obo","Lapa le waare","Lapa le okuni","Lapa le ongвЂ™wan","Lapa le imet","Lapa le ile","Lapa le sapa","Lapa le isiet","Lapa le saal","Lapa le tomon","Lapa le tomon obo","Lapa le tomon waare"],SHORTDAY:["Are","Kun","Ong","Ine","Ile","Sap","Kwe"],SHORTMONTH:["Obo","Waa","Oku","Ong","Ime","Ile","Sap","Isi","Saa","Tom","Tob","Tow"],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"Ksh",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"В¤-",negSuf:"",posPre:"В¤",posSuf:""}]},id:"saq",pluralCat:function(e,a){var r=0|e,M=o(e,a);return 1==r&&0==M.v?n.ONE:n.OTHER}})}]);
