// [DB 연결 전]
// exports.getVisitors = () => {
//     return[
//         {id:1, name:"jade", comment:"안녕하세요"},
//         {id:2, name:"홍길동", commeint:"hello"},
//         {id:3, name:"홍길동1", commeint:"hello1"},
//         {id:4, name:"홍길동2", commeint:"hello2"},

//     ];
// };

const mysql = require("mysql");
// mysql 연결 설정
const conn = mysql.createConnection({
    host:"localhost",
    user:"sesac",
    password:"rpass",
    database:"sesac",
});


// 전체 데이터 조회
// /GET /visitor
exports.getVisitors = (cb) => {
    conn.query("SELECT * FROM visitor", (err,rows)=>{
        if(err) throw err;

        console.log("visitor.js 전체목록::", rows);

        cb(rows);
    });
};