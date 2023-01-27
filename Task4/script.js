function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);
  // console.log(sourceKeys)
  return collection.filter(item=>{
    for(let i=0 ; i <sourceKeys.length ; i++){
      if(!item.hasOwnProperty(sourceKeys[i]) || 
      item[sourceKeys[i]] !== source[sourceKeys[i]]){
        return false
      }
    }
    return true
    }
  );
}

function getOutput() {
  document.getElementById("output").innerText = 
  JSON.stringify(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
}
