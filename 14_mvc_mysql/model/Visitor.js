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

        console.log("Visitor.js 전체목록::", rows);

        cb(rows);
    });
};


exports.getVisitor = (id, cb) => {
    conn.query(`SELECT * FROM visitor WHERE id = ${id}`,(err,rows) => {
        if (err) throw err;

        console.log("Visitor.js 데이터 하나 조회", rows); // [ {} ]

        // 하나의 데이터를 찾아도 배열형태로 넘어옴
        cb(rows[0]);
    });
}


// 데이터 등록
// POST /visitor
exports.postVisitor=(data, cb) => {
    //data = {name:"시연", comment:"발렌타인데이예요"};
    conn.query(`INSERT INTO visitor VALUE(null, '${data.name}', '${data.comment}')`,
    (err, rows) => {
        if (err)throw err;
        console.log("Visitor.js post", rows);

        cb(rows.insertId);
    });
};

// 데이터 삭제
exports.deleteVisitor = (id, cb) => {
    console.log(id);
    conn.query(`DELETE FROM visitor WHERE id = ${id}`, (err, rows) => {
        if (err) throw err;
        
        console.log("Visitor.js delete", rows);
        cb(rows);
    })
}

// 데이터 수정
exports.patchVisitor = (data, cb)=>{
    console.log(data);
    conn.query(
        `UPDATE visitor 
        SET name = "${data.name}", comment = "${data.comment}"
        WHERE id = ${data.id}`,
        (err, rows) => {
            if(err) throw err;

            console.log("Visitor.js patch", rows);
            cb(true);
        }
    )

}