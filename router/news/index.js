const express = require("express")
const newsRouter = express.Router()
const connection = require("../../db/index")
newsRouter.get("/getnews", (req, res) => {
  const query = "select * from news"
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
module.exports = newsRouter
