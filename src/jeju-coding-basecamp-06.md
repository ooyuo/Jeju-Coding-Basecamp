**문제 풀이**

![이미지](../assets/images/result_18.PNG)

> Math.floor: 주어진 값보다 이하의 가장 큰 정수를 반환한다.

**Solution**

```javascript
const scores = prompt("세 과목의 점수를 입력하세요.").split(" ");
let sum = 0;

const number = scores.map((item) => +item);
sum = number.reduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log(Math.floor(sum / scores.length));
```

**Other Solution**

```javascript
const scores = prompt("세 과목의 점수를 입력하세요.").split(" ");
let sum = 0;

for (let i = 0; i < 3; i++) {
  sum += parseInt(scores[i], 10); // 십진수의 형태의 숫자로 데이터 타입을 변환합니다.
}

console.log(Math.floor(sum / 3)); //Math.floor 메서드는 소수점 자리를 모두 버림합니다.
```
