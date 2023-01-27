function steamrollArray(arr) {
  let newArr = [];
  arr.forEach(item=>{
    if(Array.isArray(item)){
        newArr = newArr.concat(steamrollArray(item));
      }
      else{
        newArr.push(item);
      }
  })
  // console.log(newArr);
  return newArr;
}



function getOutput() {
  document.getElementById("output").innerText = steamrollArray([1, [2], [3, [[4]]]]);
}
