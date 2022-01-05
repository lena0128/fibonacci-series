function fibonacci(n) {
  if(n < 2){
      return n
  } else if(n = 2){
      return 1
  }

  let arr = [0, 1];
  
  arr[1, 2] 
  for (let i = 3; i <= n; i++) {
      arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[i];
}