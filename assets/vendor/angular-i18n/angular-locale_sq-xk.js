"use strict";angular.module("ngLocale",[],["$provide",function(e){var r={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["paradite","pasdite"],DAY:["e diel","e hГ«nГ«","e martГ«","e mГ«rkurГ«","e enjte","e premte","e shtunГ«"],MONTH:["janar","shkurt","mars","prill","maj","qershor","korrik","gusht","shtator","tetor","nГ«ntor","dhjetor"],SHORTDAY:["Die","HГ«n","Mar","MГ«r","Enj","Pre","Sht"],SHORTMONTH:["Jan","Shk","Mar","Pri","Maj","Qer","Kor","Gsh","Sht","Tet","NГ«n","Dhj"],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"d.M.yy HH:mm",shortDate:"d.M.yy",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"в‚¬",DECIMAL_SEP:",",GROUP_SEP:"В ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"В В¤",posPre:"",posSuf:"В В¤"}]},id:"sq-xk",pluralCat:function(e,t){return 1==e?r.ONE:r.OTHER}})}]);
