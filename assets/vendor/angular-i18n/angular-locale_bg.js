"use strict";angular.module("ngLocale",[],["$provide",function(e){var M={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["РїСЂ.РѕР±.","СЃР».РѕР±."],DAY:["РЅРµРґРµР»СЏ","РїРѕРЅРµРґРµР»РЅРёРє","РІС‚РѕСЂРЅРёРє","СЃСЂСЏРґР°","С‡РµС‚РІСЉСЂС‚СЉРє","РїРµС‚СЉРє","СЃСЉР±РѕС‚Р°"],MONTH:["СЏРЅСѓР°СЂРё","С„РµРІСЂСѓР°СЂРё","РјР°СЂС‚","Р°РїСЂРёР»","РјР°Р№","СЋРЅРё","СЋР»Рё","Р°РІРіСѓСЃС‚","СЃРµРїС‚РµРјРІСЂРё","РѕРєС‚РѕРјРІСЂРё","РЅРѕРµРјРІСЂРё","РґРµРєРµРјРІСЂРё"],SHORTDAY:["РЅРґ","РїРЅ","РІС‚","СЃСЂ","С‡С‚","РїС‚","СЃР±"],SHORTMONTH:["СЏРЅ.","С„РµРІСЂ.","РјР°СЂС‚","Р°РїСЂ.","РјР°Р№","СЋРЅРё","СЋР»Рё","Р°РІРі.","СЃРµРїС‚.","РѕРєС‚.","РЅРѕРµРј.","РґРµРє."],fullDate:"EEEE, d MMMM y 'Рі'.",longDate:"d MMMM y 'Рі'.",medium:"d.MM.y 'Рі'. H:mm:ss",mediumDate:"d.MM.y 'Рі'.",mediumTime:"H:mm:ss","short":"d.MM.yy 'Рі'. H:mm",shortDate:"d.MM.yy 'Рі'.",shortTime:"H:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"lev",DECIMAL_SEP:",",GROUP_SEP:"В ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"В В¤",posPre:"",posSuf:"В В¤"}]},id:"bg",pluralCat:function(e,m){return 1==e?M.ONE:M.OTHER}})}]);
