**문제 풀이**

![이미지](../assets/images/result_34.PNG)

**Solution**

```javascript
// const tall = "176 175 174 173 172 169".split(" ")
// let res = "YES";
// for(let i = 0; i < tall.length; i++) {
//   if(tall[i] < tall[i+1]) {
//     res = "NO";
//   }
// }
// console.log(res);

const tall = "155 156 165 166 169 176";
let res = "";

res = tall
  .split(" ")
  .sort((a, b) => a - b)
  .join(" ");

console.log(tall === res ? "YES" : "NO");
```
