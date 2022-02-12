function printUnorderedPairs(array) {
  for (let i = 0; i < array.length; i++) {
    //O(n)
    for (let j = i + 1; j < array.length; j++) {
      //O(n-1)
      console.log(`${array[i]}, ${array[j]}`);
    }
  }
}

//¿Cuál es la complejidad de tiempo?
//O(n)
