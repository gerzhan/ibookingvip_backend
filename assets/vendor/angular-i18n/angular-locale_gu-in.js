"use strict";angular.module("ngLocale",[],["$provide",function(e){var M={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["аЄ°аЄµаЄїаЄµаЄѕаЄ°","аЄёа«‹аЄ®аЄµаЄѕаЄ°","аЄ®аЄ‚аЄ—аЄіаЄµаЄѕаЄ°","аЄ¬а«ЃаЄ§аЄµаЄѕаЄ°","аЄ—а«ЃаЄ°а«ЃаЄµаЄѕаЄ°","аЄ¶а«ЃаЄ•а«ЌаЄ°аЄµаЄѕаЄ°","аЄ¶аЄЁаЄїаЄµаЄѕаЄ°"],MONTH:["аЄњаЄѕаЄЁа«ЌаЄЇа«ЃаЄ†аЄ°а«Ђ","аЄ«а«‡аЄ¬а«ЌаЄ°а«ЃаЄ†аЄ°а«Ђ","аЄ®аЄѕаЄ°а«ЌаЄљ","аЄЏаЄЄа«ЌаЄ°аЄїаЄІ","аЄ®а«‡","аЄња«‚аЄЁ","аЄња«ЃаЄІаЄѕаЄ€","аЄ‘аЄ—аЄёа«ЌаЄџ","аЄёаЄЄа«ЌаЄџа«‡аЄ®а«ЌаЄ¬аЄ°","аЄ‘аЄ•а«ЌаЄџа«‹аЄ¬аЄ°","аЄЁаЄµа«‡аЄ®а«ЌаЄ¬аЄ°","аЄЎаЄїаЄёа«‡аЄ®а«ЌаЄ¬аЄ°"],SHORTDAY:["аЄ°аЄµаЄї","аЄёа«‹аЄ®","аЄ®аЄ‚аЄ—аЄі","аЄ¬а«ЃаЄ§","аЄ—а«ЃаЄ°а«Ѓ","аЄ¶а«ЃаЄ•а«ЌаЄ°","аЄ¶аЄЁаЄї"],SHORTMONTH:["аЄњаЄѕаЄЁа«ЌаЄЇа«Ѓ","аЄ«а«‡аЄ¬а«ЌаЄ°а«Ѓ","аЄ®аЄѕаЄ°а«ЌаЄљ","аЄЏаЄЄа«ЌаЄ°аЄїаЄІ","аЄ®а«‡","аЄња«‚аЄЁ","аЄња«ЃаЄІаЄѕаЄ€","аЄ‘аЄ—","аЄёаЄЄа«ЌаЄџа«‡","аЄ‘аЄ•а«ЌаЄџа«‹","аЄЁаЄµа«‡","аЄЎаЄїаЄёа«‡"],fullDate:"EEEE, d MMMM, y",longDate:"d MMMM, y",medium:"d MMM, y hh:mm:ss a",mediumDate:"d MMM, y",mediumTime:"hh:mm:ss a","short":"d/M/yy hh:mm a",shortDate:"d/M/yy",shortTime:"hh:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"в‚№",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:2,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:2,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"В¤-",negSuf:"",posPre:"В¤",posSuf:""}]},id:"gu-in",pluralCat:function(e,a){var m=0|e;return 0==m||1==e?M.ONE:M.OTHER}})}]);
