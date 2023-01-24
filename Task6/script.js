function translatePigLatin(str) {
  let word = "";
  let vowels = ['a','e','i','o','u'];
  for(let i=0;i < str.length ;i++){
      if(vowels.includes(str[0])){
        word = str+"way";
        break;
      }
      else {
        if(vowels.includes(str[i])){
           word = str.slice(i)+str.slice(0,i)+"ay";
           break;
        }
      }
  }
  if(word === ""){
    return word = str + "ay";
  }
  else{
    return word;
  }
}

function getOutput() {
  document.getElementById("output").innerText = translatePigLatin("consonant");
}

