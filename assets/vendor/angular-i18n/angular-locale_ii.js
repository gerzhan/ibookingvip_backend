"use strict";angular.module("ngLocale",[],["$provide",function(e){function M(e){e+="";var M=e.indexOf(".");return-1==M?0:e.length-M-1}function n(e,n){var r=n;void 0===r&&(r=Math.min(M(e),3));var a=Math.pow(10,r),i=(e*a|0)%a;return{v:r,f:i}}var r={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["кЋёк„‘","кЃЇк‹’"],DAY:["к‘­к†Џк‘Ќ","к†ЏкЉ‚к‹Ќ","к†ЏкЉ‚к‘Ќ","к†ЏкЉ‚кЊ•","к†ЏкЉ‚к‡–","к†ЏкЉ‚к‰¬","к†ЏкЉ‚кѓ�"],MONTH:["к‹Ќк†Є","к‘Ќк†Є","кЊ•к†Є","к‡–к†Є","к‰¬к†Є","кѓ�к†Є","кЏѓк†Є","к‰†к†Є","к€¬к†Є","кЉ°к†Є","кЉ°кЉЄк†Є","кЉ°к‘‹к†Є"],SHORTDAY:["к‘­к†Џ","к†Џк‹Ќ","к†Џк‘Ќ","к†ЏкЊ•","к†Џк‡–","к†Џк‰¬","к†Џкѓ�"],SHORTMONTH:["1","2","3","4","5","6","7","8","9","10","11","12"],fullDate:"y MMMM d, EEEE",longDate:"y MMMM d",medium:"y MMM d HH:mm:ss",mediumDate:"y MMM d",mediumTime:"HH:mm:ss","short":"y-MM-dd HH:mm",shortDate:"y-MM-dd",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"ВҐ",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"В¤В -",negSuf:"",posPre:"В¤В ",posSuf:""}]},id:"ii",pluralCat:function(e,M){var a=0|e,i=n(e,M);return 1==a&&0==i.v?r.ONE:r.OTHER}})}]);
