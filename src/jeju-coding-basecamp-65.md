_*문제65)*_

a = [1, 2, 3, 4] b = [a, b, c, d] 이런 리스트가 있을 때 **[[1, a], [b, 2], [3, c], [d, 4]]** 이런 식으로 a, b 리스트가 번갈아가면서 출력되게 해주세요.

1. a 배열의 값이 짝수일 때 출력 순서를 바꾼다.
2. `map()`은 인자를 2개 가질 수 있고 index를 이용해 b에서 값을 가져온다.
3. `forEach()`문도 사용가능하지만 `map()`과 다르게 또다른 변수를 선언하여 대입해야한다. (변수를 사용하지않으면 undefined)

**\*\*Solution\*\***

```javascript
let a = [1, 2, 3, 4];
let b = ["a", "b", "c", "d"];

const res = a.map(function (e, i) {
  if (e % 2 === 0) {
    return [b[i], e];
  } else {
    return [e, b[i]];
  }
});

console.log(res);
```
