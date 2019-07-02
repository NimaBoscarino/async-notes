// What does this file do? Run it and see!
const numbers = [6, 2, 3, 5, 1, 6, 2];

const sleepy = function(nums) {
  for (const num of nums) {
    setTimeout(() => console.log(num), num);
  }
}

sleepy(numbers);
