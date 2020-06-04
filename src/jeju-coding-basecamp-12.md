**문제 풀이**

![이미지](../assets/images/result_35.PNG)

**Solution**

```javascript
function one(n) {
  function two(x) {
    return x ** n; // Math.pow(x, n);
  }
  return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));
```
