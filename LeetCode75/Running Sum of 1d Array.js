// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// Example 2:
// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

// Example 3:
// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

// Constraints:
//     1 <= nums.length <= 1000
//     -10^6 <= nums[i] <= 10^6

//==========================================================================
// # Intuition
// <!-- Describe your first thoughts on how to solve this problem. -->
// A fairly easy problem. You could use a map to make a new array

// # Approach
// <!-- Describe your approach to solving the problem. -->
// Use a map

// # Complexity
// - Time complexity:
// <!-- Add your time complexity here, e.g. $$O(n)$$ -->
// Need to figure this out!!

// - Space complexity:
// <!-- Add your space complexity here, e.g. $$O(n)$$ -->
// Need to figure this out!!

//==========================================================================

var runningSum = function (nums) {
  let sum = 0;
  return nums.map((num) => {
    sum += num;
    return sum;
  });
};

console.log(runningSum([1, 2, 3, 4]), "Solution: [1,3,6,10]"); //
