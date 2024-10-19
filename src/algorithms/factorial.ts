function factorial(n:number): number {
  if(n === 0) return 1;
  let result = 1;
  for (let i = n; i >= 2; i--) {
    result *= i;
  }
  return result;
}

console.table(factorial(2));