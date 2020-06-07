**문제 풀이**

![이미지](../assets/images/result_36.PNG)

**Solution**

```javascript
const number = prompt();

let res = [];
for (let i = 1; i <= 9; i++) {
  res.push(number * i);
}

console.log(res.join(" "));
```
