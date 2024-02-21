const express=require("express");
const PORT = 8080;
const app = express();
const session = require("express-session");

// 뷰 파서
app.set("views", "./views");
app.set("vieew engine", "ejs");

// 바디 파서
app.use("/static", express.static(__dirname + "/static ")); // 내가 사용할 이름 / 폴더 이름
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// TODO: 세션 설정
// app.use();
const userinfo = {userId: "cocoa", userPw: "1234"};


// 순서2. index에 세션 정보 전달
app.get("/", (req,res) => {
    /*
    로그인된 유저라면 {isLogin:false, user:user}
    로그인 안된 유저라면 {isLogin:false}
    */
// TODO: user session 불러오는 부분
// user가 로그인 됐는지 안됐는지 검사하는 부분
    res.render("index");
})

// 로그인 페이지 렌더
app.get("/login", (req, res) => {
    res.render("login");
});


// TODO: 로그인 기능
// 순서1. 세션 설정(POST)
app.post("/login", (req,res) => {

});


// TODO: 로그아웃 기능
// 순서3. 세션 삭제
app.get("/logout", (req,res) => {
    // 1.로그아웃 진행
    // 2.메인 페이지 렌더(redirect)
});

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
});