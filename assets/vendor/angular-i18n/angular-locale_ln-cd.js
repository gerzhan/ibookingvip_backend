"use strict";angular.module("ngLocale",[],["$provide",function(m){var a={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};m.value("$locale",{DATETIME_FORMATS:{AMPMS:["ntЙ”МЃngЙ”МЃ","mpГіkwa"],DAY:["eyenga","mokЙ”lЙ” mwa yambo","mokЙ”lЙ” mwa mГ­balГ©","mokЙ”lЙ” mwa mГ­sГЎto","mokЙ”lЙ” ya mГ­nГ©i","mokЙ”lЙ” ya mГ­tГЎno","mpЙ”МЃsЙ”"],MONTH:["sГЎnzГЎ ya yambo","sГЎnzГЎ ya mГ­balГ©","sГЎnzГЎ ya mГ­sГЎto","sГЎnzГЎ ya mГ­nei","sГЎnzГЎ ya mГ­tГЎno","sГЎnzГЎ ya motГіbГЎ","sГЎnzГЎ ya nsambo","sГЎnzГЎ ya mwambe","sГЎnzГЎ ya libwa","sГЎnzГЎ ya zГіmi","sГЎnzГЎ ya zГіmi na mЙ”МЊkЙ”МЃ","sГЎnzГЎ ya zГіmi na mГ­balГ©"],SHORTDAY:["eye","ybo","mbl","mst","min","mtn","mps"],SHORTMONTH:["yan","fbl","msi","apl","mai","yun","yul","agt","stb","Й”tb","nvb","dsb"],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"d/M/y HH:mm",shortDate:"d/M/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"FrCD",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"В В¤",posPre:"",posSuf:"В В¤"}]},id:"ln-cd",pluralCat:function(m,n){return m>=0&&1>=m?a.ONE:a.OTHER}})}]);
