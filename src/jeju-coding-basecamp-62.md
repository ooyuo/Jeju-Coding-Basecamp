# 문자열

_문제62)_

`20190923`을 출력합니다. 아래 기준만 만족하면 됩니다.

```javascript
1. 코드 내에 숫자가 없어야 합니다.
   - 예) console.log(20190923)이라고 하시면 안됩니다.
2. 파일 이름이나 경로를 사용해서는 안됩니다.
3. 시간, 날짜 함수를 사용해서는 안됩니다.
4. 에러 번호 출력을 이용해서는 안됩니다.
5. input을 이용해서는 안됩니다.
```

1. 알파벳을 늘어뜨려서 각 숫자 자리마다 한 알파벳을 지정한다.

   ex) "abcdefg"

2. 알파벳을 숫자만큼 변수에 저장한다.

   ex) 123 > "abbccc"

3. 각 알파벳을 정규표현식 match를 사용해 length를 구한다.

✅ 숫자 0은 알파벳을 표기하지않고 그 다음 알파벳을 사용한다.

✅ null을 Number로 형변환하면 숫자 0이 된다.

**Solution**

```javascript
const numberToABC = "aacdddddddddfffffffffgghhh";

console.log(
  `${numberToABC.match(/a/g).length}${Number(numberToABC.match(/b/g))}${
    numberToABC.match(/c/g).length
  }${numberToABC.match(/d/g).length}${Number(numberToABC.match(/e/g))}${
    numberToABC.match(/f/g).length
  }${numberToABC.match(/g/g).length}${numberToABC.match(/h/g).length}`
);
```
