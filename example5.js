function printUnorderedPairs(arrayA, arrayB) {
  for (let i = 0; i < arrayA.length; i++) {
    //O(a)
    for (let j = 0; j < arrayB.length; j++) {
      //O(b)
      for (let k = 0; k < 100000; k++) {
        //O(100000)
        console.log(`${arrayA[i]}, ${arrayB[j]}`);
      }
    }
  }
}

//¿Cuál es la complejidad de tiempo?
//O(a*b*100000) -> O(a*b) -> O(ab)
