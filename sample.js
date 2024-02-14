const fs = require('fs')

// fs.writeFile("sample.txt", "hello world", function(){
//   console.log("書き出し完了！")
// })

console.log("end")

console.log(process.argv[2])

const request = process.argv[2];
if(request === "read"){
  fs.readFile("./sample.txt", "utf8", function (err, data) {
    console.log(data)
  });  
} else if(request === "write"){
  fs.writeFile("sample.txt", "hello world!!!?", function(){
    console.log("書き出し完了！")
  })
} else {
  console.error("エラー")
}