"use strict";angular.module("ngLocale",[],["$provide",function(e){function a(e){e+="";var a=e.indexOf(".");return-1==a?0:e.length-a-1}function i(e,i){var r=i;void 0===r&&(r=Math.min(a(e),3));var n=Math.pow(10,r),t=(e*n|0)%n;return{v:r,f:t}}var r={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"],MONTH:["stycznia","lutego","marca","kwietnia","maja","czerwca","lipca","sierpnia","września","października","listopada","grudnia"],SHORTDAY:["niedz.","pon.","wt.","śr.","czw.","pt.","sob."],SHORTMONTH:["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź","lis","gru"],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"dd.MM.y HH:mm",shortDate:"dd.MM.y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"zł",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"pl",pluralCat:function(e,a){var n=0|e,t=i(e,a);return 1==n&&0==t.v?r.ONE:0==t.v&&n%10>=2&&4>=n%10&&(12>n%100||n%100>14)?r.FEW:0==t.v&&1!=n&&n%10>=0&&1>=n%10||0==t.v&&n%10>=5&&9>=n%10||0==t.v&&n%100>=12&&14>=n%100?r.MANY:r.OTHER}})}]);