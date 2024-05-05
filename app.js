const express = require("express")
const bodyParser = require("body-parser")
const mysql = require("mysql")
const cors = require("cors")
const app = express()
app.use(bodyParser.json())
// 生成salt
const saltRounds = 10
app.use("/public", express.static("public"))
app.use(
  cors({
    origin: "*",
  })
)
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "news_box",
})
// 获取用户信息
app.get("/getuserinfo", (req, res) => {
  const query = "select * from user"
  connection.query(query, (error, results) => {
    if (error) {
      res.status(500).send("获取用户信息失败", error)
    } else {
      res.status(200).json({
        status: "success",
        data: results,
      })
    }
  })
})
app.listen(3000, () => console.log("Server started on port 3000"))
