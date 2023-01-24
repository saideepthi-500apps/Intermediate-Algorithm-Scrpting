function sumPrimes(num) {
  let arr =[];
  if (num <= 1){
      return;
  }
 
 for(let i=2 ; i <= num ;i++){
    let flag=0;
   for (let j = 2; j < i; j++){
      if (i%j == 0){
          flag=1;
          break;
        }
   }
   if(flag == 0 && i > 1){
     arr.push(i);
   }

 }
 let sum = arr.filter(item=>item<=num).reduce((sum,item)=>(sum+item),0);
 return sum;
 }        
 

function getOutput() {
  document.getElementById("output").innerText = sumPrimes(10);
}
