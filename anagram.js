function isAnagram(str1, str2) {
  if(str1.length!=str2.length){
    console.log("FALSE");
    return;
  }
let str1Obj={};
let str2Obj={};
for(const letter of str1){
  if(!Object.keys(str1Obj).includes(letter)){
    str1Obj[letter]=1
  }else{
    str1Obj[letter]+=1;
  }
}
  for(const letter of str2){
  if(!Object.keys(str2Obj).includes(letter)){
    str2Obj[letter]=1
  }else{
    str2Obj[letter]+=1;
  }
    
}


for(const item of str1){
  if(str1Obj[item]!==str2Obj[item]){
    console.log("FALSE");
    return;
  }
}console.log("TRUE");  
  }



isAnagram("ana","naaa");
let obj={'test':2};
