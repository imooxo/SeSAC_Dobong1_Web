/*
controller 에서는 model에서 받은 데이터를 가공해서
view에 전달할 수 있어요
*/

const User = require("../model/User");
// User.userInfo(); //{id:~, pw:~}

// GET /user
exports.user = (req, res) => {
  res.render("user", { userInfo: User.userInfo() });
};
