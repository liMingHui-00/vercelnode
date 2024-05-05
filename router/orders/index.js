const express = require("express")
const connection = require("../../db")
const oldersRouter = express.Router()

// 增
oldersRouter.post("/addmsg", (req, res) => {
  const { orderId, userId, orderTotal } = req.body
  const query =
    "insert into orders (order_id, user_id, order_total) VALUES (?,?,?)"
  connection.query(query, [orderId, userId, orderTotal], (err, result) => {
    if (err) {
      res.status(500).send("增加order数据失败：" + err)
    } else {
      res.status(200).json({ data: "插入数据成功" })
    }
  })
})
// 查
oldersRouter.get("/getOlders", (req, res) => {
  const query = "select * from orders"
  connection.query(query, (err, result) => {
    if (err) {
      res.status(500).send("查询olders数据库失败：", err)
    } else {
      res.status(200).json({ status: "success", data: result })
    }
  })
})
module.exports = oldersRouter
