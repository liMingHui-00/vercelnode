const mysql = require("mysql")
// 连接数据库
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "news_box",
})
connection.connect((err) => {
  if (err) {
    return console.error("连接数据库失败：" + err.stack)
  }
})
module.exports = connection
