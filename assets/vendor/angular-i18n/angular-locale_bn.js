"use strict";angular.module("ngLocale",[],["$provide",function(e){var M={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["am","pm"],DAY:["а¦°а¦¬а¦їа¦¬а¦ѕа¦°","а¦ёа§‹а¦®а¦¬а¦ѕа¦°","а¦®а¦™а§Ќа¦—а¦Іа¦¬а¦ѕа¦°","а¦¬а§Ѓа¦§а¦¬а¦ѕа¦°","а¦¬а§ѓа¦№а¦ёа§Ќа¦Єа¦¤а¦їа¦¬а¦ѕа¦°","а¦¶а§Ѓа¦•а§Ќа¦°а¦¬а¦ѕа¦°","а¦¶а¦Ёа¦їа¦¬а¦ѕа¦°"],MONTH:["а¦ња¦ѕа¦Ёа§Ѓа¦Їа¦ја¦ѕа¦°а§Ђ","а¦«а§‡а¦¬а§Ќа¦°а§Ѓа¦Їа¦ја¦ѕа¦°а§Ђ","а¦®а¦ѕа¦°а§Ќа¦љ","а¦Џа¦Єа§Ќа¦°а¦їа¦І","а¦®а§‡","а¦ња§Ѓа¦Ё","а¦ња§Ѓа¦Іа¦ѕа¦‡","а¦†а¦—а¦ёа§Ќа¦џ","а¦ёа§‡а¦Єа§Ќа¦џа§‡а¦®а§Ќа¦¬а¦°","а¦…а¦•а§Ќа¦џа§‹а¦¬а¦°","а¦Ёа¦­а§‡а¦®а§Ќа¦¬а¦°","а¦Ўа¦їа¦ёа§‡а¦®а§Ќа¦¬а¦°"],SHORTDAY:["а¦°а¦¬а¦ї","а¦ёа§‹а¦®","а¦®а¦™а§Ќа¦—а¦І","а¦¬а§Ѓа¦§","а¦¬а§ѓа¦№а¦ёа§Ќа¦Єа¦¤а¦ї","а¦¶а§Ѓа¦•а§Ќа¦°","а¦¶а¦Ёа¦ї"],SHORTMONTH:["а¦ња¦ѕа¦Ёа§Ѓа¦Їа¦ја¦ѕа¦°а§Ђ","а¦«а§‡а¦¬а§Ќа¦°а§Ѓа¦Їа¦ја¦ѕа¦°а§Ђ","а¦®а¦ѕа¦°а§Ќа¦љ","а¦Џа¦Єа§Ќа¦°а¦їа¦І","а¦®а§‡","а¦ња§Ѓа¦Ё","а¦ња§Ѓа¦Іа¦ѕа¦‡","а¦†а¦—а¦ёа§Ќа¦џ","а¦ёа§‡а¦Єа§Ќа¦џа§‡а¦®а§Ќа¦¬а¦°","а¦…а¦•а§Ќа¦џа§‹а¦¬а¦°","а¦Ёа¦­а§‡а¦®а§Ќа¦¬а¦°","а¦Ўа¦їа¦ёа§‡а¦®а§Ќа¦¬а¦°"],fullDate:"EEEE, d MMMM, y",longDate:"d MMMM, y",medium:"d MMM, y h:mm:ss a",mediumDate:"d MMM, y",mediumTime:"h:mm:ss a","short":"d/M/yy h:mm a",shortDate:"d/M/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"а§і",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:2,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:2,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"В¤",posPre:"",posSuf:"В¤"}]},id:"bn",pluralCat:function(e,m){var a=0|e;return 0==a||1==e?M.ONE:M.OTHER}})}]);
