function sumAll(arr) {
  let sum=0;
  if(arr[0]<arr[1]){
    for(let i=arr[0] ; i<=arr[1] ; i++){
      sum += i
    }
  }
  else{
    for(let i=arr[0] ; i>=arr[1] ; i--){
      sum += i;
      // console.log(i);
    }
  }
  // console.log(sum);
  return sum;

}

function getOutput() {
  document.getElementById("output").innerText = sumAll([4,1]);
}
