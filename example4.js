function printUnorderedPairs(arrayA, arrayB) {
  for (let i = 0; i < arrayA.length; i++) {
    //O(a)
    for (let j = 0; j < arrayB.length; j++) {
      //O(b)
      if (arrayA[i] < arrayB[j]) {
        console.log(`${arrayA[i]}, ${arrayB[j]}`);
      }
    }
  }
}

//¿Cuál es la complejidad de tiempo?
//O(a*b) -> O(ab)
