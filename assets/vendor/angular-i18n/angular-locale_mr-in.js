"use strict";angular.module("ngLocale",[],["$provide",function(e){var M={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["а¤®.а¤ЄаҐ‚.","а¤®.а¤‰."],DAY:["а¤°а¤µа¤їа¤µа¤ѕа¤°","а¤ёаҐ‹а¤®а¤µа¤ѕа¤°","а¤®а¤‚а¤—а¤іа¤µа¤ѕа¤°","а¤¬аҐЃа¤§а¤µа¤ѕа¤°","а¤—аҐЃа¤°аҐЃа¤µа¤ѕа¤°","а¤¶аҐЃа¤•аҐЌа¤°а¤µа¤ѕа¤°","а¤¶а¤Ёа¤їа¤µа¤ѕа¤°"],MONTH:["а¤ња¤ѕа¤ЁаҐ‡а¤µа¤ѕа¤°аҐЂ","а¤«аҐ‡а¤¬аҐЌа¤°аҐЃа¤µа¤ѕа¤°аҐЂ","а¤®а¤ѕа¤°аҐЌа¤љ","а¤Џа¤ЄаҐЌа¤°а¤їа¤І","а¤®аҐ‡","а¤њаҐ‚а¤Ё","а¤њаҐЃа¤ІаҐ€","а¤‘а¤—а¤ёаҐЌа¤џ","а¤ёа¤ЄаҐЌа¤џаҐ‡а¤‚а¤¬а¤°","а¤‘а¤•аҐЌа¤џаҐ‹а¤¬а¤°","а¤ЁаҐ‹а¤µаҐЌа¤№аҐ‡а¤‚а¤¬а¤°","а¤Ўа¤їа¤ёаҐ‡а¤‚а¤¬а¤°"],SHORTDAY:["а¤°а¤µа¤ї","а¤ёаҐ‹а¤®","а¤®а¤‚а¤—а¤і","а¤¬аҐЃа¤§","а¤—аҐЃа¤°аҐЃ","а¤¶аҐЃа¤•аҐЌа¤°","а¤¶а¤Ёа¤ї"],SHORTMONTH:["а¤ња¤ѕа¤ЁаҐ‡","а¤«аҐ‡а¤¬аҐЌа¤°аҐЃ","а¤®а¤ѕа¤°аҐЌа¤љ","а¤Џа¤ЄаҐЌа¤°а¤ї","а¤®аҐ‡","а¤њаҐ‚а¤Ё","а¤њаҐЃа¤ІаҐ€","а¤‘а¤—","а¤ёа¤ЄаҐЌа¤џаҐ‡а¤‚","а¤‘а¤•аҐЌа¤џаҐ‹","а¤ЁаҐ‹а¤µаҐЌа¤№аҐ‡а¤‚","а¤Ўа¤їа¤ёаҐ‡а¤‚"],fullDate:"EEEE, d MMMM, y",longDate:"d MMMM, y",medium:"d MMM, y h:mm:ss a",mediumDate:"d MMM, y",mediumTime:"h:mm:ss a","short":"d/M/yy h:mm a",shortDate:"d/M/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"в‚№",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:2,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"В¤-",negSuf:"",posPre:"В¤",posSuf:""}]},id:"mr-in",pluralCat:function(e,m){var a=0|e;return 0==a||1==e?M.ONE:M.OTHER}})}]);
