"use strict";angular.module("ngLocale",[],["$provide",function(a){function e(a){a+="";var e=a.indexOf(".");return-1==e?0:a.length-e-1}function i(a,i){var r=i;void 0===r&&(r=Math.min(e(a),3));var n=Math.pow(10,r),t=(a*n|0)%n;return{v:r,f:t}}var r={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["saaku","carra"],DAY:["Acaada","Etleeni","Talaata","Arbaqa","Kamiisi","Gumqata","Sabti"],MONTH:["Qunxa Garablu","Kudo","Ciggilta Kudo","Agda Baxis","Caxah Alsa","Qasa Dirri","Qado Dirri","Leqeeni","Waysu","Diteli","Ximoli","Kaxxa Garablu"],SHORTDAY:["Aca","Etl","Tal","Arb","Kam","Gum","Sab"],SHORTMONTH:["Qun","Nah","Cig","Agd","Cax","Qas","Qad","Leq","Way","Dit","Xim","Kax"],fullDate:"EEEE, MMMM dd, y",longDate:"dd MMMM y",medium:"dd-MMM-y h:mm:ss a",mediumDate:"dd-MMM-y",mediumTime:"h:mm:ss a","short":"dd/MM/yy h:mm a",shortDate:"dd/MM/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"Fdj",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"В¤-",negSuf:"",posPre:"В¤",posSuf:""}]},id:"aa-dj",pluralCat:function(a,e){var n=0|a,t=i(a,e);return 1==n&&0==t.v?r.ONE:r.OTHER}})}]);
