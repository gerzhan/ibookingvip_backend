"use strict";angular.module("ngLocale",[],["$provide",function(a){function t(a){a+="";var t=a.indexOf(".");return-1==t?0:a.length-t-1}function e(a,e){var u=e;void 0===u&&(u=Math.min(t(a),3));var p=Math.pow(10,u),i=(a*p|0)%p;return{v:u,f:i}}var u={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["AЕ‹pГ©tuwakИџaЕ‹","AЕ‹pГ©tuwaЕ‹Еѕi","AЕ‹pГ©tunuЕ‹pa","AЕ‹pГ©tuyamni","AЕ‹pГ©tutopa","AЕ‹pГ©tuzaptaЕ‹","OwГЎЕ‹gyuЕѕaЕѕapi"],MONTH:["WiГіtheИџika WГ­","ThiyГіИџeyuЕ‹ka WГ­","IЕЎtГЎwiДЌhayazaЕ‹ WГ­","PИџeЕѕГ­tИџo WГ­","ДЊhaЕ‹wГЎpetИџo WГ­","WГ­pazukИџa-waЕЎtГ© WГ­","ДЊhaЕ‹pИџГЎsapa WГ­","WasГєtИџuЕ‹ WГ­","ДЊhaЕ‹wГЎpeЗ§i WГ­","ДЊhaЕ‹wГЎpe-kasnГЎ WГ­","WanГ­yetu WГ­","TИџahГ©kapЕЎuЕ‹ WГ­"],SHORTDAY:["AЕ‹pГ©tuwakИџaЕ‹","AЕ‹pГ©tuwaЕ‹Еѕi","AЕ‹pГ©tunuЕ‹pa","AЕ‹pГ©tuyamni","AЕ‹pГ©tutopa","AЕ‹pГ©tuzaptaЕ‹","OwГЎЕ‹gyuЕѕaЕѕapi"],SHORTMONTH:["WiГіtheИџika WГ­","ThiyГіИџeyuЕ‹ka WГ­","IЕЎtГЎwiДЌhayazaЕ‹ WГ­","PИџeЕѕГ­tИџo WГ­","ДЊhaЕ‹wГЎpetИџo WГ­","WГ­pazukИџa-waЕЎtГ© WГ­","ДЊhaЕ‹pИџГЎsapa WГ­","WasГєtИџuЕ‹ WГ­","ДЊhaЕ‹wГЎpeЗ§i WГ­","ДЊhaЕ‹wГЎpe-kasnГЎ WГ­","WanГ­yetu WГ­","TИџahГ©kapЕЎuЕ‹ WГ­"],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"В¤В -",negSuf:"",posPre:"В¤В ",posSuf:""}]},id:"lkt",pluralCat:function(a,t){var p=0|a,i=e(a,t);return 1==p&&0==i.v?u.ONE:u.OTHER}})}]);
