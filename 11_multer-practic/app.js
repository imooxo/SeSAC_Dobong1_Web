const express = require("express");
const app = express();
const PORT = 8181;
const multer = require("multer");
const path = require("path");

// * 미들웨어 *
// view
app.set("view engine","ejs");
app.set("views","./views");
// static 폴더 설정
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/static", express.static(__dirname + "/public"));

// body-parser
app.use(express.urlencoded({extended: false}));
app.use(express.json());


// multer - 세부설정
const upload = multer({
    dest:"uploads/", //dest:파일을 업로드하고 그 파일이 저장될 경로를  지정하는 속성
});

const uploadDetail = multer({
    storage:multer.diskStorage({
        destination: function(req, file, cb){
            cb(null, "uplloads/");
        },
        filename: function(req, file, done){
            const extension = path.extname(file.originalname);
            done(null, path.basename(file.originalname, extension) + Date.now() + extension);
        }
    }),
    limits:{fileSize: 5 * 1024 * 1024},
});

// 라우팅
app.get("/", function (req,res){
    res.render("index");
});

app.post("/upload", uploadDetail.single("userfile"),function (req,res){
    console.log(req.file);
    console.log(req.body);
    res.send("파일 업로드 완료");
})


app.listen(PORT,()=>{
    console.log(`${PORT} is open!!`);
    console.log(`http://localhost:${PORT}`);
})