"use strict";angular.module("ngLocale",[],["$provide",function(e){var a={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["domingo","segunda-feira","terГ§a-feira","quarta-feira","quinta-feira","sexta-feira","sГЎbado"],MONTH:["janeiro","fevereiro","marГ§o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],SHORTDAY:["dom","seg","ter","qua","qui","sex","sГЎb"],SHORTMONTH:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],fullDate:"EEEE, d 'de' MMMM 'de' y",longDate:"d 'de' MMMM 'de' y",medium:"d 'de' MMM 'de' y HH:mm:ss",mediumDate:"d 'de' MMM 'de' y",mediumTime:"HH:mm:ss","short":"dd/MM/yy HH:mm",shortDate:"dd/MM/yy",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"R$",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"В¤-",negSuf:"",posPre:"В¤",posSuf:""}]},id:"pt-br",pluralCat:function(e,r){return e>=0&&2>=e&&2!=e?a.ONE:a.OTHER}})}]);
