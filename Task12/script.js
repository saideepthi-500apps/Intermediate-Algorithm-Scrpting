function sumFibs(num) {
  let n1=1,n2=1,nextTerm;
  let arr = [];
  arr.push(n1);
  arr.push(n2);
  for(let i=2 ; i <= num-1 ; i++){
    nextTerm = n1+n2;
    n1=n2;
    n2=nextTerm;
    arr.push(nextTerm);
  }
  let sum = (arr.filter(item=>item%2!=0 && item <= num)).reduce((sum,item)=>sum+item,0);
  console.log(sum)
    return sum;
}

function getOutput() {
  document.getElementById("output").innerText = sumFibs(4);
}
