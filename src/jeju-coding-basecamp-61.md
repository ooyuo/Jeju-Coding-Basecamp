# 문자열

_문제61)_

문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.

```javascript
입력;
aaabbbbcdddd;

출력;
a3b4c1d4;
```

1. for문으로 앞과 뒤의 문자가 다를경우 result 변수에 해당 문자 + count를 해준다.

2. 맨 마지막 문자는 문자열이 끝나버리기 때문에 1번의 로직을 탈 수 없다.

   for문 바깥에서 해당 로직을 다시 한번 써준다.

```javascript
const string = "aaabbbbcdddd";
let store = string[0],
  res = "",
  count = 0;

for (let i of string) {
  if (store === i) {
    count++;
  } else {
    res += `${store}${count}`;
    store = i;
    count = 1;
  }
}
res += `${store}${count}`;
console.log(res);
```
