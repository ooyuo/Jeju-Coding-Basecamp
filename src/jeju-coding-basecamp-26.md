**문제 풀이**

![이미지](../assets/images/result_49.PNG)

**Solution**

```javascript
const numbers = "10 9 8 7 6 5 4 3 2 1";

let sortNumbers = numbers.split(" ").sort((a, b) => {
  return a - b;
});

console.log(sortNumbers.pop());
```
