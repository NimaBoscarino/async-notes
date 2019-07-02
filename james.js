let x = 1;
// SYNC
console.log('BEFORE CALL: ', x);

// ASYNC
setTimeout(() => {
  x = 2;
  console.log('INSIDE CALL: ', x);
}, 5000);

// SYNC
console.log('AFTER CALL', x);
