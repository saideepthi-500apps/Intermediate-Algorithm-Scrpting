function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
   arr = arr.map(item=>{
     let orbitalPeriod = Math.round(2*(Math.PI)*(Math.sqrt((Math.pow(item.avgAlt        +earthRadius,3))/GM)));
  delete item.avgAlt;
  item["orbitalPeriod"] = orbitalPeriod;
    return item
   })
  return arr;
}

let div = document.getElementById("output");

function getOutput(){
      let obj = orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
      for(let item of obj){
          for (let value of Object.values(item)) {
                let p = document.createElement("p")
                p.innerText = value;
                div.appendChild(p);
          }
      }
}
