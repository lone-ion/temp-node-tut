const { readFile, writeFile } = require("fs")

readFile("./test folder/test2.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile("./test folder/test3.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      "./test folder/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log(result)
      }
    )
  })
})
