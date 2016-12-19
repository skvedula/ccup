// Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (i.e., “waterbottle” is a rotation of “erbottlewat”).
var str1 = "waterbottle";
var str2 = "erbottlewat";
var isSubstring = function(sub,mstr){
  if((sub.length === null) || (mstr.length === null)) return false;
  if(sub.length>mstr.length) return false;
  sub = sub.split("");
  mstr = mstr.split("");
  var start = 0;
  for(var i=0;i<mstr.length;i++){
    if(mstr[i] === sub[0]){
      start = i;
      break;
    }
  }
  for(var i=0;i<sub.length;i++){
    if(sub[i]!=mstr[start+i]) return false;
  }
  return true;
}
var isRotation = function(str1, str2){
  var str3 = str1 + str1;
  return isSubstring(str2,str3);
}
console.log(isRotation(str1,str2));