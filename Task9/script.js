function fearNotLetter(str) {
  let ele;
  for(let i = 0 ; i <= str.length-2; i++){
    if(str.charCodeAt(i)+1 === str.charCodeAt(i+1)){
      continue;
    }
    else{
      ele = String.fromCharCode(str.charCodeAt(i)+1);
      break;
    }
  }
  return ele;
}

function getOutput() {
  document.getElementById("output").innerText = fearNotLetter("abcdefghjklmno");
}
