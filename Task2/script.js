function diffArray(arr1, arr2) {
  const newArr = [];
  let mergedArray = [...arr1,...arr2];
  for(let i of mergedArray){
    if(!(arr1.includes(i) && arr2.includes(i))){
      newArr.push(i);
    }
  }
  return newArr;
}


function getOutput() {
  document.getElementById("output").innerText = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);;
}
