"use strict";angular.module("ngLocale",[],["$provide",function(e){function M(e){e+="";var M=e.indexOf(".");return-1==M?0:e.length-M-1}function n(e,n){var r=n;void 0===r&&(r=Math.min(M(e),3));var a=Math.pow(10,r),m=(e*a|0)%a;return{v:r,f:m}}var r={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["ЧњЧ¤Ч Ч”ЧґЧ¦","ЧђЧ—Ч”ЧґЧ¦"],DAY:["Ч™Ч•Чќ ЧЁЧђЧ©Ч•Чџ","Ч™Ч•Чќ Ч©Ч Ч™","Ч™Ч•Чќ Ч©ЧњЧ™Ч©Ч™","Ч™Ч•Чќ ЧЁЧ‘Ч™ЧўЧ™","Ч™Ч•Чќ Ч—ЧћЧ™Ч©Ч™","Ч™Ч•Чќ Ч©Ч™Ч©Ч™","Ч™Ч•Чќ Ч©Ч‘ЧЄ"],MONTH:["Ч™Ч Ч•ЧђЧЁ","Ч¤Ч‘ЧЁЧ•ЧђЧЁ","ЧћЧЁЧҐ","ЧђЧ¤ЧЁЧ™Чњ","ЧћЧђЧ™","Ч™Ч•Ч Ч™","Ч™Ч•ЧњЧ™","ЧђЧ•Ч’Ч•ЧЎЧ�","ЧЎЧ¤Ч�ЧћЧ‘ЧЁ","ЧђЧ•Ч§Ч�Ч•Ч‘ЧЁ","Ч Ч•Ч‘ЧћЧ‘ЧЁ","Ч“Ч¦ЧћЧ‘ЧЁ"],SHORTDAY:["Ч™Ч•Чќ ЧђЧі","Ч™Ч•Чќ Ч‘Чі","Ч™Ч•Чќ Ч’Чі","Ч™Ч•Чќ Ч“Чі","Ч™Ч•Чќ Ч”Чі","Ч™Ч•Чќ Ч•Чі","Ч©Ч‘ЧЄ"],SHORTMONTH:["Ч™Ч Ч•Чі","Ч¤Ч‘ЧЁЧі","ЧћЧЁЧҐ","ЧђЧ¤ЧЁЧі","ЧћЧђЧ™","Ч™Ч•Ч Ч™","Ч™Ч•ЧњЧ™","ЧђЧ•Ч’Чі","ЧЎЧ¤Ч�Чі","ЧђЧ•Ч§Чі","Ч Ч•Ч‘Чі","Ч“Ч¦ЧћЧі"],fullDate:"EEEE, d Ч‘MMMM y",longDate:"d Ч‘MMMM y",medium:"d Ч‘MMM y HH:mm:ss",mediumDate:"d Ч‘MMM y",mediumTime:"HH:mm:ss","short":"d.M.y HH:mm",shortDate:"d.M.y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"в‚Є",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"В В¤",posPre:"",posSuf:"В В¤"}]},id:"iw",pluralCat:function(e,M){var a=0|e,m=n(e,M);return 1==a&&0==m.v?r.ONE:2==a&&0==m.v?r.TWO:0==m.v&&(0>e||e>10)&&e%10==0?r.MANY:r.OTHER}})}]);
