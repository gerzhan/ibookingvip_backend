"use strict";angular.module("ngLocale",[],["$provide",function(e){var M={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["аЁЄа©‚.аЁ¦а©Ѓ.","аЁ¬аЁѕ.аЁ¦а©Ѓ."],DAY:["аЁђаЁ¤аЁµаЁѕаЁ°","аЁёа©‹аЁ®аЁµаЁѕаЁ°","аЁ®а©°аЁ—аЁІаЁµаЁѕаЁ°","аЁ¬а©Ѓа©±аЁ§аЁµаЁѕаЁ°","аЁµа©ЂаЁ°аЁµаЁѕаЁ°","аЁёаЁја©Ѓа©±аЁ•аЁ°аЁµаЁѕаЁ°","аЁёаЁјаЁЁаЁїа©±аЁљаЁ°аЁµаЁѕаЁ°"],MONTH:["аЁњаЁЁаЁµаЁ°а©Ђ","аЁ«аЁјаЁ°аЁµаЁ°а©Ђ","аЁ®аЁѕаЁ°аЁљ","аЁ…аЁЄа©ЌаЁ°а©€аЁІ","аЁ®аЁ€","аЁња©‚аЁЁ","аЁња©ЃаЁІаЁѕаЁ€","аЁ…аЁ—аЁёаЁ¤","аЁёаЁ¤а©°аЁ¬аЁ°","аЁ…аЁ•аЁ¤а©‚аЁ¬аЁ°","аЁЁаЁµа©°аЁ¬аЁ°","аЁ¦аЁёа©°аЁ¬аЁ°"],SHORTDAY:["аЁђаЁ¤","аЁёа©‹аЁ®","аЁ®а©°аЁ—аЁІ","аЁ¬а©Ѓа©±аЁ§","аЁµа©ЂаЁ°","аЁёаЁја©Ѓа©±аЁ•аЁ°","аЁёаЁјаЁЁаЁїа©±аЁљаЁ°"],SHORTMONTH:["аЁњаЁЁ","аЁ«аЁјаЁ°","аЁ®аЁѕаЁ°аЁљ","аЁ…аЁЄа©ЌаЁ°а©€","аЁ®аЁ€","аЁња©‚аЁЁ","аЁња©ЃаЁІаЁѕ","аЁ…аЁ—","аЁёаЁ¤а©°","аЁ…аЁ•аЁ¤а©‚","аЁЁаЁµа©°","аЁ¦аЁёа©°"],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"d/M/yy h:mm a",shortDate:"d/M/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"в‚№",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:2,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:2,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"В¤-",negSuf:"",posPre:"В¤",posSuf:""}]},id:"pa-guru-in",pluralCat:function(e,a){return e>=0&&1>=e?M.ONE:M.OTHER}})}]);
