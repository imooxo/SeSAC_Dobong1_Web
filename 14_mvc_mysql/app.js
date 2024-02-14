const PORT = 8080;
const express = require("express");
const app = express();

// middleware
app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/static", express.static(__dirname + "/static"));

//body정보를 읽을 수 있도록
// body-paser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router 분리
const indexRouter = require("./routes"); 
// = const indexRouter = require("./routes/index"); 
// localhost:8080/ 경로를 기본으로 하는 경로는 indexRouter에서 처리
app.use("/", indexRouter);


// 404 error 
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
