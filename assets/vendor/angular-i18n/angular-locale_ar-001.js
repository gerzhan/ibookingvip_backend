"use strict";angular.module("ngLocale",[],["$provide",function(e){var M={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["Шµ","Щ…"],DAY:["Ш§Щ„ШЈШ­ШЇ","Ш§Щ„Ш§Ш«Щ†ЩЉЩ†","Ш§Щ„Ш«Щ„Ш§Ш«Ш§ШЎ","Ш§Щ„ШЈШ±ШЁШ№Ш§ШЎ","Ш§Щ„Ш®Щ…ЩЉШі","Ш§Щ„Ш¬Щ…Ш№Ш©","Ш§Щ„ШіШЁШЄ"],MONTH:["ЩЉЩ†Ш§ЩЉШ±","ЩЃШЁШ±Ш§ЩЉШ±","Щ…Ш§Ш±Ші","ШЈШЁШ±ЩЉЩ„","Щ…Ш§ЩЉЩ€","ЩЉЩ€Щ†ЩЉЩ€","ЩЉЩ€Щ„ЩЉЩ€","ШЈШєШіШ·Ші","ШіШЁШЄЩ…ШЁШ±","ШЈЩѓШЄЩ€ШЁШ±","Щ†Щ€ЩЃЩ…ШЁШ±","ШЇЩЉШіЩ…ШЁШ±"],SHORTDAY:["Ш§Щ„ШЈШ­ШЇ","Ш§Щ„Ш§Ш«Щ†ЩЉЩ†","Ш§Щ„Ш«Щ„Ш§Ш«Ш§ШЎ","Ш§Щ„ШЈШ±ШЁШ№Ш§ШЎ","Ш§Щ„Ш®Щ…ЩЉШі","Ш§Щ„Ш¬Щ…Ш№Ш©","Ш§Щ„ШіШЁШЄ"],SHORTMONTH:["ЩЉЩ†Ш§ЩЉШ±","ЩЃШЁШ±Ш§ЩЉШ±","Щ…Ш§Ш±Ші","ШЈШЁШ±ЩЉЩ„","Щ…Ш§ЩЉЩ€","ЩЉЩ€Щ†ЩЉЩ€","ЩЉЩ€Щ„ЩЉЩ€","ШЈШєШіШ·Ші","ШіШЁШЄЩ…ШЁШ±","ШЈЩѓШЄЩ€ШЁШ±","Щ†Щ€ЩЃЩ…ШЁШ±","ШЇЩЉШіЩ…ШЁШ±"],fullDate:"EEEEШЊ d MMMMШЊ y",longDate:"d MMMMШЊ y",medium:"ddвЂЏ/MMвЂЏ/y h:mm:ss a",mediumDate:"ddвЂЏ/MMвЂЏ/y",mediumTime:"h:mm:ss a","short":"dвЂЏ/MвЂЏ/y h:mm a",shortDate:"dвЂЏ/MвЂЏ/y",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"ВЈ",DECIMAL_SEP:"Щ«",GROUP_SEP:"Щ¬",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"В¤В -",negSuf:"",posPre:"В¤В ",posSuf:""}]},id:"ar-001",pluralCat:function(e,a){return 0==e?M.ZERO:1==e?M.ONE:2==e?M.TWO:e%100>=3&&10>=e%100?M.FEW:e%100>=11&&99>=e%100?M.MANY:M.OTHER}})}]);
