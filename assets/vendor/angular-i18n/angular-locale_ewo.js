"use strict";angular.module("ngLocale",[],["$provide",function(n){function m(n){n+="";var m=n.indexOf(".");return-1==m?0:n.length-m-1}function a(n,a){var g=a;void 0===g&&(g=Math.min(m(n),3));var e=Math.pow(10,g),r=(n*e|0)%e;return{v:g,f:r}}var g={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};n.value("$locale",{DATETIME_FORMATS:{AMPMS:["kГ­kГ­rГ­g","ngЙ™gГіgЙ™le"],DAY:["sЙ”МЃndЙ”","mЙ”МЃndi","sЙ”МЃndЙ” mЙ™lГє mЙ™МЃbЙ›МЊ","sЙ”МЃndЙ” mЙ™lГє mЙ™МЃlЙ›МЃ","sЙ”МЃndЙ” mЙ™lГє mЙ™МЃnyi","fГєladГ©","sГ©radГ©"],MONTH:["ngЙ”n osГє","ngЙ”n bЙ›МЊ","ngЙ”n lГЎla","ngЙ”n nyina","ngЙ”n tГЎna","ngЙ”n samЙ™na","ngЙ”n zamgbГЎla","ngЙ”n mwom","ngЙ”n ebulГє","ngЙ”n awГіm","ngЙ”n awГіm ai dziГЎ","ngЙ”n awГіm ai bЙ›МЊ"],SHORTDAY:["sЙ”МЃn","mЙ”МЃn","smb","sml","smn","fГєl","sГ©r"],SHORTMONTH:["ngo","ngb","ngl","ngn","ngt","ngs","ngz","ngm","nge","nga","ngad","ngab"],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"d/M/y HH:mm",shortDate:"d/M/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"FCFA",DECIMAL_SEP:",",GROUP_SEP:"В ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"В В¤",posPre:"",posSuf:"В В¤"}]},id:"ewo",pluralCat:function(n,m){var e=0|n,r=a(n,m);return 1==e&&0==r.v?g.ONE:g.OTHER}})}]);
