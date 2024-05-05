module.exports = (req, res) => {
  res.status(200).json({
    status: "success",
    data: [{ id: 1, msg: "感谢您测试成功" }],
  })
}
