**문제 풀이**

![이미지](../assets/images/result_27.PNG)

**Solution**

```javascript
const name = prompt().split(" ");
const score = prompt().split(" ");
let obj = {};

for (let i = 0; i < name.length; i++) {
  obj[name[i]] = score[i];
}

console.log(obj);
```
