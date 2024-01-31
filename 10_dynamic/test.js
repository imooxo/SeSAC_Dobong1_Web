const express = require("express");
const app = express();
const PORT = 8181;

app.set("view engine","ejs");
app.set("views", "./views");


// 밑에 두개가 있어야지 body로 된 데이터가 
// 실행시 undifind가 아닌 제대로된 데이터가 나타남
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.get("/",(req,res) =>{
    res.render("test01");
})

// 실습1 axios get 회원가입
app.get('/test01',(res, req)=>{
    console.log(req.query);
    res.render(req.query);
});
app.get('/axios',(res, req)=>{
    console.log(req.query);
    res.render(req.query);
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})


// 실습2 axios post 로그인
app.post('/axios',function(req,res){
    console.log(req.body);
    res.send(req.body);
});