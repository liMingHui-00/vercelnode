const mysql = require("mysql")
module.exports = (req, res) => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "news_box",
  })
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
}
