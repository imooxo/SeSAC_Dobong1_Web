// TODO: 컨트롤러 코드
const User = require("../model/User");
// GET /user
exports.main = (req, res) => {
  res.render("index");
};

// GET /user/signin
exports.get_signin = (req, res) => {
  res.render("signin");
};

// GET /user/signup
exports.get_signup = (req, res) => {
  res.render("signup");
};

  // POST /user/singup
  // 회원가입
  // req.body에 프론트에서 받아온걸 User.js에서 data로 받아옴
  // cb는 응답코드를 res.end()에 받아옴
  exports.post_signup = (req, res) => {
    console.log("controller", req.body); 
    // {userid, pw, name}
    User.post_signup(req.body, () => {
        res.end();
    });
  };

// POST /user/singin
// 로그인 요청
  exports.post_signin = (req, res) => {
    console.log("controller",req.body);
    // {userid, pw}정보만 들어옴
    User.post_singin(req.body, (result) => {
        console.log("controller", result);
        // 로그인 성공 시, true
        // 로그인 실패 시, false

        if(result.length > 0) {
            //res.send({isLogin:true, userInfo:result[0]}));
            res.send(true);
        }else{
            res.send(false);
        }
    })
  };


  // POST /user/profile
  // 프로필 페이지 요청
  exports.post_profile = (req,res)=>{
    console.log("req.body", req.body);
    // {userid}
    User.post_profile(req.body.userid, (result) => {
        console.log(result); // {id, userid, name, pw}
        res.render('profile', {data:result}); //전체 데이터 넘겨주기
    });
  };