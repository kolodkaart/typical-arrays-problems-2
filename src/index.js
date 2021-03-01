

exports.min = function min (array) {
  let res = Number.POSITIVE_INFINITY;
  if(array == undefined){
    return 0;
  }
  for(let i=0; i<array.length; i++){
      if(res > array[i] ){
        res = array[i];
      }
  }
    if(array.length == 0){
          res = 0;
    }
  return res;
}

exports.max = function max (array) {
  let res = Number.NEGATIVE_INFINITY;
  if(array == undefined){
    return 0;
  }
  for(let i=0; i<array.length; i++){
    if(res < array[i] ){
      res = array[i];
    }
  }
  if(array.length == 0){
        res = 0;
    }
  return res;
}

exports.avg = function avg (array) {
    let sum = 0;
    let num = 0;
    if(array == undefined){
      return 0;
    }
    for(let i=0; i<array.length; i++){
        sum = sum +array[i];
    }
    if(array.length == 0){
      return 0;
    }
    num = sum / array.length;
    
    return num;
}
