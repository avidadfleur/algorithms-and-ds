const maxSubArray = (arr) => {
  let maxSum = arr[0];
  let currentSum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (currentSum < 0) currentSum = 0;
    currentSum += arr[i];
    maxSum = Math.max(maxSum, currentSum)
  }
  
  return maxSum;
  
};
