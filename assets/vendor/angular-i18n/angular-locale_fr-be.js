"use strict";angular.module("ngLocale",[],["$provide",function(e){var r={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],MONTH:["janvier","fГ©vrier","mars","avril","mai","juin","juillet","aoГ»t","septembre","octobre","novembre","dГ©cembre"],SHORTDAY:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],SHORTMONTH:["janv.","fГ©vr.","mars","avr.","mai","juin","juil.","aoГ»t","sept.","oct.","nov.","dГ©c."],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"d/MM/yy HH:mm",shortDate:"d/MM/yy",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"в‚¬",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"В В¤",posPre:"",posSuf:"В В¤"}]},id:"fr-be",pluralCat:function(e,m){var a=0|e;return 0==a||1==a?r.ONE:r.OTHER}})}]);
