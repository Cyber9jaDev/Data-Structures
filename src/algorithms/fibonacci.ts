// My Solution
// function fibonacci(n: number): number[] {
//   let array: number[] = [];

//   for (let i = 0; i < n; i++) {
//     if( i <= 1) array.push(i);
//     else{
//       array.push(array[array.length - 1] + array[array.length - 2]);
//     }
//   }
//   return array;
// }

function fibonacci(n: number): number[] {
  let fib: number[] = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    // fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}



console.log(fibonacci(8));