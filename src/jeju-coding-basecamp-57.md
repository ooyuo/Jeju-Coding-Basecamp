# 문자열

_문제57)_

\_**0부터 1000까지 1의 개수를 세는 프로그램**을 만들려고 합니다. 예를 들어 0부터 20까지 1의 개수를 세어본다면 1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19에 각각 1이 들어가므로 12개의 1이 있게 됩니다. 11은 1이 2번 들어간 셈이죠.

그렇다면 0부터 1000까지 수에서 1은 몇 번이나 들어갔을까요? 출력해 주세요.\_

**#1. 반복문을 사용한 방법**

1. for문을 사용해 1 ~ 1000까지 문자열을 늘어뜨린다.
2. 늘어뜨린 문자열중 1과 일치하면 count를 가산한다.

##2.

```javascript
for (let item in s) {
  if (s[item] == 1) {
    count++;
  }
}
```

**for in 과 for of의 차이**

```javascript
for (let item in s) {
  console.log(s); // index의 개수
  console.log(s[item]); // index의 값
}

for (let item of s) {
  console.log(s); // index의 값
}
```

**Solution**

```javascript
let s = "";

for (let i = 1; i <= 1000; i++) {
  s += i;
}

let count = 0;
for (let item in s) {
  if (s[item] == 1) {
    count++;
  }
}

console.log(count);
```

**#2. 정규표현식을 사용한 방법**

1. for문을 사용해 1 ~ 1000까지 문자열을 늘어뜨린다.
2. math함수로 1과 일치하는 배열의 길이를 알아낸다.

##2.

```javascript
s.match(/1/g).length;
```

**Solution**

```java
let s = '';

for(let i = 1; i <=1000; i++) {
  s+=i;
}

console.log(s.match(/1/g).length);
```
