const express = require("express")
const userRouter = express.Router()
const connection = require("../../db/index")
userRouter.get("/getuserinfo", (req, res) => {
  const query = "select * from user"
  connection.query(query, (err, result) => {
    if (err) {
      res.status(500).send("获取用户信息失败", err)
    } else {
      res.status(200).json({
        status: "success",
        data: result,
      })
    }
  })
})
module.exports = userRouter
