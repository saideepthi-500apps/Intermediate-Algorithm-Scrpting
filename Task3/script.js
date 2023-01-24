function destroyer(arr1,...abc) {
  for(let i=0 ; i< arr1.length ; i++){
    if(abc.includes(arr1[i])){
      let value = arr1.splice(i,1);
      i--;
    }
  }
   console.log(arr1) ;
   return arr1;
}
    
function getOutput() {
  document.getElementById("output").innerText =   destroyer([1, 2, 3, 1, 2, 3], 2, 3);
}

