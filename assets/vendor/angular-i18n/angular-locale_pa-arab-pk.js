"use strict";angular.module("ngLocale",[],["$provide",function(e){var M={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["Ш§ШЄЩ€Ш§Ш±","ЩѕЫЊШ±","Щ…Щ†ЪЇЩ„","ШЁЩЏШЇЪѕ","Ш¬Щ…Ш№Ш±Ш§ШЄ","Ш¬Щ…Ш№ЫЃ","ЫЃЩЃШЄЫЃ"],MONTH:["Ш¬Щ†Щ€Ш±ЫЊ","ЩЃШ±Щ€Ш±ЫЊ","Щ…Ш§Ш±Ъ†","Ш§ЩѕШ±ЫЊЩ„","Щ…Ш¦","Ш¬Щ€Щ†","Ш¬Щ€Щ„Ш§Ш¦ЫЊ","Ш§ЪЇШіШЄ","ШіШЄЩ…ШЁШ±","Ш§Ъ©ШЄЩ€ШЁШ±","Щ†Щ€Щ…ШЁШ±","ШЇШіЩ…ШЁШ±"],SHORTDAY:["Ш§ШЄЩ€Ш§Ш±","ЩѕЫЊШ±","Щ…Щ†ЪЇЩ„","ШЁЩЏШЇЪѕ","Ш¬Щ…Ш№Ш±Ш§ШЄ","Ш¬Щ…Ш№ЫЃ","ЫЃЩЃШЄЫЃ"],SHORTMONTH:["Ш¬Щ†Щ€Ш±ЫЊ","ЩЃШ±Щ€Ш±ЫЊ","Щ…Ш§Ш±Ъ†","Ш§ЩѕШ±ЫЊЩ„","Щ…Ш¦","Ш¬Щ€Щ†","Ш¬Щ€Щ„Ш§Ш¦ЫЊ","Ш§ЪЇШіШЄ","ШіШЄЩ…ШЁШ±","Ш§Ъ©ШЄЩ€ШЁШ±","Щ†Щ€Щ…ШЁШ±","ШЇШіЩ…ШЁШ±"],fullDate:"EEEE, dd MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"Rs",DECIMAL_SEP:"Щ«",GROUP_SEP:"Щ¬",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"В¤В -",negSuf:"",posPre:"В¤В ",posSuf:""}]},id:"pa-arab-pk",pluralCat:function(e,a){return e>=0&&1>=e?M.ONE:M.OTHER}})}]);
