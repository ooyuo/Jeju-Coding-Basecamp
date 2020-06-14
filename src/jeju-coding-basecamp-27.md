**문제 풀이**

![이미지](../assets/images/result_50.PNG)

**Solution**

```javascript
function bubble(arr) {
  let result = arr.slice();
  let temp = 0;

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = i + 1; j < result.length; j++) {
      if (result[j] > result[j + 1]) {
        temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
  return result;
}

const items = prompt("입력해주세요.")
  .split(" ")
  .map((n) => {
    return parseInt(n, 10);
  });

console.log(bubble(items));
```
