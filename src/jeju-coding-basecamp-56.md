# Object

_문제56)_

_다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요._

**Default Setting**

```javascript
const nationWidth = {
  korea: 220877,
  Rusia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};

let res = [];
```

1. g(기준값)의 값을 빼온다.

2. 해당 값에서 g(기준값)를 삭제한다.

3. for문을 돌리기위해 아래 함수를 사용한다.

```javascript
   Object.entries()
   Object.values()
```

4. gap에 최대값을 저장한다.

```javascript
   Math.max.apply(null, )
```
5. for문으로 gap과 객체의 값을 비교해서 제일 차이나지 않는 값을 빈 배열에 저장한다.

6. return

##5.

```javascript
for (let i in entry) {
  if (gap > Math.abs(entry[i][1] - g)) {
    gap = Math.abs(entry[i][1] - g);
    res = entry[i];
  }
}
```

**Solution**

```javascript
const nationWidth = {
  korea: 220877,
  Rusia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};

const koreaWidth = nationWidth["korea"];
delete nationWidth["korea"];

let entry = Object.entries(nationWidth);
let value = Object.values(nationWidth);
let gap = Math.max.apply(null, value);
let res = [];

for (let i in entry) {
  if (gap > Math.abs(entry[i][1] - koreaWidth)) {
    gap = Math.abs(entry[i][1] - koreaWidth);
    res = entry[i];
  }
}

console.log(res[0], res[1] - 220877);
```
