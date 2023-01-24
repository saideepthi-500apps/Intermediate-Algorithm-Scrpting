function dropElements(arr, func) {
  let newArray = [];
 for(let i=0;i<arr.length;i++){
    if(func(arr[i]) === true){
      newArray = arr.slice(i);
      break;
    }
  }
  return newArray;
}

function getOutput() {
  document.getElementById("output").innerText = dropElements(dropElements([1, 2, 3], function(n) {return n < 3; }));
}
