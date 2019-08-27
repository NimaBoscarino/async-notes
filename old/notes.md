- Restaurant simulator!

```js
console.log('BEFORE CALL');

setTimeout(() => console.log('INSIDE CALL'), 1000);

console.log('AFTER CALL');
``` 

```js
let x = 1;
console.log('BEFORE CALL: ', x);

setTimeout(() => {
  x = 2;
  console.log('INSIDE CALL: ', x);
}, 1000);

console.log('AFTER CALL', x);
```

Hypothesis James - BEFORE CALL 1, INSIDE CALL 2, AFTER CALL 1* / 2