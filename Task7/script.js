function myReplace(str, before, after) {
  str = str.split(/[,-. ]+/);
  let sentense = "";
  for(let i=0;i<str.length;i++){
    if(str[i]=== before){
      if(str[i] === str[i].toLowerCase()){
        sentense = str.slice(0,i).join(" ") + ` ${after[0].toLowerCase()+after.slice(1)} `+ str.slice(i+1).       join(" ");
        console.log(sentense)
      }
      else{
        sentense = str.slice(0,i).join(" ") + ` ${after[0].toUpperCase()+after.slice(1)} `+ str.slice(i+1).       join(" ");
        console.log(sentense)
      }
      
    }
  }
  return sentense;
}

function getOutput() {
  document.getElementById("output").innerText = myReplace("Let us get back to more Coding", "Coding", "algorithms");
}
