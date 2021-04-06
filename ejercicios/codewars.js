var arr = [1,-2,3,4,5]
var ll_valor = 0

function positiveSum(arr) {

  arr.forEach(item =>{
    if(item >= 0){
      ll_valor += item;
    }
  });
}
positiveSum(arr)
console.log(ll_valor)