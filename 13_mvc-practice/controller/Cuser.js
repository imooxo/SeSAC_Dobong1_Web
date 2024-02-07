const User = require('../model/User');

exports.user = (req, res) => {
  console.log(req.body);
  console.log(User.userInfo());
  const { id: reqId, pw: reqPw } = req.body;
  if (reqId === User.userInfo().id && reqPw === User.userInfo().pw) {
    res.send({
      userInfo: req.body,
      // ...req.body
      isSuccess: true,
    });
  } else {
    res.send({ isSuccess: false });
  }
};

exports.user2 = (req, res) => {
  // console.log(req.body);
  // console.log(User.user);
  const { id: reqId, pw: reqPw } = req.body;
  const userList = User.user.split('\n'); // userInfo = ['abcd//1234//사과사과', '...', '...']
  console.log(userList);
  for (let user of userList) {
    console.log(user.split('//')[0]);
    console.log(user.split('//')[1]);
    if (reqId === user.split('//')[0] && reqPw === user.split('//')[1]) {
      return res.send({
        userInfo: {
          id: user.split('//')[0],
          pw: user.split('//')[1],
          name: user.split('//')[2],
        },
        isSuccess: true,
      });
    } else {
      return res.send({ isSuccess: false });
    }
  }
};