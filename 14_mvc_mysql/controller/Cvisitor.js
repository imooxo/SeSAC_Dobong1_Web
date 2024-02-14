const Visitor = require("../model/Visitor");

exports.main = (req, res) => {
    res.render("index");
  };
  
  exports.getVisitors = (req, res) => {
    // visitor.ejs에 데이터 보내주기

    // [DB 연결 전, 임시 데이터베이스]
    // console.log(Visitor.getVisitors()); // [ {}, {} ]
    // res.render("visitor", {data: Visitor.getVisitors()});

    // [DB 연결 후!]
    Visitor.getVisitors((result)=>{
        console.log("CVisitor.js 전체목록::", result);
        res.render("visitor",{data:result});
    }) 
  };

