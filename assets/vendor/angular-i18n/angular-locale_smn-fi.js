"use strict";angular.module("ngLocale",[],["$provide",function(M){function e(M){M+="";var e=M.indexOf(".");return-1==e?0:M.length-e-1}function a(M,a){var r=a;void 0===r&&(r=Math.min(e(M),3));var n=Math.pow(10,r),i=(M*n|0)%n;return{v:r,f:i}}var r={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};M.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["pasepeeivi","vuossaargГў","majebaargГў","koskoho","tuorГўstuv","vГЎstuppeeivi","lГЎvurduv"],MONTH:["M01","M02","M03","M04","M05","M06","M07","M08","M09","M10","M11","M12"],SHORTDAY:["pa","vu","ma","ko","tu","vГЎ","lГЎ"],SHORTMONTH:["M01","M02","M03","M04","M05","M06","M07","M08","M09","M10","M11","M12"],fullDate:"y MMMM d, EEEE",longDate:"y MMMM d",medium:"y MMM d HH:mm:ss",mediumDate:"y MMM d",mediumTime:"HH:mm:ss","short":"y-MM-dd HH:mm",shortDate:"y-MM-dd",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"в‚¬",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"В¤В -",negSuf:"",posPre:"В¤В ",posSuf:""}]},id:"smn-fi",pluralCat:function(M,e){var n=0|M,i=a(M,e);return 1==n&&0==i.v?r.ONE:r.OTHER}})}]);
