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

