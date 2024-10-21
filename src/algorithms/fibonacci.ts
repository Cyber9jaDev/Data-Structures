// My Solution
function fibonacci(n: number): number[] {
  let fib: number[] = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  return fib;
}

// function fibonacci(n: number): number[] {
//   let fib: number[] = [0, 1];
//   for (let i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//     // fib.push(fib[i - 1] + fib[i - 2]);
//   }
//   return fib;
// }

function recursiveFibonacci(n: number): number {
  console.log(n);
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

// console.log(fibonacci(6));
console.log(recursiveFibonacci(6));
