"use strict";angular.module("ngLocale",[],["$provide",function(e){var M={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["Р±Р°Р·Р°СЂ","Р±Р°Р·Р°СЂ РµСЂС‚У™СЃРё","С‡У™СЂС€У™РЅР±У™ Р°С…С€Р°РјС‹","С‡У™СЂС€У™РЅР±У™","Т№ТЇРјУ™ Р°С…С€Р°РјС‹","Т№ТЇРјУ™","С€У™РЅР±У™"],MONTH:["С�Р°РЅРІР°СЂ","С„РµРІСЂР°Р»","РјР°СЂС‚","Р°РїСЂРµР»","РјР°Р№","РёС�СѓРЅ","РёС�СѓР»","Р°РІРіСѓСЃС‚","СЃРµРЅС‚С�Р°Р±СЂ","РѕРєС‚С�Р°Р±СЂ","РЅРѕС�Р°Р±СЂ","РґРµРєР°Р±СЂ"],SHORTDAY:["Р±Р°Р·Р°СЂ","Р±Р°Р·Р°СЂ РµСЂС‚У™СЃРё","С‡У™СЂС€У™РЅР±У™ Р°С…С€Р°РјС‹","С‡У™СЂС€У™РЅР±У™","Т№ТЇРјУ™ Р°С…С€Р°РјС‹","Т№ТЇРјУ™","С€У™РЅР±У™"],SHORTMONTH:["С�Р°РЅРІР°СЂ","С„РµРІСЂР°Р»","РјР°СЂС‚","Р°РїСЂРµР»","РјР°Р№","РёС�СѓРЅ","РёС�СѓР»","Р°РІРіСѓСЃС‚","СЃРµРЅС‚С�Р°Р±СЂ","РѕРєС‚С�Р°Р±СЂ","РЅРѕС�Р°Р±СЂ","РґРµРєР°Р±СЂ"],fullDate:"EEEE, d, MMMM, y",longDate:"d MMMM, y",medium:"d MMM, y HH:mm:ss",mediumDate:"d MMM, y",mediumTime:"HH:mm:ss","short":"dd.MM.yy HH:mm",shortDate:"dd.MM.yy",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"man.",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"В¤В -",negSuf:"",posPre:"В¤В ",posSuf:""}]},id:"az-cyrl-az",pluralCat:function(e,m){return 1==e?M.ONE:M.OTHER}})}]);
