"use strict";angular.module("ngLocale",[],["$provide",function(a){var e={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["LДЃpule","PoК»akahi","PoК»alua","PoК»akolu","PoК»ahДЃ","PoК»alima","PoК»aono"],MONTH:["Ianuali","Pepeluali","Malaki","К»Apelila","Mei","Iune","Iulai","К»Aukake","Kepakemapa","К»Okakopa","Nowemapa","Kekemapa"],SHORTDAY:["LP","P1","P2","P3","P4","P5","P6"],SHORTMONTH:["Ian.","Pep.","Mal.","К»Ap.","Mei","Iun.","Iul.","К»Au.","Kep.","К»Ok.","Now.","Kek."],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"d/M/yy h:mm a",shortDate:"d/M/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"В¤-",negSuf:"",posPre:"В¤",posSuf:""}]},id:"haw-us",pluralCat:function(a,M){return 1==a?e.ONE:e.OTHER}})}]);
