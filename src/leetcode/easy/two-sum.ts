function twoSum (array: number[], target: number): number[] {
  const results : number[] = [];

  for (let i = 0; i < array.length; i++) {

    if(array.length === 2 && ((array[0] + array [1] )=== target)) {
      results.push(0, 1);
      return results;
    } 
    
    else{
      for (let j = 0; j < array.length; j++) {
        console.log(`${array[i]} + ${array[j]} = ${array[i] + array[j]}`);

        if ((array[i] !== array[j]) && array[i] + array[j] === target){
          console.log(`${array[i]} + ${array[j]}`);
          results.push(i, j);
          return results
        }
      }
    }
  }

  return results
}

console.log([2,7,11,15], 9);