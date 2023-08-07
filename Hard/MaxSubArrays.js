/*The problem is to find the contiguous subarray of a given integer array that has the largest sum. 
In other words, you need to find the subarray with the maximum sum.
For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
 the subarray [4,-1,2,1] has the largest sum of 6.
Here are some important points to keep in mind:
The subarray must contain at least one number.
The subarray must be contiguous, which means that all the elements in the subarray
 must be adjacent to each other in the original array.
Your task is to write a function max_subarray(nums) that takes in an integer array nums and returns
 the maximum sum of any contiguous subarray. */

function maxSubArray(nums) {
  // const arr = [1, 3, 5, 6, 8];
  let maxSum = -Infinity
  let currentSum = 0;

  // iterate through the nums, store sub-problems result
  for (let i = 0; i < nums.length; i ++) {

// compare currentSum and current number 
// with current number and store the maximum value
 currentSum = Math.max(nums[i], currentSum + nums[i])


//compare maxSum with currentSum and store the greater value
 maxSum = Math.max(currentSum, maxSum)
  }

  return maxSum;
}

console.log(maxSubArray([-1, 3, -5, 6]));
