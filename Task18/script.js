function truthCheck(collection, pre) {
  let value = collection.map(item=>{
    if(item[pre]){
      return true;
    }
    else{
      return false;
    }
  });
  // console.log(value);
  let truthyValue = value.every(item=>item===true);
  // console.log(truthyValue);
  return truthyValue;
}

function getOutput() {
  document.getElementById("output").innerText = truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");
}
