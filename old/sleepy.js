// how do we print the numbers in descending order??

// What does this file do? Run it and see!
const numbers = [6000, 2000, 3000, 5000, 1000, 6000, 2000, 12000];

const sleepy = function(nums) {
  for (const num of nums) {
    setTimeout(
      () => console.log(num),
      num // 6 seconds, 2 seconds, 3 seconds, ...
    );
  }
}

sleepy(numbers);
