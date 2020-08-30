# 문자열

_문제58)_

_총 문자열의 길이는 50으로 제한하고 사용자가 문자열을 입력하면 그 문자열을 가운데 정렬을 해주고, 나머지 빈 부분에는 '='을 채워 넣어주세요._

> `padStart(길이, 사용할 문자)`, `padEnd(길이, 사용할 문자)`를 사용해 입력받은 문자를 중간으로 두고 원하는 길이 만큼 나머지 부분을 채울 수 있다.

**Solution**

```javascript
let str = "hi";
let hdr = str.padStart(25 + parseInt(str.length / 2, 10), "=");

console.log(hdr.padEnd(50, "="));
```
