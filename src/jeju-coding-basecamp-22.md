**문제 풀이**

![이미지](../assets/images/result_45.PNG)

> Date객체의 메소드 중 하나인 getTime()은 1970년 1월 1일 0시 0분 0초 이후로부터 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환한다.
>
> 따라서 먼저 1년 만큼을 getTime()의 결과값에서 나눈뒤, 1970을 더해야한다.

먼저 1년 만큼의 수치가 필요하다.
1분: 60초, 1시간: 60분, 하루: 24시간, 1년: 365일
밀리세컨트로 변환: \* 1000

**Solution**

```javascript
const date = new Date();

console.log(Math.floor(date.getTime() / (60 * 60 * 24 * 365 * 1000)) + 1970);
```
