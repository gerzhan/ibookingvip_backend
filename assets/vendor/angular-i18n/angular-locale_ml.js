"use strict";angular.module("ngLocale",[],["$provide",function(e){var M={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["аґћаґѕаґЇаґ±аґѕаґґаµЌвЂЊаґљ","аґ¤аґїаґ™аµЌаґ•аґіаґѕаґґаµЌвЂЊаґљ","аґљаµЉаґµаµЌаґµаґѕаґґаµЌаґљ","аґ¬аµЃаґ§аґЁаґѕаґґаµЌвЂЊаґљ","аґµаµЌаґЇаґѕаґґаґѕаґґаµЌвЂЊаґљ","аґµаµ†аґіаµЌаґіаґїаґЇаґѕаґґаµЌвЂЊаґљ","аґ¶аґЁаґїаґЇаґѕаґґаµЌвЂЊаґљ"],MONTH:["аґњаґЁаµЃаґµаґ°аґї","аґ«аµ†аґ¬аµЌаґ°аµЃаґµаґ°аґї","аґ®аґѕаµјаґљаµЌаґљаµЌ","аґЏаґЄаµЌаґ°аґїаµЅ","аґ®аµ‡аґЇаµЌ","аґњаµ‚аµє","аґњаµ‚аґІаµ€","аґ†аґ—аґёаµЌаґ±аµЌаґ±аµЌ","аґёаµ†аґЄаµЌаґ±аµЌаґ±аґ‚аґ¬аµј","аґ’аґ•аµЌвЂЊаґџаµ‹аґ¬аµј","аґЁаґµаґ‚аґ¬аµј","аґЎаґїаґёаґ‚аґ¬аµј"],SHORTDAY:["аґћаґѕаґЇаµј","аґ¤аґїаґ™аµЌаґ•аµѕ","аґљаµЉаґµаµЌаґµ","аґ¬аµЃаґ§аµ»","аґµаµЌаґЇаґѕаґґаґ‚","аґµаµ†аґіаµЌаґіаґї","аґ¶аґЁаґї"],SHORTMONTH:["аґњаґЁаµЃ","аґ«аµ†аґ¬аµЌаґ°аµЃ","аґ®аґѕаµј","аґЏаґЄаµЌаґ°аґї","аґ®аµ‡аґЇаµЌ","аґњаµ‚аµє","аґњаµ‚аґІаµ€","аґ“аґ—","аґёаµ†аґЄаµЌаґ±аµЌаґ±аґ‚","аґ’аґ•аµЌаґџаµ‹","аґЁаґµаґ‚","аґЎаґїаґёаґ‚"],fullDate:"y, MMMM d, EEEE",longDate:"y, MMMM d",medium:"y, MMM d h:mm:ss a",mediumDate:"y, MMM d",mediumTime:"h:mm:ss a","short":"dd/MM/yy h:mm a",shortDate:"dd/MM/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"в‚№",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:2,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"В¤-",negSuf:"",posPre:"В¤",posSuf:""}]},id:"ml",pluralCat:function(e,m){return 1==e?M.ONE:M.OTHER}})}]);
