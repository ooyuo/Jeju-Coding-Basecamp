  # Array - Slice()

  _문제58)_

  원범이는 편의점 아르바이트가 끝난 후 정산을 하고자 합니다.

  정산을 빨리하고 집에 가고 싶은 원범이는 프로그램을 만들려고 합니다.

  숫자를 입력받고 천 단위로 콤마(,)를 찍어주세요.

  예를 들어, 123456789를 입력받았으면 123,456,789를 출력해야 합니다.

  **#1. 내장함수를 사용하는 방법**

  ```javascript
  s.toLocalString();
  ```

  **Solution**

  ```javascript
  const Comma = (s) => {
    return s.toLocaleString();
  };
  ```

  **#2. 재귀함수를 사용하는 방법(반복문)**

  1. s의 length가 3이하거나 같으면 s를 반환한다.
  2. `slice(시작, 끝)`로 뒤에서 부터 ","를 찍고 "," 앞부분을 재귀함수로 반복시킨다. (s의 length가 3이하거나 같을 때 까지)

  ##2.2

  ```javascript
  return Comma(s.slice(0, s.length - 3)) + "," + s.slice(s.length - 3);
  ```

  **Solution**

  ```javascript
  const Comma = (s) => {
    if (s.length <= 3) {
      return s;
    } else {
      return Comma(s.slice(0, s.length - 3)) + "," + s.slice(s.length - 3);
    }
  };

  console.log(Comma("12345678"));
  ```
