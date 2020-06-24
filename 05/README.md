* 调用官方SDK中的getTempFileURL 要注意权限，在数据库的权限为公有读（或者是自己上传的文件）的时候才有效，其它情况需要在云函数中执行，因为云函数拥有最高权限

```js
// function cloudtohttp(src) {
//     console.log('1111111',src)
//     const result = await app.getTempFileURL({
//     fileList: [src]
//     })

//     result.fileList.forEach(item => {
//     console.log(item.tempFileURL) // 打印文件访问链接
//     })
//     return result.fileList[0].tempFileURL;
//   }
```

http://env-admwuxrx-1301595367.tcloudbaseapp.com/05/



> 问题：测试时会出现 cloudtohttp is not defined

