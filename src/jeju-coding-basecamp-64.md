# 탐욕 기법 (Greedy Algorithm)

_문제64)_

정량 N에 정확히 맞춰야만 움직이는 화물용 엘리베이터가 있습니다. 화물은 7kg, 3kg 두 가지이며 팔이 아픈 은후는 가장 적게 화물을 옮기고 싶습니다. 예를 들어 정량이 24kg이라면 3kg 8개를 옮기는 것보다는 7kg 3개, 3kg 1개 즉 4개로 더 적게 옮길 수 있습니다. 입력 정량 N이 입력됩니다. 출력 가장 적게 옮길 수 있는 횟수를 출력합니다. 만약 어떻게 해도 정량이 N이 되지 않는다면 -1을 출력합니다.

**#1. while문을 사용하는 방법**

1. 만약 7로 나누어 떨어진다면 나눈 값을 return한다.
2. 7로 나누어 떨어지지 않는다면 정량 N 에서 -3을 하고 횟수를 +1한다.
3. 정량 N이 0보다 작을 때 까지 반복한다.

**Solution**

```javascript
function solution(n) {
  let count = 0;
  while (true) {
    if (n % 7 === 0) {
      count += parseInt(n / 7, 10);
      break;
    }
    n -= 3;
    count += 1;
    if (n < 0) {
      console.log(-1);
      break;
    }
  }
  return count;
}
```

**#2. 재귀함수를 사용하는 방법**

1. 만약 7로 나누어 떨어진다면 기존 count에 나눈 값을 더해 return한다.
2. 7로 나누어 떨어지지 않는다면 정량 N 에서 -3을 하고 횟수를 +1한 값을 재귀함수를 이용해 호출한다.
3. 정량 N이 0보다 작게 되면 -1을 return한다.

4. **Solution**

```javascript
function solution(n, count = 0) {
  if (n < 0) return -1;
  return n % 7 === 0
    ? (count += parseInt(n / 7, 10))
    : solution(n - 3, count + 1);
}
```
