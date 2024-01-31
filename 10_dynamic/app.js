const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine","ejs");
app.set("views", "./views");


// 밑에 두개가 있어야지 body로 된 데이터가 
// 실행시 undifind가 아닌 제대로된 데이터가 나타남
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.get("/",(req,res) =>{
    res.render("index");
})


// ajax 라이팅
app.get('/ajax',(req,res)=>{
    console.log(req.query); 
    //res.send('ajax 응답완료'); 
    // res.send({  //객체 형태로 보내기1
    // name: req.query.name,
    // gender:req.quert.gender,
    // });
    res.send(req.query); // 객체 형태로 보내기2
});

//app.post("/ajax", function(req,res){});
app.post('/ajax',(req,res)=>{
    console.log(req.body);
    res.send(req.body);
});


// axios
app.get('/axios',function(req,res){
    console.log(req.query);
    res.send(req.query);
});

app.post('/axios',function(req,res){
    console.log(req.body);
    res.send(req.body);
});


//fetch
app.get("/fetch",function(req,res){
    console.log(req.query);
    //res.send("fatch 응답 완료!");
    res.send(req.query); // index.ejs에서 return response.json() 사용해야함
});

app.post('/fetch', function(req,res){
    console.log(req.body);
    res.send(req.body)
});


// open API 사용
app.get('/open-api',function(req,res){
    res.render("api");
});

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})


// 실습문제1 axios로 get 회원가입
const id = "pororo";
const pw = "1234";
app.get('/practice1',(req,res)=>{
    res.render("practice1");
})

app.get('/axios-practice1',(req,res)=>{
    console.log(req.query);
    res.send(req.query);
});

// 실습문제2 axios로 post 로그인
app.get('/practice2',(req,res)=>{
    res.render("practice2");
})
app.post('/axios-practice2',(req,res)=>{
    console.log(req.body);
    // 서버의 계정정보와, 클라이언트의 계정정보가 일치하는지 확인 절차
    
    //구조분해 할당
    const {id:clientId, password:clientPw} = req.body;

    if(clientId === id && clientPw === pw){
        res.send({
        userInfo: req.body,
        //...req.body,
        isSuccess: true,
        });
    }else{
        res.send({isSuccess:false});
    }
});