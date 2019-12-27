// Run: nodemon app.js / node app.js

// 引入套件
const express = require('express')
const bodyParser = require('body-parser')

// 使用 express 與設定 port 為 3000
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// home 路由
app.use(require('./routes'))

// 啟動伺服器
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})