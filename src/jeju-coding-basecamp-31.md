**문제**

![이미지](../assets/images/result_54.PNG)

**Solution**

```javascript
let number = prompt().split(" ");
let sortNum = [...number].sort();

const res = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== sortNum[i]) return false;
  }
  return true;
};

console.log(res(number));
```
