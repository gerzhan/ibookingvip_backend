!function(){function a(a){test.mode(a,o,Array.prototype.slice.call(arguments,1))}function e(a,e,r){for(var o=[e],i=1;r>=i;++i)o[i]=a.join(o[i-1]);return o}function r(a,e,r,o,i){for(var t=[o],n=1;i>=n;++n)t[n]=r[0]+a[n-1]+r[1]+e[n-1]+r[2]+t[n-1]+r[3];return t}var o=CodeMirror.getMode({indentUnit:2},"php");a("simple_test",'[meta <?php] [keyword echo] [string "aaa"]; [meta ?>]'),a("variable_interpolation_non_alphanumeric","[meta <?php]",'[keyword echo] [string "aaa$~$!$@$#$$$%$^$&$*$($)$.$<$>$/$\\$}$\\"$:$;$?$|$[[$]]$+$=aaa"]',"[meta ?>]"),a("variable_interpolation_digits","[meta <?php]",'[keyword echo] [string "aaa$1$2$3$4$5$6$7$8$9$0aaa"]',"[meta ?>]"),a("variable_interpolation_simple_syntax_1","[meta <?php]",'[keyword echo] [string "aaa][variable-2 $aaa][string .aaa"];',"[meta ?>]"),a("variable_interpolation_simple_syntax_2","[meta <?php]",'[keyword echo] [string "][variable-2 $aaaa][[',"[number 2]",']][string aa"];','[keyword echo] [string "][variable-2 $aaaa][[',"[number 2345]",']][string aa"];','[keyword echo] [string "][variable-2 $aaaa][[',"[number 2.3]",']][string aa"];','[keyword echo] [string "][variable-2 $aaaa][[',"[variable aaaaa]",']][string aa"];','[keyword echo] [string "][variable-2 $aaaa][[',"[variable-2 $aaaaa]",']][string aa"];','[keyword echo] [string "1aaa][variable-2 $aaaa][[',"[number 2]",']][string aa"];','[keyword echo] [string "aaa][variable-2 $aaaa][[',"[number 2345]",']][string aa"];','[keyword echo] [string "aaa][variable-2 $aaaa][[',"[number 2.3]",']][string aa"];','[keyword echo] [string "aaa][variable-2 $aaaa][[',"[variable aaaaa]",']][string aa"];','[keyword echo] [string "aaa][variable-2 $aaaa][[',"[variable-2 $aaaaa]",']][string aa"];',"[meta ?>]"),a("variable_interpolation_simple_syntax_3","[meta <?php]",'[keyword echo] [string "aaa][variable-2 $aaaa]->[variable aaaaa][string .aaaaaa"];','[keyword echo] [string "aaa][variable-2 $aaaa][string ->][variable-2 $aaaaa][string .aaaaaa"];','[keyword echo] [string "aaa][variable-2 $aaaa]->[variable aaaaa][string [[2]].aaaaaa"];','[keyword echo] [string "aaa][variable-2 $aaaa]->[variable aaaaa][string ->aaaa2.aaaaaa"];',"[meta ?>]"),a("variable_interpolation_escaping","[meta <?php] [comment /* Escaping */]",'[keyword echo] [string "aaa\\$aaaa->aaa.aaa"];','[keyword echo] [string "aaa\\$aaaa[[2]]aaa.aaa"];','[keyword echo] [string "aaa\\$aaaa[[asd]]aaa.aaa"];','[keyword echo] [string "aaa{\\$aaaa->aaa.aaa"];','[keyword echo] [string "aaa{\\$aaaa[[2]]aaa.aaa"];','[keyword echo] [string "aaa{\\aaaaa[[asd]]aaa.aaa"];','[keyword echo] [string "aaa\\${aaaa->aaa.aaa"];','[keyword echo] [string "aaa\\${aaaa[[2]]aaa.aaa"];','[keyword echo] [string "aaa\\${aaaa[[asd]]aaa.aaa"];',"[meta ?>]"),a("variable_interpolation_complex_syntax_1","[meta <?php]",'[keyword echo] [string "aaa][variable-2 $]{[variable aaaa]}[string ->aaa.aaa"];','[keyword echo] [string "aaa][variable-2 $]{[variable-2 $aaaa]}[string ->aaa.aaa"];','[keyword echo] [string "aaa][variable-2 $]{[variable-2 $aaaa][[',"  [number 42]",']]}[string ->aaa.aaa"];','[keyword echo] [string "aaa][variable-2 $]{[variable aaaa][meta ?>]aaaaaa'),a("variable_interpolation_complex_syntax_2","[meta <?php] [comment /* Monsters */]",'[keyword echo] [string "][variable-2 $]{[variable aaa][comment /*}?>} $aaa<?php } */]}[string ->aaa.aaa"];','[keyword echo] [string "][variable-2 $]{[variable aaa][comment /*}?>*/][[','  [string "aaa][variable-2 $aaa][string {}][variable-2 $]{[variable aaa]}[string "]',']]}[string ->aaa.aaa"];','[keyword echo] [string "][variable-2 $]{[variable aaa][comment /*} } $aaa } */]}[string ->aaa.aaa"];');var i=e(['[string "][variable-2 $]{[variable aaa] [operator +] ','}[string "]'],'[comment /* }?>} */] [string "aaa][variable-2 $aaa][string .aaa"]',10);a("variable_interpolation_complex_syntax_3_1","[meta <?php] [comment /* Recursive monsters */]","[keyword echo] "+i[4]+";","[keyword echo] "+i[7]+";","[keyword echo] "+i[8]+";","[keyword echo] "+i[5]+";","[keyword echo] "+i[1]+";","[keyword echo] "+i[6]+";","[keyword echo] "+i[9]+";","[keyword echo] "+i[0]+";","[keyword echo] "+i[10]+";","[keyword echo] "+i[2]+";","[keyword echo] "+i[3]+";",'[keyword echo] [string "end"];',"[meta ?>]");var t=e(['[string "a][variable-2 $]{[variable aaa] [operator +] '," [operator +] ",'}[string .a"]'],'[comment /* }?>{{ */] [string "a?>}{{aa][variable-2 $aaa][string .a}a?>a"]',5);a("variable_interpolation_complex_syntax_3_2","[meta <?php] [comment /* Recursive monsters 2 */]","[keyword echo] "+t[0]+";","[keyword echo] "+t[1]+";","[keyword echo] "+t[5]+";","[keyword echo] "+t[4]+";","[keyword echo] "+t[2]+";","[keyword echo] "+t[3]+";",'[keyword echo] [string "end"];',"[meta ?>]");var n=r(i,t,['[string "a][variable-2 $]{[variable aaa] [operator +] '," [operator +] "," [operator +] ",'}[string .a"]'],'[comment /* }?>{{ */] [string "a?>}{{aa][variable-2 $aaa][string .a}a?>a"]',4);a("variable_interpolation_complex_syntax_3_3","[meta <?php] [comment /* Recursive monsters 2 */]","[keyword echo] "+n[4]+";","[keyword echo] "+n[0]+";","[keyword echo] "+n[3]+";","[keyword echo] "+n[1]+";","[keyword echo] "+n[2]+";",'[keyword echo] [string "end"];',"[meta ?>]"),a("variable_interpolation_heredoc","[meta <?php]","[string <<<here]","[string doc ][variable-2 $]{[variable yay]}[string more]","[string here]; [comment // normal]")}();
