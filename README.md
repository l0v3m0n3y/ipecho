# ipecho
JavaScript library for ipecho.net
# main
```js
async function main(){
    const {ipecho} = require('./ipecho');
    const echo= new ipecho();
    let req=await echo.my_ip()
    console.log(req)
}
main()
```
