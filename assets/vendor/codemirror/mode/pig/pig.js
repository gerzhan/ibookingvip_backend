!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict";e.defineMode("pig",function(e,O){function T(e,O,T){return O.tokenize=T,T(e,O)}function E(e,O){return N=e,O}function r(e,O){for(var T,r=!1;T=e.next();){if("/"==T&&r){O.tokenize=I;break}r="*"==T}return E("comment","comment")}function t(e){return function(O,T){for(var r,t=!1,N=!1;null!=(r=O.next());){if(r==e&&!t){N=!0;break}t=!t&&"\\"==r}return(N||!t&&!S)&&(T.tokenize=I),E("string","error")}}function I(e,O){var I=e.next();return'"'==I||"'"==I?T(e,O,t(I)):/[\[\]{}\(\),;\.]/.test(I)?E(I):/\d/.test(I)?(e.eatWhile(/[\w\.]/),E("number","number")):"/"==I?e.eat("*")?T(e,O,r):(e.eatWhile(o),E("operator","operator")):"-"==I?e.eat("-")?(e.skipToEnd(),E("comment","comment")):(e.eatWhile(o),E("operator","operator")):o.test(I)?(e.eatWhile(o),E("operator","operator")):(e.eatWhile(/[\w\$_]/),A&&A.propertyIsEnumerable(e.current().toUpperCase())&&!e.eat(")")&&!e.eat(".")?"keyword":n&&n.propertyIsEnumerable(e.current().toUpperCase())?"variable-2":R&&R.propertyIsEnumerable(e.current().toUpperCase())?"variable-3":E("variable","pig-word"))}var N,A=O.keywords,n=O.builtins,R=O.types,S=O.multiLineStrings,o=/[*+\-%<>=&?:\/!|]/;return{startState:function(){return{tokenize:I,startOfLine:!0}},token:function(e,O){if(e.eatSpace())return null;var T=O.tokenize(e,O);return T}}}),function(){function O(e){for(var O={},T=e.split(" "),E=0;E<T.length;++E)O[T[E]]=!0;return O}var T="ABS ACOS ARITY ASIN ATAN AVG BAGSIZE BINSTORAGE BLOOM BUILDBLOOM CBRT CEIL CONCAT COR COS COSH COUNT COUNT_STAR COV CONSTANTSIZE CUBEDIMENSIONS DIFF DISTINCT DOUBLEABS DOUBLEAVG DOUBLEBASE DOUBLEMAX DOUBLEMIN DOUBLEROUND DOUBLESUM EXP FLOOR FLOATABS FLOATAVG FLOATMAX FLOATMIN FLOATROUND FLOATSUM GENERICINVOKER INDEXOF INTABS INTAVG INTMAX INTMIN INTSUM INVOKEFORDOUBLE INVOKEFORFLOAT INVOKEFORINT INVOKEFORLONG INVOKEFORSTRING INVOKER ISEMPTY JSONLOADER JSONMETADATA JSONSTORAGE LAST_INDEX_OF LCFIRST LOG LOG10 LOWER LONGABS LONGAVG LONGMAX LONGMIN LONGSUM MAX MIN MAPSIZE MONITOREDUDF NONDETERMINISTIC OUTPUTSCHEMA  PIGSTORAGE PIGSTREAMING RANDOM REGEX_EXTRACT REGEX_EXTRACT_ALL REPLACE ROUND SIN SINH SIZE SQRT STRSPLIT SUBSTRING SUM STRINGCONCAT STRINGMAX STRINGMIN STRINGSIZE TAN TANH TOBAG TOKENIZE TOMAP TOP TOTUPLE TRIM TEXTLOADER TUPLESIZE UCFIRST UPPER UTF8STORAGECONVERTER ",E="VOID IMPORT RETURNS DEFINE LOAD FILTER FOREACH ORDER CUBE DISTINCT COGROUP JOIN CROSS UNION SPLIT INTO IF OTHERWISE ALL AS BY USING INNER OUTER ONSCHEMA PARALLEL PARTITION GROUP AND OR NOT GENERATE FLATTEN ASC DESC IS STREAM THROUGH STORE MAPREDUCE SHIP CACHE INPUT OUTPUT STDERROR STDIN STDOUT LIMIT SAMPLE LEFT RIGHT FULL EQ GT LT GTE LTE NEQ MATCHES TRUE FALSE DUMP",r="BOOLEAN INT LONG FLOAT DOUBLE CHARARRAY BYTEARRAY BAG TUPLE MAP ";e.defineMIME("text/x-pig",{name:"pig",builtins:O(T),keywords:O(E),types:O(r)}),e.registerHelper("hintWords","pig",(T+r+E).split(" "))}()});
