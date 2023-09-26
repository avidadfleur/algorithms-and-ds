const twoSum = (array, targetValue) => {
    const hashMap = {}
  
    for (let i = 0; i < array.length; i++) {
        hashMap[i] = targetValue - array[i];
    }
    
    for (let i = 1; i <= array.length; i++) {
        const hashMapValue = hashMap[i];

        if ((array.indexOf(hashMapValue) !== -1) && (hashMapValue + array[i] === targetValue) && (array.indexOf(hashMapValue) !== i)) {
          return ([array.indexOf(hashMapValue), i])
        }
    }
};
