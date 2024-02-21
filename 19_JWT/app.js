const express = require("express");
const app = express();
const PORT = 8080;
const jwt = require("jsonwebtoken");

// view middleware 설정
app.set("view engine", "ejs");
app.set("views", "./views");

// body parser 설정
app.use(express.urlencoded ({extended: true}));
app.use(express.json());

const userInfo = { id: "cocoa", pw: "1234", name: "코코아", age: 18};


app.get("/", (res,res) => {
    res.render("index");
});

app.get("/login", (req,res)=>{
    res.render("login");
});

// 로그인 요청
// 로그인 요청이 왔을 시 jwt 생성
app.post("/login", (req,res) => {
    console.log(req.body);
    res.send("서버 콘솔 확인");
});

// token 정보 확인
app.post("/token", (res,res)=>{

});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});