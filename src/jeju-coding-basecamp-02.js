**문제 풀이**

![이미지](../assets/images/result_02.PNG)

> array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
> `start` 배열의 변경을 시작할 인덱스
> `deleteCount` 배열에서 제거할 요소의 수
> `item1, item2, ...` 배열에 추가할 요소

**Solution**

```javascript
let arr = [200, 100, 300];
arr.splice(2, 0, 10000); // 배열의 두번째 요소에 10000을 삽입한다
console.log(arr);
```
