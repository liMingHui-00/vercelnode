const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()
const port = 3000 // 设置服务器端口号
// 处理跨域
app.use(cors({ origin: "*" }))
app.use(bodyParser)
// 静态资源中间件
app.use(express.static(__dirname + "/public"))
// 新闻接口
const newsRouter = require("./router/news/index")
// 用户接口
const userRouter = require("./router/user/index")
const oldersRouter = require("./router/orders")
// olders接口
app.use(oldersRouter)
app.use(newsRouter)
app.use(userRouter)
// 启动服务器
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
